self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Product.js":
/*!*******************************!*\
  !*** ./components/Product.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _Rating__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Rating */ "./components/Rating.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\Alex\\Documents\\GitHub\\Next-2_ProShop\\frontend\\components\\Product.js",
    _this = undefined;




var Product = function Product(_ref) {
  var product = _ref.product;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Card, {
    className: "my-3 p-3 rounded",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
      href: "/product/".concat(product._id),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Card.Img, {
        src: product.image,
        variant: "top"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 5
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 4
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Card.Body, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        href: "/product/".concat(product._id),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Card.Title, {
          as: "div",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("strong", {
            children: product.name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 14,
            columnNumber: 7
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 6
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 5
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Card.Text, {
        as: "div",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Rating__WEBPACK_IMPORTED_MODULE_1__.default, {
          value: product.rating,
          text: "".concat(product.numReviews, " reviews")
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 6
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 5
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Card.Text, {
        as: "h3",
        children: ["$", product.price]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 5
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 4
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 3
  }, _this);
};

_c = Product;
/* harmony default export */ __webpack_exports__["default"] = (Product);

var _c;

$RefreshReg$(_c, "Product");

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


/***/ }),

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
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
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
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 3
  }, _this);
};

_c = Rating;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9kdWN0LmpzIiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1JhdGluZy5qcyJdLCJuYW1lcyI6WyJQcm9kdWN0IiwicHJvZHVjdCIsIl9pZCIsImltYWdlIiwibmFtZSIsInJhdGluZyIsIm51bVJldmlld3MiLCJwcmljZSIsIlJhdGluZyIsInZhbHVlIiwidGV4dCIsImNvbG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsT0FBaUI7QUFBQSxNQUFkQyxPQUFjLFFBQWRBLE9BQWM7QUFDaEMsc0JBQ0MsOERBQUMsaURBQUQ7QUFBTSxhQUFTLEVBQUMsa0JBQWhCO0FBQUEsNEJBQ0M7QUFBRyxVQUFJLHFCQUFjQSxPQUFPLENBQUNDLEdBQXRCLENBQVA7QUFBQSw2QkFDQyw4REFBQyxxREFBRDtBQUFVLFdBQUcsRUFBRUQsT0FBTyxDQUFDRSxLQUF2QjtBQUE4QixlQUFPLEVBQUM7QUFBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERCxlQUtDLDhEQUFDLHNEQUFEO0FBQUEsOEJBQ0M7QUFBRyxZQUFJLHFCQUFjRixPQUFPLENBQUNDLEdBQXRCLENBQVA7QUFBQSwrQkFDQyw4REFBQyx1REFBRDtBQUFZLFlBQUUsRUFBQyxLQUFmO0FBQUEsaUNBQ0M7QUFBQSxzQkFBU0QsT0FBTyxDQUFDRztBQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERCxlQU9DLDhEQUFDLHNEQUFEO0FBQVcsVUFBRSxFQUFDLEtBQWQ7QUFBQSwrQkFDQyw4REFBQyw0Q0FBRDtBQUFRLGVBQUssRUFBRUgsT0FBTyxDQUFDSSxNQUF2QjtBQUErQixjQUFJLFlBQUtKLE9BQU8sQ0FBQ0ssVUFBYjtBQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVBELGVBV0MsOERBQUMsc0RBQUQ7QUFBVyxVQUFFLEVBQUMsSUFBZDtBQUFBLHdCQUFxQkwsT0FBTyxDQUFDTSxLQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFYRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFMRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERDtBQXFCQSxDQXRCRDs7S0FBTVAsTztBQXdCTiwrREFBZUEsT0FBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNCQTs7QUFFQSxJQUFNUSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxPQUE0QjtBQUFBLE1BQXpCQyxLQUF5QixRQUF6QkEsS0FBeUI7QUFBQSxNQUFsQkMsSUFBa0IsUUFBbEJBLElBQWtCO0FBQUEsTUFBWkMsS0FBWSxRQUFaQSxLQUFZO0FBQzFDLHNCQUNDO0FBQUssYUFBUyxFQUFDLFFBQWY7QUFBQSwyQkFDQztBQUFBLDZCQUNDO0FBQ0MsaUJBQVMsRUFDUkYsS0FBSyxJQUFJLENBQVQsR0FDRyxhQURILEdBRUdBLEtBQUssSUFBSSxHQUFULEdBQ0Esc0JBREEsR0FFQTtBQU5MO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUREO0FBY0EsQ0FmRDs7S0FBTUQsTTtBQWlCTiwrREFBZUEsTUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4wMmUzMTMyZGU5OTZmYjMxOTNmZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2FyZCB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XHJcbmltcG9ydCBSYXRpbmcgZnJvbSAnLi9SYXRpbmcnO1xyXG5cclxuY29uc3QgUHJvZHVjdCA9ICh7IHByb2R1Y3QgfSkgPT4ge1xyXG4gcmV0dXJuIChcclxuICA8Q2FyZCBjbGFzc05hbWU9J215LTMgcC0zIHJvdW5kZWQnPlxyXG4gICA8YSBocmVmPXtgL3Byb2R1Y3QvJHtwcm9kdWN0Ll9pZH1gfT5cclxuICAgIDxDYXJkLkltZyBzcmM9e3Byb2R1Y3QuaW1hZ2V9IHZhcmlhbnQ9J3RvcCcgLz5cclxuICAgPC9hPlxyXG5cclxuICAgPENhcmQuQm9keT5cclxuICAgIDxhIGhyZWY9e2AvcHJvZHVjdC8ke3Byb2R1Y3QuX2lkfWB9PlxyXG4gICAgIDxDYXJkLlRpdGxlIGFzPSdkaXYnPlxyXG4gICAgICA8c3Ryb25nPntwcm9kdWN0Lm5hbWV9PC9zdHJvbmc+XHJcbiAgICAgPC9DYXJkLlRpdGxlPlxyXG4gICAgPC9hPlxyXG5cclxuICAgIDxDYXJkLlRleHQgYXM9J2Rpdic+XHJcbiAgICAgPFJhdGluZyB2YWx1ZT17cHJvZHVjdC5yYXRpbmd9IHRleHQ9e2Ake3Byb2R1Y3QubnVtUmV2aWV3c30gcmV2aWV3c2B9IC8+XHJcbiAgICA8L0NhcmQuVGV4dD5cclxuXHJcbiAgICA8Q2FyZC5UZXh0IGFzPSdoMyc+JHtwcm9kdWN0LnByaWNlfTwvQ2FyZC5UZXh0PlxyXG4gICA8L0NhcmQuQm9keT5cclxuICA8L0NhcmQ+XHJcbiApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdDtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IFJhdGluZyA9ICh7IHZhbHVlLCB0ZXh0LCBjb2xvciB9KSA9PiB7XHJcbiByZXR1cm4gKFxyXG4gIDxkaXYgY2xhc3NOYW1lPSdyYXRpbmcnPlxyXG4gICA8c3Bhbj5cclxuICAgIDxpXHJcbiAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgdmFsdWUgPj0gMVxyXG4gICAgICAgPyAnZmFzIGZhLXN0YXInXHJcbiAgICAgICA6IHZhbHVlID49IDAuNVxyXG4gICAgICAgPyAnZmFzIGZhLXN0YXItaGFsZi1hbHQnXHJcbiAgICAgICA6ICdmYXIgZmEtc3RhcidcclxuICAgICB9PjwvaT5cclxuICAgPC9zcGFuPlxyXG4gIDwvZGl2PlxyXG4gKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJhdGluZztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==