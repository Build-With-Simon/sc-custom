# UTM Tracker - Implementation Guide

## Overview
This script captures UTM parameters from landing pages and automatically appends them to Typeform links, enabling full user journey tracking from LinkedIn → Website → Form submission.

## How It Works

1. **User lands on your site** with UTMs (e.g., from LinkedIn)
   - `yoursite.com/blog?utm_source=linkedin&utm_medium=social&utm_campaign=jan2025`

2. **Script captures and stores** the UTM parameters in browser storage

3. **User clicks a Typeform link** on your site

4. **Script automatically appends** the stored UTMs to the Typeform URL
   - `typeform.com/to/abc123?utm_source=linkedin&utm_medium=social&utm_campaign=jan2025`

## Installation

### Option 1: Host on Your Domain (Recommended)
1. Upload `utm-tracker.js` to your web server
2. Add to **Webflow** (Project Settings → Custom Code → Head):
```html
<script src="https://yourdomain.com/scripts/utm-tracker.js"></script>
```

3. Add to **Ghost** (Settings → Code Injection → Site Header):
```html
<script src="https://yourdomain.com/scripts/utm-tracker.js"></script>
```

### Option 2: Inline Script
Copy the entire contents of `utm-tracker.js` and paste directly into:
- **Webflow:** Project Settings → Custom Code → Head (wrapped in `<script>` tags)
- **Ghost:** Settings → Code Injection → Site Header (wrapped in `<script>` tags)

## Configuration

Edit the `CONFIG` object at the top of `utm-tracker.js`:

```javascript
const CONFIG = {
  // Storage key (shouldn't need to change)
  storageKey: 'sc_utm_params',

  // How long to remember UTMs (in days)
  storageDuration: 30,

  // Which UTM parameters to track
  utmParams: ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'],

  // Domains to append UTMs to
  typeformDomains: ['typeform.com', 'form.typeform.com'],

  // Storage type
  // false = localStorage (persists across sessions)
  // true = sessionStorage (clears when tab closes)
  useSessionStorage: false,

  // Enable console logging for debugging
  debug: false
};
```

### Common Configuration Changes

**Track only specific UTM parameters:**
```javascript
utmParams: ['utm_source', 'utm_medium', 'utm_campaign'], // Remove utm_content and utm_term
```

**Remember UTMs only for current session:**
```javascript
useSessionStorage: true, // Clears when browser tab closes
```

**Add additional domains to track:**
```javascript
typeformDomains: ['typeform.com', 'form.typeform.com', 'yourdomain.typeform.com'],
```

**Enable debug logging:**
```javascript
debug: true, // Shows console logs for troubleshooting
```

## Testing

### 1. Test UTM Capture
1. Visit your site with UTMs: `yoursite.com/?utm_source=test&utm_medium=email&utm_campaign=test123`
2. Open browser console (F12)
3. Type: `SCUTMTracker.get()`
4. Should see: `{utm_source: "test", utm_medium: "email", utm_campaign: "test123"}`

### 2. Test Link Appending
1. With UTMs stored (from step 1), visit a page with a Typeform link
2. Hover over the Typeform link and check the URL in browser status bar
3. Should see UTMs appended to the URL

### 3. Test End-to-End
1. Visit: `yoursite.com/?utm_source=linkedin&utm_medium=social`
2. Click a Typeform link
3. In Typeform analytics, check if UTM parameters appear

## Troubleshooting

### UTMs Not Being Captured
- Enable debug mode: `CONFIG.debug = true`
- Check console for logs
- Verify UTMs are in the URL when landing on the site

### UTMs Not Appending to Links
- Check if links are to Typeform domains listed in config
- Verify UTMs are stored: `SCUTMTracker.get()` in console
- Enable debug mode to see which links are being processed

### UTMs Expired/Lost
- Check `storageDuration` setting (default 30 days)
- If using `useSessionStorage: true`, UTMs clear when tab closes
- Clear and re-test: `SCUTMTracker.clear()` in console

## Manual Controls

The script exposes a global API for manual control:

```javascript
// Get currently stored UTMs
SCUTMTracker.get()

// Manually capture UTMs from current URL
SCUTMTracker.capture()

// Clear stored UTMs
SCUTMTracker.clear()

// Manually process all links on page
SCUTMTracker.processLinks()

// Access configuration
SCUTMTracker.config
```

## Advanced Usage

### Exclude Specific Links
Add `data-utm-processed="true"` to any link you want the script to ignore:
```html
<a href="https://form.typeform.com/to/abc123" data-utm-processed="true">
  Don't add UTMs to this link
</a>
```

### Track Additional Domains
To append UTMs to other services (not just Typeform):
```javascript
typeformDomains: ['typeform.com', 'forms.hubspot.com', 'yourdomain.com/contact'],
```

## Best Practices

1. **Use localStorage** (default) for attribution across multiple sessions
2. **Set appropriate duration** based on your sales cycle (30 days default)
3. **Test thoroughly** before rolling out to production
4. **Monitor Typeform data** to ensure UTMs are flowing through correctly
5. **Keep static UTMs on buttons** - this script preserves existing UTMs and only adds missing ones

## Support

For issues or questions, refer to the main repository or contact your development team.