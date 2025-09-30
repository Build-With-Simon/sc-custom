/**
 * UTM Parameter Tracker
 * Captures UTM parameters from URL, stores them, and appends to outbound links
 *
 * @version 1.0.0
 * @author Science Creates
 */

(function() {
  'use strict';

  // Configuration
  const CONFIG = {
    // Storage key for UTM parameters
    storageKey: 'sc_utm_params',

    // How long to store UTMs (in days) - 30 days default
    storageDuration: 30,

    // UTM parameters to track
    utmParams: ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'],

    // Domains to append UTMs to (Typeform domains)
    typeformDomains: ['typeform.com', 'form.typeform.com'],

    // Whether to use sessionStorage (true) or localStorage (false)
    // sessionStorage = lasts until browser tab is closed
    // localStorage = persists for storageDuration days
    useSessionStorage: false,

    // Enable debug logging
    debug: false
  };

  // Get storage object based on config
  const storage = CONFIG.useSessionStorage ? sessionStorage : localStorage;

  // Debug logger
  function log(...args) {
    if (CONFIG.debug) {
      console.log('[UTM Tracker]', ...args);
    }
  }

  /**
   * Capture UTM parameters from current URL
   */
  function captureUTMParameters() {
    const urlParams = new URLSearchParams(window.location.search);
    const utmData = {};
    let hasUTMs = false;

    // Check for each UTM parameter
    CONFIG.utmParams.forEach(param => {
      const value = urlParams.get(param);
      if (value) {
        utmData[param] = value;
        hasUTMs = true;
      }
    });

    // If we found UTMs, store them with timestamp
    if (hasUTMs) {
      const dataToStore = {
        params: utmData,
        timestamp: Date.now()
      };
      storage.setItem(CONFIG.storageKey, JSON.stringify(dataToStore));
      log('Captured UTMs:', utmData);
      return utmData;
    }

    return null;
  }

  /**
   * Retrieve stored UTM parameters
   */
  function getStoredUTMs() {
    try {
      const stored = storage.getItem(CONFIG.storageKey);
      if (!stored) return null;

      const data = JSON.parse(stored);

      // Check if data has expired (only for localStorage)
      if (!CONFIG.useSessionStorage) {
        const age = Date.now() - data.timestamp;
        const maxAge = CONFIG.storageDuration * 24 * 60 * 60 * 1000; // Convert days to milliseconds

        if (age > maxAge) {
          storage.removeItem(CONFIG.storageKey);
          log('Stored UTMs expired');
          return null;
        }
      }

      return data.params;
    } catch (e) {
      console.error('[UTM Tracker] Error retrieving UTMs:', e);
      return null;
    }
  }

  /**
   * Build UTM query string from stored parameters
   */
  function buildUTMQueryString(storedUTMs) {
    if (!storedUTMs) return '';

    const params = new URLSearchParams();
    Object.keys(storedUTMs).forEach(key => {
      params.append(key, storedUTMs[key]);
    });

    return params.toString();
  }

  /**
   * Check if URL is a Typeform link
   */
  function isTypeformLink(url) {
    try {
      const urlObj = new URL(url, window.location.origin);
      return CONFIG.typeformDomains.some(domain =>
        urlObj.hostname.includes(domain)
      );
    } catch (e) {
      return false;
    }
  }

  /**
   * Append UTMs to a URL
   */
  function appendUTMsToUrl(url, utmString) {
    if (!utmString) return url;

    try {
      const urlObj = new URL(url, window.location.origin);

      // Check if URL already has these UTM parameters
      const existingParams = new URLSearchParams(urlObj.search);
      const newParams = new URLSearchParams(utmString);

      // Only add UTMs that don't already exist (don't override existing ones)
      newParams.forEach((value, key) => {
        if (!existingParams.has(key)) {
          existingParams.append(key, value);
        }
      });

      urlObj.search = existingParams.toString();
      return urlObj.toString();
    } catch (e) {
      // If URL parsing fails, try simple concatenation
      const separator = url.includes('?') ? '&' : '?';
      return url + separator + utmString;
    }
  }

  /**
   * Process a link element and append UTMs if needed
   */
  function processLink(link) {
    // Skip if already processed
    if (link.dataset.utmProcessed === 'true') return;

    const href = link.getAttribute('href');
    if (!href || href.startsWith('#') || href.startsWith('javascript:')) return;

    // Check if it's a Typeform link
    if (isTypeformLink(href)) {
      const storedUTMs = getStoredUTMs();
      if (storedUTMs) {
        const utmString = buildUTMQueryString(storedUTMs);
        const newHref = appendUTMsToUrl(href, utmString);
        link.setAttribute('href', newHref);
        link.dataset.utmProcessed = 'true';
        log('Updated Typeform link:', href, '->', newHref);
      }
    }
  }

  /**
   * Process all links on the page
   */
  function processAllLinks() {
    const links = document.querySelectorAll('a[href]');
    links.forEach(processLink);
  }

  /**
   * Set up mutation observer to watch for new links
   */
  function setupMutationObserver() {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        // Check added nodes for links
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === Node.ELEMENT_NODE) {
            // Check if the node itself is a link
            if (node.tagName === 'A') {
              processLink(node);
            }
            // Check for links within the added node
            const links = node.querySelectorAll('a[href]');
            links.forEach(processLink);
          }
        });
      });
    });

    // Start observing the document body
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    log('Mutation observer initialized');
  }

  /**
   * Initialize the UTM tracker
   */
  function init() {
    log('Initializing...');

    // Step 1: Capture UTMs from current URL
    captureUTMParameters();

    // Step 2: Process existing links when DOM is ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => {
        processAllLinks();
        setupMutationObserver();
      });
    } else {
      processAllLinks();
      setupMutationObserver();
    }

    // Step 3: Also process links on page show (for back/forward navigation)
    window.addEventListener('pageshow', processAllLinks);

    log('Initialized successfully');
  }

  // Public API (optional - for manual control and debugging)
  window.SCUTMTracker = {
    capture: captureUTMParameters,
    get: getStoredUTMs,
    clear: () => storage.removeItem(CONFIG.storageKey),
    processLinks: processAllLinks,
    config: CONFIG
  };

  // Auto-initialize
  init();

})();