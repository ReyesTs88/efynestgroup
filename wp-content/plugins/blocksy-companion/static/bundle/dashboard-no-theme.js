!function(){var e={184:function(e,t){var r;
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var a=typeof r;if("string"===a||"number"===a)e.push(r);else if(Array.isArray(r)&&r.length){var c=o.apply(null,r);c&&e.push(c)}else if("object"===a)for(var i in r)n.call(r,i)&&r[i]&&e.push(i)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var a=t[n]={exports:{}};return e[n](a,a.exports,r),a.exports}r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,{a:t}),t},r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){"use strict";var e=window.wp.element,t=window.wp.i18n;function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a,c,i=[],l=!0,s=!1;try{if(a=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;l=!1}else for(;!(l=(n=a.call(r)).done)&&(i.push(n.value),i.length!==t);l=!0);}catch(e){s=!0,o=e}finally{try{if(!l&&null!=r.return&&(c=r.return(),Object(c)!==c))return}finally{if(s)throw o}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return n(e,t);var r={}.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function c(e){var t=function(e,t){if("object"!=a(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=a(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==a(t)?t:t+""}function i(e,t,r){return(t=c(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var s=function(e,t){var r={};return t.success&&(r.success=t.success,delete t.success),t.error&&(r.error=t.error,delete t.error),r.data=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},t),r.data=_.extend(t,{action:e,_ajax_nonce:ctDashboardLocalizations.updatesNonce}),wp.ajax.send(r)},u=function(){var r=o((0,e.useState)(!1),2),n=r[0],a=r[1],c=function(){ctDashboardLocalizations.activate&&(ctDashboardLocalizations.activate_multi_site?fetch(ctDashboardLocalizations.activate_multi_site).then((function(e){location=ctDashboardLocalizations.activate})):location=ctDashboardLocalizations.activate)};return(0,e.createElement)("div",{className:"ct-theme-required"},(0,e.createElement)("h2",null,(0,e.createElement)("span",null,(0,e.createElement)("svg",{viewBox:"0 0 24 24"},(0,e.createElement)("path",{d:"M12,23.6c-1.4,0-2.6-1-2.8-2.3L8.9,20h6.2l-0.3,1.3C14.6,22.6,13.4,23.6,12,23.6z M24,17.8H0l3.1-2c0.5-0.3,0.9-0.7,1.1-1.3c0.5-1,0.5-2.2,0.5-3.2V7.6c0-4.1,3.2-7.3,7.3-7.3s7.3,3.2,7.3,7.3v3.6c0,1.1,0.1,2.3,0.5,3.2c0.3,0.5,0.6,1,1.1,1.3L24,17.8zM6.1,15.6h11.8c0,0-0.1-0.1-0.1-0.2c-0.7-1.3-0.7-2.9-0.7-4.2V7.6c0-2.8-2.2-5.1-5.1-5.1c-2.8,0-5.1,2.2-5.1,5.1v3.6c0,1.3-0.1,2.9-0.7,4.2C6.1,15.5,6.1,15.6,6.1,15.6z"}))),(0,t.__)("Action Required - Install Blocksy Theme","blocksy-companion")),(0,e.createElement)("p",null,(0,t.__)("Blocksy Companion is the complementary plugin to Blocksy theme. It adds a bunch of great features to the theme and acts as an unlocker for the Blocksy Pro package.","blocksy-companion")),(0,e.createElement)("p",null,(0,t.__)("In order to take full advantage of all features it has to offer - please install and activate the Blocksy theme also.","blocksy-companion")),ctDashboardLocalizations.activate&&(0,e.createElement)("button",{className:"button button-primary",onClick:function(e){e.preventDefault(),a(!0),ctDashboardLocalizations.themeIsInstalled?c():s("install-theme",{success:function(){setTimeout((function(){c()}))},error:function(){setTimeout((function(){c()}))},slug:"blocksy"})}},n?(0,t.__)("Loading...","blocksy-companion"):(0,t.__)("Install and activate the Blocksy theme","blocksy-companion")))},f=(window.jQuery,r(184)),p=r.n(f);function m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var d=function(r){var n=r.className,a=r.mismatched_version_descriptor,c=void 0===a?{}:a;c=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?m(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({productName:"Blocksy theme",slug:"blocksy"},c);var l=o((0,e.useState)(!1),2),u=l[0],f=l[1];return(0,e.createElement)("div",{className:p()("ct-theme-required",n)},(0,e.createElement)("h2",null,(0,e.createElement)("span",null,(0,e.createElement)("svg",{viewBox:"0 0 24 24"},(0,e.createElement)("path",{d:"M12,23.6c-1.4,0-2.6-1-2.8-2.3L8.9,20h6.2l-0.3,1.3C14.6,22.6,13.4,23.6,12,23.6z M24,17.8H0l3.1-2c0.5-0.3,0.9-0.7,1.1-1.3c0.5-1,0.5-2.2,0.5-3.2V7.6c0-4.1,3.2-7.3,7.3-7.3s7.3,3.2,7.3,7.3v3.6c0,1.1,0.1,2.3,0.5,3.2c0.3,0.5,0.6,1,1.1,1.3L24,17.8zM6.1,15.6h11.8c0,0-0.1-0.1-0.1-0.2c-0.7-1.3-0.7-2.9-0.7-4.2V7.6c0-2.8-2.2-5.1-5.1-5.1c-2.8,0-5.1,2.2-5.1,5.1v3.6c0,1.3-0.1,2.9-0.7,4.2C6.1,15.5,6.1,15.6,6.1,15.6z"}))),(0,t.sprintf)((0,t.__)("Action required - please update %s to the latest version!","blocksy-companion"),c.productName)),(0,e.createElement)("p",{dangerouslySetInnerHTML:{__html:(0,t.sprintf)((0,t.__)("We detected that you are using an outdated version of %s.","blocksy-companion"),c.productName)}}),(0,e.createElement)("p",{dangerouslySetInnerHTML:i({__html:(0,t.__)("In order to take full advantage of all features the core has to offer - please install and activate the latest version of Blocksy theme.","blocksy-companion")},"__html",(0,t.sprintf)((0,t.__)("In order to take full advantage of all features the core has to offer - please install and activate the latest version of %s.","blocksy-companion"),c.productName))}),(0,e.createElement)("button",{className:"button button-primary",onClick:function(e){e.preventDefault(),f(!0);var t={success:function(){setTimeout((function(){location.reload()}),1e3)},error:function(){setTimeout((function(){location.reload()}),1e3)}};"blocksy"===c.slug?t.slug="blocksy":(t.plugin=c.slug,t.slug=c.slug.split("/")[0]),s("blocksy"===c.slug?"update-theme":"update-plugin",t)}},u?(0,t.__)("Loading...","blocksy-companion"):(0,t.sprintf)((0,t.__)("Update %s Now","blocksy-companion"),c.productName.split(" ").map((function(e){return e.charAt(0).toUpperCase()+e.slice(1)})).join(" "))))},y=function(){return ctDashboardLocalizations.theme_version_mismatch?(0,e.createElement)(d,{mismatched_version_descriptor:ctDashboardLocalizations.theme_version_mismatch}):(0,e.createElement)(u,null)};document.addEventListener("DOMContentLoaded",(function(){document.getElementById("ct-dashboard")&&(0,e.render)((0,e.createElement)(y,null),document.getElementById("ct-dashboard"))}))}()}();