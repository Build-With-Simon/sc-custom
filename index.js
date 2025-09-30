document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  // Inhouse Slider
  if ($(".inhuse_sldr").length) {
    var $slider = $(".inhuse_sldr");
    $slider.each(function () {
      var $sliderParent = $(this).parents(".in_huse_mmbr_sldr_wrppr");
      var slideControls = $sliderParent.find(".sldr_custom_dots_hldr");
      $(this).slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "17.65rem",
        prevArrow: $sliderParent.find(".sldr_custm_arrw .arrw_prev "),
        nextArrow: $sliderParent.find(".sldr_custm_arrw .arrw_next"),
        customPaging: function (slider, i) {
          return (
            "<button>" + (i + 1 < 10 ? "0" + (i + 1) : i + 1) + "</button>"
          );
        },
        appendDots: slideControls,
        dots: true,
        dotsClass: "slick-dots sldr_custom_dots",
        infinite: true,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              centerPadding: "6.667rem",
            },
          },
          {
            breakpoint: 992,
            settings: {
              centerPadding: "4rem",
            },
          },
          {
            breakpoint: 768,
            settings: {
              centerPadding: "2rem",
            },
          },
          {
            breakpoint: 480,
            settings: {
              centerMode: false,
              centerPadding: "0",
            },
          },
        ],
      });
    });
  }

  //  Members Slider Append Arrows
  if ($(".box_wrppr").length) {
    let tl = gsap.timeline();
    $(".box_wrppr").each(function (numSlick, sliderParent) {
      let slider2 = $(sliderParent).find(".mmbr_sldr"),
        slider1 = $(sliderParent).find(".mmbr_img_sldr");

      var slideControls = $(sliderParent).find(".sldr_custom_dots_hldr");

      const sl2 = slider2.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        fade: true,
        appendDots: slideControls,
        prevArrow: $(sliderParent).find(".sldr_custm_arrw .arrw_prev "),
        nextArrow: $(sliderParent).find(".sldr_custm_arrw .arrw_next"),
        lazyLoad: "progressive",
        dotsClass: "slick-dots sldr_custom_dots",
        customPaging: function (slider, i) {
          return (
            "<button>" + (i + 1 < 10 ? "0" + (i + 1) : i + 1) + "</button>"
          );
        },
        cssEase: "ease-in",
        speed: 500,
        asNavFor: slider1,
      });

      const sl1 = slider1.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        lazyLoad: "progressive",
        cssEase: "ease-in",
        fade: true,
        dots: false,
        speed: 500,
        asNavFor: slider2,
      });
    });
  }

  //  Members Slider Append Arrows
  if ($(".indvdl_innr_sldr_wrppr").length) {
    $(".indvdl_innr_sldr_wrppr").each(function (numSlick, sliderParent) {
      slider1 = $(sliderParent).find(".innr_sldr");
      var slideControls = $(sliderParent).find(".sldr_custom_dots_hldr");
      const sl2 = slider1.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        fade: true,
        appendDots: slideControls,
        prevArrow: $(sliderParent).find(".sldr_custm_arrw .arrw_prev "),
        nextArrow: $(sliderParent).find(".sldr_custm_arrw .arrw_next"),
        customPaging: function (slider, i) {
          return (
            "<button>" + (i + 1 < 10 ? "0" + (i + 1) : i + 1) + "</button>"
          );
        },
        lazyLoad: "progressive",
        dotsClass: "slick-dots sldr_custom_dots",
        cssEase: "ease-in",
        speed: 500,
      });
    });
  }

  //  Sites Slider Append Arrows
  if ($(".indvdl_stes_sldr_wrppr").length) {
    $(".indvdl_stes_sldr_wrppr").each(function (numSlick, sliderParent) {
      slider1 = $(sliderParent).find(".stes_dtls_sldr");
      var slideControls = $(sliderParent).find(".sldr_custom_dots_hldr");
      const sl2 = slider1.slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        fade: false,
        appendDots: slideControls,
        prevArrow: $(sliderParent).find(".sldr_custm_arrw .arrw_prev "),
        nextArrow: $(sliderParent).find(".sldr_custm_arrw .arrw_next"),
        customPaging: function (slider, i) {
          return (
            "<button>" + (i + 1 < 10 ? "0" + (i + 1) : i + 1) + "</button>"
          );
        },
        lazyLoad: "progressive",
        dotsClass: "slick-dots sldr_custom_dots",
        cssEase: "ease-in",
        centerMode: false,
        speed: 500,
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      });
    });
  }

  // Eco Slider
  if ($(".eco_sldr").length) {
    var $slider = $(".eco_sldr");
    $slider.each(function () {
      var $sliderParent = $(this).parents(".mmbr_lft_sldr_wrppr");
      $(this).slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: $sliderParent.find(".sldr_custm_arrw .arrw_prev "),
        nextArrow: $sliderParent.find(".sldr_custm_arrw .arrw_next"),
        dots: false,
        infinite: true,
      });
    });
  }

  //  Members Slider
  function initializeSliderAlt(sliderSelector, options, wrapperSelector) {
    let slider = $(wrapperSelector).find(sliderSelector);
    if (!slider.hasClass("slick-initialized")) {
      slider.slick(options);
    }
  }

  function handleResponsiveSliderBehaviorAlt(wrapperSelector) {
    let slider3 = $(wrapperSelector).find(".mmbr_sldr_tab_lstng");
    let slideCount = slider3.find(".mmbr_sldr_tab_item").length;
    let dataSlideNum = parseInt(slider3.data("slide-num"), 10);

    if (slideCount < dataSlideNum) {
      unslickThumbnailSliderAlt(wrapperSelector);
      initializeMainSlidersAlt(wrapperSelector);
    } else {
      initializeMainSlidersAlt(wrapperSelector);
      initializeThumbnailSliderAlt(wrapperSelector);
    }
  }

  function unslickThumbnailSliderAlt(wrapperSelector) {
    let slider3 = $(wrapperSelector).find(".mmbr_sldr_tab_lstng");
    if (slider3.hasClass("slick-initialized")) {
      slider3.slick("unslick");
    }
  }

  function initializeMainSlidersAlt(wrapperSelector) {
    const isMobile = window.innerWidth <= 1199;
    const $wrapper = $(wrapperSelector);
    initializeSliderAlt(
      ".mmbr_img_sldr",
      {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        lazyLoad: "progressive",
        cssEase: "ease-in",
        dots: false,
        infinite: true,
        speed: 500,
        asNavFor: $wrapper.find(".mmbr_optn_txt_sldr"),
      },
      wrapperSelector
    );

    initializeSliderAlt(
      ".mmbr_optn_txt_sldr",
      {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        lazyLoad: "progressive",
        cssEase: "ease-in",
        infinite: true,
        speed: 500,
        asNavFor: $wrapper.find(".mmbr_img_sldr"),
        prevArrow: $wrapper.find(".sldr_custm_arrw .arrw_prev"),
        nextArrow: $wrapper.find(".sldr_custm_arrw .arrw_next"),
        dots: isMobile,
        appendDots: isMobile ? $wrapper.find(".sldr_custom_dots_hldr") : null,
        dotsClass: "slick-dots sldr_custom_dots",
        customPaging: function (_, i) {
          let num = i + 1;
          return "<button>" + (num < 10 ? "0" + num : num) + "</button>";
        },
      },
      wrapperSelector
    );
  }

  function initializeThumbnailSliderAlt(wrapperSelector) {
    const $wrapper = $(wrapperSelector);
    initializeSliderAlt(
      ".mmbr_sldr_tab_lstng",
      {
        slidesToShow: 6,
        slidesToScroll: 1,
        arrows: false,
        lazyLoad: "progressive",
        cssEase: "ease-in",
        focusOnSelect: true,
        dots: false,
        infinite: true,
        speed: 500,
        asNavFor: $wrapper.find(".mmbr_img_sldr, .mmbr_optn_txt_sldr"),
      },
      wrapperSelector
    );

    $wrapper.find(".sldr_custm_arrw .arrw_prev").on("click", function () {
      $wrapper.find(".mmbr_sldr_tab_lstng").slick("slickPrev");
    });
    $wrapper.find(".sldr_custm_arrw .arrw_next").on("click", function () {
      $wrapper.find(".mmbr_sldr_tab_lstng").slick("slickNext");
    });
  }

  function setThumbnailNavigationAlt(wrapperSelector) {
    let slider3 = $(wrapperSelector).find(".mmbr_sldr_tab_lstng");
    let slider2 = $(wrapperSelector).find(".mmbr_optn_txt_sldr");

    slider3.find(".mmbr_sldr_tab_item").on("click", function (e) {
      e.preventDefault();
      slider3.find(".mmbr_sldr_tab_item").removeClass("active");
      let idx = $(this).data("slide") - 1;
      $(this).addClass("active");
      if (slider2.hasClass("slick-initialized")) {
        slider2.slick("slickGoTo", idx);
      }
    });

    slider2.on("beforeChange", function (_, slick, current, next) {
      slider3
        .find(".mmbr_sldr_tab_item")
        .removeClass("active")
        .eq(next)
        .addClass("active");
    });
  }

  document.querySelectorAll(".mmbr_sldr_tab_hldr").forEach((holder) => {
    holder.querySelectorAll(".mmbr_sldr_tab_item").forEach((item, i) => {
      item.setAttribute("data-slide", i + 1);
    });
  });

  document.querySelectorAll(".mmbr_box").forEach((box) => {
    handleResponsiveSliderBehaviorAlt(box);
    setThumbnailNavigationAlt(box);
    $(box)
      .find(".mmbr_sldr_tab_lstng .mmbr_sldr_tab_item")
      .first()
      .addClass("active");
  });

  let wasMobile = window.innerWidth <= 1199;
  window.addEventListener("resize", () => {
    let isMobile = window.innerWidth <= 1199;
    if (isMobile !== wasMobile) {
      document.querySelectorAll(".mmbr_box").forEach((box) => {
        $(box).find(".mmbr_img_sldr, .mmbr_optn_txt_sldr").slick("unslick");
        unslickThumbnailSliderAlt(box);
        handleResponsiveSliderBehaviorAlt(box);
        setThumbnailNavigationAlt(box);
        $(box)
          .find(".mmbr_sldr_tab_lstng .mmbr_sldr_tab_item")
          .first()
          .addClass("active");
      });
      wasMobile = isMobile;
    }
  });

  function initializeSlider(sliderSelector, options, wrapperSelector) {
    const slider = $(wrapperSelector).find(sliderSelector);
    if (!slider.hasClass("slick-initialized")) {
      slider.slick(options);
    }
  }

  function getBreakpointSlides($thumbSldr, winWidth) {
    // Define your custom breakpoints from largest to smallest
    const breakpoints = [
      { max: Infinity, key: "slideNumDesktop" },
      { max: 1199, key: "slideNumTablet" },
      { max: 991, key: "slideNumSmallTablet" },
      { max: 767, key: "slideNumLargeMobile" },
      { max: 575, key: "slideNumMobile" },
    ];

    let slidesToShow = 0;
    for (const bp of breakpoints) {
      const val = parseInt($thumbSldr.data(bp.key), 10);
      if (winWidth <= bp.max && !isNaN(val)) {
        slidesToShow = val;
      }
    }
    return slidesToShow;
  }

  function handleResponsiveSliderBehavior(wrapperSelector) {
    const $wrapper = $(wrapperSelector);
    const $thumbSldr = $wrapper.find(".tem_thmbnl_sldr");
    const slideCount = $thumbSldr.find(".tem_thmbnl_item").length;
    const winWidth = $(window).width();

    const slidesToShow = getBreakpointSlides($thumbSldr, winWidth);

    initializeMainSliders(wrapperSelector);

    if ($thumbSldr.hasClass("slick-initialized")) {
      $thumbSldr.slick("unslick");
    }

    if (slideCount > slidesToShow) {
      initializeThumbnailSlider(wrapperSelector, slidesToShow);
    }
  }

  function initializeThumbnailSlider(wrapperSelector, slidesToShow) {
    const $thumbSldr = $(wrapperSelector).find(".tem_thmbnl_sldr");

    initializeSlider(
      ".tem_thmbnl_sldr",
      {
        slidesToShow: slidesToShow,
        slidesToScroll: 1,
        arrows: false,
        lazyLoad: "progressive",
        cssEase: "ease-in",
        focusOnSelect: true,
        dots: false,
        infinite: true,
        speed: 500,
        asNavFor: $(wrapperSelector).find(".img_sldr, .txt_tm_sldr"),
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: Math.min(slidesToShow, 6),
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: Math.min(slidesToShow, 5),
            },
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: Math.min(slidesToShow, 4),
            },
          },
        ],
      },
      wrapperSelector
    );

    $(wrapperSelector)
      .find(".sldr_custm_arrw .arrw_prev")
      .off("click")
      .on("click", () => $thumbSldr.slick("slickPrev"));
    $(wrapperSelector)
      .find(".sldr_custm_arrw .arrw_next")
      .off("click")
      .on("click", () => $thumbSldr.slick("slickNext"));
  }

  function initializeMainSliders(wrapperSelector) {
    initializeSlider(
      ".img_sldr",
      {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        lazyLoad: "progressive",
        cssEase: "ease-in",
        dots: false,
        infinite: true,
        speed: 500,
        asNavFor: $(wrapperSelector).find(
          ".tem_thmbnl_sldr:not(.tem_thmbnl_sldr_static), .txt_tm_sldr"
        ),
      },
      wrapperSelector
    );

    initializeSlider(
      ".txt_tm_sldr",
      {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        fade: true,
        prevArrow: $(wrapperSelector).find(".sldr_custm_arrw .arrw_prev"),
        nextArrow: $(wrapperSelector).find(".sldr_custm_arrw .arrw_next"),
        lazyLoad: "progressive",
        cssEase: "ease-in",
        infinite: true,
        speed: 500,
        asNavFor: $(wrapperSelector)?.find(
          ".tem_thmbnl_sldr:not(.tem_thmbnl_sldr_static), .img_sldr"
        ),
      },
      wrapperSelector
    );
  }

  function setThumbnailNavigation(wrapperSelector) {
    const $thumbSldr = $(wrapperSelector).find(".tem_thmbnl_sldr");
    const $txtSldr = $(wrapperSelector).find(".txt_tm_sldr");

    $thumbSldr.on("click", ".tem_thmbnl_item", function (e) {
      e.preventDefault();
      $thumbSldr.find(".tem_thmbnl_item").removeClass("active");
      const index = $(this).data("slide") - 1;
      $(this).addClass("active");
      if ($txtSldr.hasClass("slick-initialized")) {
        $txtSldr.slick("slickGoTo", index);
      }
    });

    $txtSldr.on("beforeChange", function (ev, slick, current, next) {
      $thumbSldr
        .find(".tem_thmbnl_item")
        .removeClass("active")
        .eq(next)
        .addClass("active");
    });
  }

  $(".tem_box_wrppr").each(function () {
    const wrapper = this;
    handleResponsiveSliderBehavior(wrapper);
    setThumbnailNavigation(wrapper);
    $(window).on("resize", () => handleResponsiveSliderBehavior(wrapper));
    $(wrapper)
      .find(".tem_thmbnl_sldr .tem_thmbnl_item")
      .eq(0)
      .addClass("active");
  });

  //  Contact Piller Slider Append Arrows
  // const wrappers = document.querySelectorAll('.cntct_sldr_outr');

  // wrappers.forEach(wrapper => {
  //     const remVal = parseFloat(getComputedStyle(document.documentElement).fontSize);
  //     const pillarBg = wrapper.querySelector('.pillar_bg')
  //     const items = wrapper.querySelectorAll('.cntct_box_item');
  //     const buttons = wrapper.querySelectorAll('.pllr_bttn');

  //     function activate(index) {
  //         buttons.forEach((btn, i) => {
  //             const item = items[i];
  //             const color = btn.getAttribute('data-bg-color') || '';

  //             if (i === index) {
  //                 item.classList.add('active');
  //                 item.style.maxHeight = `${item.scrollHeight / remVal}rem`;
  //                 pillarBg.style.backgroundColor = color;
  //                 btn.classList.add('active');
  //                 btn.style.backgroundColor = color;
  //                 btn.style.borderColor = color;
  //             } else {
  //                 item.classList.remove('active');
  //                 item.style.maxHeight = '0px';
  //                 btn.classList.remove('active');
  //                 btn.style.backgroundColor = '';
  //                 btn.style.borderColor = '';
  //             }
  //         });
  //     }
  //     buttons.forEach((btn, i) => {
  //         btn.addEventListener('click', () => activate(i));
  //     });
  //     if (buttons.length) activate(0);
  // });

  // let dataWrapper = document.querySelectorAll('.thmbnl_sldr_wrppr');
  // dataWrapper.forEach((elem, i) => {
  //     let dataSlideItem = elem.querySelectorAll('.thmbnl_sldr_wrppr .tem_thmbnl_item');
  //     dataSlideItem.forEach((el, i) => {
  //         el.setAttribute('data-slide', i + 1);
  //     });
  // })

  //  Incubators Lab Slider Append Arrows
  if ($(".inbtrs_avlble_wrppr").length) {
    $(".inbtrs_avlble_wrppr").each(function (numSlick, sliderParent) {
      slider1 = $(sliderParent).find(".inbtrs_lab_sldr");
      var slideControls = $(sliderParent).find(".sldr_custom_dots_hldr");
      const sl2 = slider1.slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        appendDots: slideControls,
        prevArrow: $(sliderParent).find(".sldr_custm_arrw .arrw_prev "),
        nextArrow: $(sliderParent).find(".sldr_custm_arrw .arrw_next"),
        customPaging: function (slider, i) {
          return (
            "<button>" + (i + 1 < 10 ? "0" + (i + 1) : i + 1) + "</button>"
          );
        },
        lazyLoad: "progressive",
        dotsClass: "slick-dots sldr_custom_dots",
        cssEase: "ease-in",
        speed: 500,
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      });
    });
  }

  // Remove Condition Visible Element From DOM
  const invisibleElements = document.querySelectorAll(
    ".lab_sldr_wrppr.w-condition-invisible"
  );

  invisibleElements.forEach((el) => {
    el.remove();
  });

  const invisibleElements2 = document.querySelectorAll(
    ".accrd_item.w-condition-invisible"
  );

  invisibleElements2.forEach((el) => {
    el.remove();
  });
  const invisibleElements3 = document.querySelectorAll(
    ".innr_bnnr_section.w-condition-invisible"
  );

  invisibleElements3.forEach((el) => {
    el.remove();
  });

  const invisibleElements4 = document.querySelectorAll(
    ".cndtn_vsble.w-condition-invisible"
  );
  invisibleElements4.forEach((el) => {
    el.remove();
  });

  // Header Animation
  // let menuHeader = document.querySelector('.main_header');
  // let lastScrollPosY = window.pageYOffset;
  // let scrollThreshold = 8;

  // let stickyFunc = () => {
  //     let scrollPosY = window.pageYOffset;

  //     if (scrollPosY > 0) {
  //         menuHeader.classList.add('sticky_header');
  //     } else {
  //         menuHeader.classList.remove('sticky_header');
  //     }

  //     if (Math.abs(scrollPosY - lastScrollPosY) > scrollThreshold) {
  //         if (scrollPosY > lastScrollPosY) {
  //             menuHeader.classList.remove('scrollup');
  //             menuHeader.classList.add('scrolldown');
  //         } else if (scrollPosY < lastScrollPosY) {
  //             menuHeader.classList.remove('scrolldown');
  //             menuHeader.classList.add('scrollup');
  //         }

  //         lastScrollPosY = scrollPosY;
  //     }
  // };

  // stickyFunc();

  // window.addEventListener('scroll', stickyFunc);

  // Dark Mode / Light Mode & Clone Right Header Part & Custom Menu
  function initializeThemeButton(themeButton) {
    if (localStorage.getItem("darkMode") === "enabled") {
      document.body.classList.add("dark_mode");
      themeButton.classList.add("dark_mode_active");
    }

    themeButton.addEventListener("click", () => {
      if (window.sc && typeof window.sc.themeChnage === "function") {
        window.sc.themeChnage();
      }
      const allThemeButtons = document.querySelectorAll(".theme_bttn");
      allThemeButtons.forEach((btn) => {
        btn.classList.toggle("dark_mode_active");
      });

      document.body.classList.toggle("dark_mode");
      const darkModeStatus = document.body.classList.contains("dark_mode")
        ? "enabled"
        : "disabled";
      localStorage.setItem("darkMode", darkModeStatus);
    });
  }

  function initializeHamButton(hamButton) {
    const htmlElement = document.querySelector("html");
    const darkToggleMenu = document.querySelector(".menu_dark");
    hamButton.addEventListener("click", () => {
      const allHamButtons = document.querySelectorAll(".ham_bttn_custom");
      allHamButtons.forEach((btn) => {
        btn.classList.toggle("darkMenu_bttn_active");
      });

      const isDarkMenuActive =
        document.body.classList.toggle("darkMenu_active");
      htmlElement.classList.toggle("darkMenu_active", isDarkMenuActive);
      darkToggleMenu.classList.toggle("darkMenu_active_open", isDarkMenuActive);
      removeDropdownOpenClasses();
    });
  }

  function removeDropdownOpenClasses() {
    document
      .querySelectorAll(".menu_drpdwn .w-dropdown-toggle.w--open")
      .forEach((element) => {
        element.classList.remove("w--open");
      });

    document
      .querySelectorAll(".submenu_drpdwn .w-dropdown-list.w--open")
      .forEach((element) => {
        element.classList.remove("w--open");
      });
  }

  function initializeAllThemeButtons() {
    const themeButtons = document.querySelectorAll(".theme_bttn");
    themeButtons.forEach(initializeThemeButton);
  }
  function initializeAllHamButtons() {
    const hamButtons = document.querySelectorAll(".ham_bttn_custom");
    hamButtons.forEach(initializeHamButton);
  }
  initializeAllHamButtons();
  initializeAllThemeButtons();

  const rightHeader = document.querySelector(".hdr_rght_part");
  const subMenuDropDown = document.querySelectorAll(".submenu_drpdwn");
  subMenuDropDown.forEach((el) => {
    const submenuInner = el.querySelector(".submenu_inner_hdr_wrppr");
    if (submenuInner) {
      const rightHeaderClone = rightHeader.cloneNode(true);
      submenuInner.appendChild(rightHeaderClone);
    }

    const clonedThemeButton = el.querySelector(".theme_bttn");
    if (clonedThemeButton) {
      initializeThemeButton(clonedThemeButton);
    }

    const clonedHamButton = el.querySelector(".ham_bttn_custom");
    if (clonedHamButton) {
      initializeHamButton(clonedHamButton);
    }
  });

  const observer = new MutationObserver(function (mutationsList) {
    mutationsList.forEach(function (mutation) {
      if (mutation.type === "childList") {
        mutation.addedNodes.forEach(function (node) {
          if (node.matches && node.matches(".theme_bttn")) {
            initializeThemeButton(node);
          }

          if (node.matches && node.matches(".ham_bttn_custom")) {
            initializeHamButton(node);
          }

          if (node.matches && node.matches(".submenu_drpdwn")) {
            const submenuInner = node.querySelector(".submenu_inner_hdr_wrppr");
            if (submenuInner) {
              const rightHeaderClone = rightHeader.cloneNode(true);
              submenuInner.appendChild(rightHeaderClone);
            }

            const clonedThemeButton = node.querySelector(".theme_bttn");
            if (clonedThemeButton) {
              initializeThemeButton(clonedThemeButton);
            }

            const clonedHamButton = node.querySelector(".ham_bttn_custom");
            if (clonedHamButton) {
              initializeHamButton(clonedHamButton);
            }
          }
        });
      }
    });
  });
  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });

  //  Custom Menu With Submenu
  const subMenuContainers = document.querySelectorAll("[data-menu-open]");
  let activeMenuAttr = null;

  function toggleSubMenu(menuAttr, action) {
    const submenu = Array.from(subMenuContainers).find(
      (item) => item.getAttribute("data-menu-open") === menuAttr
    );
    if (submenu) {
      submenu.classList[action]("submenu_active");
    }
    const menuElems = document.querySelectorAll(`[data-menu="${menuAttr}"]`);
    menuElems.forEach((menuEl) => {
      menuEl.classList[action]("submenu_active");
    });
  }
  document.querySelectorAll("[data-menu]").forEach((el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      const menuAttr = el.getAttribute("data-menu");
      if (activeMenuAttr && activeMenuAttr !== menuAttr) {
        toggleSubMenu(activeMenuAttr, "remove");
      }
      toggleSubMenu(menuAttr, "toggle");
      const stillActive = Array.from(
        document.querySelectorAll(`[data-menu="${menuAttr}"]`)
      ).some((elm) => elm.classList.contains("submenu_active"));
      activeMenuAttr = stillActive ? menuAttr : null;
    });
  });

  document.addEventListener("click", (e) => {
    if (
      !e.target.closest(".mnu_item") &&
      !e.target.closest(".submenu_drpdwn")
    ) {
      if (activeMenuAttr) {
        toggleSubMenu(activeMenuAttr, "remove");
        activeMenuAttr = null;
      }
    }
  });

  // Dark Menu Animation
  let menuRow = document.querySelectorAll(".menu_drk_row");

  let tl2 = gsap.timeline({
    repeat: 0,
    defaults: { ease: "ease-in" },
  });

  let indvdlLeftDarkLink, spotBox, spotLinkItem, indvdlTitle;

  menuRow.forEach((el) => {
    let totatlTime = 0.6;
    indvdlLeftDarkLink = el.querySelectorAll(
      ".indvdl_drk_menu .drk_menu_lnk_item"
    );
    spotBox = el.querySelectorAll(".sptlght_box");
    spotLinkItem = el.querySelectorAll(".sptlght_box .drk_menu_lnk_item");
    indvdlTitle = el.querySelectorAll(".drk_menu_indvdl_ttle");

    function titleSplit() {
      indvdlTitle.forEach((titleEl) => {
        Splitting({
          target: titleEl,
          by: "chars",
        });

        gsap.set(titleEl, { opacity: 0 });

        let chars = titleEl.querySelectorAll(".char");
        chars.forEach((char) => {
          gsap.set(char, {
            display: "inline-block",
            transform: "perspective(1000px)",
            opacity: 0,
            transformOrigin: "center center",
            transformStyle: "preserve-3d",
          });
        });
        gsap.to(titleEl, {
          opacity: 1,
          duration: 0.2,
        });

        gsap.to(chars, {
          opacity: 1,
          transform: "perspective(1000px)",
          rotationX: 0,
          rotationY: 0,
          rotationZ: 0,
          yPercent: 0,
          stagger: 0.05,
          duration: 0.2,
        });
      });
    }

    gsap.set([indvdlLeftDarkLink, spotLinkItem, spotBox], {
      opacity: 0,
      y: "20%",
    });

    tl2
      .to(indvdlLeftDarkLink, totatlTime, {
        opacity: 1,
        y: "0",
        stagger: 0.1,
      })
      .to(
        spotBox,
        totatlTime,
        {
          opacity: 1,
          y: "0",
          stagger: 0.1,
        },
        "<"
      )
      .to(
        spotLinkItem,
        {
          opacity: 1,
          y: "0",
          stagger: 0.1,
        },
        "<"
      )
      .eventCallback("onStart", () => {
        setTimeout(() => {
          titleSplit();
        }, 300);
      });
  });

  tl2.pause();

  let hameCus = document.querySelectorAll(".ham_bttn_custom");
  hameCus.forEach((elem) => {
    elem.addEventListener("click", () => {
      gsap.set(".drk_menu_indvdl_ttle", { opacity: 0 });
      gsap.set(".drk_menu_indvdl_ttle .char", { opacity: 0, y: "20%" });
      gsap.set([indvdlLeftDarkLink, spotLinkItem, spotBox], {
        opacity: 0,
        y: "20%",
      });

      tl2.restart();
    });
  });

  // Submenu Text Animation
  let subLinkBox = document.querySelectorAll(".submnu_scnd_lnk_box");
  const mq = window.matchMedia("(min-width: 1025px)");
  function initSubmenuHover() {
    subLinkBox.forEach((elem) => {
      const subTextBox = elem.querySelector(".mnu_sub_txt_box");
      const textMaxHeight = subTextBox.scrollHeight;

      gsap.set(subTextBox, { maxHeight: 0, y: 100 });

      function expand() {
        gsap.to(subTextBox, {
          maxHeight: textMaxHeight,
          y: 0,
          duration: 0.3,
          ease: "power1.out",
        });
      }

      function collapse() {
        gsap.to(subTextBox, {
          maxHeight: 0,
          y: 100,
          duration: 0.3,
          ease: "power1.in",
        });
      }

      elem.addEventListener("mouseenter", expand);
      elem.addEventListener("mouseleave", collapse);

      elem._expand = expand;
      elem._collapse = collapse;
    });
  }

  function destroySubmenuHover() {
    subLinkBox.forEach((elem) => {
      elem.removeEventListener("mouseenter", elem._expand);
      elem.removeEventListener("mouseleave", elem._collapse);
    });
  }
  if (mq.matches) {
    initSubmenuHover();
  }
  mq.addEventListener("change", (e) => {
    if (e.matches) {
      initSubmenuHover();
    } else {
      destroySubmenuHover();
    }
  });

  // Single Page Animation
  if ($('[data-anim="parent-anim-sec"]').length) {
    setTimeout(() => {
      if ($('[data-anim="parent-anim-sec"]').length) {
        const parentAnimation = document.querySelectorAll(
          '[data-anim="parent-anim-sec"]'
        );
        parentAnimation.forEach((elem, index) => {
          // Create timelines for the animations of child elements
          const moveUpElem = elem.querySelectorAll("[data-move]");
          const slideElem = elem.querySelectorAll("[data-slide]");
          const growElem = elem.querySelectorAll("[data-grow]");
          const flipElem = elem.querySelectorAll("[data-flip]");
          const shtrElem = elem.querySelectorAll("[data-shutter]");

          const moveTl = gsap.timeline({ paused: true });
          const slideTl = gsap.timeline({ paused: true });
          const growTl = gsap.timeline({ paused: true });
          const flipTl = gsap.timeline({ paused: true });
          const shutterTl = gsap.timeline({ paused: true });

          // Helper to read delay attribute (in seconds)
          const getDelay = (el) => {
            const d = parseFloat(el.dataset.delay);
            return isNaN(d) ? 0 : d;
          };

          // Set animations for moveUpElem
          moveUpElem.forEach((elem2) => {
            const delay = getDelay(elem2);
            if (elem2.dataset.move === "up") {
              gsap.set(elem2, { y: 50, opacity: 0 });
              moveTl.to(elem2, {
                ease: "none",
                duration: 0.2,
                y: 0,
                opacity: 1,
                delay,
              });
            }
            if (elem2.dataset.move === "down") {
              gsap.set(elem2, { y: -50, opacity: 0 });
              moveTl.to(elem2, {
                ease: "none",
                duration: 0.2,
                y: 0,
                opacity: 1,
                delay,
              });
            }
            if (elem2.dataset.move === "scale-up") {
              gsap.set(elem2, { y: 50, scale: 0, opacity: 0 });
              moveTl.to(elem2, {
                ease: "Power3.easeOut",
                duration: 1,
                scale: 1,
                opacity: 1,
                y: 0,
                delay,
              });
            }
          });

          // Set animations for slideElem
          slideElem.forEach((elem2) => {
            const delay = getDelay(elem2);
            if (elem2.dataset.slide === "right") {
              gsap.set(elem2, { x: -100, opacity: 0 });
              slideTl.to(elem2, {
                ease: "Power3.easeOut",
                duration: 1,
                opacity: 1,
                x: 0,
                delay,
              });
            }
            if (elem2.dataset.slide === "left") {
              gsap.set(elem2, { x: 100, opacity: 0 });
              slideTl.to(elem2, {
                ease: "Power3.easeOut",
                duration: 1,
                opacity: 1,
                x: 0,
                delay,
              });
            }
          });

          // Set animations for growElem
          growElem.forEach((elem2) => {
            const delay = getDelay(elem2);
            gsap.set(elem2, { scale: 0, opacity: 0 });
            growTl.to(elem2, {
              ease: "Power3.easeOut",
              duration: 1,
              scale: 1,
              opacity: 1,
              delay,
            });
          });

          // Set animations for flipElem
          flipElem.forEach((elem2) => {
            const delay = getDelay(elem2);
            gsap.set(elem2, { rotateY: 90, opacity: 0 });
            flipTl.to(elem2, {
              ease: "Power3.easeOut",
              duration: 1,
              rotateY: 0,
              opacity: 1,
              delay,
            });
          });

          // Set animations for shutterElem
          shtrElem.forEach((elem2) => {
            const delay = getDelay(elem2);
            if (elem2.dataset.shutter === "right") {
              gsap.set(elem2, {
                clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
                opacity: 1,
              });
              shutterTl.to(elem2, {
                ease: "Power3.easeOut",
                duration: 1,
                clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                delay,
              });
            }
            if (elem2.dataset.shutter === "left") {
              gsap.set(elem2, {
                clipPath: "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)",
                opacity: 1,
              });
              shutterTl.to(elem2, {
                ease: "Power3.easeOut",
                duration: 1,
                clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                delay,
              });
            }
            if (elem2.dataset.shutter === "center") {
              gsap.set(elem2, { clipPath: "inset(45% round 0)", opacity: 0 });
              shutterTl.to(elem2, {
                ease: "power1.inOut",
                duration: 0.5,
                clipPath: "inset(0% round 0)",
                opacity: 1,
                delay,
              });
            }
          });

          ScrollTrigger.create({
            trigger: elem,
            start: "top bottom",
            onEnter: () => {
              moveTl.play();
              slideTl.play();
              growTl.play();
              flipTl.play();
              shutterTl.play();
            },
          });
        });
      }

      // Additional individual element animations
      const indvlElem = document.querySelectorAll("[data-indv]");
      indvlElem.forEach((elem2) => {
        const indvlTl = gsap.timeline({ paused: true });
        const delay = parseFloat(elem2.dataset.delay) || 0;
        gsap.set(elem2, { opacity: 0 });

        switch (elem2.dataset.indv) {
          case "up":
            gsap.set(elem2, { y: 50 });
            indvlTl.to(elem2, {
              ease: "none",
              duration: 0.5,
              y: 0,
              opacity: 1,
              delay,
            });
            break;
          case "down":
            gsap.set(elem2, { y: -50 });
            indvlTl.to(elem2, {
              ease: "none",
              duration: 0.5,
              y: 0,
              opacity: 1,
              delay,
            });
            break;
          case "left":
            gsap.set(elem2, { x: 50 });
            indvlTl.to(elem2, {
              ease: "none",
              duration: 0.5,
              x: 0,
              opacity: 1,
              delay,
            });
            break;
          case "right":
            gsap.set(elem2, { x: -50 });
            indvlTl.to(elem2, {
              ease: "none",
              duration: 0.5,
              x: 0,
              opacity: 1,
              delay,
            });
            break;
        }

        ScrollTrigger.create({
          trigger: elem2,
          start: "top 85%",
          animation: indvlTl,
        });
      });
    }, 500);
  }

  // Swiper Global Variable
  let swiper3 = null;

  // // Dynamic REM Value Calculate
  // const baseFontPercentage = 1.2;  // Base font size as percentage of viewport width
  // const minFontSize = 8;           // Absolute minimum font size (px) for very small screens
  // const maxWidth = 1920;           // Maximum width for calculation

  // // Function to update the font size based on viewport width
  // function updateRootFontSize() {
  //     // Get current viewport width
  //     let windowWidth = Math.min(window.innerWidth, maxWidth); // Cap at maxWidth

  //     // Calculate font size as a percentage of viewport width
  //     const calculatedSize = (windowWidth * baseFontPercentage) / 100;
  //     const fontSize = Math.max(calculatedSize, minFontSize);

  //     // Update the root font size dynamically
  //     document.documentElement.style.fontSize = `${fontSize}px`;
  // }
  function updateSwiperLayout(sw) {
    if (sw && typeof sw.update === "function") sw.update();
  }

  // New Updated Code
  function getGapPx(swiperEl) {
    const rootFs =
      parseFloat(getComputedStyle(document.documentElement).fontSize) || 16;
    const raw = parseFloat(swiperEl?.dataset?.gap);
    const remVal = !isNaN(raw) && raw >= 0 ? raw : 1.25;
    return remVal * rootFs;
  }

  function updateSwiperGap(swiper, swiperEl) {
    const gapPx = getGapPx(swiperEl);
    swiper.params.spaceBetween = gapPx;
    if (swiper.params.breakpoints) {
      Object.keys(swiper.params.breakpoints).forEach((bpKey) => {
        const bpNum = Number(bpKey);
        if (!isNaN(bpNum) && swiper.params.breakpoints[bpNum]) {
          swiper.params.breakpoints[bpNum].spaceBetween = gapPx;
        }
      });
    }
    if (typeof swiper.update === "function") {
      swiper.update();
    }
  }
  const swiperEntries = [];

  function registerSwiper(swiperInstance, swiperEl) {
    if (!swiperInstance || !swiperEl) return;
    swiperEntries.push({ swiper: swiperInstance, el: swiperEl });
  }

  // ---- Inhouse Members Slider ----
  document.querySelectorAll(".huse_sldr_wrppr").forEach((wrapper) => {
    const swiperEl = wrapper.querySelector(".huse_mmbr_sldr");
    if (!swiperEl) return;
    const fractionCt = wrapper.querySelector(".sldr_pgntn");
    const gapPx = getGapPx(swiperEl);

    const perMobile = parseInt(swiperEl.dataset.slidesMobile, 10) || 1;
    const perSm = parseInt(swiperEl.dataset.slidesSm, 10) || perMobile;
    const perMd = parseInt(swiperEl.dataset.slidesMd, 10) || perSm;
    const perLg = parseInt(swiperEl.dataset.slidesLg, 10) || perMd;

    const sw = new Swiper(swiperEl, {
      slidesPerView: perMobile,
      spaceBetween: gapPx,
      loop: true,
      navigation: {
        nextEl: wrapper.querySelector(".arrw_next"),
        prevEl: wrapper.querySelector(".arrw_prev"),
      },
      pagination: {
        el: wrapper.querySelector(".sldr_prgrss_bg"),
        type: "progressbar",
      },
      breakpoints: {
        576: { slidesPerView: perSm, spaceBetween: gapPx },
        768: { slidesPerView: perMd, spaceBetween: gapPx },
        1200: { slidesPerView: perLg, spaceBetween: gapPx },
      },
      on: {
        init() {
          const total = swiperEl.querySelectorAll(".swiper-slide").length;
          fractionCt.textContent = `${this.realIndex + 1} / ${total}`;
          this.on("slideChange", () => {
            fractionCt.textContent = `${this.realIndex + 1} / ${total}`;
          });
        },
      },
    });
    registerSwiper(sw, swiperEl);
  });

  // ---- Lab Slider ----
  document.querySelectorAll(".lab_sldr_wrppr").forEach((wrapper) => {
    const swiperEl = wrapper.querySelector(".lab_sldr");
    if (!swiperEl) return;
    const fractionCt = wrapper.querySelector(".sldr_pgntn_alt");
    const gapPx = getGapPx(swiperEl);

    const sw = new Swiper(swiperEl, {
      slidesPerView: 1,
      spaceBetween: gapPx,
      loop: true,
      navigation: {
        nextEl: wrapper.querySelector(".arrw_next"),
        prevEl: wrapper.querySelector(".arrw_prev"),
      },
      pagination: {
        el: wrapper.querySelector(".sldr_prgrss_bg"),
        type: "progressbar",
      },
      breakpoints: {
        576: { slidesPerView: 2, spaceBetween: gapPx },
        768: { slidesPerView: 3, spaceBetween: gapPx },
        1200: { slidesPerView: 4, spaceBetween: gapPx },
      },
      on: {
        init() {
          const total = swiperEl.querySelectorAll(".swiper-slide").length;
          fractionCt.textContent = `${this.realIndex + 1} / ${total}`;
          this.on("slideChange", () => {
            fractionCt.textContent = `${this.realIndex + 1} / ${total}`;
          });
        },
        slideChange() {
          const total = swiperEl.querySelectorAll(".swiper-slide").length;
          fractionCt.textContent = `${this.realIndex + 1} / ${total}`;
        },
      },
    });
    registerSwiper(sw, swiperEl);
  });

  // ---- Programmes Slider ----
  document.querySelectorAll(".prgrmms_sldr_wrppr").forEach((wrapper) => {
    const swiperEl = wrapper.querySelector(".prgrmss_sldr");
    if (!swiperEl) return;
    const fractionCt = wrapper.querySelector(".sldr_pgntn");
    const progressBar = wrapper.querySelector(".sldr_prgrss_bg");
    const nextBtn = wrapper.querySelector(".arrw_next");
    const prevBtn = wrapper.querySelector(".arrw_prev");
    const totalSlides = swiperEl.querySelectorAll(".swiper-slide").length || 0;
    const gapPx = getGapPx(swiperEl);

    const sw = new Swiper(swiperEl, {
      slidesPerView: 1,
      loop: totalSlides > 1,
      spaceBetween: gapPx,
      navigation: {
        nextEl: nextBtn,
        prevEl: prevBtn,
      },
      pagination: {
        el: progressBar,
        type: "progressbar",
      },
      breakpoints: {
        768: { slidesPerView: 2, loop: totalSlides > 2, spaceBetween: gapPx },
        1200: { slidesPerView: 2, loop: totalSlides > 2, spaceBetween: gapPx },
      },
      on: {
        init() {
          const currentSPV = this.params.slidesPerView;
          if (totalSlides <= currentSPV) {
            nextBtn?.classList.add("hidden");
            prevBtn?.classList.add("hidden");
            progressBar?.classList.add("hidden");
            fractionCt?.classList.add("hidden");
            return;
          }
          fractionCt.textContent = `${this.realIndex + 1} / ${totalSlides}`;
          this.on("slideChange", () => {
            fractionCt.textContent = `${this.realIndex + 1} / ${totalSlides}`;
          });
        },
        slideChange() {
          fractionCt.textContent = `${this.realIndex + 1} / ${totalSlides}`;
        },
      },
    });
    registerSwiper(sw, swiperEl);
  });

  // ---- Programme Date Slider ----
  document.querySelectorAll(".prgrmme_dte_sldr_wrppr").forEach((wrapper) => {
    const swiperEl = wrapper.querySelector(".prgrmme_dte_sldr");
    if (!swiperEl) return;
    const fractionCt = wrapper.querySelector(".sldr_pgntn");
    const prevBtn = wrapper.querySelector(".arrw_prev");
    const nextBtn = wrapper.querySelector(".arrw_next");
    const totalSlides = swiperEl.querySelectorAll(".swiper-slide").length;
    const gapPx = getGapPx(swiperEl);

    const sw = new Swiper(swiperEl, {
      slidesPerView: "auto",
      loop: true,
      centeredSlides: false,
      spaceBetween: gapPx,
      speed: 500,
      slideToClickedSlide: true,
      preventClicks: false,
      preventClicksPropagation: false,
      navigation: {
        prevEl: prevBtn,
        nextEl: nextBtn,
      },
      pagination: {
        el: wrapper.querySelector(".sldr_prgrss_bg"),
        type: "progressbar",
      },
      on: {
        init() {
          sw.navigation.init();
          sw.navigation.update();
          fractionCt.textContent = `${sw.realIndex + 1} / ${totalSlides}`;
        },
        slideChange() {
          fractionCt.textContent = `${sw.realIndex + 1} / ${totalSlides}`;
          sw.navigation.update();
        },
        slideChangeTransitionEnd() {
          updateSwiperLayout(sw);
        },
        touchEnd() {
          updateSwiperLayout(sw);
        },
      },
    });
    registerSwiper(sw, swiperEl);
  });

  // updateRootFontSize();
  let resizeTimeout;
  window.addEventListener("resize", function () {
    cancelAnimationFrame(resizeTimeout);
    resizeTimeout = requestAnimationFrame(() => {
      // updateRootFontSize();
      swiperEntries.forEach(({ swiper, el }) => {
        updateSwiperGap(swiper, el);
      });
      if (swiper3) {
        setTimeout(() => {
          updateSwiperLayout(swiper3);
        }, 300);
      }
    });
  });
  window.addEventListener("scroll", () => {
    if (
      document
        ?.querySelector(".main_header.inner_header")
        ?.classList.contains("sticky_header")
    ) {
      document.body.classList.add("innr_body");
    } else {
      document.body.classList.remove("innr_body");
    }
  });

  // Community/ Directory / Resources Filtering

  // Checkbox Name Attribute
  if ("[data-name]" !== null) {
    let dataName = document.querySelectorAll("[data-name]");
    dataName.forEach((el) => {
      let dataNameAtt = el.getAttribute("data-name");
      el.setAttribute("name", dataNameAtt);
    });
  }
  // Filter Button Active
  let clickTimeout;

  $(".all_bttn_hlder > .fltrng_bttn").on("click", function () {
    let clickedButton = $(this);

    clearTimeout(clickTimeout);

    clickedButton
      .addClass("has_active")
      .closest(".slct_fltr_bttn_hlder")
      .find(
        ".cmnty_fltr_bttn_lstng .cmnty_fltr_bttn_item > .fltrng_bttn.has_active"
      )
      .removeClass("has_active");
    clickTimeout = setTimeout(function () {
      clickedButton.addClass("has_active");
      clickedButton
        .closest(".slct_fltr_bttn_hlder")
        .find(".all_bttn_hlder > .fltrng_bttn.has_active")
        .not(clickedButton);
    }, 100);
  });

  $(".cmnty_fltr_bttn_lstng .cmnty_fltr_bttn_item > .fltrng_bttn").on(
    "click",
    function () {
      $(this)
        .closest(".slct_fltr_bttn_hlder")
        .find(".all_bttn_hlder > .fltrng_bttn.has_active")
        .removeClass("has_active");
    }
  );
  $(".all_bttn_hlder > .fltrng_bttn").trigger("click");

  $(".avblble_area_nme, .avblble_area_nme a").on("click", (e) => {
    e.preventDefault();
  });

  //Floor Tab Mode
  function fadeOut(el, duration = 300, callback) {
    if (!el) return;
    el.style.transition = `opacity ${duration}ms ease`;
    el.style.opacity = "0";
    setTimeout(() => {
      el.style.display = "none";
      if (typeof callback === "function") callback();
    }, duration);
  }

  function fadeIn(el, duration = 300) {
    if (!el) return;
    el.style.display = "block";
    el.style.opacity = "0";
    el.style.transition = `opacity ${duration}ms ease`;
    void el.offsetWidth;
    el.style.opacity = "1";
  }

  document.querySelectorAll(".floor_tab_custom").forEach((wrapper) => {
    const panels = Array.from(wrapper.querySelectorAll(".flloor_tab"));
    const externalButtons = Array.from(
      wrapper.querySelectorAll(".fllr_slct_bttn_row .flr_swtchng_bttn")
    );

    if (panels.length === 0 || externalButtons.length === 0) return;

    panels.forEach((panel, i) => {
      panel.style.transition = "opacity 300ms ease";
      if (i === 0) {
        panel.style.display = "block";
        panel.style.opacity = "1";
        panel.classList.add("active");
      } else {
        panel.style.display = "none";
        panel.style.opacity = "0";
        panel.classList.remove("active");
      }
    });

    externalButtons.forEach((btn, i) => {
      btn.classList.toggle("active", i === 0);
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        switchToPanel(i);
      });
    });

    function switchToPanel(targetIdx) {
      const targetPanel = panels[targetIdx];
      if (!targetPanel) return;

      const activePanel = wrapper.querySelector(".flloor_tab.active");
      if (targetPanel === activePanel) return;

      externalButtons.forEach((b, i) =>
        b.classList.toggle("active", i === targetIdx)
      );

      const showTarget = () => {
        targetPanel.classList.add("active");
        fadeIn(targetPanel, 300);

        const zoneBtns = Array.from(
          targetPanel.querySelectorAll(".floor_zone_bttn")
        );
        const imgBoxes = Array.from(
          targetPanel.querySelectorAll(".img_indvdl_box")
        );
        if (zoneBtns.length && imgBoxes.length) {
          zoneBtns.forEach((zb, zi) => {
            zb.classList.toggle("active", zi === 0);
            if (imgBoxes[zi]) {
              imgBoxes[zi].style.display = zi === 0 ? "block" : "none";
              imgBoxes[zi].style.opacity = zi === 0 ? "1" : "0";
            }
          });
        }
      };

      if (activePanel) {
        activePanel.classList.remove("active");
        fadeOut(activePanel, 300, showTarget);
      } else {
        showTarget();
      }
    }
    // Zone buttons
    panels.forEach((panel) => {
      const zoneBtns = Array.from(panel.querySelectorAll(".floor_zone_bttn"));
      const imgBoxes = Array.from(panel.querySelectorAll(".img_indvdl_box"));

      zoneBtns.forEach((zb, zi) => {
        zb.setAttribute("data-rel", zi + 1);
        if (imgBoxes[zi]) {
          imgBoxes[zi].id = String(zi + 1);
        }
        zb.addEventListener("click", () => {
          zoneBtns.forEach((b) => b.classList.remove("active"));
          zb.classList.add("active");
          imgBoxes.forEach((box, bidx) => {
            box.style.display = bidx === zi ? "block" : "none";
            box.style.opacity = bidx === zi ? "1" : "0";
          });
        });
      });

      if (zoneBtns.length && imgBoxes.length) {
        zoneBtns.forEach((zb, zi) => zb.classList.toggle("active", zi === 0));
        imgBoxes.forEach((box, bi) => {
          box.style.display = bi === 0 ? "block" : "none";
          box.style.opacity = bi === 0 ? "1" : "0";
        });
      }
    });
  });

  $(".flloor_tab").each(function () {
    let $currentTab = $(this);
    let $buttons = $currentTab.find(".floor_zone_bttn");
    let $images = $currentTab.find(".img_indvdl_box");
    const duration = 1000;
    $images.each(function () {
      const $img = $(this);
      let defaultDisplay = $img.css("display");
      if (defaultDisplay === "none") {
        defaultDisplay = "block";
      }
      $img.data("default-display", defaultDisplay);
      $img.css({
        display: "none",
        opacity: 0,
      });
      $img.removeClass("active");
    });

    $buttons.on("click", function () {
      const $btn = $(this);
      const target = $btn.attr("data-rel");
      console.log("Zone click, target=", target);
      $buttons.parent().removeClass("active");
      $btn.parent().addClass("active");
      $images.each(function () {
        let $img = $(this);
        const imgId = $img.attr("id");
        if (imgId === target) {
          $img
            .stop(true, true)
            .css("display", $img.data("default-display") || "block")
            .css("opacity", 0)
            .animate({ opacity: 1 }, duration, function () {
              $img.addClass("active");
            });
        } else {
          $img.stop(true, true).animate({ opacity: 0 }, duration, function () {
            $img.css("display", "none");
            $img.removeClass("active");
          });
        }
      });

      return false;
    });

    if ($buttons.length && $images.length) {
      const $firstBtn = $buttons.eq(0);
      const firstTarget = $firstBtn.attr("data-rel");

      $buttons.parent().removeClass("active");
      $firstBtn.parent().addClass("active");

      $images.each(function () {
        const $img = $(this);
        if ($img.attr("id") === firstTarget) {
          $img.css({
            display: $img.data("default-display") || "block",
            opacity: 1,
          });
          $img.addClass("active");
        } else {
          $img.css({
            display: "none",
            opacity: 0,
          });
          $img.removeClass("active");
        }
      });
    }
  });

  // Add Id To Each Floor Tab
  let ftab = document.querySelectorAll(".flloor_tab");

  ftab.forEach((el) => {
    const ftBttn = el.querySelectorAll(".floor_zone_bttn");
    const fpanel = el.querySelectorAll(".img_indvdl_box");

    ftBttn.forEach((elem, i) => {
      elem.setAttribute("data-rel", i + 1);

      let dataRelValue = elem.getAttribute("data-rel");

      if (fpanel[i]) {
        fpanel[i].id = dataRelValue;
      }
    });
  });
  // Loop through each .flloor_tab container
  $(".flloor_tab").each(function () {
    let $currentTab = $(this);
    let $buttons = $currentTab.find(".floor_zone_bttn");
    let $images = $currentTab.find(".img_indvdl_box");
    $buttons.on("click", function () {
      let target = $(this).attr("data-rel");
      $buttons.parent().removeClass("active");
      $(this).parent().addClass("active");
      $images.each(function () {
        if ($(this).attr("id") === target) {
          $(this).fadeIn("slow");
        } else {
          $(this).hide();
        }
      });
      return false;
    });
    $buttons.eq(0).trigger("click");
  });

  // Lab Bg Height
  if (document.querySelector(".lab_dtls_txt_box .lab_bg_color") !== null) {
    function bgHeight() {
      let labTextBgHeight = document.querySelector(
        ".lab_dtls_txt_box .lab_bg_color"
      ).clientHeight;
      document.querySelector(".lab_bg_color.img_lab_color").style.height =
        labTextBgHeight + "px";
    }
    bgHeight();
    window.addEventListener("resize", bgHeight);
    window.addEventListener("load", bgHeight);
  }

  // Accordion
  const accrdWrppr2 = document.querySelectorAll(".accrd_wrppr");
  accrdWrppr2.forEach((ele) => {
    let remVal = parseFloat(
      getComputedStyle(document.documentElement).fontSize
    );
    const accrdItem = ele.querySelectorAll(".accrd_item");
    const accrdBttn = ele.querySelectorAll(".accrd_button");
    const accrdPanel = ele.querySelectorAll(".accrd_pnl");
    if (accrdItem.length > 0) {
      accrdItem[0].classList.add("active");
      accrdPanel[0].style.maxHeight = `${
        accrdPanel[0].scrollHeight / remVal
      }rem`;
    }

    accrdBttn.forEach((el) => {
      const accrdPanel = el.nextElementSibling;
      const panelHeight = accrdPanel.scrollHeight;

      function slideDown() {
        accrdPanel.style.maxHeight = `${panelHeight / remVal}rem`;
      }
      function slideUp() {
        accrdPanel.style.maxHeight = `0px`;
      }

      if (el.parentNode.classList.contains("active")) {
        slideDown();
      } else {
        slideUp();
      }

      el.addEventListener("click", (e) => {
        el.parentNode.classList.toggle("active");
        if (el.parentNode.classList.contains("active")) {
          slideDown();
        } else {
          slideUp();
        }
        accrdItem.forEach((element) => {
          if (element !== el.parentNode) {
            element.classList.remove("active");
            element.children[0].nextElementSibling.style.maxHeight = `0px`;
          }
        });
      });
    });
  });

  // Play Button Add Class
  let PlayBttn = document.querySelectorAll(".ply_bttn");
  PlayBttn.forEach((el) => {
    el.addEventListener("click", () => {
      el.closest(".ply_txt_bttn").classList.toggle("play_active");
    });
  });

  // Programme Status With Progress
  if (document.querySelector(".prgrmme_predict")) {
    const upcomingDateElement = document.querySelector(".given_date");
    const remainingDaysElement = document.querySelector(".prdct_number");
    const progressBar = document.querySelector(".dte_prgrss_br");

    const isLeapYear = (year) => {
      return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
    };
    const normalizeDate = (dateStr) => {
      dateStr = dateStr.replace(/[^\d\/\.\-]/g, "");
      let separator = dateStr.includes(".") ? "." : "/";
      const [day, month, year] = dateStr.split(separator).map(Number);
      let fullYear = year;
      if (fullYear < 100) {
        fullYear += 2000;
      }
      return { day, month, year: fullYear };
    };

    const updateProgress = () => {
      const dateStr = upcomingDateElement.textContent.trim();
      const { day, month, year } = normalizeDate(dateStr);
      const fullYear = year;
      const today = new Date();
      const todayUtc = new Date(
        Date.UTC(
          today.getUTCFullYear(),
          today.getUTCMonth(),
          today.getUTCDate()
        )
      );
      const upcomingDate = new Date(Date.UTC(fullYear, month - 1, day));
      const timeDiff = upcomingDate - todayUtc;
      const remainingDays = Math.max(
        Math.ceil(timeDiff / (1000 * 60 * 60 * 24)),
        0
      );
      const maxDays = isLeapYear(today.getUTCFullYear()) ? 366 : 365;
      let progressPercent = 0;

      if (timeDiff < 0) {
        progressPercent = 100;
        remainingDaysElement.innerHTML = "XXX";
      } else {
        progressPercent = Math.min((remainingDays / maxDays) * 100, 100);
        remainingDaysElement.innerHTML = `${remainingDays}`;
      }
      progressBar.style.width = `${progressPercent}%`;
    };
    updateProgress();
  }

  // Fund Progress
  if (document.querySelector(".ourch_bnnr_bttm_box")) {
    const raisedValue = document.querySelector(".raised_number").textContent;
    const targetValue = document.querySelector(".prdct_number").textContent;
    const raisedNumber = parseFloat(raisedValue.replace(/[^\d.-]/g, ""));
    const targetNumber = parseFloat(targetValue.replace(/[^\d.-]/g, ""));
    const percentage = (raisedNumber / targetNumber) * 100;
    const validPercentage = Math.min(Math.max(percentage, 0), 100);
    const progressBar = document.querySelector(".fund_prgrssbar");
    progressBar.style.width = validPercentage + "%";
  }

  // Sticky Bottom Box
  // Commented out for now , because we do not need to overcomplicate it.
  /* const parentSection = document.querySelector('.invst_ntce_parent_section'); 
    if (parentSection) {
        let lastScrollY = window.scrollY;
        let ticking = false;

        const updateClass = () => {
            const currentScrollY = window.scrollY;
            const scrollingUp = currentScrollY < lastScrollY;
            lastScrollY = currentScrollY;

            const parentTop = parentSection.getBoundingClientRect().top;
            const parentBottom = parentSection.getBoundingClientRect().bottom;
            const viewportHeight = window.innerHeight;

            if (scrollingUp) {
                if (parentTop <= viewportHeight && parentTop >= viewportHeight - 100) {
                    parentSection.classList.add('ntfctn_actve_onscroll_up');
                }
            } else {
                if (parentBottom > 0 && parentTop < viewportHeight) {
                    parentSection.classList.remove('ntfctn_actve_onscroll_up');
                }
            }
        };

        const onScroll = () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    updateClass();
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('scroll', onScroll);
    } */

  // Select Filtering - Community/ Resources
  let selectedGroups = new Set();
  let serchSelect = document?.querySelectorAll(".srch_slct");
  let displayElement = document?.querySelector(".srch_txt_block");
  let remVal = parseFloat(getComputedStyle(document.documentElement).fontSize);
  let initialDisplayText = displayElement?.textContent;

  function slide(el, expand) {
    let h = el.scrollHeight;
    el.style.maxHeight = expand ? `${Math.ceil(h / remVal)}rem` : `0rem`;
  }

  function updateDisplayText() {
    displayElement.textContent = `Filters selected (${selectedGroups.size})`;
    displayElement.parentNode.classList.add("filters_selected");
  }
  function updateSelectedCount() {
    if (selectedGroups.size) {
      displayElement.textContent = `Filters selected (${selectedGroups.size})`;
      displayElement.parentNode.classList.add("filters_selected");
    } else {
      displayElement.textContent = initialDisplayText;
      displayElement.parentNode.classList.remove("filters_selected");
    }
  }

  function attachItemListeners(el) {
    let isDirectory = document.querySelector(".directory_filter") !== null;
    let isEvent = document.querySelector(".event_filter") !== null;

    let items = el.querySelectorAll(".drop_flte_lstng");
    items.forEach((elem, index) => {
      if (isDirectory) {
        elem
          .querySelectorAll(".custom_lnk input[type=checkbox]")
          .forEach((checkbox) => {
            checkbox.addEventListener("change", () => {
              checkbox.checked
                ? selectedGroups.add(checkbox.name)
                : selectedGroups.delete(checkbox.name);
              updateSelectedCount();
            });
          });
      } else if (isEvent) {
        elem
          .querySelectorAll(".custom_lnk input[type=radio]")
          .forEach((radio) => {
            radio.addEventListener("click", () => {
              selectedGroups.add(index);
              updateDisplayText();
            });
          });
      }
    });
  }

  serchSelect.forEach((el) => {
    let toggle = el.querySelector(".srch_slct_tggle");
    let drop = el.querySelector(".slct_lst_drp");

    slide(drop, toggle.classList.contains("srch_slct_active"));

    toggle.addEventListener("click", () => {
      toggle.classList.toggle("srch_slct_active");
      drop.classList.toggle("srch_slct_drop_active");
      slide(drop, toggle.classList.contains("srch_slct_active"));
    });

    attachItemListeners(el);
  });

  // Resource Date Sorting
  document.querySelectorAll(".resource_all_fltering").forEach((section) => {
    const listWrapper = section.querySelector(
      '.resurce_all_box [fs-cmsnest-element="list"]'
    );
    if (!listWrapper) {
      console.warn(
        "Date-sorting script: listWrapper not found in .resource_filter"
      );
      return;
    }

    function parseDateText(s) {
      if (!s) return null;
      const parts = s.trim().split(/\s+/);
      if (parts.length === 3) {
        const [dayStr, monStr, yearStr] = parts;
        const d = parseInt(dayStr, 10);
        const y = parseInt(yearStr, 10);
        const monthNames = {
          Jan: 0,
          Feb: 1,
          Mar: 2,
          Apr: 3,
          May: 4,
          Jun: 5,
          Jul: 6,
          Aug: 7,
          Sep: 8,
          Oct: 9,
          Nov: 10,
          Dec: 11,
        };
        const monKey =
          monStr.slice(0, 3).charAt(0).toUpperCase() +
          monStr.slice(1, 3).toLowerCase();
        const m = monthNames[monKey];
        if (!isNaN(d) && !isNaN(y) && typeof m === "number") {
          return new Date(y, m, d);
        }
      }
      const parsed = new Date(s);
      if (!isNaN(parsed)) {
        return parsed;
      }
      return null;
    }

    function getCurrentOrder() {
      const sel = section.querySelector('input[name="date-sort"]:checked');
      if (!sel) {
        return "desc";
      }
      return sel.id === "Oldest" ? "asc" : "desc";
    }

    function sortByDate(order = "desc") {
      const cards = Array.from(listWrapper.querySelectorAll(".w-dyn-item"));
      cards.sort((a, b) => {
        const ta = a.querySelector(".rsurce_dte")?.textContent.trim() || "";
        const tb = b.querySelector(".rsurce_dte")?.textContent.trim() || "";
        const da = parseDateText(ta);
        const db = parseDateText(tb);
        if (da === null && db === null) return 0;
        if (da === null) return order === "desc" ? 1 : -1;
        if (db === null) return order === "desc" ? -1 : 1;
        const na = da.getTime();
        const nb = db.getTime();
        return order === "desc" ? nb - na : na - nb;
      });
      cards.forEach((c) => listWrapper.appendChild(c));
    }
    const radioInputs = section.querySelectorAll('input[name="date-sort"]');
    radioInputs.forEach((radio) => {
      radio.addEventListener("change", () => {
        section.querySelectorAll("label.w-radio").forEach((lbl) => {
          lbl.classList.remove("w--redirected-checked");
        });
        const lab = radio.closest("label");
        if (lab) {
          lab.classList.add("w--redirected-checked");
        }
        const order = radio.id === "Oldest" ? "asc" : "desc";
        sortByDate(order);
      });
    });

    const defaultLatestRadio = section.querySelector("#Latest");
    if (defaultLatestRadio) {
      if (!section.querySelector('input[name="date-sort"]:checked')) {
        defaultLatestRadio.checked = true;
        const lab = defaultLatestRadio.closest("label");
        if (lab) lab.classList.add("w--redirected-checked");
      }
    }
    const loadMoreBtn = section.querySelector(".load_mre_bttn");
    if (loadMoreBtn) {
      loadMoreBtn.addEventListener("click", () => {
        setTimeout(() => {
          sortByDate(getCurrentOrder());
        }, 500);
      });
    }
    sortByDate(getCurrentOrder());
  });

  // clear button
  document
    .querySelectorAll('[fs-cmsfilter-element="clear"], .all_clr_bttn')
    .forEach((btn) => {
      let timeout;
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        clearTimeout(timeout);
        timeout = setTimeout(() => {
          selectedGroups.clear();
          displayElement.textContent = initialDisplayText;
          displayElement.parentNode.classList.remove("filters_selected");
          let allHolderClear = document.querySelector(
            '.all_bttn_hlder [fs-cmsfilter-element="clear"]'
          );
          if (allHolderClear) allHolderClear.classList.add("has_active");
          document
            .querySelectorAll(`input[name="date-sort"]`)
            .forEach((radio) => {
              radio.checked = false;
            });
          if (listWrapper) {
            sortByDate("desc");
          }
        }, 300);
      });
    });

  // Inner Banner Slider
  function initSliders() {
    const sliderRoots = document.querySelectorAll(".innr_sldr");
    if (!sliderRoots.length) return;

    if (typeof Splide !== "function") {
      console.warn("Splide is not loaded; skipping slider initialization.");
      return;
    }

    sliderRoots.forEach((splideEl) => {
      const wrapper = splideEl.closest(".innr_sldr_parent");
      if (!wrapper) return;

      const paginationContainer = wrapper.querySelector(
        ".sldr_custom_dots_hldr > ul"
      );
      if (!paginationContainer) return;

      let baseInterval = 3000;
      const intervalAttr = splideEl.getAttribute("data-interval");
      const parsedInterval = parseInt(intervalAttr, 10);
      if (!isNaN(parsedInterval) && parsedInterval > 0) {
        baseInterval = parsedInterval;
      }
      let perPage = 1;
      const perPageAttr = splideEl.getAttribute("data-per-page");
      const parsedPerPage = parseInt(perPageAttr, 10);
      if (!isNaN(parsedPerPage) && parsedPerPage > 0) {
        perPage = parsedPerPage;
      }
      let type = "loop";
      const fadeAttr = splideEl.getAttribute("data-fade");
      if (fadeAttr === "true") {
        type = "fade";
        perPage = 1;
      }
      const options = {
        type,
        perPage,
        perMove: 1,
        autoplay: true,
        interval: baseInterval,
        speed: 1000,
        pagination: false,
        gap: "0.579rem",
        arrows: true,
        pauseOnHover: false,
        pauseOnFocus: false,
        resetProgress: true,
        rewind: true,
      };

      if (perPage > 1 && type !== "fade") {
        const responsiveConfigs = [
          { attr: "data-per-page-sm", maxWidth: 575 },
          { attr: "data-per-page-md", maxWidth: 767 },
          { attr: "data-per-page-lg", maxWidth: 991 },
          { attr: "data-per-page-xl", maxWidth: 1199 },
        ];
        const breakpoints = {};

        responsiveConfigs.forEach((cfg) => {
          const attrVal = splideEl.getAttribute(cfg.attr);
          const v = parseInt(attrVal, 10);
          if (!isNaN(v) && v > 0) {
            breakpoints[cfg.maxWidth] = { perPage: v };
          }
        });

        if (Object.keys(breakpoints).length > 0) {
          options.breakpoints = breakpoints;
        }
      }

      const splide = new Splide(splideEl, options);

      function normalizeIndex(idx, length) {
        let normalized = idx % length;
        if (normalized < 0) normalized += length;
        return normalized;
      }

      function setupCustomPagination() {
        const total = splide.length;
        paginationContainer.innerHTML = "";
        for (let i = 0; i < total; i++) {
          const item = document.createElement("li");
          item.classList.add("pagination-item");
          item.setAttribute("data-index", i);
          item.setAttribute("role", "button");
          item.setAttribute("tabindex", "0");
          item.setAttribute("aria-label", "Go to slide " + (i + 1));

          const label = document.createElement("button");
          label.classList.add("page-number");
          label.type = "button";
          label.textContent = i + 1 > 9 ? i + 1 : "0" + (i + 1);
          item.appendChild(label);

          const bar = document.createElement("span");
          bar.classList.add("progress-bar");
          const inner = document.createElement("span");
          inner.classList.add("in-progress");
          inner.style.width = "0%";
          bar.appendChild(inner);
          label.appendChild(bar);

          item.addEventListener("click", () => {
            splide.go(i);
            if (splide.options.autoplay && splide.Components?.Autoplay) {
              splide.Components.Autoplay.play();
            }
          });

          item.addEventListener("keydown", (e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              item.click();
            }
          });

          paginationContainer.appendChild(item);
        }
      }

      function updateActiveClass(index) {
        const items = paginationContainer.querySelectorAll(".pagination-item");
        items.forEach((el) => {
          const idx = parseInt(el.getAttribute("data-index"), 10);
          const isActive = idx === index;
          el.classList.toggle("active", isActive);
          if (!isActive) {
            const inner = el.querySelector(".in-progress");
            if (inner) inner.style.width = "0%";
          }
        });
      }

      function onAutoplayPlaying(rate) {
        const idx = normalizeIndex(splide.index, splide.length);
        updateActiveClass(idx);
        const activeItem = paginationContainer.querySelector(
          `.pagination-item[data-index="${idx}"]`
        );
        if (!activeItem) return;
        const innerBar = activeItem.querySelector(".in-progress");
        if (!innerBar) return;
        innerBar.style.width = rate * 100 + "%";
      }
      splide.on("mounted", () => {
        setupCustomPagination();
        updateActiveClass(normalizeIndex(splide.index, splide.length));
      });

      splide.on("moved", (newIndex) => {
        updateActiveClass(normalizeIndex(newIndex, splide.length));
        if (splide.options.autoplay && splide.Components?.Autoplay) {
          splide.Components.Autoplay.play();
        }
      });

      splide.on("autoplay:playing", onAutoplayPlaying);

      splide.mount();
    });
  }

  initSliders();

  // Dark Menu Hover Color
  const MOBILE_BREAKPOINT = 768;
  const pllrLinks = document.querySelectorAll("[link-color]");
  const moblePllrLinks = document.querySelectorAll(
    ".pllr_menu_lstng .mob_menu_bttn"
  );
  const indvdlSubMenus = document.querySelectorAll(
    ".mobile_sub_menu .indvdl_submenu"
  );
  function applyHoverLogic(link) {
    const color = link.getAttribute("link-color");
    link.addEventListener("mouseenter", () => {
      link.style.color = color;
    });
    link.addEventListener("mouseleave", () => {
      if (!link.classList.contains("mobile-clicked")) {
        link.style.color = "";
      }
    });
  }
  pllrLinks.forEach(applyHoverLogic);

  function menuTabBttn() {
    moblePllrLinks.forEach((link, idx) => {
      if (link._hasMobileListener) return;
      link._hasMobileListener = true;

      link.addEventListener("click", (e) => {
        const isMobile = window.innerWidth < MOBILE_BREAKPOINT;
        if (!isMobile) {
          return;
        }
        e.preventDefault();

        indvdlSubMenus.forEach((sub) => sub.classList.remove("active"));

        moblePllrLinks.forEach((otherLink) => {
          otherLink.classList.remove("mobile-clicked");
          otherLink.style.color = "";
        });
        const targetSub = indvdlSubMenus[idx];
        if (targetSub) {
          targetSub.classList.add("active");
        }
        const color = link.getAttribute("link-color");
        if (color) {
          link.style.color = color;
          link.classList.add("mobile-clicked");
        }
      });
    });
  }

  menuTabBttn();
  window.addEventListener("resize", menuTabBttn);
  window.addEventListener("load", menuTabBttn);
  indvdlSubMenus.forEach((submenu, idx) => {
    const innerLinks = submenu.querySelectorAll("a");
    innerLinks.forEach((inner) => {
      inner.addEventListener("click", () => {
        const btn = moblePllrLinks[idx];
        if (btn) {
          btn.classList.remove("mobile-clicked");
          btn.style.color = "";
        }
      });
    });
  });

  document.addEventListener("click", (e) => {
    const isMobile = window.innerWidth < MOBILE_BREAKPOINT;
    if (!isMobile) return;
    const clickedOnButton = e.target.closest(".pllr_menu_lstng .mob_menu_bttn");
    if (clickedOnButton) return;
    moblePllrLinks.forEach((btn) => {
      btn.classList.remove("mobile-clicked");
      btn.style.color = "";
    });
  });

  const LegalBanner = document.querySelectorAll(".invst_ntce_parent_section");
  const LegalBannerEnable = document.querySelector(".ba_enabled");
  LegalBanner.forEach(function (elem) {
    if (!LegalBannerEnable) {
      elem.remove();
    }
  });

  // Mobile Select Category Dropdown
  document.querySelectorAll(".mob_cat_select").forEach((wrapper) => {
    const catSelect = wrapper.querySelector(".cat_select");
    const selectDrop = wrapper.querySelector(".select_dropdown");
    const searchTextBlock = wrapper.querySelector(".srch_txt_block");
    if (!catSelect || !selectDrop || !searchTextBlock) {
      console.warn("mob_cat_select missing sub-elements:", wrapper);
      return;
    }
    selectDrop.style.overflow = "hidden";
    selectDrop.style.maxHeight = "0rem";
    selectDrop.style.transition = "max-height 0.3s ease";

    catSelect.addEventListener("click", () => {
      const remVal =
        parseFloat(getComputedStyle(document.documentElement).fontSize) || 16;
      const isActive = wrapper.classList.toggle("active");
      if (isActive) {
        const scrollH = selectDrop.scrollHeight;
        const heightRem = scrollH / remVal;
        selectDrop.style.maxHeight = `${heightRem + 0.5}rem`;
      } else {
        // Close
        selectDrop.style.maxHeight = "0rem";
      }
    });

    const filterButtons = selectDrop.querySelectorAll(
      ".fltrng_bttn.mob_fltr_bttn"
    );
    if (filterButtons.length === 0) {
      return;
    }

    function applySelection(btn) {
      filterButtons.forEach((b) => b.classList.remove("has_active"));
      btn.classList.add("has_active");

      const txt = btn.querySelector(".mob_radio_label")?.textContent.trim();
      if (txt) {
        searchTextBlock.textContent = txt;
      }

      wrapper.querySelectorAll('input[type="radio"]').forEach((r) => {
        try {
          r.checked = false;
        } catch (_) {}
      });
      const input = btn.querySelector('input[type="radio"]');
      if (input) {
        try {
          input.checked = true;
        } catch (_) {}
      }
    }

    (function initializeDefault() {
      let defaultBtn =
        wrapper.querySelector(".fltrng_bttn.mob_fltr_bttn.has_active") ||
        wrapper
          .querySelector('input[type="radio"]:checked')
          ?.closest(".fltrng_bttn.mob_fltr_bttn") ||
        wrapper.querySelector(
          '.fltrng_bttn.mob_fltr_bttn[fs-cmsfilter-element="clear"]'
        ) ||
        filterButtons[0];
      if (defaultBtn) {
        applySelection(defaultBtn);
      }
    })();

    filterButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        applySelection(btn);
      });
    });
  });

  // Add #data-url
  document.querySelectorAll("[data-url]").forEach((el) => {
    let url = el.getAttribute("href");
    let slug = el.getAttribute("data-url");
    if (url && slug && url !== "#") {
      // Avoid duplicate hashes
      const base = url.split("#")[0];
      el.setAttribute("href", `${base}#${slug}`);
    }
  });

  // Get Params from URL
  function getUrlParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    const urlParamsValue = urlParams.get(param);
    return urlParamsValue ? `${urlParamsValue}/` : "";
  }

  // // Ghost Knowledge Hub
  const API_URL = "https://sciencecreates.ghost.io/ghost/api/content/posts/";
  const API_KEY = "969e9f32437ce35f25af6d1453";
  const DEFAULT_KN_URL = "https://hub.sciencecreates.co.uk/";

  async function fetchAndRenderGhostPosts({
    targetId,
    initialLimit = 3,
    enableSearch = false,
    searchInputId = null,
    enableSort = false,
    sortRadioName = null,
    enableFilter = false,
    loadMoreId = null,
    filterContainerSelector = null,
    renderPostHTML = null,
    isFeatured = false,
    postId = "",
  }) {
    const container = document.getElementById(targetId);
    if (!container) return;

    const loadMoreBtn = loadMoreId ? document.getElementById(loadMoreId) : null;
    const searchInput = searchInputId
      ? document.getElementById(searchInputId)
      : null;

    const filterTagData = container.getAttribute("tag");
    const isFeaturedPost = isFeatured ? "&filter=featured:true" : "";
    const filterTagRequest = filterTagData
      ? `&filter=tag:${filterTagData}`
      : "";

    let filterButtons = [];
    let activeSearch = "";
    let activeTag = "all";
    let activeSort = "latest";
    let cachedPosts = [];
    let currentVisibleCount = 0;
    let postsToRender = [];

    function collectFilterButtons() {
      filterButtons = [];
      if (!filterContainerSelector) return;
      if (typeof filterContainerSelector === "string") {
        const selectors = filterContainerSelector
          .split(",")
          .map((s) => s.trim())
          .filter((s) => s.length > 0)
          .map((s) => `${s} .cat_filter_bttn`);
        if (selectors.length) {
          const combined = selectors.join(", ");
          filterButtons = Array.from(document.querySelectorAll(combined));
        }
      } else if (Array.isArray(filterContainerSelector)) {
        filterContainerSelector.forEach((sel) => {
          const btns = Array.from(
            document.querySelectorAll(`${sel} .cat_filter_bttn`)
          );
          filterButtons.push(...btns);
        });
      }
    }

    async function fetchAllPosts() {
      const url = `${API_URL}${postId}?key=${API_KEY}&limit=100&include=tags,authors${filterTagRequest}${isFeaturedPost}&order=published_at desc`;
      const response = await fetch(url, {
        headers: { "Accept-Version": "v5.0" },
      });
      const data = await response.json();

      cachedPosts = data.posts.map((post) => {
        const tags = post.tags.map((tag) => tag.name.toLowerCase());
        return {
          ...post,
          filterType: tags.length > 0 ? tags[0] : "uncategorized",
        };
      });

      if (enableFilter && filterContainerSelector) {
        collectFilterButtons();
        filterButtons.forEach((btn) => btn.classList.remove("has_active"));
        const allBtns = filterButtons.filter(
          (btn) => btn.dataset.filter === "all"
        );
        allBtns.forEach((btn) => btn.classList.add("has_active"));
        activeTag = "all";
      }
    }

    function defaultRenderHTML(post) {
      const postDate = new Date(post.published_at).toLocaleDateString("en-GB", {
        day: "numeric",
        month: "short",
        year: "numeric",
      });
      const primaryTag = post.primary_tag?.name || "Article";
      const featureImage =
        post.feature_image ||
        "https://via.placeholder.com/600x400?text=No+Image";

      return `
            <div data-move="up" data-delay="0.4" role="listitem" class="invdl_knwldge_row_hlder w-dyn-item">
                <div class="row knwldge_hub_row">
                    <div class="col col-3 knwldge_hub_img_col">
                        <div class="knwldge_hub_img_box">
                            <a href="${DEFAULT_KN_URL}${post.slug}/" target="_blank" rel="noopener" class="knwldge_hhub_lnk_box w-inline-block">
                                <img src="${featureImage}" loading="lazy" alt="${post.title}" class="knwldge_hub_img">
                            </a>
                        </div>
                    </div>
                    <div class="col col-9 knwldge_hub_info_col">
                        <div class="knwldge_info_box pl_big">
                            <div class="knwldge_info_box_innr">
                                <div class="knwldge_info_hdr">
                                    <div class="knwldge_dte_box"><div>${postDate}</div></div>
                                    <div class="knwldge_cat_box"><div class="evnts_type_tag"><div>${primaryTag}</div></div></div>
                                </div>
                                <div class="knwldge_ttle_box pr_big">
                                    <a href="${DEFAULT_KN_URL}${post.slug}/" target="_blank" rel="noopener" class="knwldge_ttle_lnk title_h2 w-inline-block">
                                        <div>${post.title}</div>
                                    </a>
                                </div>
                                <div class="knwldge_bttm_bttn_box">
                                    <a href="${DEFAULT_KN_URL}${post.slug}/" target="_blank" rel="noopener" class="shape_bttn w-inline-block">
                                        <div class="shpe_cover_one">
                                            <img src="https://cdn.prod.website-files.com/6793cf33c35e2c59ec3c7f51/67ac73219c9a93e810f6683c_arrw_top_rght.svg" class="bttn_shape">
                                        </div>
                                        <div class="shpe_cover_two shpe_cover_one">
                                            <img src="https://cdn.prod.website-files.com/6793cf33c35e2c59ec3c7f51/67ac73219c9a93e810f6683c_arrw_top_rght.svg" class="bttn_shape">
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`;
    }

    function renderNextBatch() {
      const postsToShow = postsToRender.slice(
        currentVisibleCount,
        currentVisibleCount + initialLimit
      );
      postsToShow.forEach((post) => {
        const html = renderPostHTML
          ? renderPostHTML(post)
          : defaultRenderHTML(post);
        container.innerHTML += html;
      });

      currentVisibleCount += postsToShow.length;
      if (loadMoreBtn) {
        loadMoreBtn.style.display =
          currentVisibleCount < postsToRender.length ? "inline-flex" : "none";
      }
    }

    if (postId.length) {
      initHub();
    }

    function applyFilters() {
      let filtered = [...cachedPosts];

      if (enableSearch && activeSearch) {
        filtered = filtered.filter((post) =>
          post.title.toLowerCase().includes(activeSearch.toLowerCase())
        );
      }

      if (enableFilter && activeTag !== "all") {
        filtered = filtered.filter((post) =>
          post.tags.some((tag) => tag.name.toLowerCase() === activeTag)
        );
      }

      if (enableSort) {
        filtered.sort((a, b) => {
          return activeSort === "oldest"
            ? new Date(a.published_at) - new Date(b.published_at)
            : new Date(b.published_at) - new Date(a.published_at);
        });
      }

      return filtered;
    }

    function resetAndRender() {
      container.innerHTML = "";
      currentVisibleCount = 0;
      postsToRender = applyFilters();
      renderNextBatch();
    }

    await fetchAllPosts();
    resetAndRender();

    if (loadMoreBtn) {
      loadMoreBtn.addEventListener("click", () => renderNextBatch());
    }

    if (enableFilter && filterContainerSelector) {
      document.addEventListener("click", function (e) {
        const el = e.target;
        const btn = el.matches(".cat_filter_bttn")
          ? el
          : el.closest(".cat_filter_bttn");
        if (btn && btn.dataset.filter) {
          e.preventDefault();
          const selected = btn.dataset.filter;
          activeTag = selected;

          collectFilterButtons();

          filterButtons.forEach((b) => {
            if (b.dataset.filter === activeTag) {
              b.classList.add("has_active");
            } else {
              b.classList.remove("has_active");
            }
          });

          resetAndRender();
        }
      });
    }

    if (enableSearch && searchInput) {
      searchInput.addEventListener("input", () => {
        activeSearch = searchInput.value.trim();
        resetAndRender();
      });
    }

    if (enableSort && sortRadioName) {
      document
        .querySelectorAll(`input[name="${sortRadioName}"]`)
        .forEach((radio) => {
          radio.addEventListener("change", () => {
            const label = radio
              .closest("label")
              ?.querySelector(".fltrs_label")
              ?.textContent.trim()
              .toLowerCase();
            activeSort = label === "oldest" ? "oldest" : "latest";
            resetAndRender();
          });
        });
    }

    const searchClearButton = document.getElementById("srch_clear_bttn");
    if (searchClearButton) {
      searchClearButton.addEventListener("click", () => {
        activeSearch = "";
        if (searchInput) searchInput.value = "";
        resetAndRender();
      });
    }

    document.querySelectorAll(".all_clr_bttn").forEach((el) => {
      el.addEventListener("click", () => {
        activeSearch = "";
        activeTag = "all";
        activeSort = "latest";

        if (searchInput) searchInput.value = "";

        collectFilterButtons();
        filterButtons.forEach((b) => {
          if (b.dataset.filter === "all") {
            b.classList.add("has_active");
          } else {
            b.classList.remove("has_active");
          }
        });

        if (enableSort && sortRadioName) {
          document
            .querySelectorAll(`input[name="${sortRadioName}"]`)
            .forEach((radio) => {
              radio.checked = false;
            });
        }

        resetAndRender();
      });
    });

    if (enableFilter) {
      const hash = window.location.hash.slice(1);
      if (hash) {
        collectFilterButtons();
        const deepBtn = filterButtons.find((b) => b.dataset.filter === hash);
        if (deepBtn) {
          deepBtn.click();
        }
      }
    }
    if (postId.length) {
      initHub();
    }
  }
  if (document.getElementById("ghost-single-post")) {
    fetchAndRenderGhostPosts({
      targetId: "ghost-single-post",
      initialLimit: 1,
      enableSearch: false,
      enableSort: false,
      enableFilter: false,
      postId: getUrlParam("post_id"),
      renderPostHTML: (post) => {
        const postDate = new Date(post.published_at).toLocaleDateString(
          "en-GB",
          {
            day: "numeric",
            month: "short",
            year: "2-digit",
          }
        );

        const featureImage =
          post.feature_image ||
          "https://via.placeholder.com/600x400?text=No+Image";
        const primaryTag = post.primary_tag?.name || "Article";
        const postExcerpt = post.excerpt || post.title;
        const postTitle = post.title || "Title";
        const featureImageCaption = post?.feature_image_caption || "";

        const elements = {
          date: document.getElementById("single-post-date"),
          image: document.getElementById("kn_singe_post_image"),
          tag: document.getElementById("kh_tag"),
          excerpt: document.getElementById("kh_custom_excerpt"),
          title: document.getElementById("kh_title"),
          feature: document.getElementById("kh_feature_img"),
        };

        elements.date.textContent = postDate;
        elements.image.style.backgroundImage = `url(${featureImage})`;
        elements.tag.textContent = primaryTag;
        elements.excerpt.textContent = postExcerpt;
        elements.title.textContent = postTitle;
        elements.feature.innerHTML = featureImageCaption;

        const metaTags = {
          title: (document.title = post.title),
          description: document.querySelector('meta[name="description"]'),
          ogTitle: document.querySelector('meta[property="og:title"]'),
          ogDescription: document.querySelector(
            'meta[property="og:description"]'
          ),
          ogImage: document.querySelector('meta[property="og:image"]'),
        };

        metaTags.description?.setAttribute("content", postExcerpt);
        metaTags.ogTitle?.setAttribute("content", post.title);
        metaTags.ogDescription?.setAttribute("content", postExcerpt);
        metaTags.ogImage?.setAttribute("content", featureImage);

        return post.html;
      },
    });
  }

  if (document.getElementById("ghost_list")) {
    fetchAndRenderGhostPosts({
      targetId: "ghost_list",
      initialLimit: 3,
      enableSearch: true,
      searchInputId: "search_input",
      enableSort: true,
      sortRadioName: "sort-by-filter",
      enableFilter: true,
      loadMoreId: "load_mre_bttn",
      filterContainerSelector: ".dsktop_flter_lstng,.mob_flter_lstng",
    });
  }

  if (document.getElementById("ghost-posts")) {
    fetchAndRenderGhostPosts({
      targetId: "ghost-posts",
      initialLimit: 2,
      enableSearch: false,
      enableSort: false,
      enableFilter: false,
    });
  }

  if (document.getElementById("ghost-posts-magazine")) {
    fetchAndRenderGhostPosts({
      targetId: "ghost-posts-magazine",
      initialLimit: 50,
      enableSearch: false,
      enableSort: false,
      enableFilter: false,
    });
  }

  if (document.getElementById("ghost_box")) {
    fetchAndRenderGhostPosts({
      targetId: "ghost_box",
      isFeatured: true,
      initialLimit: 1,
      renderPostHTML: (post) => {
        const featureImage =
          post.feature_image ||
          "https://via.placeholder.com/600x400?text=No+Image";
        return `
                    <div class="sptlght_img_box">
                        <a href="${DEFAULT_KN_URL}${post.slug}/" target="_blank" rel="noopener" class="sptlght_img_lnk w-inline-block">
                            <img src="${featureImage}" loading="lazy" alt="${post.title}" class="sptlght_img">
                        </a>
                    </div>
                    <div class="sptlght_ttle_box">
                        <a href="${DEFAULT_KN_URL}${post.slug}/" target="_blank" rel="noopener" class="sptlght_ttle_lnk">${post.title}</a>
                    </div>`;
      },
    });
  }

  if (document.querySelectorAll(".popup-vimeo").length) {
    $(".popup-vimeo").magnificPopup({
      disableOn: 700,
      type: "iframe",
      mainClass: "mfp-fade",
      removalDelay: 160,
      preloader: false,
      fixedContentPos: false,
    });
  }
  // Contact Custom Tab
  const wrappers = document.querySelectorAll(".cntct_sldr_outr");

  if (wrappers.length) {
    wrappers.forEach((wrapper) => {
      const pillarBg = wrapper.querySelector(".pillar_bg");
      const items = wrapper.querySelectorAll(".cntct_box_item");
      const buttons = wrapper.querySelectorAll(".pllr_bttn");
      const FADE_DURATION = 300;

      function fadeIn(el, duration = FADE_DURATION) {
        el.style.transition = "";
        el.style.display = "block";
        el.style.opacity = 0;
        requestAnimationFrame(() => {
          el.style.transition = `opacity ${duration}ms ease`;
          el.style.opacity = 1;
        });
      }

      function fadeOut(el, duration = FADE_DURATION) {
        if (getComputedStyle(el).display === "none") return;
        el.style.transition = `opacity ${duration}ms ease`;
        requestAnimationFrame(() => {
          el.style.opacity = 0;
        });
        const handler = function (e) {
          if (e.propertyName === "opacity") {
            el.style.display = "none";
            el.style.transition = "";
            el.removeEventListener("transitionend", handler);
          }
        };
        el.addEventListener("transitionend", handler);
      }

      function activate(index) {
        buttons.forEach((btn, i) => {
          const item = items[i];
          const color = btn.getAttribute("data-bg-color") || "";

          if (i === index) {
            item.classList.add("active");
            fadeIn(item);
            pillarBg.style.backgroundColor = color;
            btn.classList.add("active");
            btn.style.backgroundColor = color;
            btn.style.borderColor = color;
          } else {
            item.classList.remove("active");
            fadeOut(item);
            btn.classList.remove("active");
            btn.style.backgroundColor = "";
            btn.style.borderColor = "";
          }
        });
      }

      buttons.forEach((btn, i) => {
        btn.addEventListener("click", () => activate(i));
      });

      if (buttons.length) {
        items.forEach((item, i) => {
          if (i === 0) {
            item.style.display = "block";
            item.style.opacity = 1;
            item.classList.add("active");
          } else {
            item.style.display = "none";
            item.style.opacity = 0;
            item.classList.remove("active");
          }
        });

        const firstBtn = buttons[0];
        const firstColor = firstBtn.getAttribute("data-bg-color") || "";
        pillarBg.style.backgroundColor = firstColor;
        firstBtn.classList.add("active");
        firstBtn.style.backgroundColor = firstColor;
        firstBtn.style.borderColor = firstColor;
      }
    });
    document.querySelectorAll(".pllr_bttn").forEach((button) => {
      button.addEventListener("click", () => {
        const activeItem = document.querySelector(".cntct_box_item.active");
        if (!activeItem) return;

        const txtSlider = activeItem.querySelector(".mmbr_optn_txt_sldr");
        const imgSlider = activeItem.querySelector(".mmbr_img_sldr");

        if (txtSlider && $(txtSlider).hasClass("slick-initialized")) {
          $(txtSlider).slick("refresh");
        }
        if (imgSlider && $(imgSlider).hasClass("slick-initialized")) {
          $(imgSlider).slick("refresh");
        }
      });
    });
  }

  // Thumbnail slider data-slide indexing (safe check)
  const dataWrappers = document.querySelectorAll(".thmbnl_sldr_wrppr");
  if (dataWrappers.length) {
    dataWrappers.forEach((wrapper) => {
      const items = wrapper.querySelectorAll(".tem_thmbnl_item");
      items.forEach((item, i) => {
        item.setAttribute("data-slide", i + 1);
      });
    });
  }
});

// Legal Banner Remove Using Webflow Script
window.Webflow ||= [];
window.Webflow.push(() => {
  const LegalBanner = document.querySelectorAll(".invst_ntce_parent_section");
  const LegalBannerEnable = document.querySelector(".ba_enabled");
  LegalBanner.forEach(function (elem) {
    if (!LegalBannerEnable) {
      elem.remove();
    }
  });
});

function initHub() {
  !(function () {
    const e = function (e) {
        const t = e.querySelector(".kg-audio-player-container"),
          a = e.querySelector(".kg-audio-play-icon"),
          i = e.querySelector(".kg-audio-pause-icon"),
          o = e.querySelector(".kg-audio-seek-slider"),
          d = e.querySelector(".kg-audio-playback-rate"),
          r = e.querySelector(".kg-audio-mute-icon"),
          s = e.querySelector(".kg-audio-unmute-icon"),
          l = e.querySelector(".kg-audio-volume-slider"),
          n = e.querySelector("audio"),
          c = e.querySelector(".kg-audio-duration"),
          u = e.querySelector(".kg-audio-current-time");
        let g = [
            { rate: 0.75, label: "0.7Ã—" },
            { rate: 1, label: "1Ã—" },
            { rate: 1.25, label: "1.2Ã—" },
            { rate: 1.75, label: "1.7Ã—" },
            { rate: 2, label: "2Ã—" },
          ],
          v = null,
          m = 1;
        const k = () => {
            (o.value = Math.floor(n.currentTime)),
              (u.textContent = y(o.value)),
              t.style.setProperty(
                "--seek-before-width",
                (o.value / o.max) * 100 + "%"
              ),
              (v = requestAnimationFrame(k));
          },
          h = (e) => {
            e === o
              ? t.style.setProperty(
                  "--seek-before-width",
                  (e.value / e.max) * 100 + "%"
                )
              : t.style.setProperty(
                  "--volume-before-width",
                  (e.value / e.max) * 100 + "%"
                );
          },
          y = (e) => {
            const t = Math.floor(e / 60),
              a = Math.floor(e % 60);
            return `${t}:${a < 10 ? `0${a}` : `${a}`}`;
          },
          p = () => {
            c.textContent = y(n.duration);
          },
          L = () => {
            o.max = Math.floor(n.duration);
          },
          f = () => {
            if (n.buffered.length > 0) {
              const e = Math.floor(n.buffered.end(n.buffered.length - 1));
              t.style.setProperty("--buffered-width", (e / o.max) * 100 + "%");
            }
          };
        n.readyState > 0
          ? (p(), L(), f())
          : n.addEventListener("loadedmetadata", () => {
              p(), L(), f();
            }),
          a.addEventListener("click", () => {
            a.classList.add("kg-audio-hide"),
              i.classList.remove("kg-audio-hide"),
              n.play(),
              requestAnimationFrame(k);
          }),
          i.addEventListener("click", () => {
            i.classList.add("kg-audio-hide"),
              a.classList.remove("kg-audio-hide"),
              n.pause(),
              cancelAnimationFrame(v);
          }),
          r.addEventListener("click", () => {
            r.classList.add("kg-audio-hide"),
              s.classList.remove("kg-audio-hide"),
              (n.muted = !1);
          }),
          s.addEventListener("click", () => {
            s.classList.add("kg-audio-hide"),
              r.classList.remove("kg-audio-hide"),
              (n.muted = !0);
          }),
          d.addEventListener("click", () => {
            let e = g[(m + 1) % 5];
            (m += 1), (n.playbackRate = e.rate), (d.textContent = e.label);
          }),
          n.addEventListener("progress", f),
          o.addEventListener("input", (e) => {
            h(e.target),
              (u.textContent = y(o.value)),
              n.paused || cancelAnimationFrame(v);
          }),
          o.addEventListener("change", () => {
            (n.currentTime = o.value), n.paused || requestAnimationFrame(k);
          }),
          l.addEventListener("input", (e) => {
            const t = e.target.value;
            h(e.target), (n.volume = t / 100);
          });
      },
      t = document.querySelectorAll(".kg-audio-card");
    for (let a = 0; a < t.length; a++) e(t[a]);
  })(),
    document.querySelectorAll(".kg-gallery-image img").forEach(function (e) {
      const t = e.closest(".kg-gallery-image"),
        a = e.attributes.width.value / e.attributes.height.value;
      t.style.flex = a + " 1 0%";
    }),
    (function () {
      const e = document.getElementsByClassName("kg-toggle-heading"),
        t = function (e) {
          const t = e.target.closest(".kg-toggle-card");
          "close" === t.getAttribute("data-kg-toggle-state")
            ? t.setAttribute("data-kg-toggle-state", "open")
            : t.setAttribute("data-kg-toggle-state", "close");
        };
      for (let a = 0; a < e.length; a++) e[a].addEventListener("click", t, !1);
    })(),
    (function () {
      const e = function (e) {
          const t = e.querySelector(".kg-video-player"),
            a = e.querySelector(".kg-video-player-container"),
            i = e.querySelector(".kg-video-play-icon"),
            o = e.querySelector(".kg-video-pause-icon"),
            d = e.querySelector(".kg-video-seek-slider"),
            r = e.querySelector(".kg-video-playback-rate"),
            s = e.querySelector(".kg-video-mute-icon"),
            l = e.querySelector(".kg-video-unmute-icon"),
            n = e.querySelector(".kg-video-volume-slider"),
            c = e.querySelector("video"),
            u = e.querySelector(".kg-video-duration"),
            g = e.querySelector(".kg-video-current-time"),
            v = e.querySelector(".kg-video-large-play-icon"),
            m = e.querySelector(".kg-video-overlay");
          let k = [
              { rate: 0.75, label: "0.7Ã—" },
              { rate: 1, label: "1Ã—" },
              { rate: 1.25, label: "1.2Ã—" },
              { rate: 1.75, label: "1.7Ã—" },
              { rate: 2, label: "2Ã—" },
            ],
            h = null,
            y = 1;
          c.loop &&
            (v.classList.add("kg-video-hide-animated"),
            m.classList.add("kg-video-hide-animated"));
          const p = () => {
              (d.value = Math.floor(c.currentTime)),
                (g.textContent = f(d.value)),
                t.style.setProperty(
                  "--seek-before-width",
                  (d.value / d.max) * 100 + "%"
                ),
                (h = requestAnimationFrame(p));
            },
            L = (e) => {
              e === d
                ? t.style.setProperty(
                    "--seek-before-width",
                    (e.value / e.max) * 100 + "%"
                  )
                : t.style.setProperty(
                    "--volume-before-width",
                    (e.value / e.max) * 100 + "%"
                  );
            },
            f = (e) => {
              const t = Math.floor(e / 60),
                a = Math.floor(e % 60);
              return `${t}:${a < 10 ? `0${a}` : `${a}`}`;
            },
            q = () => {
              u.textContent = f(c.duration);
            },
            b = () => {
              d.max = Math.floor(c.duration);
            },
            S = () => {
              if (c.buffered.length > 0) {
                const e = Math.floor(c.buffered.end(c.buffered.length - 1));
                t.style.setProperty(
                  "--buffered-width",
                  (e / d.max) * 100 + "%"
                );
              }
            };
          c.readyState > 0
            ? (q(),
              b(),
              S(),
              c.autoplay &&
                ((h = requestAnimationFrame(p)),
                i.classList.add("kg-video-hide"),
                o.classList.remove("kg-video-hide")),
              c.muted &&
                (l.classList.add("kg-video-hide"),
                s.classList.remove("kg-video-hide")))
            : c.addEventListener("loadedmetadata", () => {
                q(),
                  b(),
                  S(),
                  c.autoplay &&
                    ((h = requestAnimationFrame(p)),
                    i.classList.add("kg-video-hide"),
                    o.classList.remove("kg-video-hide")),
                  c.muted &&
                    (l.classList.add("kg-video-hide"),
                    s.classList.remove("kg-video-hide"));
              }),
            (e.onmouseover = () => {
              c.loop || a.classList.remove("kg-video-hide-animated");
            }),
            (e.onmouseleave = () => {
              !!(
                c.currentTime > 0 &&
                !c.paused &&
                !c.ended &&
                c.readyState > 2
              ) && a.classList.add("kg-video-hide-animated");
            }),
            e.addEventListener("click", () => {
              if (!c.loop) {
                !!(
                  c.currentTime > 0 &&
                  !c.paused &&
                  !c.ended &&
                  c.readyState > 2
                )
                  ? x()
                  : E();
              }
            }),
            (c.onplay = () => {
              v.classList.add("kg-video-hide-animated"),
                m.classList.add("kg-video-hide-animated"),
                i.classList.add("kg-video-hide"),
                o.classList.remove("kg-video-hide");
            });
          const E = () => {
              v.classList.add("kg-video-hide-animated"),
                m.classList.add("kg-video-hide-animated"),
                i.classList.add("kg-video-hide"),
                o.classList.remove("kg-video-hide"),
                c.play(),
                (h = requestAnimationFrame(p));
            },
            x = () => {
              o.classList.add("kg-video-hide"),
                i.classList.remove("kg-video-hide"),
                c.pause(),
                cancelAnimationFrame(h);
            };
          v.addEventListener("click", (e) => {
            e.stopPropagation(), E();
          }),
            i.addEventListener("click", (e) => {
              e.stopPropagation(), E();
            }),
            o.addEventListener("click", (e) => {
              e.stopPropagation(), x();
            }),
            s.addEventListener("click", (e) => {
              e.stopPropagation(),
                s.classList.add("kg-video-hide"),
                l.classList.remove("kg-video-hide"),
                (c.muted = !1);
            }),
            l.addEventListener("click", (e) => {
              e.stopPropagation(),
                l.classList.add("kg-video-hide"),
                s.classList.remove("kg-video-hide"),
                (c.muted = !0);
            }),
            r.addEventListener("click", (e) => {
              e.stopPropagation();
              let t = k[(y + 1) % 5];
              (y += 1), (c.playbackRate = t.rate), (r.textContent = t.label);
            }),
            c.addEventListener("progress", S),
            d.addEventListener("input", (e) => {
              e.stopPropagation(),
                L(e.target),
                (g.textContent = f(d.value)),
                c.paused || cancelAnimationFrame(h);
            }),
            d.addEventListener("change", (e) => {
              e.stopPropagation(),
                (c.currentTime = d.value),
                c.paused || requestAnimationFrame(p);
            }),
            n.addEventListener("click", (e) => {
              e.stopPropagation();
            }),
            d.addEventListener("click", (e) => {
              e.stopPropagation();
            }),
            n.addEventListener("input", (e) => {
              e.stopPropagation();
              const t = e.target.value;
              L(e.target), (c.volume = t / 100);
            });
        },
        t = function (e) {
          const t = e.querySelector(".kg-video-container"),
            a = t.querySelector("video");
          if (t && a.width && a.height) {
            const e = ((a.height / a.width) * 100).toFixed(3);
            t.style.paddingBottom = `${e}%`;
          }
        },
        a = document.querySelectorAll(".kg-video-card");
      for (let i = 0; i < a.length; i++) t(a[i]), e(a[i]);
    })();
}
