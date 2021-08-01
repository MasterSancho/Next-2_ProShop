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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _Rating__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Rating */ "./components/Rating.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\Alex\\Documents\\GitHub\\Next-2_ProShop\\frontend\\components\\Product.js",
    _this = undefined;





var Product = function Product(_ref) {
  var product = _ref.product;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Card, {
    className: "my-3 p-3 rounded",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
      href: "/product/".concat(product._id),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Card.Img, {
        src: product.image,
        variant: "top"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 5
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 4
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Card.Body, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: "/product/".concat(product._id),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Card.Title, {
            as: "div",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("strong", {
              children: product.name
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 16,
              columnNumber: 8
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 15,
            columnNumber: 7
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 6
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 5
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Card.Text, {
        as: "div",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Rating__WEBPACK_IMPORTED_MODULE_2__.default, {
          value: product.rating,
          text: "".concat(product.numReviews, " reviews")
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 6
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 5
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Card.Text, {
        as: "h3",
        children: ["$", product.price]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 5
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 4
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 7,
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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9kdWN0LmpzIl0sIm5hbWVzIjpbIlByb2R1Y3QiLCJwcm9kdWN0IiwiX2lkIiwiaW1hZ2UiLCJuYW1lIiwicmF0aW5nIiwibnVtUmV2aWV3cyIsInByaWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLE9BQU8sR0FBRyxTQUFWQSxPQUFVLE9BQWlCO0FBQUEsTUFBZEMsT0FBYyxRQUFkQSxPQUFjO0FBQ2hDLHNCQUNDLDhEQUFDLGlEQUFEO0FBQU0sYUFBUyxFQUFDLGtCQUFoQjtBQUFBLDRCQUNDLDhEQUFDLGtEQUFEO0FBQU0sVUFBSSxxQkFBY0EsT0FBTyxDQUFDQyxHQUF0QixDQUFWO0FBQUEsNkJBQ0MsOERBQUMscURBQUQ7QUFBVSxXQUFHLEVBQUVELE9BQU8sQ0FBQ0UsS0FBdkI7QUFBOEIsZUFBTyxFQUFDO0FBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREQsZUFLQyw4REFBQyxzREFBRDtBQUFBLDhCQUNDLDhEQUFDLGtEQUFEO0FBQU0sWUFBSSxxQkFBY0YsT0FBTyxDQUFDQyxHQUF0QixDQUFWO0FBQUEsK0JBQ0M7QUFBQSxpQ0FDQyw4REFBQyx1REFBRDtBQUFZLGNBQUUsRUFBQyxLQUFmO0FBQUEsbUNBQ0M7QUFBQSx3QkFBU0QsT0FBTyxDQUFDRztBQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREQsZUFTQyw4REFBQyxzREFBRDtBQUFXLFVBQUUsRUFBQyxLQUFkO0FBQUEsK0JBQ0MsOERBQUMsNENBQUQ7QUFBUSxlQUFLLEVBQUVILE9BQU8sQ0FBQ0ksTUFBdkI7QUFBK0IsY0FBSSxZQUFLSixPQUFPLENBQUNLLFVBQWI7QUFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFURCxlQWFDLDhEQUFDLHNEQUFEO0FBQVcsVUFBRSxFQUFDLElBQWQ7QUFBQSx3QkFBcUJMLE9BQU8sQ0FBQ00sS0FBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBYkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREQ7QUF1QkEsQ0F4QkQ7O0tBQU1QLE87QUEwQk4sK0RBQWVBLE9BQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYjRlYjdlMWU3MjNjMjQ5YTA1MDcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IENhcmQgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xyXG5pbXBvcnQgUmF0aW5nIGZyb20gJy4vUmF0aW5nJztcclxuXHJcbmNvbnN0IFByb2R1Y3QgPSAoeyBwcm9kdWN0IH0pID0+IHtcclxuIHJldHVybiAoXHJcbiAgPENhcmQgY2xhc3NOYW1lPSdteS0zIHAtMyByb3VuZGVkJz5cclxuICAgPExpbmsgaHJlZj17YC9wcm9kdWN0LyR7cHJvZHVjdC5faWR9YH0+XHJcbiAgICA8Q2FyZC5JbWcgc3JjPXtwcm9kdWN0LmltYWdlfSB2YXJpYW50PSd0b3AnIC8+XHJcbiAgIDwvTGluaz5cclxuXHJcbiAgIDxDYXJkLkJvZHk+XHJcbiAgICA8TGluayBocmVmPXtgL3Byb2R1Y3QvJHtwcm9kdWN0Ll9pZH1gfT5cclxuICAgICA8YT5cclxuICAgICAgPENhcmQuVGl0bGUgYXM9J2Rpdic+XHJcbiAgICAgICA8c3Ryb25nPntwcm9kdWN0Lm5hbWV9PC9zdHJvbmc+XHJcbiAgICAgIDwvQ2FyZC5UaXRsZT5cclxuICAgICA8L2E+XHJcbiAgICA8L0xpbms+XHJcblxyXG4gICAgPENhcmQuVGV4dCBhcz0nZGl2Jz5cclxuICAgICA8UmF0aW5nIHZhbHVlPXtwcm9kdWN0LnJhdGluZ30gdGV4dD17YCR7cHJvZHVjdC5udW1SZXZpZXdzfSByZXZpZXdzYH0gLz5cclxuICAgIDwvQ2FyZC5UZXh0PlxyXG5cclxuICAgIDxDYXJkLlRleHQgYXM9J2gzJz4ke3Byb2R1Y3QucHJpY2V9PC9DYXJkLlRleHQ+XHJcbiAgIDwvQ2FyZC5Cb2R5PlxyXG4gIDwvQ2FyZD5cclxuICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9