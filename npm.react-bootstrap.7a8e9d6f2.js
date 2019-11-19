(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "+YzT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__("wx14");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__("zLVn");

// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__("TSYQ");
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// EXTERNAL MODULE: ./node_modules/prop-types-extra/lib/all.js
var lib_all = __webpack_require__("K9S6");

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("q1tI");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/uncontrollable/esm/index.js + 3 modules
var esm = __webpack_require__("JCAc");

// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/ThemeProvider.js
var ThemeProvider = __webpack_require__("vUet");

// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/NavbarContext.js
var NavbarContext = __webpack_require__("qUpC");

// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/CardContext.js
var CardContext = __webpack_require__("Wzyw");

// EXTERNAL MODULE: ./node_modules/dom-helpers/esm/querySelectorAll.js
var querySelectorAll = __webpack_require__("Zeqi");

// EXTERNAL MODULE: ./node_modules/@restart/hooks/esm/useForceUpdate.js
var useForceUpdate = __webpack_require__("YGJp");

// EXTERNAL MODULE: ./node_modules/@restart/hooks/esm/useMergedRefs.js
var useMergedRefs = __webpack_require__("lcWJ");

// CONCATENATED MODULE: ./node_modules/react-bootstrap/esm/NavContext.js

var NavContext = react_default.a.createContext(null);
/* harmony default export */ var esm_NavContext = (NavContext);
// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/SelectableContext.js
var SelectableContext = __webpack_require__("ILyh");

// CONCATENATED MODULE: ./node_modules/react-bootstrap/esm/TabContext.js

var TabContext = react_default.a.createContext(null);
/* harmony default export */ var esm_TabContext = (TabContext);
// CONCATENATED MODULE: ./node_modules/react-bootstrap/esm/AbstractNav.js










var noop = function noop() {};

var AbstractNav = react_default.a.forwardRef(function (_ref, ref) {
  var _ref$as = _ref.as,
      Component = _ref$as === void 0 ? 'ul' : _ref$as,
      onSelect = _ref.onSelect,
      activeKey = _ref.activeKey,
      role = _ref.role,
      onKeyDown = _ref.onKeyDown,
      props = Object(objectWithoutPropertiesLoose["a" /* default */])(_ref, ["as", "onSelect", "activeKey", "role", "onKeyDown"]);

  // A ref and forceUpdate for refocus, b/c we only want to trigger when needed
  // and don't want to reset the set in the effect
  var forceUpdate = Object(useForceUpdate["a" /* default */])();
  var needsRefocusRef = Object(react["useRef"])(false);
  var parentOnSelect = Object(react["useContext"])(SelectableContext["a" /* default */]);
  var tabContext = Object(react["useContext"])(esm_TabContext);
  var getControlledId, getControllerId;

  if (tabContext) {
    role = role || 'tablist';
    activeKey = tabContext.activeKey;
    getControlledId = tabContext.getControlledId;
    getControllerId = tabContext.getControllerId;
  }

  var listNode = Object(react["useRef"])(null);

  var getNextActiveChild = function getNextActiveChild(offset) {
    if (!listNode.current) return null;
    var items = Object(querySelectorAll["a" /* default */])(listNode.current, '[data-rb-event-key]:not(.disabled)');
    var activeChild = listNode.current.querySelector('.active');
    var index = items.indexOf(activeChild);
    if (index === -1) return null;
    var nextIndex = index + offset;
    if (nextIndex >= items.length) nextIndex = 0;
    if (nextIndex < 0) nextIndex = items.length - 1;
    return items[nextIndex];
  };

  var handleSelect = function handleSelect(key, event) {
    if (key == null) return;
    if (onSelect) onSelect(key, event);
    if (parentOnSelect) parentOnSelect(key, event);
  };

  var handleKeyDown = function handleKeyDown(event) {
    if (onKeyDown) onKeyDown(event);
    var nextActiveChild;

    switch (event.key) {
      case 'ArrowLeft':
      case 'ArrowUp':
        nextActiveChild = getNextActiveChild(-1);
        break;

      case 'ArrowRight':
      case 'ArrowDown':
        nextActiveChild = getNextActiveChild(1);
        break;

      default:
        return;
    }

    if (!nextActiveChild) return;
    event.preventDefault();
    handleSelect(nextActiveChild.dataset.rbEventKey, event);
    needsRefocusRef.current = true;
    forceUpdate();
  };

  Object(react["useEffect"])(function () {
    if (listNode.current && needsRefocusRef.current) {
      var activeChild = listNode.current.querySelector('[data-rb-event-key].active');
      if (activeChild) activeChild.focus();
    }

    needsRefocusRef.current = false;
  });
  var mergedRef = Object(useMergedRefs["a" /* default */])(ref, listNode);
  return react_default.a.createElement(SelectableContext["a" /* default */].Provider, {
    value: handleSelect
  }, react_default.a.createElement(esm_NavContext.Provider, {
    value: {
      role: role,
      // used by NavLink to determine it's role
      activeKey: Object(SelectableContext["b" /* makeEventKey */])(activeKey),
      getControlledId: getControlledId || noop,
      getControllerId: getControllerId || noop
    }
  }, react_default.a.createElement(Component, Object(esm_extends["a" /* default */])({}, props, {
    onKeyDown: handleKeyDown,
    ref: mergedRef,
    role: role
  }))));
});
/* harmony default export */ var esm_AbstractNav = (AbstractNav);
// CONCATENATED MODULE: ./node_modules/react-bootstrap/esm/NavItem.js





var NavItem = react_default.a.forwardRef( // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      className = _ref.className,
      children = _ref.children,
      _ref$as = _ref.as,
      Component = _ref$as === void 0 ? 'div' : _ref$as,
      props = Object(objectWithoutPropertiesLoose["a" /* default */])(_ref, ["bsPrefix", "className", "children", "as"]);

  bsPrefix = Object(ThemeProvider["b" /* useBootstrapPrefix */])(bsPrefix, 'nav-item');
  return react_default.a.createElement(Component, Object(esm_extends["a" /* default */])({}, props, {
    ref: ref,
    className: classnames_default()(className, bsPrefix)
  }), children);
});
NavItem.displayName = 'NavItem';
/* harmony default export */ var esm_NavItem = (NavItem);
// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/SafeAnchor.js
var SafeAnchor = __webpack_require__("dbZe");

// EXTERNAL MODULE: ./node_modules/@restart/hooks/esm/useEventCallback.js + 1 modules
var useEventCallback = __webpack_require__("ZCiN");

// CONCATENATED MODULE: ./node_modules/react-bootstrap/esm/AbstractNavItem.js







var defaultProps = {
  disabled: false
};
var AbstractNavItem = react_default.a.forwardRef(function (_ref, ref) {
  var active = _ref.active,
      className = _ref.className,
      tabIndex = _ref.tabIndex,
      eventKey = _ref.eventKey,
      onSelect = _ref.onSelect,
      onClick = _ref.onClick,
      Component = _ref.as,
      props = Object(objectWithoutPropertiesLoose["a" /* default */])(_ref, ["active", "className", "tabIndex", "eventKey", "onSelect", "onClick", "as"]);

  var navKey = Object(SelectableContext["b" /* makeEventKey */])(eventKey, props.href);
  var parentOnSelect = Object(react["useContext"])(SelectableContext["a" /* default */]);
  var navContext = Object(react["useContext"])(esm_NavContext);
  var isActive = active;

  if (navContext) {
    if (!props.role && navContext.role === 'tablist') props.role = 'tab';
    props['data-rb-event-key'] = navKey;
    props.id = navContext.getControllerId(navKey);
    props['aria-controls'] = navContext.getControlledId(navKey);
    isActive = active == null && navKey != null ? navContext.activeKey === navKey : active;
  }

  if (props.role === 'tab') {
    props.tabIndex = isActive ? tabIndex : -1;
    props['aria-selected'] = isActive;
  }

  var handleOnclick = Object(useEventCallback["a" /* default */])(function (e) {
    if (onClick) onClick(e);
    if (navKey == null) return;
    if (onSelect) onSelect(navKey, e);
    if (parentOnSelect) parentOnSelect(navKey, e);
  });
  return react_default.a.createElement(Component, Object(esm_extends["a" /* default */])({}, props, {
    ref: ref,
    onClick: handleOnclick,
    className: classnames_default()(className, isActive && 'active')
  }));
});
AbstractNavItem.defaultProps = defaultProps;
/* harmony default export */ var esm_AbstractNavItem = (AbstractNavItem);
// CONCATENATED MODULE: ./node_modules/react-bootstrap/esm/NavLink.js







var NavLink_defaultProps = {
  disabled: false,
  as: SafeAnchor["a" /* default */]
};
var NavLink = react_default.a.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      disabled = _ref.disabled,
      className = _ref.className,
      href = _ref.href,
      eventKey = _ref.eventKey,
      onSelect = _ref.onSelect,
      as = _ref.as,
      props = Object(objectWithoutPropertiesLoose["a" /* default */])(_ref, ["bsPrefix", "disabled", "className", "href", "eventKey", "onSelect", "as"]);

  bsPrefix = Object(ThemeProvider["b" /* useBootstrapPrefix */])(bsPrefix, 'nav-link');
  return react_default.a.createElement(esm_AbstractNavItem, Object(esm_extends["a" /* default */])({}, props, {
    href: href,
    ref: ref,
    eventKey: eventKey,
    as: as,
    disabled: disabled,
    onSelect: onSelect,
    className: classnames_default()(className, bsPrefix, disabled && 'disabled')
  }));
});
NavLink.displayName = 'NavLink';
NavLink.defaultProps = NavLink_defaultProps;
/* harmony default export */ var esm_NavLink = (NavLink);
// CONCATENATED MODULE: ./node_modules/react-bootstrap/esm/Nav.js












var Nav_defaultProps = {
  justify: false,
  fill: false
};
var Nav = react_default.a.forwardRef(function (uncontrolledProps, ref) {
  var _classNames;

  var _useUncontrolled = Object(esm["a" /* useUncontrolled */])(uncontrolledProps, {
    activeKey: 'onSelect'
  }),
      _useUncontrolled$as = _useUncontrolled.as,
      as = _useUncontrolled$as === void 0 ? 'div' : _useUncontrolled$as,
      bsPrefix = _useUncontrolled.bsPrefix,
      variant = _useUncontrolled.variant,
      fill = _useUncontrolled.fill,
      justify = _useUncontrolled.justify,
      navbar = _useUncontrolled.navbar,
      className = _useUncontrolled.className,
      children = _useUncontrolled.children,
      activeKey = _useUncontrolled.activeKey,
      props = Object(objectWithoutPropertiesLoose["a" /* default */])(_useUncontrolled, ["as", "bsPrefix", "variant", "fill", "justify", "navbar", "className", "children", "activeKey"]);

  bsPrefix = Object(ThemeProvider["b" /* useBootstrapPrefix */])(bsPrefix, 'nav');
  var navbarBsPrefix, cardHeaderBsPrefix;
  var navbarContext = Object(react["useContext"])(NavbarContext["a" /* default */]);
  var cardContext = Object(react["useContext"])(CardContext["a" /* default */]);

  if (navbarContext) {
    navbarBsPrefix = navbarContext.bsPrefix;
    navbar = navbar == null ? true : navbar;
  } else if (cardContext) {
    cardHeaderBsPrefix = cardContext.cardHeaderBsPrefix;
  }

  return react_default.a.createElement(esm_AbstractNav, Object(esm_extends["a" /* default */])({
    as: as,
    ref: ref,
    activeKey: activeKey,
    className: classnames_default()(className, (_classNames = {}, _classNames[bsPrefix] = !navbar, _classNames[navbarBsPrefix + "-nav"] = navbar, _classNames[cardHeaderBsPrefix + "-" + variant] = !!cardHeaderBsPrefix, _classNames[bsPrefix + "-" + variant] = !!variant, _classNames[bsPrefix + "-fill"] = fill, _classNames[bsPrefix + "-justified"] = justify, _classNames))
  }, props), children);
});
Nav.displayName = 'Nav';
Nav.defaultProps = Nav_defaultProps;
Nav.Item = esm_NavItem;
Nav.Link = esm_NavLink;
/* harmony default export */ var esm_Nav = __webpack_exports__["a"] = (Nav);

/***/ }),

/***/ "2mvg":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("wx14");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("zLVn");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("TSYQ");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("vUet");





var defaultProps = {
  fluid: false,
  rounded: false,
  roundedCircle: false,
  thumbnail: false
};
var Image = react__WEBPACK_IMPORTED_MODULE_3___default.a.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      className = _ref.className,
      fluid = _ref.fluid,
      rounded = _ref.rounded,
      roundedCircle = _ref.roundedCircle,
      thumbnail = _ref.thumbnail,
      props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_ref, ["bsPrefix", "className", "fluid", "rounded", "roundedCircle", "thumbnail"]);

  bsPrefix = Object(_ThemeProvider__WEBPACK_IMPORTED_MODULE_4__[/* useBootstrapPrefix */ "b"])(bsPrefix, 'img');
  var classes = classnames__WEBPACK_IMPORTED_MODULE_2___default()(fluid && bsPrefix + "-fluid", rounded && "rounded", roundedCircle && "rounded-circle", thumbnail && bsPrefix + "-thumbnail");
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("img", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    // eslint-disable-line jsx-a11y/alt-text
    ref: ref
  }, props, {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, classes)
  }));
});
Image.displayName = 'Image';
Image.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["a"] = (Image);

/***/ }),

/***/ "3Z9Z":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("wx14");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("zLVn");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("TSYQ");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("vUet");





var defaultProps = {
  noGutters: false
};
var Row = react__WEBPACK_IMPORTED_MODULE_3___default.a.forwardRef(function (props, ref) {
  var bsPrefix = props.bsPrefix,
      noGutters = props.noGutters,
      _props$as = props.as,
      Component = _props$as === void 0 ? 'div' : _props$as,
      className = props.className,
      otherProps = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(props, ["bsPrefix", "noGutters", "as", "className"]);

  var decoratedBsPrefix = Object(_ThemeProvider__WEBPACK_IMPORTED_MODULE_4__[/* useBootstrapPrefix */ "b"])(bsPrefix, 'row');
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    ref: ref
  }, otherProps, {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, decoratedBsPrefix, noGutters && 'no-gutters')
  }));
});
Row.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["a"] = (Row);

/***/ }),

/***/ "6ctO":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__("wx14");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__("zLVn");

// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__("TSYQ");
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("q1tI");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/uncontrollable/esm/index.js + 3 modules
var esm = __webpack_require__("JCAc");

// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/createWithBsPrefix.js
var createWithBsPrefix = __webpack_require__("YdCC");

// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/ThemeProvider.js
var ThemeProvider = __webpack_require__("vUet");

// CONCATENATED MODULE: ./node_modules/react-bootstrap/esm/NavbarBrand.js





var NavbarBrand = react_default.a.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      className = _ref.className,
      as = _ref.as,
      props = Object(objectWithoutPropertiesLoose["a" /* default */])(_ref, ["bsPrefix", "className", "as"]);

  bsPrefix = Object(ThemeProvider["b" /* useBootstrapPrefix */])(bsPrefix, 'navbar-brand');
  var Component = as || (props.href ? 'a' : 'span');
  return react_default.a.createElement(Component, Object(esm_extends["a" /* default */])({}, props, {
    ref: ref,
    className: classnames_default()(className, bsPrefix)
  }));
});
NavbarBrand.displayName = 'NavbarBrand';
/* harmony default export */ var esm_NavbarBrand = (NavbarBrand);
// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/Collapse.js
var Collapse = __webpack_require__("vYJ8");

// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/NavbarContext.js
var NavbarContext = __webpack_require__("qUpC");

// CONCATENATED MODULE: ./node_modules/react-bootstrap/esm/NavbarCollapse.js






var NavbarCollapse = react_default.a.forwardRef(function (_ref, ref) {
  var children = _ref.children,
      bsPrefix = _ref.bsPrefix,
      props = Object(objectWithoutPropertiesLoose["a" /* default */])(_ref, ["children", "bsPrefix"]);

  bsPrefix = Object(ThemeProvider["b" /* useBootstrapPrefix */])(bsPrefix, 'navbar-collapse');
  return react_default.a.createElement(NavbarContext["a" /* default */].Consumer, null, function (context) {
    return react_default.a.createElement(Collapse["a" /* default */], Object(esm_extends["a" /* default */])({
      in: !!(context && context.expanded)
    }, props), react_default.a.createElement("div", {
      ref: ref,
      className: bsPrefix
    }, children));
  });
});
NavbarCollapse.displayName = 'NavbarCollapse';
/* harmony default export */ var esm_NavbarCollapse = (NavbarCollapse);
// EXTERNAL MODULE: ./node_modules/@restart/hooks/esm/useEventCallback.js + 1 modules
var useEventCallback = __webpack_require__("ZCiN");

// CONCATENATED MODULE: ./node_modules/react-bootstrap/esm/NavbarToggle.js







var defaultProps = {
  label: 'Toggle navigation'
};
var NavbarToggle = react_default.a.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      className = _ref.className,
      children = _ref.children,
      label = _ref.label,
      _ref$as = _ref.as,
      Component = _ref$as === void 0 ? 'button' : _ref$as,
      onClick = _ref.onClick,
      props = Object(objectWithoutPropertiesLoose["a" /* default */])(_ref, ["bsPrefix", "className", "children", "label", "as", "onClick"]);

  bsPrefix = Object(ThemeProvider["b" /* useBootstrapPrefix */])(bsPrefix, 'navbar-toggler');

  var _ref2 = Object(react["useContext"])(NavbarContext["a" /* default */]) || {},
      onToggle = _ref2.onToggle,
      expanded = _ref2.expanded;

  var handleClick = Object(useEventCallback["a" /* default */])(function (e) {
    if (onClick) onClick(e);
    if (onToggle) onToggle();
  });

  if (Component === 'button') {
    props.type = 'button';
  }

  return react_default.a.createElement(Component, Object(esm_extends["a" /* default */])({}, props, {
    ref: ref,
    onClick: handleClick,
    "aria-label": label,
    className: classnames_default()(className, bsPrefix, !expanded && 'collapsed')
  }), children || react_default.a.createElement("span", {
    className: bsPrefix + "-icon"
  }));
});
NavbarToggle.displayName = 'NavbarToggle';
NavbarToggle.defaultProps = defaultProps;
/* harmony default export */ var esm_NavbarToggle = (NavbarToggle);
// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/SelectableContext.js
var SelectableContext = __webpack_require__("ILyh");

// CONCATENATED MODULE: ./node_modules/react-bootstrap/esm/Navbar.js












var Navbar_defaultProps = {
  expand: true,
  variant: 'light',
  collapseOnSelect: false
};
var Navbar = react_default.a.forwardRef(function (props, ref) {
  var _useUncontrolled = Object(esm["a" /* useUncontrolled */])(props, {
    expanded: 'onToggle'
  }),
      bsPrefix = _useUncontrolled.bsPrefix,
      expand = _useUncontrolled.expand,
      variant = _useUncontrolled.variant,
      bg = _useUncontrolled.bg,
      fixed = _useUncontrolled.fixed,
      sticky = _useUncontrolled.sticky,
      className = _useUncontrolled.className,
      children = _useUncontrolled.children,
      _useUncontrolled$as = _useUncontrolled.as,
      Component = _useUncontrolled$as === void 0 ? 'nav' : _useUncontrolled$as,
      expanded = _useUncontrolled.expanded,
      _onToggle = _useUncontrolled.onToggle,
      onSelect = _useUncontrolled.onSelect,
      collapseOnSelect = _useUncontrolled.collapseOnSelect,
      controlledProps = Object(objectWithoutPropertiesLoose["a" /* default */])(_useUncontrolled, ["bsPrefix", "expand", "variant", "bg", "fixed", "sticky", "className", "children", "as", "expanded", "onToggle", "onSelect", "collapseOnSelect"]);

  bsPrefix = Object(ThemeProvider["b" /* useBootstrapPrefix */])(bsPrefix, 'navbar');
  var handleCollapse = Object(react["useCallback"])(function () {
    if (onSelect) onSelect.apply(void 0, arguments);

    if (collapseOnSelect && expanded) {
      _onToggle(false);
    }
  }, [onSelect, collapseOnSelect, expanded, _onToggle]); // will result in some false positives but that seems better
  // than false negatives. strict `undefined` check allows explicit
  // "nulling" of the role if the user really doesn't want one

  if (controlledProps.role === undefined && Component !== 'nav') {
    controlledProps.role = 'navigation';
  }

  var expandClass = bsPrefix + "-expand";
  if (typeof expand === 'string') expandClass = expandClass + "-" + expand;
  var navbarContext = Object(react["useMemo"])(function () {
    return {
      onToggle: function onToggle() {
        return _onToggle(!expanded);
      },
      bsPrefix: bsPrefix,
      expanded: expanded
    };
  }, [bsPrefix, expanded, _onToggle]);
  return react_default.a.createElement(NavbarContext["a" /* default */].Provider, {
    value: navbarContext
  }, react_default.a.createElement(SelectableContext["a" /* default */].Provider, {
    value: handleCollapse
  }, react_default.a.createElement(Component, Object(esm_extends["a" /* default */])({
    ref: ref
  }, controlledProps, {
    className: classnames_default()(className, bsPrefix, expand && expandClass, variant && bsPrefix + "-" + variant, bg && "bg-" + bg, sticky && "sticky-" + sticky, fixed && "fixed-" + fixed)
  }), children)));
});
Navbar.defaultProps = Navbar_defaultProps;
Navbar.displayName = 'Navbar';
Navbar.Brand = esm_NavbarBrand;
Navbar.Toggle = esm_NavbarToggle;
Navbar.Collapse = esm_NavbarCollapse;
Navbar.Text = Object(createWithBsPrefix["a" /* default */])('navbar-text', {
  Component: 'span'
});
/* harmony default export */ var esm_Navbar = __webpack_exports__["a"] = (Navbar);

/***/ }),

/***/ "6xyR":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("wx14");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("zLVn");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("TSYQ");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("vUet");
/* harmony import */ var _createWithBsPrefix__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("YdCC");
/* harmony import */ var _divWithClassName__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("U1MP");
/* harmony import */ var _CardContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("Wzyw");
/* harmony import */ var _CardImg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("WjzP");









var DivStyledAsH5 = Object(_divWithClassName__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])('h5');
var DivStyledAsH6 = Object(_divWithClassName__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])('h6');
var CardBody = Object(_createWithBsPrefix__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])('card-body');
var defaultProps = {
  body: false
};
var Card = react__WEBPACK_IMPORTED_MODULE_3___default.a.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      className = _ref.className,
      bg = _ref.bg,
      text = _ref.text,
      border = _ref.border,
      body = _ref.body,
      children = _ref.children,
      _ref$as = _ref.as,
      Component = _ref$as === void 0 ? 'div' : _ref$as,
      props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_ref, ["bsPrefix", "className", "bg", "text", "border", "body", "children", "as"]);

  var prefix = Object(_ThemeProvider__WEBPACK_IMPORTED_MODULE_4__[/* useBootstrapPrefix */ "b"])(bsPrefix, 'card');
  var cardContext = Object(react__WEBPACK_IMPORTED_MODULE_3__["useMemo"])(function () {
    return {
      cardHeaderBsPrefix: prefix + "-header"
    };
  }, [prefix]);
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_CardContext__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].Provider, {
    value: cardContext
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    ref: ref
  }, props, {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, prefix, bg && "bg-" + bg, text && "text-" + text, border && "border-" + border)
  }), body ? react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(CardBody, null, children) : children));
});
Card.displayName = 'Card';
Card.defaultProps = defaultProps;
Card.Img = _CardImg__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"];
Card.Title = Object(_createWithBsPrefix__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])('card-title', {
  Component: DivStyledAsH5
});
Card.Subtitle = Object(_createWithBsPrefix__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])('card-subtitle', {
  Component: DivStyledAsH6
});
Card.Body = CardBody;
Card.Link = Object(_createWithBsPrefix__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])('card-link', {
  Component: 'a'
});
Card.Text = Object(_createWithBsPrefix__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])('card-text', {
  Component: 'p'
});
Card.Header = Object(_createWithBsPrefix__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])('card-header');
Card.Footer = Object(_createWithBsPrefix__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])('card-footer');
Card.ImgOverlay = Object(_createWithBsPrefix__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])('card-img-overlay');
/* harmony default export */ __webpack_exports__["a"] = (Card);

/***/ }),

/***/ "7vrA":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("wx14");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("zLVn");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("TSYQ");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("vUet");





var defaultProps = {
  fluid: false
};
var Container = react__WEBPACK_IMPORTED_MODULE_3___default.a.forwardRef( // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      fluid = _ref.fluid,
      _ref$as = _ref.as,
      Component = _ref$as === void 0 ? 'div' : _ref$as,
      className = _ref.className,
      props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_ref, ["bsPrefix", "fluid", "as", "className"]);

  var prefix = Object(_ThemeProvider__WEBPACK_IMPORTED_MODULE_4__[/* useBootstrapPrefix */ "b"])(bsPrefix, 'container');
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    ref: ref
  }, props, {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, fluid ? prefix + "-fluid" : prefix)
  }));
});
Container.displayName = 'Container';
Container.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["a"] = (Container);

/***/ }),

/***/ "ILyh":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return makeEventKey; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var SelectableContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext();
var makeEventKey = function makeEventKey(eventKey, href) {
  if (eventKey != null) return String(eventKey);
  return href || null;
};
/* harmony default export */ __webpack_exports__["a"] = (SelectableContext);

/***/ }),

/***/ "JI6e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("wx14");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("zLVn");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("TSYQ");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("vUet");





var DEVICE_SIZES = ['xl', 'lg', 'md', 'sm', 'xs'];
var Col = react__WEBPACK_IMPORTED_MODULE_3___default.a.forwardRef( // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      className = _ref.className,
      _ref$as = _ref.as,
      Component = _ref$as === void 0 ? 'div' : _ref$as,
      props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_ref, ["bsPrefix", "className", "as"]);

  var prefix = Object(_ThemeProvider__WEBPACK_IMPORTED_MODULE_4__[/* useBootstrapPrefix */ "b"])(bsPrefix, 'col');
  var spans = [];
  var classes = [];
  DEVICE_SIZES.forEach(function (brkPoint) {
    var propValue = props[brkPoint];
    delete props[brkPoint];
    var span, offset, order;

    if (propValue != null && typeof propValue === 'object') {
      var _propValue$span = propValue.span;
      span = _propValue$span === void 0 ? true : _propValue$span;
      offset = propValue.offset;
      order = propValue.order;
    } else {
      span = propValue;
    }

    var infix = brkPoint !== 'xs' ? "-" + brkPoint : '';
    if (span != null) spans.push(span === true ? "" + prefix + infix : "" + prefix + infix + "-" + span);
    if (order != null) classes.push("order" + infix + "-" + order);
    if (offset != null) classes.push("offset" + infix + "-" + offset);
  });

  if (!spans.length) {
    spans.push(prefix); // plain 'col'
  }

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, props, {
    ref: ref,
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default.a.apply(void 0, [className].concat(spans, classes))
  }));
});
Col.displayName = 'Col';
/* harmony default export */ __webpack_exports__["a"] = (Col);

/***/ }),

/***/ "Qg85":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Safe chained function
 *
 * Will only create a new function if needed,
 * otherwise will pass back existing functions or null.
 *
 * @param {function} functions to chain
 * @returns {function|null}
 */
function createChainedFunction() {
  for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  return funcs.filter(function (f) {
    return f != null;
  }).reduce(function (acc, f) {
    if (typeof f !== 'function') {
      throw new Error('Invalid Argument Type, must only provide functions, undefined, or null.');
    }

    if (acc === null) return f;
    return function chainedFunction() {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      acc.apply(this, args);
      f.apply(this, args);
    };
  }, null);
}

/* harmony default export */ __webpack_exports__["a"] = (createChainedFunction);

/***/ }),

/***/ "U1MP":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("wx14");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("TSYQ");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);



/* harmony default export */ __webpack_exports__["a"] = (function (className) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.forwardRef(function (p, ref) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, p, {
      ref: ref,
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(p.className, className)
    }));
  });
});

/***/ }),

/***/ "WjzP":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("wx14");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("zLVn");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("TSYQ");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("vUet");





var defaultProps = {
  variant: null
};
var CardImg = react__WEBPACK_IMPORTED_MODULE_3___default.a.forwardRef( // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      className = _ref.className,
      variant = _ref.variant,
      _ref$as = _ref.as,
      Component = _ref$as === void 0 ? 'img' : _ref$as,
      props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_ref, ["bsPrefix", "className", "variant", "as"]);

  var prefix = Object(_ThemeProvider__WEBPACK_IMPORTED_MODULE_4__[/* useBootstrapPrefix */ "b"])(bsPrefix, 'card-img');
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    ref: ref,
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(variant ? prefix + "-" + variant : prefix, className)
  }, props));
});
CardImg.displayName = 'CardImg';
CardImg.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["a"] = (CardImg);

/***/ }),

/***/ "Wzyw":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["a"] = (react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(null));

/***/ }),

/***/ "YdCC":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createWithBsPrefix; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("wx14");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("zLVn");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("TSYQ");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var dom_helpers_camelize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("WtAj");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("vUet");







var pascalCase = function pascalCase(str) {
  return str[0].toUpperCase() + Object(dom_helpers_camelize__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(str).slice(1);
};

function createWithBsPrefix(prefix, _temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      _ref$displayName = _ref.displayName,
      displayName = _ref$displayName === void 0 ? pascalCase(prefix) : _ref$displayName,
      _ref$Component = _ref.Component,
      Component = _ref$Component === void 0 ? 'div' : _ref$Component,
      defaultProps = _ref.defaultProps;

  var BsComponent = react__WEBPACK_IMPORTED_MODULE_4___default.a.forwardRef( // eslint-disable-next-line react/prop-types
  function (_ref2, ref) {
    var className = _ref2.className,
        bsPrefix = _ref2.bsPrefix,
        _ref2$as = _ref2.as,
        Tag = _ref2$as === void 0 ? Component : _ref2$as,
        props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_ref2, ["className", "bsPrefix", "as"]);

    var resolvedPrefix = Object(_ThemeProvider__WEBPACK_IMPORTED_MODULE_5__[/* useBootstrapPrefix */ "b"])(bsPrefix, prefix);
    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Tag, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
      ref: ref,
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, resolvedPrefix)
    }, props));
  });
  BsComponent.defaultProps = defaultProps;
  BsComponent.displayName = displayName;
  return BsComponent;
}

/***/ }),

/***/ "cWnB":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("wx14");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("zLVn");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("TSYQ");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("vUet");
/* harmony import */ var _SafeAnchor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("dbZe");






var defaultProps = {
  variant: 'primary',
  active: false,
  disabled: false,
  type: 'button'
};
var Button = react__WEBPACK_IMPORTED_MODULE_3___default.a.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      variant = _ref.variant,
      size = _ref.size,
      active = _ref.active,
      className = _ref.className,
      block = _ref.block,
      type = _ref.type,
      as = _ref.as,
      props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_ref, ["bsPrefix", "variant", "size", "active", "className", "block", "type", "as"]);

  var prefix = Object(_ThemeProvider__WEBPACK_IMPORTED_MODULE_4__[/* useBootstrapPrefix */ "b"])(bsPrefix, 'btn');
  var classes = classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, prefix, active && 'active', prefix + "-" + variant, block && prefix + "-block", size && prefix + "-" + size);

  if (props.href) {
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_SafeAnchor__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, props, {
      as: as,
      ref: ref,
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(classes, props.disabled && 'disabled')
    }));
  }

  if (ref) {
    props.ref = ref;
  }

  if (!as) {
    props.type = type;
  }

  var Component = as || 'button';
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, props, {
    className: classes
  }));
});
Button.displayName = 'Button';
Button.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["a"] = (Button);

/***/ }),

/***/ "dbZe":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("wx14");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("zLVn");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _createChainedFunction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("Qg85");





function isTrivialHref(href) {
  return !href || href.trim() === '#';
}
/**
 * There are situations due to browser quirks or Bootstrap CSS where
 * an anchor tag is needed, when semantically a button tag is the
 * better choice. SafeAnchor ensures that when an anchor is used like a
 * button its accessible. It also emulates input `disabled` behavior for
 * links, which is usually desirable for Buttons, NavItems, DropdownItems, etc.
 */


var SafeAnchor = react__WEBPACK_IMPORTED_MODULE_2___default.a.forwardRef(function (_ref, ref) {
  var _ref$as = _ref.as,
      Component = _ref$as === void 0 ? 'a' : _ref$as,
      disabled = _ref.disabled,
      onKeyDown = _ref.onKeyDown,
      props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_ref, ["as", "disabled", "onKeyDown"]);

  var handleClick = function handleClick(event) {
    var href = props.href,
        onClick = props.onClick;

    if (disabled || isTrivialHref(href)) {
      event.preventDefault();
    }

    if (disabled) {
      event.stopPropagation();
      return;
    }

    if (onClick) {
      onClick(event);
    }
  };

  var handleKeyDown = function handleKeyDown(event) {
    if (event.key === ' ') {
      event.preventDefault();
      handleClick(event);
    }
  };

  if (isTrivialHref(props.href)) {
    props.role = props.role || 'button'; // we want to make sure there is a href attribute on the node
    // otherwise, the cursor incorrectly styled (except with role='button')

    props.href = props.href || '#';
  }

  if (disabled) {
    props.tabIndex = -1;
    props['aria-disabled'] = true;
  }

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    ref: ref
  }, props, {
    onClick: handleClick,
    onKeyDown: Object(_createChainedFunction__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(handleKeyDown, onKeyDown)
  }));
});
SafeAnchor.displayName = 'SafeAnchor';
/* harmony default export */ __webpack_exports__["a"] = (SafeAnchor);

/***/ }),

/***/ "qUpC":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["a"] = (react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(null));

/***/ }),

/***/ "vUet":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return useBootstrapPrefix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createBootstrapComponent; });
/* unused harmony export ThemeConsumer */
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("wx14");
/* harmony import */ var _restart_context_forwardRef__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("QA0p");
/* harmony import */ var _restart_context_forwardRef__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_restart_context_forwardRef__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



var ThemeContext = react__WEBPACK_IMPORTED_MODULE_2___default.a.createContext({});
var Consumer = ThemeContext.Consumer,
    Provider = ThemeContext.Provider;

function ThemeProvider(_ref) {
  var prefixes = _ref.prefixes,
      children = _ref.children;
  var copiedPrefixes = Object(react__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(function () {
    return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, prefixes);
  }, [prefixes]);
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Provider, {
    value: copiedPrefixes
  }, children);
}

function useBootstrapPrefix(prefix, defaultPrefix) {
  var prefixes = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(ThemeContext);
  return prefix || prefixes[defaultPrefix] || defaultPrefix;
}

function createBootstrapComponent(Component, opts) {
  if (typeof opts === 'string') opts = {
    prefix: opts
  };
  var isClassy = Component.prototype && Component.prototype.isReactComponent; // If it's a functional component make sure we don't break it with a ref

  var _opts = opts,
      prefix = _opts.prefix,
      _opts$forwardRefAs = _opts.forwardRefAs,
      forwardRefAs = _opts$forwardRefAs === void 0 ? isClassy ? 'ref' : 'innerRef' : _opts$forwardRefAs;
  return _restart_context_forwardRef__WEBPACK_IMPORTED_MODULE_1___default()(function (_ref2, ref) {
    var props = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, _ref2);

    props[forwardRefAs] = ref; // eslint-disable-next-line react/prop-types

    var bsPrefix = useBootstrapPrefix(props.bsPrefix, prefix);
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, props, {
      bsPrefix: bsPrefix
    }));
  }, {
    displayName: "Bootstrap(" + (Component.displayName || Component.name) + ")"
  });
}


/* unused harmony default export */ var _unused_webpack_default_export = (ThemeProvider);

/***/ }),

/***/ "vYJ8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("wx14");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("zLVn");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("dI71");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("TSYQ");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var dom_helpers_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("7j6X");
/* harmony import */ var dom_helpers_transitionEnd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("YECM");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_transition_group_Transition__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("dRu9");
/* harmony import */ var _createChainedFunction__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("Qg85");
/* harmony import */ var _triggerBrowserReflow__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("z+q/");




var _collapseStyles;








var MARGINS = {
  height: ['marginTop', 'marginBottom'],
  width: ['marginLeft', 'marginRight']
};

function getDimensionValue(dimension, elem) {
  var offset = "offset" + dimension[0].toUpperCase() + dimension.slice(1);
  var value = elem[offset];
  var margins = MARGINS[dimension];
  return value + parseInt(Object(dom_helpers_css__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(elem, margins[0]), 10) + parseInt(Object(dom_helpers_css__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(elem, margins[1]), 10);
}

var collapseStyles = (_collapseStyles = {}, _collapseStyles[react_transition_group_Transition__WEBPACK_IMPORTED_MODULE_7__[/* EXITED */ "c"]] = 'collapse', _collapseStyles[react_transition_group_Transition__WEBPACK_IMPORTED_MODULE_7__[/* EXITING */ "d"]] = 'collapsing', _collapseStyles[react_transition_group_Transition__WEBPACK_IMPORTED_MODULE_7__[/* ENTERING */ "b"]] = 'collapsing', _collapseStyles[react_transition_group_Transition__WEBPACK_IMPORTED_MODULE_7__[/* ENTERED */ "a"]] = 'collapse show', _collapseStyles);
var defaultProps = {
  in: false,
  timeout: 300,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false,
  dimension: 'height',
  getDimensionValue: getDimensionValue
};

var Collapse =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(Collapse, _React$Component);

  function Collapse() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

    _this.handleEnter = function (elem) {
      elem.style[_this.getDimension()] = '0';
    };

    _this.handleEntering = function (elem) {
      var dimension = _this.getDimension();

      elem.style[dimension] = _this._getScrollDimensionValue(elem, dimension);
    };

    _this.handleEntered = function (elem) {
      elem.style[_this.getDimension()] = null;
    };

    _this.handleExit = function (elem) {
      var dimension = _this.getDimension();

      elem.style[dimension] = _this.props.getDimensionValue(dimension, elem) + "px";
      Object(_triggerBrowserReflow__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"])(elem);
    };

    _this.handleExiting = function (elem) {
      elem.style[_this.getDimension()] = null;
    };

    return _this;
  }

  var _proto = Collapse.prototype;

  _proto.getDimension = function getDimension() {
    return typeof this.props.dimension === 'function' ? this.props.dimension() : this.props.dimension;
  }
  /* -- Expanding -- */
  ;

  // for testing
  _proto._getScrollDimensionValue = function _getScrollDimensionValue(elem, dimension) {
    var scroll = "scroll" + dimension[0].toUpperCase() + dimension.slice(1);
    return elem[scroll] + "px";
  };

  _proto.render = function render() {
    var _this2 = this;

    var _this$props = this.props,
        onEnter = _this$props.onEnter,
        onEntering = _this$props.onEntering,
        onEntered = _this$props.onEntered,
        onExit = _this$props.onExit,
        onExiting = _this$props.onExiting,
        className = _this$props.className,
        children = _this$props.children,
        props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_this$props, ["onEnter", "onEntering", "onEntered", "onExit", "onExiting", "className", "children"]);

    delete props.dimension;
    delete props.getDimensionValue;
    var handleEnter = Object(_createChainedFunction__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(this.handleEnter, onEnter);
    var handleEntering = Object(_createChainedFunction__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(this.handleEntering, onEntering);
    var handleEntered = Object(_createChainedFunction__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(this.handleEntered, onEntered);
    var handleExit = Object(_createChainedFunction__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(this.handleExit, onExit);
    var handleExiting = Object(_createChainedFunction__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(this.handleExiting, onExiting);
    return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_transition_group_Transition__WEBPACK_IMPORTED_MODULE_7__[/* default */ "e"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
      addEndListener: dom_helpers_transitionEnd__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"]
    }, props, {
      "aria-expanded": props.role ? props.in : null,
      onEnter: handleEnter,
      onEntering: handleEntering,
      onEntered: handleEntered,
      onExit: handleExit,
      onExiting: handleExiting
    }), function (state, innerProps) {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.cloneElement(children, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, innerProps, {
        className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(className, children.props.className, collapseStyles[state], _this2.getDimension() === 'width' && 'width')
      }));
    });
  };

  return Collapse;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

Collapse.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["a"] = (Collapse);

/***/ }),

/***/ "xXt2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("wx14");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("zLVn");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("TSYQ");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("vUet");





var defaultProps = {
  fluid: false
};
var Jumbotron = react__WEBPACK_IMPORTED_MODULE_2___default.a.forwardRef(function (_ref, ref) {
  var _classes;

  var _ref$as = _ref.as,
      Component = _ref$as === void 0 ? 'div' : _ref$as,
      className = _ref.className,
      fluid = _ref.fluid,
      bsPrefix = _ref.bsPrefix,
      props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_ref, ["as", "className", "fluid", "bsPrefix"]);

  bsPrefix = Object(_ThemeProvider__WEBPACK_IMPORTED_MODULE_4__[/* useBootstrapPrefix */ "b"])(bsPrefix, 'jumbotron');
  var classes = (_classes = {}, _classes[bsPrefix] = true, _classes[bsPrefix + "-fluid"] = fluid, _classes);
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    ref: ref
  }, props, {
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(className, classes)
  }));
});
Jumbotron.defaultProps = defaultProps;
Jumbotron.displayName = 'Jumbotron';
/* harmony default export */ __webpack_exports__["a"] = (Jumbotron);

/***/ }),

/***/ "z+q/":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return triggerBrowserReflow; });
// reading a dimension prop will cause the browser to recalculate,
// which will let our animations work
function triggerBrowserReflow(node) {
  node.offsetHeight; // eslint-disable-line no-unused-expressions
}

/***/ }),

/***/ "zM5D":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__("zLVn");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__("wx14");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js
var inheritsLoose = __webpack_require__("dI71");

// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__("TSYQ");
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// EXTERNAL MODULE: ./node_modules/dom-helpers/esm/addEventListener.js
var addEventListener = __webpack_require__("2fXS");

// EXTERNAL MODULE: ./node_modules/dom-helpers/esm/canUseDOM.js
var canUseDOM = __webpack_require__("SJxq");

// EXTERNAL MODULE: ./node_modules/dom-helpers/esm/ownerDocument.js
var ownerDocument = __webpack_require__("dZvc");

// EXTERNAL MODULE: ./node_modules/dom-helpers/esm/removeEventListener.js
var removeEventListener = __webpack_require__("Q7zl");

// EXTERNAL MODULE: ./node_modules/dom-helpers/esm/scrollbarSize.js
var scrollbarSize = __webpack_require__("j6jG");

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("q1tI");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/react-overlays/esm/Modal.js + 1 modules
var esm_Modal = __webpack_require__("H3sw");

// EXTERNAL MODULE: ./node_modules/dom-helpers/esm/css.js + 5 modules
var css = __webpack_require__("7j6X");

// EXTERNAL MODULE: ./node_modules/dom-helpers/esm/querySelectorAll.js
var querySelectorAll = __webpack_require__("Zeqi");

// EXTERNAL MODULE: ./node_modules/react-overlays/esm/ModalManager.js + 2 modules
var ModalManager = __webpack_require__("N34S");

// CONCATENATED MODULE: ./node_modules/react-bootstrap/esm/BootstrapModalManager.js





var Selector = {
  FIXED_CONTENT: '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top',
  STICKY_CONTENT: '.sticky-top',
  NAVBAR_TOGGLER: '.navbar-toggler'
};

var BootstrapModalManager_BootstrapModalManager =
/*#__PURE__*/
function (_ModalManager) {
  Object(inheritsLoose["a" /* default */])(BootstrapModalManager, _ModalManager);

  function BootstrapModalManager() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _ModalManager.call.apply(_ModalManager, [this].concat(args)) || this;

    _this.adjustAndStore = function (prop, element, adjust) {
      var actual = element.style[prop];
      element.dataset[prop] = actual;
      Object(css["a" /* default */])(element, prop, parseFloat(Object(css["a" /* default */])(element, prop)) + adjust + "px");
    };

    _this.restore = function (prop, element) {
      var value = element.dataset[prop];

      if (value !== undefined) {
        delete element.dataset[prop];
        Object(css["a" /* default */])(element, prop, value);
      }
    };

    return _this;
  }

  var _proto = BootstrapModalManager.prototype;

  _proto.setContainerStyle = function setContainerStyle(containerState, container) {
    var _this2 = this;

    _ModalManager.prototype.setContainerStyle.call(this, containerState, container);

    if (!containerState.overflowing) return;
    var size = Object(scrollbarSize["a" /* default */])();
    Object(querySelectorAll["a" /* default */])(container, Selector.FIXED_CONTENT).forEach(function (el) {
      return _this2.adjustAndStore('paddingRight', el, size);
    });
    Object(querySelectorAll["a" /* default */])(container, Selector.STICKY_CONTENT).forEach(function (el) {
      return _this2.adjustAndStore('margingRight', el, -size);
    });
    Object(querySelectorAll["a" /* default */])(container, Selector.NAVBAR_TOGGLER).forEach(function (el) {
      return _this2.adjustAndStore('margingRight', el, size);
    });
  };

  _proto.removeContainerStyle = function removeContainerStyle(containerState, container) {
    var _this3 = this;

    _ModalManager.prototype.removeContainerStyle.call(this, containerState, container);

    Object(querySelectorAll["a" /* default */])(container, Selector.FIXED_CONTENT).forEach(function (el) {
      return _this3.restore('paddingRight', el);
    });
    Object(querySelectorAll["a" /* default */])(container, Selector.STICKY_CONTENT).forEach(function (el) {
      return _this3.restore('margingRight', el);
    });
    Object(querySelectorAll["a" /* default */])(container, Selector.NAVBAR_TOGGLER).forEach(function (el) {
      return _this3.restore('margingRight', el);
    });
  };

  return BootstrapModalManager;
}(ModalManager["a" /* default */]);


// EXTERNAL MODULE: ./node_modules/dom-helpers/esm/transitionEnd.js
var transitionEnd = __webpack_require__("YECM");

// EXTERNAL MODULE: ./node_modules/react-transition-group/esm/Transition.js + 1 modules
var Transition = __webpack_require__("dRu9");

// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/triggerBrowserReflow.js
var triggerBrowserReflow = __webpack_require__("z+q/");

// CONCATENATED MODULE: ./node_modules/react-bootstrap/esm/Fade.js



var _fadeStyles;






var defaultProps = {
  in: false,
  timeout: 300,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false
};
var fadeStyles = (_fadeStyles = {}, _fadeStyles[Transition["b" /* ENTERING */]] = 'show', _fadeStyles[Transition["a" /* ENTERED */]] = 'show', _fadeStyles);
var Fade = react_default.a.forwardRef(function (_ref, ref) {
  var className = _ref.className,
      children = _ref.children,
      props = Object(objectWithoutPropertiesLoose["a" /* default */])(_ref, ["className", "children"]);

  var handleEnter = Object(react["useCallback"])(function (node) {
    Object(triggerBrowserReflow["a" /* default */])(node);
    if (props.onEnter) props.onEnter(node);
  }, [props]);
  return react_default.a.createElement(Transition["e" /* default */], Object(esm_extends["a" /* default */])({
    ref: ref,
    addEndListener: transitionEnd["a" /* default */]
  }, props, {
    onEnter: handleEnter
  }), function (status, innerProps) {
    return react_default.a.cloneElement(children, Object(esm_extends["a" /* default */])({}, innerProps, {
      className: classnames_default()('fade', className, children.props.className, fadeStyles[status])
    }));
  });
});
Fade.defaultProps = defaultProps;
Fade.displayName = 'Fade';
/* harmony default export */ var esm_Fade = (Fade);
// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/createWithBsPrefix.js
var createWithBsPrefix = __webpack_require__("YdCC");

// CONCATENATED MODULE: ./node_modules/react-bootstrap/esm/ModalBody.js

/* harmony default export */ var ModalBody = (Object(createWithBsPrefix["a" /* default */])('modal-body'));
// CONCATENATED MODULE: ./node_modules/react-bootstrap/esm/ModalContext.js

var ModalContext = react_default.a.createContext({
  onHide: function onHide() {}
});
/* harmony default export */ var esm_ModalContext = (ModalContext);
// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/ThemeProvider.js
var ThemeProvider = __webpack_require__("vUet");

// CONCATENATED MODULE: ./node_modules/react-bootstrap/esm/ModalDialog.js





var ModalDialog = react_default.a.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      className = _ref.className,
      centered = _ref.centered,
      size = _ref.size,
      children = _ref.children,
      scrollable = _ref.scrollable,
      props = Object(objectWithoutPropertiesLoose["a" /* default */])(_ref, ["bsPrefix", "className", "centered", "size", "children", "scrollable"]);

  bsPrefix = Object(ThemeProvider["b" /* useBootstrapPrefix */])(bsPrefix, 'modal');
  var dialogClass = bsPrefix + "-dialog";
  return react_default.a.createElement("div", Object(esm_extends["a" /* default */])({}, props, {
    ref: ref,
    className: classnames_default()(dialogClass, className, size && bsPrefix + "-" + size, centered && dialogClass + "-centered", scrollable && dialogClass + "-scrollable")
  }), react_default.a.createElement("div", {
    className: bsPrefix + "-content"
  }, children));
});
ModalDialog.displayName = 'ModalDialog';
/* harmony default export */ var esm_ModalDialog = (ModalDialog);
// CONCATENATED MODULE: ./node_modules/react-bootstrap/esm/ModalFooter.js

/* harmony default export */ var ModalFooter = (Object(createWithBsPrefix["a" /* default */])('modal-footer'));
// EXTERNAL MODULE: ./node_modules/@restart/hooks/esm/useEventCallback.js + 1 modules
var useEventCallback = __webpack_require__("ZCiN");

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__("17x9");
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// CONCATENATED MODULE: ./node_modules/react-bootstrap/esm/CloseButton.js





var propTypes = {
  label: prop_types_default.a.string.isRequired,
  onClick: prop_types_default.a.func
};
var CloseButton_defaultProps = {
  label: 'Close'
};
var CloseButton = react_default.a.forwardRef(function (_ref, ref) {
  var label = _ref.label,
      onClick = _ref.onClick,
      className = _ref.className,
      props = Object(objectWithoutPropertiesLoose["a" /* default */])(_ref, ["label", "onClick", "className"]);

  return react_default.a.createElement("button", Object(esm_extends["a" /* default */])({
    ref: ref,
    type: "button",
    className: classnames_default()('close', className),
    onClick: onClick
  }, props), react_default.a.createElement("span", {
    "aria-hidden": "true"
  }, "\xD7"), react_default.a.createElement("span", {
    className: "sr-only"
  }, label));
});
CloseButton.displayName = 'CloseButton';
CloseButton.propTypes = propTypes;
CloseButton.defaultProps = CloseButton_defaultProps;
/* harmony default export */ var esm_CloseButton = (CloseButton);
// CONCATENATED MODULE: ./node_modules/react-bootstrap/esm/ModalHeader.js








var ModalHeader_defaultProps = {
  closeLabel: 'Close',
  closeButton: false
};
var ModalHeader = react_default.a.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      closeLabel = _ref.closeLabel,
      closeButton = _ref.closeButton,
      onHide = _ref.onHide,
      className = _ref.className,
      children = _ref.children,
      props = Object(objectWithoutPropertiesLoose["a" /* default */])(_ref, ["bsPrefix", "closeLabel", "closeButton", "onHide", "className", "children"]);

  bsPrefix = Object(ThemeProvider["b" /* useBootstrapPrefix */])(bsPrefix, 'modal-header');
  var context = Object(react["useContext"])(esm_ModalContext);
  var handleClick = Object(useEventCallback["a" /* default */])(function () {
    if (context) context.onHide();
    if (onHide) onHide();
  });
  return react_default.a.createElement("div", Object(esm_extends["a" /* default */])({
    ref: ref
  }, props, {
    className: classnames_default()(className, bsPrefix)
  }), children, closeButton && react_default.a.createElement(esm_CloseButton, {
    label: closeLabel,
    onClick: handleClick
  }));
});
ModalHeader.displayName = 'ModalHeader';
ModalHeader.defaultProps = ModalHeader_defaultProps;
/* harmony default export */ var esm_ModalHeader = (ModalHeader);
// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/divWithClassName.js
var divWithClassName = __webpack_require__("U1MP");

// CONCATENATED MODULE: ./node_modules/react-bootstrap/esm/ModalTitle.js


var DivStyledAsH4 = Object(divWithClassName["a" /* default */])('h4');
/* harmony default export */ var ModalTitle = (Object(createWithBsPrefix["a" /* default */])('modal-title', {
  Component: DivStyledAsH4
}));
// CONCATENATED MODULE: ./node_modules/react-bootstrap/esm/Modal.js




















var Modal_defaultProps = {
  show: false,
  backdrop: true,
  keyboard: true,
  autoFocus: true,
  enforceFocus: true,
  restoreFocus: true,
  animation: true,
  dialogAs: esm_ModalDialog,
  manager: new BootstrapModalManager_BootstrapModalManager()
};
/* eslint-disable no-use-before-define, react/no-multi-comp */

function DialogTransition(props) {
  return react_default.a.createElement(esm_Fade, props);
}

function BackdropTransition(props) {
  return react_default.a.createElement(esm_Fade, props);
}
/* eslint-enable no-use-before-define */


var Modal_Modal =
/*#__PURE__*/
function (_React$Component) {
  Object(inheritsLoose["a" /* default */])(Modal, _React$Component);

  function Modal() {
    var _this;

    for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
      _args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(_args)) || this;
    _this.state = {
      style: {}
    };
    _this.modalContext = {
      onHide: function onHide() {
        return _this.props.onHide();
      }
    };

    _this.setModalRef = function (ref) {
      _this._modal = ref;
    };

    _this.handleDialogMouseDown = function () {
      _this._waitingForMouseUp = true;
    };

    _this.handleMouseUp = function (e) {
      if (_this._waitingForMouseUp && e.target === _this._modal.dialog) {
        _this._ignoreBackdropClick = true;
      }

      _this._waitingForMouseUp = false;
    };

    _this.handleClick = function (e) {
      if (_this._ignoreBackdropClick || e.target !== e.currentTarget) {
        _this._ignoreBackdropClick = false;
        return;
      }

      _this.props.onHide();
    };

    _this.handleEnter = function (node) {
      var _this$props;

      if (node) {
        node.style.display = 'block';

        _this.updateDialogStyle(node);
      }

      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }

      if (_this.props.onEnter) (_this$props = _this.props).onEnter.apply(_this$props, [node].concat(args));
    };

    _this.handleEntering = function (node) {
      var _this$props2;

      for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
        args[_key3 - 1] = arguments[_key3];
      }

      if (_this.props.onEntering) (_this$props2 = _this.props).onEntering.apply(_this$props2, [node].concat(args)); // FIXME: This should work even when animation is disabled.

      Object(addEventListener["a" /* default */])(window, 'resize', _this.handleWindowResize);
    };

    _this.handleExited = function (node) {
      var _this$props3;

      if (node) node.style.display = ''; // RHL removes it sometimes

      for (var _len4 = arguments.length, args = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
        args[_key4 - 1] = arguments[_key4];
      }

      if (_this.props.onExited) (_this$props3 = _this.props).onExited.apply(_this$props3, args); // FIXME: This should work even when animation is disabled.

      Object(removeEventListener["a" /* default */])(window, 'resize', _this.handleWindowResize);
    };

    _this.handleWindowResize = function () {
      _this.updateDialogStyle(_this._modal.dialog);
    };

    _this.renderBackdrop = function (props) {
      var _this$props4 = _this.props,
          bsPrefix = _this$props4.bsPrefix,
          backdropClassName = _this$props4.backdropClassName,
          animation = _this$props4.animation;
      return react_default.a.createElement("div", Object(esm_extends["a" /* default */])({}, props, {
        className: classnames_default()(bsPrefix + "-backdrop", backdropClassName, !animation && 'show')
      }));
    };

    return _this;
  }

  var _proto = Modal.prototype;

  _proto.componentWillUnmount = function componentWillUnmount() {
    // Clean up the listener if we need to.
    Object(removeEventListener["a" /* default */])(window, 'resize', this.handleWindowResize);
  };

  _proto.updateDialogStyle = function updateDialogStyle(node) {
    if (!canUseDOM["a" /* default */]) return;
    var manager = this.props.manager;
    var containerIsOverflowing = manager.isContainerOverflowing(this._modal);
    var modalIsOverflowing = node.scrollHeight > Object(ownerDocument["a" /* default */])(node).documentElement.clientHeight;
    this.setState({
      style: {
        paddingRight: containerIsOverflowing && !modalIsOverflowing ? Object(scrollbarSize["a" /* default */])() : undefined,
        paddingLeft: !containerIsOverflowing && modalIsOverflowing ? Object(scrollbarSize["a" /* default */])() : undefined
      }
    });
  };

  _proto.render = function render() {
    var _this$props5 = this.props,
        bsPrefix = _this$props5.bsPrefix,
        className = _this$props5.className,
        style = _this$props5.style,
        dialogClassName = _this$props5.dialogClassName,
        children = _this$props5.children,
        Dialog = _this$props5.dialogAs,
        show = _this$props5.show,
        animation = _this$props5.animation,
        backdrop = _this$props5.backdrop,
        keyboard = _this$props5.keyboard,
        manager = _this$props5.manager,
        onEscapeKeyDown = _this$props5.onEscapeKeyDown,
        onShow = _this$props5.onShow,
        onHide = _this$props5.onHide,
        container = _this$props5.container,
        autoFocus = _this$props5.autoFocus,
        enforceFocus = _this$props5.enforceFocus,
        restoreFocus = _this$props5.restoreFocus,
        onEntered = _this$props5.onEntered,
        onExit = _this$props5.onExit,
        onExiting = _this$props5.onExiting,
        _ = _this$props5.onExited,
        _1 = _this$props5.onEntering,
        _6 = _this$props5.onEnter,
        _4 = _this$props5.onEntering,
        _2 = _this$props5.backdropClassName,
        props = Object(objectWithoutPropertiesLoose["a" /* default */])(_this$props5, ["bsPrefix", "className", "style", "dialogClassName", "children", "dialogAs", "show", "animation", "backdrop", "keyboard", "manager", "onEscapeKeyDown", "onShow", "onHide", "container", "autoFocus", "enforceFocus", "restoreFocus", "onEntered", "onExit", "onExiting", "onExited", "onEntering", "onEnter", "onEntering", "backdropClassName"]);

    var clickHandler = backdrop === true ? this.handleClick : null;

    var baseModalStyle = Object(esm_extends["a" /* default */])({}, style, {}, this.state.style); // Sets `display` always block when `animation` is false


    if (!animation) baseModalStyle.display = 'block';
    return react_default.a.createElement(esm_ModalContext.Provider, {
      value: this.modalContext
    }, react_default.a.createElement(esm_Modal["a" /* default */], {
      show: show,
      backdrop: backdrop,
      container: container,
      keyboard: keyboard,
      autoFocus: autoFocus,
      enforceFocus: enforceFocus,
      restoreFocus: restoreFocus,
      onEscapeKeyDown: onEscapeKeyDown,
      onShow: onShow,
      onHide: onHide,
      onEntered: onEntered,
      onExit: onExit,
      onExiting: onExiting,
      manager: manager,
      ref: this.setModalRef,
      style: baseModalStyle,
      className: classnames_default()(className, bsPrefix),
      containerClassName: bsPrefix + "-open",
      transition: animation ? DialogTransition : undefined,
      backdropTransition: animation ? BackdropTransition : undefined,
      renderBackdrop: this.renderBackdrop,
      onClick: clickHandler,
      onMouseUp: this.handleMouseUp,
      onEnter: this.handleEnter,
      onEntering: this.handleEntering,
      onExited: this.handleExited
    }, react_default.a.createElement(Dialog, Object(esm_extends["a" /* default */])({}, props, {
      onMouseDown: this.handleDialogMouseDown,
      className: dialogClassName
    }), children)));
  };

  return Modal;
}(react_default.a.Component);

Modal_Modal.defaultProps = Modal_defaultProps;
var DecoratedModal = Object(ThemeProvider["a" /* createBootstrapComponent */])(Modal_Modal, 'modal');
DecoratedModal.Body = ModalBody;
DecoratedModal.Header = esm_ModalHeader;
DecoratedModal.Title = ModalTitle;
DecoratedModal.Footer = ModalFooter;
DecoratedModal.Dialog = esm_ModalDialog;
DecoratedModal.TRANSITION_DURATION = 300;
DecoratedModal.BACKDROP_TRANSITION_DURATION = 150;
/* harmony default export */ var react_bootstrap_esm_Modal = __webpack_exports__["a"] = (DecoratedModal);

/***/ })

}]);
//# sourceMappingURL=npm.react-bootstrap.7a8e9d6f2.js.map