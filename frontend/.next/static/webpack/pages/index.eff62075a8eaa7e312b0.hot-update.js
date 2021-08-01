self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Rating.js":
/*!******************************!*\
  !*** ./components/Rating.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\Alex\\Documents\\GitHub\\Next-2_ProShop\\frontend\\components\\Rating.js",
    _this = undefined;



var Rating = function Rating(_ref) {
  var value = _ref.value,
      text = _ref.text,
      color = _ref.color;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "rating",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
        style: {
          color: color
        },
        className: value >= 1 ? 'fas fa-star' : value >= 0.5 ? 'fas fa-star-half-alt' : 'far fa-star'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 5
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 4
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
        style: {
          color: color
        },
        className: value >= 2 ? 'fas fa-star' : value >= 1.5 ? 'fas fa-star-half-alt' : 'far fa-star'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 5
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 4
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
        style: {
          color: color
        },
        className: value >= 3 ? 'fas fa-star' : value >= 2.5 ? 'fas fa-star-half-alt' : 'far fa-star'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 5
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 4
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
        style: {
          color: color
        },
        className: value >= 4 ? 'fas fa-star' : value >= 3.5 ? 'fas fa-star-half-alt' : 'far fa-star'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 5
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 4
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
        style: {
          color: color
        },
        className: value >= 5 ? 'fas fa-star' : value >= 4.5 ? 'fas fa-star-half-alt' : 'far fa-star'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 5
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 4
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
      children: text && text
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 4
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 3
  }, _this);
};

_c = Rating;
Rating.defaultProps = {
  color: '#f8e825'
};
/* harmony default export */ __webpack_exports__["default"] = (Rating);

var _c;

$RefreshReg$(_c, "Rating");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9SYXRpbmcuanMiXSwibmFtZXMiOlsiUmF0aW5nIiwidmFsdWUiLCJ0ZXh0IiwiY29sb3IiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsT0FBNEI7QUFBQSxNQUF6QkMsS0FBeUIsUUFBekJBLEtBQXlCO0FBQUEsTUFBbEJDLElBQWtCLFFBQWxCQSxJQUFrQjtBQUFBLE1BQVpDLEtBQVksUUFBWkEsS0FBWTtBQUMxQyxzQkFDQztBQUFLLGFBQVMsRUFBQyxRQUFmO0FBQUEsNEJBQ0M7QUFBQSw2QkFDQztBQUNDLGFBQUssRUFBRTtBQUFFQSxlQUFLLEVBQUxBO0FBQUYsU0FEUjtBQUVDLGlCQUFTLEVBQ1JGLEtBQUssSUFBSSxDQUFULEdBQ0csYUFESCxHQUVHQSxLQUFLLElBQUksR0FBVCxHQUNBLHNCQURBLEdBRUE7QUFQTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURELGVBYUM7QUFBQSw2QkFDQztBQUNDLGFBQUssRUFBRTtBQUFFRSxlQUFLLEVBQUxBO0FBQUYsU0FEUjtBQUVDLGlCQUFTLEVBQ1JGLEtBQUssSUFBSSxDQUFULEdBQ0csYUFESCxHQUVHQSxLQUFLLElBQUksR0FBVCxHQUNBLHNCQURBLEdBRUE7QUFQTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWJELGVBeUJDO0FBQUEsNkJBQ0M7QUFDQyxhQUFLLEVBQUU7QUFBRUUsZUFBSyxFQUFMQTtBQUFGLFNBRFI7QUFFQyxpQkFBUyxFQUNSRixLQUFLLElBQUksQ0FBVCxHQUNHLGFBREgsR0FFR0EsS0FBSyxJQUFJLEdBQVQsR0FDQSxzQkFEQSxHQUVBO0FBUEw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUF6QkQsZUFxQ0M7QUFBQSw2QkFDQztBQUNDLGFBQUssRUFBRTtBQUFFRSxlQUFLLEVBQUxBO0FBQUYsU0FEUjtBQUVDLGlCQUFTLEVBQ1JGLEtBQUssSUFBSSxDQUFULEdBQ0csYUFESCxHQUVHQSxLQUFLLElBQUksR0FBVCxHQUNBLHNCQURBLEdBRUE7QUFQTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQXJDRCxlQWlEQztBQUFBLDZCQUNDO0FBQ0MsYUFBSyxFQUFFO0FBQUVFLGVBQUssRUFBTEE7QUFBRixTQURSO0FBRUMsaUJBQVMsRUFDUkYsS0FBSyxJQUFJLENBQVQsR0FDRyxhQURILEdBRUdBLEtBQUssSUFBSSxHQUFULEdBQ0Esc0JBREEsR0FFQTtBQVBMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBakRELGVBNkRDO0FBQUEsZ0JBQU9DLElBQUksSUFBSUE7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBN0REO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUREO0FBaUVBLENBbEVEOztLQUFNRixNO0FBb0VOQSxNQUFNLENBQUNJLFlBQVAsR0FBc0I7QUFDckJELE9BQUssRUFBRTtBQURjLENBQXRCO0FBSUEsK0RBQWVILE1BQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZWZmNjIwNzVhOGVhYTdlMzEyYjAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBSYXRpbmcgPSAoeyB2YWx1ZSwgdGV4dCwgY29sb3IgfSkgPT4ge1xyXG4gcmV0dXJuIChcclxuICA8ZGl2IGNsYXNzTmFtZT0ncmF0aW5nJz5cclxuICAgPHNwYW4+XHJcbiAgICA8aVxyXG4gICAgIHN0eWxlPXt7IGNvbG9yIH19XHJcbiAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgdmFsdWUgPj0gMVxyXG4gICAgICAgPyAnZmFzIGZhLXN0YXInXHJcbiAgICAgICA6IHZhbHVlID49IDAuNVxyXG4gICAgICAgPyAnZmFzIGZhLXN0YXItaGFsZi1hbHQnXHJcbiAgICAgICA6ICdmYXIgZmEtc3RhcidcclxuICAgICB9PjwvaT5cclxuICAgPC9zcGFuPlxyXG5cclxuICAgPHNwYW4+XHJcbiAgICA8aVxyXG4gICAgIHN0eWxlPXt7IGNvbG9yIH19XHJcbiAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgdmFsdWUgPj0gMlxyXG4gICAgICAgPyAnZmFzIGZhLXN0YXInXHJcbiAgICAgICA6IHZhbHVlID49IDEuNVxyXG4gICAgICAgPyAnZmFzIGZhLXN0YXItaGFsZi1hbHQnXHJcbiAgICAgICA6ICdmYXIgZmEtc3RhcidcclxuICAgICB9PjwvaT5cclxuICAgPC9zcGFuPlxyXG5cclxuICAgPHNwYW4+XHJcbiAgICA8aVxyXG4gICAgIHN0eWxlPXt7IGNvbG9yIH19XHJcbiAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgdmFsdWUgPj0gM1xyXG4gICAgICAgPyAnZmFzIGZhLXN0YXInXHJcbiAgICAgICA6IHZhbHVlID49IDIuNVxyXG4gICAgICAgPyAnZmFzIGZhLXN0YXItaGFsZi1hbHQnXHJcbiAgICAgICA6ICdmYXIgZmEtc3RhcidcclxuICAgICB9PjwvaT5cclxuICAgPC9zcGFuPlxyXG5cclxuICAgPHNwYW4+XHJcbiAgICA8aVxyXG4gICAgIHN0eWxlPXt7IGNvbG9yIH19XHJcbiAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgdmFsdWUgPj0gNFxyXG4gICAgICAgPyAnZmFzIGZhLXN0YXInXHJcbiAgICAgICA6IHZhbHVlID49IDMuNVxyXG4gICAgICAgPyAnZmFzIGZhLXN0YXItaGFsZi1hbHQnXHJcbiAgICAgICA6ICdmYXIgZmEtc3RhcidcclxuICAgICB9PjwvaT5cclxuICAgPC9zcGFuPlxyXG5cclxuICAgPHNwYW4+XHJcbiAgICA8aVxyXG4gICAgIHN0eWxlPXt7IGNvbG9yIH19XHJcbiAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgdmFsdWUgPj0gNVxyXG4gICAgICAgPyAnZmFzIGZhLXN0YXInXHJcbiAgICAgICA6IHZhbHVlID49IDQuNVxyXG4gICAgICAgPyAnZmFzIGZhLXN0YXItaGFsZi1hbHQnXHJcbiAgICAgICA6ICdmYXIgZmEtc3RhcidcclxuICAgICB9PjwvaT5cclxuICAgPC9zcGFuPlxyXG5cclxuICAgPHNwYW4+e3RleHQgJiYgdGV4dH08L3NwYW4+XHJcbiAgPC9kaXY+XHJcbiApO1xyXG59O1xyXG5cclxuUmF0aW5nLmRlZmF1bHRQcm9wcyA9IHtcclxuIGNvbG9yOiAnI2Y4ZTgyNScsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSYXRpbmc7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=