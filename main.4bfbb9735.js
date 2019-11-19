/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		29: 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + ({}[chunkId]||chunkId) + "." + "4bfbb9735" + ".js"
/******/ 	}
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,0,1,5,4,2,3,18,15,11,23,19,17,21,22,24,7,8,9,10,12,13,14,16,20,25,30,41,48,43,37,38,39,31,32,33,34,35,36,40,44,42,45,46,47,49,6]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("WdVA");
__webpack_require__("55Il");
module.exports = __webpack_require__("7RL8");


/***/ }),

/***/ "6vm3":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "7RL8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("q1tI");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__("i8i4");
var react_dom_default = /*#__PURE__*/__webpack_require__.n(react_dom);

// EXTERNAL MODULE: ./node_modules/react-router-dom/esm/react-router-dom.js
var react_router_dom = __webpack_require__("55Ip");

// EXTERNAL MODULE: ./node_modules/react-router/esm/react-router.js
var react_router = __webpack_require__("Ty5D");

// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/Modal.js + 9 modules
var Modal = __webpack_require__("zM5D");

// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/Navbar.js + 3 modules
var Navbar = __webpack_require__("6ctO");

// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/Nav.js + 6 modules
var Nav = __webpack_require__("+YzT");

// EXTERNAL MODULE: ./node_modules/react-router-bootstrap/lib/index.js
var lib = __webpack_require__("+Tvs");

// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/Button.js
var Button = __webpack_require__("cWnB");

// CONCATENATED MODULE: ./src/jsx/components/common/ContactForm.jsx



var ContactForm_ContactForm = function ContactForm() {
  return react_default.a.createElement(react_default.a.Fragment, null, react_default.a.createElement(Modal["a" /* default */].Header, null, react_default.a.createElement(Modal["a" /* default */].Title, null, "Contact Form")), react_default.a.createElement(Modal["a" /* default */].Body, null, "WIP"), react_default.a.createElement(Modal["a" /* default */].Footer, null, react_default.a.createElement(Button["a" /* default */], {
    variant: "dark"
  }, "Send")));
};

/* harmony default export */ var common_ContactForm = (ContactForm_ContactForm);
// EXTERNAL MODULE: ./node_modules/react-transition-group/esm/TransitionGroup.js + 1 modules
var TransitionGroup = __webpack_require__("VeD8");

// EXTERNAL MODULE: ./node_modules/react-transition-group/esm/CSSTransition.js + 3 modules
var CSSTransition = __webpack_require__("pQ8y");

// CONCATENATED MODULE: ./src/js/hooks.js

function useInterval(callback, delay) {
  var savedCallback = Object(react["useRef"])(); // Remember the latest callback.

  Object(react["useEffect"])(function () {
    savedCallback.current = callback;
  }, [callback]); // Set up the interval.

  Object(react["useEffect"])(function () {
    function tick() {
      savedCallback.current();
    }

    if (delay !== null) {
      var id = setInterval(tick, delay);
      return function () {
        return clearInterval(id);
      };
    }
  }, [delay]);
}
// CONCATENATED MODULE: ./src/jsx/components/common/WordCarousel.jsx
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






var WordCarousel_WordCarousel = function WordCarousel(props) {
  var words = props.words;
  var l = words.length;

  var _useState = Object(react["useState"])(0),
      _useState2 = _slicedToArray(_useState, 2),
      index = _useState2[0],
      cycleWord = _useState2[1];

  useInterval(function () {
    cycleWord(index = Math.floor(Math.random() * l));
  }, 3000);
  return react_default.a.createElement(react_default.a.Fragment, null, react_default.a.createElement(TransitionGroup["a" /* default */], null, react_default.a.createElement(CSSTransition["a" /* default */], {
    key: words[index],
    classNames: "carousel",
    timeout: {
      enter: 500,
      exit: 0.5
    }
  }, react_default.a.createElement("span", null, words[index]))));
};

/* harmony default export */ var common_WordCarousel = (WordCarousel_WordCarousel);
// CONCATENATED MODULE: ./src/js/data.js
// Static data
var tools = ['react v16.8.3', 'react-bootstrap v1.0.0-beta.5', 'react-router-dom v4.3.1', 'webpack v4.29.6', 'babel/core v7.3.4', 'react-transition-group v4.0.0', 'react-hooks', 'sass', 'npm', 'nodejs', 'ecmascript 2016'];
// CONCATENATED MODULE: ./src/jsx/layout/Header.jsx
function Header_slicedToArray(arr, i) { return Header_arrayWithHoles(arr) || Header_iterableToArrayLimit(arr, i) || Header_nonIterableRest(); }

function Header_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function Header_iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function Header_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







 // static data;

var Header_Header = function Header() {
  var _useState = Object(react["useState"])(false),
      _useState2 = Header_slicedToArray(_useState, 2),
      show = _useState2[0],
      setShow = _useState2[1];

  var toggle = function toggle() {
    setShow(!show);
  };

  return react_default.a.createElement(react_default.a.Fragment, null, react_default.a.createElement(Modal["a" /* default */], {
    show: show,
    onHide: toggle
  }, react_default.a.createElement(common_ContactForm, null)), react_default.a.createElement(Navbar["a" /* default */], {
    bg: "dark",
    expand: "lg",
    variant: "dark",
    fixed: "top"
  }, react_default.a.createElement(lib["LinkContainer"], {
    to: "/",
    exact: true
  }, react_default.a.createElement(Navbar["a" /* default */].Brand, null, 'Arban Nichols ')), react_default.a.createElement(Navbar["a" /* default */].Toggle, {
    "aria-controls": "responsive-navbar-nav"
  }), react_default.a.createElement(Navbar["a" /* default */].Collapse, null, react_default.a.createElement(Nav["a" /* default */], {
    className: "mr-auto"
  }, react_default.a.createElement(lib["LinkContainer"], {
    to: "/",
    exact: true
  }, react_default.a.createElement(Nav["a" /* default */].Link, null, "Home")), react_default.a.createElement(lib["LinkContainer"], {
    to: "/resume",
    exact: true
  }, react_default.a.createElement(Nav["a" /* default */].Link, null, "Resume"))), react_default.a.createElement(Nav["a" /* default */], {
    className: "ml-auto"
  }, react_default.a.createElement(Nav["a" /* default */].Link, {
    href: "https://github.com/ArbanNichols/react-resume"
  }, react_default.a.createElement(common_WordCarousel, {
    words: tools
  }))))));
};

/* harmony default export */ var layout_Header = (Header_Header);
// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/Card.js
var Card = __webpack_require__("6xyR");

// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/CardImg.js
var CardImg = __webpack_require__("WjzP");

// EXTERNAL MODULE: ./src/static/android-chrome-512x512.png
var android_chrome_512x512 = __webpack_require__("Mw4h");
var android_chrome_512x512_default = /*#__PURE__*/__webpack_require__.n(android_chrome_512x512);

// CONCATENATED MODULE: ./src/jsx/components/common/Loading.jsx




function Loading() {
  return react_default.a.createElement(react_default.a.Fragment, null, react_default.a.createElement(Card["a" /* default */], null, react_default.a.createElement(CardImg["a" /* default */], {
    variant: "top",
    src: android_chrome_512x512_default.a
  })));
}

/* harmony default export */ var common_Loading = (Loading);
// EXTERNAL MODULE: ./src/scss/base.scss
var base = __webpack_require__("6vm3");

// CONCATENATED MODULE: ./src/jsx/App.jsx




var Intro = Object(react["lazy"])(function () {
  return Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(26)]).then(__webpack_require__.bind(null, "mHF6"));
});
var Resume = Object(react["lazy"])(function () {
  return Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(27)]).then(__webpack_require__.bind(null, "o/CI"));
});


var App_App = function App() {
  return react_default.a.createElement(react_router_dom["HashRouter"], null, react_default.a.createElement(react["Suspense"], {
    fallback: react_default.a.createElement(common_Loading, null)
  }, react_default.a.createElement(layout_Header, null), react_default.a.createElement(react_router["g" /* Switch */], null, react_default.a.createElement(react_router["d" /* Route */], {
    exact: true,
    path: "/",
    component: Intro
  }), react_default.a.createElement(react_router["d" /* Route */], {
    path: "/resume",
    component: Resume
  }))));
};

/* harmony default export */ var jsx_App = (App_App);
// EXTERNAL MODULE: ./src/jsx/components/common/context.jsx
var context = __webpack_require__("IUOw");

// CONCATENATED MODULE: ./src/index.jsx




react_dom_default.a.render(react_default.a.createElement(context["b" /* Provider */], null, react_default.a.createElement(jsx_App, null)), document.getElementById('root'));

/***/ }),

/***/ "Mw4h":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "4d5815fdc9b1be4ca2be26fe80b74886.png";

/***/ })

/******/ });
//# sourceMappingURL=main.4bfbb9735.js.map