(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[48],{

/***/ "9R94":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var isProduction = "production" === 'production';
var prefix = 'Invariant failed';
function invariant(condition, message) {
  if (condition) {
    return;
  }

  if (isProduction) {
    throw new Error(prefix);
  } else {
    throw new Error(prefix + ": " + (message || ''));
  }
}

/* harmony default export */ __webpack_exports__["a"] = (invariant);


/***/ })

}]);
//# sourceMappingURL=npm.tiny-invariant.7a8e9d6f2.js.map