/* eslint-disable */
// CSS and SASS files
import "./index.scss";

// Polyfill
if (typeof Object.assign != "function") {
  Object.assign = function(target) {
    "use strict";
    if (target == null) {
      throw new TypeError("Cannot convert undefined or null to object");
    }
    target = Object(target);
    for (var index = 1; index < arguments.length; index++) {
      var source = arguments[index];
      if (source != null) {
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
    }
    return target;
  };
}
if (!Element.prototype.toggleAttribute) {
  Element.prototype.toggleAttribute = function(name, force) {
    if (force !== void 0) force = !!force;
    if (this.hasAttribute(name)) {
      if (force) return true;
      this.removeAttribute(name);
      return false;
    }
    if (force === false) return false;
    this.setAttribute(name, "");
    return true;
  };
}

var isIE = /MSIE|Trident\//.test(navigator.userAgent);
var isSafari = /version\/([\d\w\.\-]+) safari/i.test(navigator.userAgent);
var isSSBrowser = /SamsungBrowser/.test(navigator.userAgent);
var isSmartTV = /(?=.*?(smart\-tv))|(?=.*?(smarttv))/i.test(navigator.userAgent);
var refpolicy = document.querySelector("meta[name=referrer]");
var maxReloadPlayerError = 5;
var nextCount = 0;
var reloadCount = 0;

window.addEventListener('load', function() {
// Top App Bar
var topAppBarElement = document.querySelector(".mdc-top-app-bar");
var topAppBar = new mdc.topAppBar.MDCTopAppBar(topAppBarElement);

// Button & Icon Button
var buttonEls = document.querySelectorAll(".mdc-button");
for (var i = 0; i < buttonEls.length; i++) {
  new mdc.ripple.MDCRipple(buttonEls[i]);
}
var iconBtnEls = document.querySelectorAll(".mdc-icon-button");
for (var i = 0; i < iconBtnEls.length; i++) {
  new mdc.iconButton.MDCIconButtonToggle(iconBtnEls[i]);
}

// App Menu
var appmenu = new mdc.menu.MDCMenu(document.querySelector("#app-menu"));
appmenu.setAnchorCorner(mdc.menuSurface.MDCMenuSurfaceFoundation.Corner.BOTTOM_START);
var appmenubutton = document.querySelector("#app-menu-button");
appmenubutton && (appmenubutton.onclick = function(e) {
  e.preventDefault();
  appmenu.open = !appmenu.open;
});

// Fuzzy Search Definition
!function(o,f){"object"==typeof exports&&"object"==typeof module?module.exports=f():"function"==typeof define&&define.amd?define([],f):"object"==typeof exports?exports.FuzzySearch=f():o.FuzzySearch=f()}("undefined"!=typeof window?window:this,function(){return function(o){var f={};function c(t){if(f[t])return f[t].exports;var r=f[t]={i:t,l:!1,exports:{}};return o[t].call(r.exports,r,r.exports,c),r.l=!0,r.exports}return c.m=o,c.c=f,c.d=function(o,f,t){c.o(o,f)||Object.defineProperty(o,f,{enumerable:!0,get:t})},c.r=function(o){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(o,"__esModule",{value:!0})},c.t=function(o,f){if(1&f&&(o=c(o)),8&f)return o;if(4&f&&"object"==typeof o&&o&&o.__esModule)return o;var t=Object.create(null);if(c.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:o}),2&f&&"string"!=typeof o)for(var r in o)c.d(t,r,function(f){return o[f]}.bind(null,r));return t},c.n=function(o){var f=o&&o.__esModule?function(){return o.default}:function(){return o};return c.d(f,"a",f),f},c.o=function(o,f){return Object.prototype.hasOwnProperty.call(o,f)},c.p="/",c(c.s=0)}([function(o,f,c){o.exports=c(1)},function(o,f,c){"use strict";function t(o,f){for(var c=0;c<f.length;c++){var t=f[c];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(o,t.key,t)}}c.r(f);var r=function(){function o(){!function(o,f){if(!(o instanceof f))throw new TypeError("Cannot call a class as a function")}(this,o)}var f,c,r;return f=o,r=[{key:"getDescendantProperty",value:function(f,c){var t,r,y,s,b,k,u=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];if(c){if(-1===(y=c.indexOf("."))?t=c:(t=c.slice(0,y),r=c.slice(y+1)),null!=(s=f[t]))if(r||"string"!=typeof s&&"number"!=typeof s)if("[object Array]"===Object.prototype.toString.call(s))for(b=0,k=s.length;b<k;b++)o.getDescendantProperty(s[b],r,u);else r&&o.getDescendantProperty(s,r,u);else u.push(s)}else u.push(f);return u}}],(c=null)&&t(f.prototype,c),r&&t(f,r),o}();function y(o,f){for(var c=0;c<f.length;c++){var t=f[c];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(o,t.key,t)}}c.d(f,"default",function(){return s});var s=function(){function o(){var f=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};!function(o,f){if(!(o instanceof f))throw new TypeError("Cannot call a class as a function")}(this,o),Array.isArray(c)||(t=c,c=[]),this.haystack=f,this.keys=c,this.options=Object.assign({caseSensitive:!1,sort:!1},t)}var f,c,t;return f=o,t=[{key:"isMatch",value:function(o,f,c){c||(o=o.toLocaleLowerCase(),f=f.toLocaleLowerCase());for(var t=f.split(""),r=[],y=0,s=0;s<t.length;s++){var b=t[s];if(-1===(y=o.indexOf(b,y)))return!1;r.push(y),y++}return o===f?1:r.reduce(function(o,f){return o+f},2)}}],(c=[{key:"search",value:function(){var f=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";if(""===f)return this.haystack;for(var c=[],t=0;t<this.haystack.length;t++){var y=this.haystack[t];if(0===this.keys.length){var s=o.isMatch(y,f,this.options.caseSensitive);s&&c.push({item:y,score:s})}else for(var b=0;b<this.keys.length;b++){for(var k=r.getDescendantProperty(y,this.keys[b]),u=!1,j=0;j<k.length;j++){var w=o.isMatch(k[j],f,this.options.caseSensitive);if(w){u=!0,c.push({item:y,score:w});break}}if(u)break}}return this.options.sort&&c.sort(function(o,f){return o.score-f.score}),c.map(function(o){return o.item})}}])&&y(f.prototype,c),t&&y(f,t),o}()}]).default});

var fetchSearch = function (cb) {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (this.readyState === 4) {
      if (this.status !== 200) return cb("Network error or cannot get search resource");
      try {
        var slist = JSON.parse(this.responseText);
      } catch (e) {
        return cb("Error while parsing search resource");
      }
      cb(null,slist);
    }
  };
  xhr.open("GET", "/search.json");
  xhr.send();
}
var initSearch = function() {
  var searcher;
  fetchSearch(function(err, source) {
    if(err) console.err(err);
    searcher = new FuzzySearch(source || [], ['title', 'description', 'category', 'socialtags', 'url'], {
      caseSensitive: false,
      sort: true,
    });
  })
  
  if (!document.querySelector("body main #search-result")) document.querySelector("body main").insertAdjacentHTML('beforeend', '<div id="search-result" hide><div role="progressbar" class="mdc-linear-progress mdc-linear-progress--indeterminate" hide><div class="mdc-linear-progress__bar mdc-linear-progress__primary-bar"><span class="mdc-linear-progress__bar-inner"></span></div><div class="mdc-linear-progress__bar mdc-linear-progress__secondary-bar"><span class="mdc-linear-progress__bar-inner"></span></div></div><div class="mdc-layout-grid"> <div class="mdc-layout-grid__inner"> <div class="video-list mdc-layout-grid__cell mdc-layout-grid__cell--span-8 mdc-layout-grid__cell--span-8-tablet mdc-layout-grid__cell--span-4-phone"> <div class="mdc-layout-grid__inner"> </div> </div> <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-4"> </div> </div> </div> </div>');

  var progress = document.querySelector('#search-result .mdc-linear-progress');
  new mdc.linearProgress.MDCLinearProgress(progress);
  
  var typingTimer;
  var doneTypingInterval = 700;
  document.querySelector("input#top-level-search-input").addEventListener('keyup', function (e) {
    e.preventDefault();
    clearTimeout(typingTimer);
    progress.removeAttribute("hide");
    if (e.target.value === "") progress.setAttribute("hide", "");
    var listVideoContainer = document.querySelector("#search-result .video-list .mdc-layout-grid__inner");
    while (listVideoContainer.firstChild) {
      listVideoContainer.removeChild(listVideoContainer.firstChild);
    }
    if (e.target.value) {
      typingTimer = setTimeout(function(){
        var res = searcher && searcher.search(e.target.value);
        progress.setAttribute("hide", "");
        if (res.length == 0) {
          listVideoContainer.insertAdjacentHTML('beforeend', '<div class="video-item mdc-layout-grid__cell mdc-layout-grid__cell--span-12 mdc-layout-grid__cell--span-8-tablet mdc-layout-grid__cell--span-4-phone">No results found</div>');
        }
        for (var i=0; i<res.length && i<=9; i++) {
          listVideoContainer.insertAdjacentHTML('beforeend', '<div class="video-item mdc-layout-grid__cell mdc-layout-grid__cell--span-12 mdc-layout-grid__cell--span-8-tablet mdc-layout-grid__cell--span-4-phone"> <a href="'+ res[i].url +'" class="video-thumbnail"> <img class="thumbnail-image" alt="'+ res[i].title +'" src="'+ res[i].thumbnail +'">' + (res[i].type=='livestream'?'<svg role="img" aria-labelledby="play-icon" viewBox="0 0 24 24"><title id="play-icon">Play</title><path d="M8 5v14l11-7z"></path> </svg>':'') + '</a> <a href="'+ res[i].url +'" class="video-metadata"> <h3 class="video-title">'+ res[i].title +'</h3> <div class="video-category"> <span>'+ res[i].category +'</span> <svg class="tick-icon" role="img" aria-labelledby="tick-icon" viewBox="0 0 24 24"> <title id="tick-icon">Verified</title> <path d="M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10 S17.52,2,12,2z M9.92,17.93l-4.95-4.95l2.05-2.05l2.9,2.9l7.35-7.35l2.05,2.05L9.92,17.93z"></path> </svg> <span>'+new Date(res[i].date).toDateString()+'</span> </div><div class="video-desc"> <span>'+ res[i].description +'</span> </div> ' + (res[i].type=='livestream'?'<div class="video-live-now"> <span>Live Now</span> </div>':'') + ' </a> </div>');
        }
      }, doneTypingInterval);
    }
  });
};

// Search Button

var searchBtns = document.querySelectorAll("button.search-form__button");
function toggleSearch(e) {
  e.preventDefault();
  if (!document.querySelector("body main #search-result")) initSearch();
  var searchResultDiv = document.querySelector("body main #search-result");
  var mainContent = document.querySelector("body main #main-content");
  var searchBar = document.querySelector("div#top-level-search-bar");
  if (!searchBar.classList.contains("search-form--open")) {
    document.querySelector("input#top-level-search-input").focus();
    searchBar.classList.add("search-form--open");
    mainContent.setAttribute("hide", "");
    searchResultDiv.removeAttribute("hide");
  } else {
    searchBar.classList.remove("search-form--open");
    searchResultDiv.setAttribute("hide", "");
    mainContent.removeAttribute("hide");
  }
}
for (var i = 0; i < searchBtns.length; i++) {
  searchBtns[i].onclick = toggleSearch;
}

// Thumbnails preview
var videoitems = document.querySelectorAll(".video-item");
for (var i = 0; i < videoitems.length; i++) {
  if (videoitems[i].querySelector(".video-thumbnail").dataset.previewsrc && !isSafari && !isIE) {
    videoitems[i].onmouseleave = function(e) {
      e.preventDefault();
      e.currentTarget.querySelector("img.thumbnail-image").src = e.currentTarget.querySelector(".video-thumbnail").dataset.originsrc;
    };
    videoitems[i].onmouseenter = function(e) {
      e.preventDefault();
      e.currentTarget.querySelector("img.thumbnail-image").src = e.currentTarget.querySelector(".video-thumbnail").dataset.previewsrc;
    };
  }
}

// Toggle Collapsed content
function toggleCollapsed(e) {
  e.currentTarget.parentNode.toggleAttribute("collapsed");
  e.currentTarget.innerHTML = e.currentTarget.parentNode.hasAttribute("collapsed") ? "Show more" : "Show Less";
}
var btnExpanderToggle = document.querySelectorAll(".expander-toggle");
for (var i = 0; i < btnExpanderToggle.length; i++) {
  btnExpanderToggle[i].onclick = toggleCollapsed;
}

}, true);

