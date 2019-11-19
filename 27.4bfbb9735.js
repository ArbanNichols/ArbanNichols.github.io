(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[27],{

/***/ "o/CI":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("q1tI");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./src/jsx/components/common/context.jsx
var context = __webpack_require__("IUOw");

// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/Container.js
var Container = __webpack_require__("7vrA");

// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/Row.js
var Row = __webpack_require__("3Z9Z");

// CONCATENATED MODULE: ./src/js/utils.js
// function to generate unique ids
function uuid(a) {
  return a ? (a ^ Math.random() * 16 >> a / 4).toString(16) : ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, uuid);
}
// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/Collapse.js
var Collapse = __webpack_require__("vYJ8");

// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/Col.js
var Col = __webpack_require__("JI6e");

// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/Jumbotron.js
var Jumbotron = __webpack_require__("xXt2");

// CONCATENATED MODULE: ./src/jsx/components/common/Experience.jsx
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






var Experience_Experience = function Experience(_ref) {
  var experience = _ref.experience,
      props = _objectWithoutProperties(_ref, ["experience"]);

  var tasks = experience.tasks,
      location = experience.location,
      dates = experience.dates,
      company = experience.company,
      title = experience.title,
      project = experience.project,
      highlights = experience.highlights,
      description = experience.description;

  var _useState = Object(react["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      open = _useState2[0],
      setOpen = _useState2[1];

  return react_default.a.createElement(Col["a" /* default */], {
    md: {
      span: 10,
      offset: 1
    }
  }, react_default.a.createElement(Jumbotron["a" /* default */], {
    className: "jumbo-resume"
  }, react_default.a.createElement("h4", null, company), react_default.a.createElement("strong", null, title), react_default.a.createElement("div", null, react_default.a.createElement("ion-icon", {
    name: "pin"
  }), ' ', location, react_default.a.createElement("em", {
    className: "dates"
  }, dates)), react_default.a.createElement("hr", null), react_default.a.createElement("ion-icon", {
    name: "sunny"
  }), react_default.a.createElement("h6", null, "Daily Tasks"), react_default.a.createElement("ul", null, tasks.map(function (task) {
    return react_default.a.createElement("li", {
      key: uuid()
    }, task);
  })), react_default.a.createElement("div", {
    className: "project-highlight"
  }, react_default.a.createElement("ion-icon", {
    name: "git-branch"
  }), react_default.a.createElement("h6", null, react_default.a.createElement("b", null, "Project Highlight - ")), react_default.a.createElement("span", {
    className: "project-name"
  }, project), react_default.a.createElement("p", {
    className: "description"
  }, react_default.a.createElement("em", null, description), react_default.a.createElement("span", {
    className: "dropdown-arrow",
    "aria-controls": "project-details",
    onClick: function onClick() {
      return setOpen(!open);
    }
  }, "\u25BC")), react_default.a.createElement(Collapse["a" /* default */], {
    "in": open
  }, react_default.a.createElement("div", {
    id: "project-details"
  }, react_default.a.createElement("ul", null, highlights.map(function (highlight) {
    return react_default.a.createElement("li", {
      key: uuid()
    }, highlight);
  })))))));
};

/* harmony default export */ var common_Experience = (Experience_Experience);
// CONCATENATED MODULE: ./src/jsx/layout/Resume.jsx






var Resume_Resume = function Resume(props) {
  return react_default.a.createElement(context["a" /* Consumer */], null, function (value) {
    var experiences = value.experiences;
    return react_default.a.createElement(Container["a" /* default */], null, react_default.a.createElement(Row["a" /* default */], null, experiences.map(function (experience) {
      return react_default.a.createElement(common_Experience, {
        key: uuid(),
        experience: experience
      });
    })));
  });
};

/* harmony default export */ var layout_Resume = __webpack_exports__["default"] = (Resume_Resume);

/***/ })

}]);
//# sourceMappingURL=27.4bfbb9735.js.map