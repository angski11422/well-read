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

/***/ "./components/clubs/clubs-grid.js":
/*!****************************************!*\
  !*** ./components/clubs/clubs-grid.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ClubsGrid; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _club_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./club-item */ \"./components/clubs/club-item.js\");\n/* harmony import */ var _clubs_grid_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./clubs-grid.module.scss */ \"./components/clubs/clubs-grid.module.scss\");\n/* harmony import */ var _clubs_grid_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_clubs_grid_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n// grid layout for all clubs\n// attached to all clubs comp\n\n\n\nfunction ClubsGrid(props) {\n    const { clubs  } = props;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n        className: (_clubs_grid_module_scss__WEBPACK_IMPORTED_MODULE_2___default().grid),\n        children: clubs.map((club)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_club_item__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                club: club\n            }, club.id, false, {\n                fileName: \"/Users/angelapalaszewski/Development/code/phase-5/well-read/client/components/clubs/clubs-grid.js\",\n                lineNumber: 15,\n                columnNumber: 17\n            }, this))\n    }, void 0, false, {\n        fileName: \"/Users/angelapalaszewski/Development/code/phase-5/well-read/client/components/clubs/clubs-grid.js\",\n        lineNumber: 13,\n        columnNumber: 9\n    }, this);\n}\n_c = ClubsGrid;\nvar _c;\n$RefreshReg$(_c, \"ClubsGrid\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2NsdWJzL2NsdWJzLWdyaWQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0EsNEJBQTRCO0FBQzVCLDZCQUE2Qjs7QUFDTTtBQUNVO0FBRzlCLFNBQVNFLFVBQVVDLEtBQUs7SUFDbkMsTUFBTSxFQUFFQyxNQUFLLEVBQUUsR0FBR0Q7SUFHbEIscUJBQ0ksOERBQUNFO1FBQUdDLFdBQVdMLHFFQUFXTTtrQkFDckJILE1BQU1JLElBQUksQ0FBQ0MscUJBQ1IsOERBQUNULGtEQUFRQTtnQkFBZVMsTUFBTUE7ZUFBZkEsS0FBS0M7Ozs7Ozs7Ozs7QUFJcEM7S0FYd0JSIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvY2x1YnMvY2x1YnMtZ3JpZC5qcz80M2NlIl0sInNvdXJjZXNDb250ZW50IjpbIlxuLy8gZ3JpZCBsYXlvdXQgZm9yIGFsbCBjbHVic1xuLy8gYXR0YWNoZWQgdG8gYWxsIGNsdWJzIGNvbXBcbmltcG9ydCBDbHViSXRlbSBmcm9tICcuL2NsdWItaXRlbSc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vY2x1YnMtZ3JpZC5tb2R1bGUuc2NzcydcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDbHVic0dyaWQocHJvcHMpIHtcbiAgICBjb25zdCB7IGNsdWJzIH0gPSBwcm9wcztcbiAgICBcblxuICAgIHJldHVybiAoXG4gICAgICAgIDx1bCBjbGFzc05hbWU9e3N0eWxlcy5ncmlkfT5cbiAgICAgICAgICAgIHtjbHVicy5tYXAoKGNsdWIpID0+IChcbiAgICAgICAgICAgICAgICA8Q2x1Ykl0ZW0ga2V5PXtjbHViLmlkfSBjbHViPXtjbHVifS8+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgPC91bD5cbiAgICApXG59Il0sIm5hbWVzIjpbIkNsdWJJdGVtIiwic3R5bGVzIiwiQ2x1YnNHcmlkIiwicHJvcHMiLCJjbHVicyIsInVsIiwiY2xhc3NOYW1lIiwiZ3JpZCIsIm1hcCIsImNsdWIiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/clubs/clubs-grid.js\n"));

/***/ })

});