"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/clubs/club-item.js":
/*!***************************************!*\
  !*** ./components/clubs/club-item.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ClubItem; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _club_item_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./club-item.module.scss */ \"./components/clubs/club-item.module.scss\");\n/* harmony import */ var _club_item_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_club_item_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n// individual club info on all club page (limited detail)\n// attached to club grid\n\n\n\n\nfunction ClubItem(props) {\n    const { club_name , image , location , description , id  } = props.club;\n    const linkPath = \"/clubs/\".concat(id);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n        className: (_club_item_module_scss__WEBPACK_IMPORTED_MODULE_3___default().club),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n            href: linkPath,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_club_item_module_scss__WEBPACK_IMPORTED_MODULE_3___default().image),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        src: image,\n                        alt: club_name,\n                        width: 300,\n                        height: 200\n                    }, void 0, false, {\n                        fileName: \"/Users/angelapalaszewski/Development/code/phase-5/well-read/client/components/clubs/club-item.js\",\n                        lineNumber: 16,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/angelapalaszewski/Development/code/phase-5/well-read/client/components/clubs/club-item.js\",\n                    lineNumber: 15,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_club_item_module_scss__WEBPACK_IMPORTED_MODULE_3___default().content),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                            children: club_name\n                        }, void 0, false, {\n                            fileName: \"/Users/angelapalaszewski/Development/code/phase-5/well-read/client/components/clubs/club-item.js\",\n                            lineNumber: 19,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n                            children: location\n                        }, void 0, false, {\n                            fileName: \"/Users/angelapalaszewski/Development/code/phase-5/well-read/client/components/clubs/club-item.js\",\n                            lineNumber: 20,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: description\n                        }, void 0, false, {\n                            fileName: \"/Users/angelapalaszewski/Development/code/phase-5/well-read/client/components/clubs/club-item.js\",\n                            lineNumber: 21,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/angelapalaszewski/Development/code/phase-5/well-read/client/components/clubs/club-item.js\",\n                    lineNumber: 18,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/angelapalaszewski/Development/code/phase-5/well-read/client/components/clubs/club-item.js\",\n            lineNumber: 14,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/angelapalaszewski/Development/code/phase-5/well-read/client/components/clubs/club-item.js\",\n        lineNumber: 13,\n        columnNumber: 9\n    }, this);\n}\n_c = ClubItem;\nvar _c;\n$RefreshReg$(_c, \"ClubItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2NsdWJzL2NsdWItaXRlbS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSx5REFBeUQ7QUFDekQsd0JBQXdCOztBQUNLO0FBQ0U7QUFFYztBQUc5QixTQUFTRyxTQUFTQyxLQUFLO0lBQ2xDLE1BQU0sRUFBRUMsVUFBUyxFQUFFQyxNQUFLLEVBQUVDLFNBQVEsRUFBRUMsWUFBVyxFQUFFQyxHQUFFLEVBQUUsR0FBR0wsTUFBTU07SUFDOUQsTUFBTUMsV0FBVyxVQUFhLE9BQUhGO0lBQzNCLHFCQUNJLDhEQUFDRztRQUFHQyxXQUFXWCxvRUFBV1E7a0JBQ3RCLDRFQUFDVixrREFBSUE7WUFBQ2MsTUFBTUg7OzhCQUNSLDhEQUFDSTtvQkFBSUYsV0FBV1gscUVBQVlJOzhCQUN4Qiw0RUFBQ0wsbURBQUtBO3dCQUFDZSxLQUFLVjt3QkFBT1csS0FBS1o7d0JBQVdhLE9BQU87d0JBQUtDLFFBQVE7Ozs7Ozs7Ozs7OzhCQUUzRCw4REFBQ0o7b0JBQUlGLFdBQVdYLHVFQUFja0I7O3NDQUMxQiw4REFBQ0M7c0NBQUloQjs7Ozs7O3NDQUNMLDhEQUFDaUI7c0NBQUlmOzs7Ozs7c0NBQ0wsOERBQUNnQjtzQ0FBR2Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS3hCO0tBakJ3QkwiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jbHVicy9jbHViLWl0ZW0uanM/YTNkNCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbmRpdmlkdWFsIGNsdWIgaW5mbyBvbiBhbGwgY2x1YiBwYWdlIChsaW1pdGVkIGRldGFpbClcbi8vIGF0dGFjaGVkIHRvIGNsdWIgZ3JpZFxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2NsdWItaXRlbS5tb2R1bGUuc2Nzcyc7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2x1Ykl0ZW0ocHJvcHMpIHtcbiAgICBjb25zdCB7IGNsdWJfbmFtZSwgaW1hZ2UsIGxvY2F0aW9uLCBkZXNjcmlwdGlvbiwgaWQgfSA9IHByb3BzLmNsdWI7XG4gICAgY29uc3QgbGlua1BhdGggPSBgL2NsdWJzLyR7aWR9YDtcbiAgICByZXR1cm4gKFxuICAgICAgICA8bGkgY2xhc3NOYW1lPXtzdHlsZXMuY2x1Yn0+XG4gICAgICAgICAgICA8TGluayBocmVmPXtsaW5rUGF0aH0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbWFnZX0+XG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9e2ltYWdlfSBhbHQ9e2NsdWJfbmFtZX0gd2lkdGg9ezMwMH0gaGVpZ2h0PXsyMDB9Lz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRlbnR9PlxuICAgICAgICAgICAgICAgICAgICA8aDQ+e2NsdWJfbmFtZX08L2g0PlxuICAgICAgICAgICAgICAgICAgICA8aDY+e2xvY2F0aW9ufTwvaDY+XG4gICAgICAgICAgICAgICAgICAgIDxwPntkZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvbGk+XG4gICAgKVxufSJdLCJuYW1lcyI6WyJMaW5rIiwiSW1hZ2UiLCJzdHlsZXMiLCJDbHViSXRlbSIsInByb3BzIiwiY2x1Yl9uYW1lIiwiaW1hZ2UiLCJsb2NhdGlvbiIsImRlc2NyaXB0aW9uIiwiaWQiLCJjbHViIiwibGlua1BhdGgiLCJsaSIsImNsYXNzTmFtZSIsImhyZWYiLCJkaXYiLCJzcmMiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsImNvbnRlbnQiLCJoNCIsImg2IiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/clubs/club-item.js\n"));

/***/ })

});