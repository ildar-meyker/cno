/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/accordion.js":
/*!*************************************!*\
  !*** ./src/js/modules/accordion.js ***!
  \*************************************/
/***/ (function() {

$(".js-accordion").each(function () {
  $(this).accordionjs({
    closeAble: true,
    activeIndex: false
  });
});

/***/ }),

/***/ "./src/js/modules/burger.js":
/*!**********************************!*\
  !*** ./src/js/modules/burger.js ***!
  \**********************************/
/***/ (function() {

var $buttons = $(".js-burger");
$(document).on("click", ".js-burger", function () {
  $("body").toggleClass("burger__locked");
  $("#burger").toggleClass("active");
  $buttons.toggleClass("active");
});

/***/ }),

/***/ "./src/js/modules/datepicker.js":
/*!**************************************!*\
  !*** ./src/js/modules/datepicker.js ***!
  \**************************************/
/***/ (function() {

$(".js-date").each(function () {
  var picker = new easepick.create({
    element: this,
    css: ["https://cdn.jsdelivr.net/npm/@easepick/bundle@1.2.0/dist/index.css", "css/easepick-custom.min.css"],
    lang: "ru-RU",
    plugins: ["AmpPlugin"],
    format: "DD.MM.YYYY",
    zIndex: 100,
    AmpPlugin: {
      dropdown: {
        months: true,
        years: true
      },
      darkMode: false
    }
  });
});

/***/ }),

/***/ "./src/js/modules/digits.js":
/*!**********************************!*\
  !*** ./src/js/modules/digits.js ***!
  \**********************************/
/***/ (function() {

$(".digits__item").hover(function () {
  $(this).closest(".digits").find(".digits__item").removeClass("active");
  $(this).addClass("active");
});

/***/ }),

/***/ "./src/js/modules/gallery.js":
/*!***********************************!*\
  !*** ./src/js/modules/gallery.js ***!
  \***********************************/
/***/ (function() {

(function () {
  if ($("#gallery").length === 0) return;
  var lightbox = new PhotoSwipeLightbox({
    gallery: "#gallery",
    children: "a",
    pswpModule: PhotoSwipe
  });
  lightbox.init();
})();

/***/ }),

/***/ "./src/js/modules/masks.js":
/*!*********************************!*\
  !*** ./src/js/modules/masks.js ***!
  \*********************************/
/***/ (function() {

$(".js-price").each(function () {
  IMask(this, {
    mask: Number,
    min: 0,
    thousandsSeparator: " "
  });
});
$(".js-phone").each(function () {
  IMask(this, {
    mask: "+{7}(000)000-00-00"
  });
});

/***/ }),

/***/ "./src/js/modules/popup.js":
/*!*********************************!*\
  !*** ./src/js/modules/popup.js ***!
  \*********************************/
/***/ (function() {

$(document).on("click", ".js-open-popup", function (e) {
  e.preventDefault();
  var target = $(e.currentTarget).attr("href");
  $(target).addClass("active");
});
$(document).on("click", ".js-close-popup", function (e) {
  e.preventDefault();
  $(e.currentTarget).closest(".popup").removeClass("active");
});

/***/ }),

/***/ "./src/js/modules/rangepicker.js":
/*!***************************************!*\
  !*** ./src/js/modules/rangepicker.js ***!
  \***************************************/
/***/ (function() {

$(".js-range-picker").each(function () {
  var startDate = $(this).data("start-date") || null;
  var endDate = $(this).data("end-date") || null;
  var picker = new easepick.create({
    element: this,
    css: ["https://cdn.jsdelivr.net/npm/@easepick/bundle@1.2.0/dist/index.css", "css/easepick-custom.min.css"],
    inline: true,
    lang: "ru-RU",
    plugins: ["RangePlugin", "AmpPlugin"],
    RangePlugin: {
      tooltip: false,
      startDate: startDate,
      endDate: endDate
    },
    AmpPlugin: {
      dropdown: {
        months: true,
        years: true
      },
      darkMode: false
    }
  });
});

/***/ }),

/***/ "./src/js/modules/scroll-up.js":
/*!*************************************!*\
  !*** ./src/js/modules/scroll-up.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var debounce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! debounce */ "./node_modules/debounce/index.js");
/* harmony import */ var debounce__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(debounce__WEBPACK_IMPORTED_MODULE_0__);

$("#scroll-up").on("click", function (e) {
  e.preventDefault();
  $("html, body").animate({
    scrollTop: 0
  });
});
$(window).on("scroll", (0,debounce__WEBPACK_IMPORTED_MODULE_0__.debounce)(function () {
  $("#scroll-up").toggleClass("active", $(window).scrollTop() > $(window).height() * 2);
}, 200));

/***/ }),

/***/ "./src/js/modules/select.js":
/*!**********************************!*\
  !*** ./src/js/modules/select.js ***!
  \**********************************/
/***/ (function() {

var elems = document.getElementsByClassName("js-select");
Array.from(elems).forEach(function (elem) {
  NiceSelect.bind(elem);
});

/***/ }),

/***/ "./src/js/modules/sliderPeople.js":
/*!****************************************!*\
  !*** ./src/js/modules/sliderPeople.js ***!
  \****************************************/
/***/ (function() {

$(".slider-people").each(function () {
  $(this).find(".slider-people__row").slick({
    dots: true,
    infinite: false,
    autoplay: false,
    prevArrow: $(this).find(".slider-people__prev"),
    nextArrow: $(this).find(".slider-people__next"),
    appendDots: $(this).find(".slider-people__dots"),
    slidesToShow: 4,
    responsive: [{
      breakpoint: 900,
      settings: {
        slidesToShow: 3
      }
    }, {
      breakpoint: 700,
      settings: {
        slidesToShow: 2
      }
    }, {
      breakpoint: 400,
      settings: {
        slidesToShow: 1
      }
    }]
  });
});

/***/ }),

/***/ "./src/js/modules/sliderReviews.js":
/*!*****************************************!*\
  !*** ./src/js/modules/sliderReviews.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var js_match_height__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! js-match-height */ "./node_modules/js-match-height/lib/index.js");

$(".slider-reviews").each(function () {
  $(this).find(".slider-reviews__row").slick({
    dots: true,
    infinite: false,
    autoplay: false,
    prevArrow: $(this).find(".slider-reviews__prev"),
    nextArrow: $(this).find(".slider-reviews__next"),
    appendDots: $(this).find(".slider-reviews__dots"),
    slidesToShow: 2.5,
    responsive: [{
      breakpoint: 900,
      settings: {
        slidesToShow: 1
      }
    }]
  });
});
new js_match_height__WEBPACK_IMPORTED_MODULE_0__.MatchHeight(".slider-reviews__item__in");

/***/ }),

/***/ "./src/js/modules/sliderThanks.js":
/*!****************************************!*\
  !*** ./src/js/modules/sliderThanks.js ***!
  \****************************************/
/***/ (function() {

$(".slider-thanks").each(function () {
  var $root = $(this);
  new Swiper($root.find(".swiper")[0], {
    loop: true,
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 0,
      stretch: -100,
      depth: 200,
      modifier: 1,
      slideShadows: false
    },
    pagination: {
      el: $root.find(".swiper-pagination")[0],
      clickable: true
    },
    navigation: {
      nextEl: $root.find(".slider-thanks__next")[0],
      prevEl: $root.find(".slider-thanks__prev")[0]
    }
  });
});

/***/ }),

/***/ "./src/js/modules/sliderThumbs.js":
/*!****************************************!*\
  !*** ./src/js/modules/sliderThumbs.js ***!
  \****************************************/
/***/ (function() {

$(".slider-thumbs").each(function () {
  var $root = $(this);
  var swiper = new Swiper($root.find(".slider-thumbs__tape .swiper")[0], {
    slidesPerView: "auto",
    watchSlidesProgress: true,
    freeMode: true
  });
  new Swiper($root.find(".slider-thumbs__main .swiper")[0], {
    thumbs: {
      swiper: swiper
    },
    navigation: {
      nextEl: $root.find(".slider-thumbs__next")[0],
      prevEl: $root.find(".slider-thumbs__prev")[0]
    }
  });
});

/***/ }),

/***/ "./node_modules/debounce/index.js":
/*!****************************************!*\
  !*** ./node_modules/debounce/index.js ***!
  \****************************************/
/***/ (function(module) {

/**
 * Returns a function, that, as long as it continues to be invoked, will not
 * be triggered. The function will be called after it stops being called for
 * N milliseconds. If `immediate` is passed, trigger the function on the
 * leading edge, instead of the trailing. The function also has a property 'clear' 
 * that is a function which will clear the timer to prevent previously scheduled executions. 
 *
 * @source underscore.js
 * @see http://unscriptable.com/2009/03/20/debouncing-javascript-methods/
 * @param {Function} function to wrap
 * @param {Number} timeout in ms (`100`)
 * @param {Boolean} whether to execute at the beginning (`false`)
 * @api public
 */
function debounce(func, wait, immediate){
  var timeout, args, context, timestamp, result;
  if (null == wait) wait = 100;

  function later() {
    var last = Date.now() - timestamp;

    if (last < wait && last >= 0) {
      timeout = setTimeout(later, wait - last);
    } else {
      timeout = null;
      if (!immediate) {
        result = func.apply(context, args);
        context = args = null;
      }
    }
  };

  var debounced = function(){
    context = this;
    args = arguments;
    timestamp = Date.now();
    var callNow = immediate && !timeout;
    if (!timeout) timeout = setTimeout(later, wait);
    if (callNow) {
      result = func.apply(context, args);
      context = args = null;
    }

    return result;
  };

  debounced.clear = function() {
    if (timeout) {
      clearTimeout(timeout);
      timeout = null;
    }
  };
  
  debounced.flush = function() {
    if (timeout) {
      result = func.apply(context, args);
      context = args = null;
      
      clearTimeout(timeout);
      timeout = null;
    }
  };

  return debounced;
};

// Adds compatibility for ES modules
debounce.debounce = debounce;

module.exports = debounce;


/***/ }),

/***/ "./node_modules/js-match-height/lib/index.js":
/*!***************************************************!*\
  !*** ./node_modules/js-match-height/lib/index.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";
var _createClass=function(){function a(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,'value'in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}();Object.defineProperty(exports, "__esModule", ({value:!0}));function _toConsumableArray(a){if(Array.isArray(a)){for(var b=0,c=Array(a.length);b<a.length;b++)c[b]=a[b];return c}return Array.from(a)}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError('Cannot call a class as a function')}var MatchHeight=exports.MatchHeight=function(){function a(b,c){var d=this;_classCallCheck(this,a),this.defaults={timeout:250},this.options=Object.assign(this.defaults,c),this.$els=document.querySelectorAll(b),this.$elsArray=Array.prototype.slice.call(this.$els),this.getAndSet(this.$elsArray),this.debounceHeight=this.debounce(function(){d.getAndSet(d.$elsArray)},this.options.timeout),window.addEventListener('resize',function(){d.debounceHeight()})}return _createClass(a,[{key:'getAndSet',value:function d(a){var b=Math.max;a.forEach(function(a){return a.removeAttribute('style')});var c=b.apply(Math,_toConsumableArray(a.map(function(a){return a.clientHeight})));a.forEach(function(a){Object.assign(a.style,{height:c+'px',verticalAlign:'top'})})}},{key:'debounce',value:function g(a,b,c){var d=this,e=arguments,f=void 0;return function(){var g=d,h=e,i=c&&!f;clearTimeout(f),f=setTimeout(function b(){f=null,c||a.apply(g,h)},b),i&&a.apply(g,h)}}}]),a}();

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_sliderPeople__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/sliderPeople */ "./src/js/modules/sliderPeople.js");
/* harmony import */ var _modules_sliderPeople__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_sliderPeople__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_sliderReviews__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/sliderReviews */ "./src/js/modules/sliderReviews.js");
/* harmony import */ var _modules_sliderThanks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/sliderThanks */ "./src/js/modules/sliderThanks.js");
/* harmony import */ var _modules_sliderThanks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modules_sliderThanks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _modules_sliderThumbs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/sliderThumbs */ "./src/js/modules/sliderThumbs.js");
/* harmony import */ var _modules_sliderThumbs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_modules_sliderThumbs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _modules_popup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/popup */ "./src/js/modules/popup.js");
/* harmony import */ var _modules_popup__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_modules_popup__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _modules_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/select */ "./src/js/modules/select.js");
/* harmony import */ var _modules_select__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_modules_select__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _modules_accordion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/accordion */ "./src/js/modules/accordion.js");
/* harmony import */ var _modules_accordion__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_modules_accordion__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _modules_gallery__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/gallery */ "./src/js/modules/gallery.js");
/* harmony import */ var _modules_gallery__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_modules_gallery__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _modules_burger__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/burger */ "./src/js/modules/burger.js");
/* harmony import */ var _modules_burger__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_modules_burger__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _modules_masks__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/masks */ "./src/js/modules/masks.js");
/* harmony import */ var _modules_masks__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_modules_masks__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _modules_rangepicker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/rangepicker */ "./src/js/modules/rangepicker.js");
/* harmony import */ var _modules_rangepicker__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_modules_rangepicker__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _modules_datepicker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modules/datepicker */ "./src/js/modules/datepicker.js");
/* harmony import */ var _modules_datepicker__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_modules_datepicker__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _modules_digits__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modules/digits */ "./src/js/modules/digits.js");
/* harmony import */ var _modules_digits__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_modules_digits__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _modules_scroll_up__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./modules/scroll-up */ "./src/js/modules/scroll-up.js");














$("#form-feedback").validate({
  lang: "ru"
});
}();
/******/ })()
;
//# sourceMappingURL=bundle.js.map