(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[27],{

/***/ "bW7z":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "49f2daeab0f607d4c4b2b2a7c7ae20d4.jpg";

/***/ }),

/***/ "mHF6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("q1tI");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/Container.js
var Container = __webpack_require__("7vrA");

// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/Row.js
var Row = __webpack_require__("3Z9Z");

// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/Col.js
var Col = __webpack_require__("JI6e");

// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/Jumbotron.js
var Jumbotron = __webpack_require__("xXt2");

// CONCATENATED MODULE: ./src/jsx/components/common/CoverLetter.jsx


var CoverLetter_CoverLetter = function CoverLetter() {
  return react_default.a.createElement("div", {
    className: "coverletter"
  }, react_default.a.createElement("h1", null, "~$ whoami", react_default.a.createElement("span", {
    className: "cursor"
  }, "\u258D")), react_default.a.createElement("strong", null, "TLDR; "), react_default.a.createElement("span", null, "Veteran Air Force Electrician retrained to provide you websites and web applications."), react_default.a.createElement("p", null, "Nice to make your acquaintance! I am a former aircraft environmental and electrical tehcnicain for the Air Force who used the GI Bill to gain a B.Sc. in Computer Science. During my undergraduate studies I performed research under network science study grants aimed at creating Android applications optimized for delay laden networks. After my graduation from York College in 2016, I worked as an embedded software engineer on RTOS such as INTEGRITY and VxWorks. Afterwards I found enjoyment and passion in creating UI using React.Js and web servers with NodeJs. Wow, so early into my career but I have used so many different technologies! Currently, I am continuing down the road of web development and engineering so as to become a strong full-stack software engineer."));
};

/* harmony default export */ var common_CoverLetter = (CoverLetter_CoverLetter);
// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/Image.js
var Image = __webpack_require__("2mvg");

// EXTERNAL MODULE: ./src/static/headshot.jpg
var headshot = __webpack_require__("bW7z");
var headshot_default = /*#__PURE__*/__webpack_require__.n(headshot);

// CONCATENATED MODULE: ./src/jsx/components/common/Headshot.jsx




var Headshot_Headshot = function Headshot() {
  var handleClick = function handleClick() {
    navigator.clipboard.writeText('arban.nichs@gmail.com').then(function () {
      console.log('Email copied to clipboard');
    })["catch"](function () {
      console.log('Failed to copy email.');
    });
  };

  return react_default.a.createElement("div", {
    className: "headshot"
  }, react_default.a.createElement(Image["a" /* default */], {
    src: headshot_default.a,
    roundedCircle: true
  }), react_default.a.createElement("p", null, "arban.nichs@gmail.com", react_default.a.createElement("ion-icon", {
    name: "copy",
    onClick: handleClick
  })), react_default.a.createElement("div", {
    className: "links"
  }, react_default.a.createElement("a", {
    href: "https://linkedin.com/in/arban-nichols",
    target: "_blank"
  }, react_default.a.createElement("ion-icon", {
    name: "logo-linkedin"
  })), react_default.a.createElement("a", {
    href: "https://github.com/ArbanNichols",
    target: "_blank"
  }, react_default.a.createElement("ion-icon", {
    name: "logo-github"
  }))));
};

/* harmony default export */ var common_Headshot = (Headshot_Headshot);
// CONCATENATED MODULE: ./src/jsx/layout/Intro.jsx





var Intro_Intro = function Intro() {
  return react_default.a.createElement(Container["a" /* default */], null, react_default.a.createElement(Row["a" /* default */], null, react_default.a.createElement(Col["a" /* default */], null, react_default.a.createElement(Jumbotron["a" /* default */], {
    className: "jumbo-cv"
  }, react_default.a.createElement(Row["a" /* default */], null, react_default.a.createElement(Col["a" /* default */], {
    xs: 12,
    sm: 12,
    md: 4,
    lg: 3
  }, react_default.a.createElement(common_Headshot, null)), react_default.a.createElement(Col["a" /* default */], {
    xs: 12,
    sm: 12,
    md: 8,
    lg: 8
  }, react_default.a.createElement(common_CoverLetter, null)))))));
};

/* harmony default export */ var layout_Intro = __webpack_exports__["default"] = (Intro_Intro);

/***/ })

}]);
//# sourceMappingURL=27.f92ec3d99.js.map