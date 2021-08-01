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
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\Alex\\Documents\\GitHub\\Next-2_ProShop\\frontend\\components\\Product.js",
    _this = undefined;



var Product = function Product(_ref) {
  var product = _ref.product;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Card, {
    className: "my-3 p-3 rounded",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
      href: "/product/".concat(product._id),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Card.Img, {
        src: product.image,
        variant: "top"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 5
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 4
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Card.Body, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        href: "/product/".concat(product._id),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Card.Title, {
          as: "div",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("strong", {
            children: product.name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 13,
            columnNumber: 7
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 6
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 5
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Card.Text, {
        as: "div",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "my-3",
          children: [product.rating, " from ", product.numReviews, " reviews"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 6
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 5
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Card.Text, {
        as: "h3",
        children: ["$", product.price]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 5
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 4
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9kdWN0LmpzIl0sIm5hbWVzIjpbIlByb2R1Y3QiLCJwcm9kdWN0IiwiX2lkIiwiaW1hZ2UiLCJuYW1lIiwicmF0aW5nIiwibnVtUmV2aWV3cyIsInByaWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsT0FBaUI7QUFBQSxNQUFkQyxPQUFjLFFBQWRBLE9BQWM7QUFDaEMsc0JBQ0MsOERBQUMsaURBQUQ7QUFBTSxhQUFTLEVBQUMsa0JBQWhCO0FBQUEsNEJBQ0M7QUFBRyxVQUFJLHFCQUFjQSxPQUFPLENBQUNDLEdBQXRCLENBQVA7QUFBQSw2QkFDQyw4REFBQyxxREFBRDtBQUFVLFdBQUcsRUFBRUQsT0FBTyxDQUFDRSxLQUF2QjtBQUE4QixlQUFPLEVBQUM7QUFBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERCxlQUtDLDhEQUFDLHNEQUFEO0FBQUEsOEJBQ0M7QUFBRyxZQUFJLHFCQUFjRixPQUFPLENBQUNDLEdBQXRCLENBQVA7QUFBQSwrQkFDQyw4REFBQyx1REFBRDtBQUFZLFlBQUUsRUFBQyxLQUFmO0FBQUEsaUNBQ0M7QUFBQSxzQkFBU0QsT0FBTyxDQUFDRztBQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERCxlQU9DLDhEQUFDLHNEQUFEO0FBQVcsVUFBRSxFQUFDLEtBQWQ7QUFBQSwrQkFDQztBQUFLLG1CQUFTLEVBQUMsTUFBZjtBQUFBLHFCQUNFSCxPQUFPLENBQUNJLE1BRFYsWUFDd0JKLE9BQU8sQ0FBQ0ssVUFEaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVBELGVBYUMsOERBQUMsc0RBQUQ7QUFBVyxVQUFFLEVBQUMsSUFBZDtBQUFBLHdCQUFxQkwsT0FBTyxDQUFDTSxLQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFiRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFMRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERDtBQXVCQSxDQXhCRDs7S0FBTVAsTztBQTBCTiwrREFBZUEsT0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5hYzY4ZDA3MDY0NGY2MjY5ZTU4MS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2FyZCB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XHJcblxyXG5jb25zdCBQcm9kdWN0ID0gKHsgcHJvZHVjdCB9KSA9PiB7XHJcbiByZXR1cm4gKFxyXG4gIDxDYXJkIGNsYXNzTmFtZT0nbXktMyBwLTMgcm91bmRlZCc+XHJcbiAgIDxhIGhyZWY9e2AvcHJvZHVjdC8ke3Byb2R1Y3QuX2lkfWB9PlxyXG4gICAgPENhcmQuSW1nIHNyYz17cHJvZHVjdC5pbWFnZX0gdmFyaWFudD0ndG9wJyAvPlxyXG4gICA8L2E+XHJcblxyXG4gICA8Q2FyZC5Cb2R5PlxyXG4gICAgPGEgaHJlZj17YC9wcm9kdWN0LyR7cHJvZHVjdC5faWR9YH0+XHJcbiAgICAgPENhcmQuVGl0bGUgYXM9J2Rpdic+XHJcbiAgICAgIDxzdHJvbmc+e3Byb2R1Y3QubmFtZX08L3N0cm9uZz5cclxuICAgICA8L0NhcmQuVGl0bGU+XHJcbiAgICA8L2E+XHJcblxyXG4gICAgPENhcmQuVGV4dCBhcz0nZGl2Jz5cclxuICAgICA8ZGl2IGNsYXNzTmFtZT0nbXktMyc+XHJcbiAgICAgIHtwcm9kdWN0LnJhdGluZ30gZnJvbSB7cHJvZHVjdC5udW1SZXZpZXdzfSByZXZpZXdzXHJcbiAgICAgPC9kaXY+XHJcbiAgICA8L0NhcmQuVGV4dD5cclxuXHJcbiAgICA8Q2FyZC5UZXh0IGFzPSdoMyc+JHtwcm9kdWN0LnByaWNlfTwvQ2FyZC5UZXh0PlxyXG4gICA8L0NhcmQuQm9keT5cclxuICA8L0NhcmQ+XHJcbiApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==