"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/users/[id]/details/update/page/page",{

/***/ "(app-pages-browser)/./src/app/users/[id]/details/update/page/page.tsx":
/*!*********************************************************!*\
  !*** ./src/app/users/[id]/details/update/page/page.tsx ***!
  \*********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Page; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction Page() {\n    _s();\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const handleSubmit = (event)=>{\n        event.preventDefault();\n        axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].post(\"/users\", setUser).then((res)=>{\n            router.push(\"/\");\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Update\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Lenovo\\\\OneDrive\\\\Рабочий стол\\\\Archive\\\\src\\\\app\\\\users\\\\[id]\\\\details\\\\update\\\\page\\\\page.tsx\",\n                lineNumber: 25,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmit,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            value: user === null || user === void 0 ? void 0 : user.name,\n                            onChange: (e)=>setUser({\n                                    name: e.target.value\n                                })\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Lenovo\\\\OneDrive\\\\Рабочий стол\\\\Archive\\\\src\\\\app\\\\users\\\\[id]\\\\details\\\\update\\\\page\\\\page.tsx\",\n                            lineNumber: 28,\n                            columnNumber: 17\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Lenovo\\\\OneDrive\\\\Рабочий стол\\\\Archive\\\\src\\\\app\\\\users\\\\[id]\\\\details\\\\update\\\\page\\\\page.tsx\",\n                        lineNumber: 27,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            value: user === null || user === void 0 ? void 0 : user.surname,\n                            onChange: (e)=>setUser({\n                                    surname: e.target.value\n                                })\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Lenovo\\\\OneDrive\\\\Рабочий стол\\\\Archive\\\\src\\\\app\\\\users\\\\[id]\\\\details\\\\update\\\\page\\\\page.tsx\",\n                            lineNumber: 35,\n                            columnNumber: 17\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Lenovo\\\\OneDrive\\\\Рабочий стол\\\\Archive\\\\src\\\\app\\\\users\\\\[id]\\\\details\\\\update\\\\page\\\\page.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"number\",\n                            step: 15000,\n                            value: user === null || user === void 0 ? void 0 : user.salary,\n                            onChange: (e)=>setUser({\n                                    user,\n                                    salary: +e.target.value\n                                })\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Lenovo\\\\OneDrive\\\\Рабочий стол\\\\Archive\\\\src\\\\app\\\\users\\\\[id]\\\\details\\\\update\\\\page\\\\page.tsx\",\n                            lineNumber: 42,\n                            columnNumber: 17\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Lenovo\\\\OneDrive\\\\Рабочий стол\\\\Archive\\\\src\\\\app\\\\users\\\\[id]\\\\details\\\\update\\\\page\\\\page.tsx\",\n                        lineNumber: 41,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        children: \"save\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Lenovo\\\\OneDrive\\\\Рабочий стол\\\\Archive\\\\src\\\\app\\\\users\\\\[id]\\\\details\\\\update\\\\page\\\\page.tsx\",\n                        lineNumber: 49,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Lenovo\\\\OneDrive\\\\Рабочий стол\\\\Archive\\\\src\\\\app\\\\users\\\\[id]\\\\details\\\\update\\\\page\\\\page.tsx\",\n                lineNumber: 26,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Page, \"JHzGuRHxVEIDTnBtb1VnHzPz9x0=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = Page;\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvdXNlcnMvW2lkXS9kZXRhaWxzL3VwZGF0ZS9wYWdlL3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBSXlCO0FBQ2tCO0FBQ1g7QUFFakIsU0FBU0c7O0lBRXBCLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHSCwrQ0FBUUE7SUFHaEMsTUFBTUksU0FBU0wsMERBQVNBO0lBRXhCLE1BQU1NLGVBQWUsQ0FBQ0M7UUFDbEJBLE1BQU1DLGNBQWM7UUFDcEJULDZDQUFLQSxDQUNKVSxJQUFJLENBQUMsVUFBVUwsU0FDZk0sSUFBSSxDQUFDQyxDQUFBQTtZQUNGTixPQUFPTyxJQUFJLENBQUM7UUFDaEI7SUFDSjtJQUNBLHFCQUFPOzswQkFDSCw4REFBQ0M7MEJBQUc7Ozs7OzswQkFDSiw4REFBQ0M7Z0JBQUtDLFVBQVVUOztrQ0FDWiw4REFBQ1U7a0NBQ0csNEVBQUNDOzRCQUNHQyxNQUFLOzRCQUNUQyxLQUFLLEVBQUVoQixpQkFBQUEsMkJBQUFBLEtBQU1pQixJQUFJOzRCQUNqQkMsVUFBVUMsQ0FBQUEsSUFBS2xCLFFBQVE7b0NBQUNnQixNQUFLRSxFQUFFQyxNQUFNLENBQUNKLEtBQUs7Z0NBQUE7Ozs7Ozs7Ozs7O2tDQUcvQyw4REFBQ0g7a0NBQ0csNEVBQUNDOzRCQUNHQyxNQUFLOzRCQUNMQyxLQUFLLEVBQUVoQixpQkFBQUEsMkJBQUFBLEtBQU1xQixPQUFPOzRCQUNwQkgsVUFBVUMsQ0FBQUEsSUFBS2xCLFFBQVE7b0NBQUNvQixTQUFRRixFQUFFQyxNQUFNLENBQUNKLEtBQUs7Z0NBQUE7Ozs7Ozs7Ozs7O2tDQUd0RCw4REFBQ0g7a0NBQ0csNEVBQUNDOzRCQUNHQyxNQUFLOzRCQUNMTyxNQUFNOzRCQUNOTixLQUFLLEVBQUVoQixpQkFBQUEsMkJBQUFBLEtBQU11QixNQUFNOzRCQUNuQkwsVUFBVUMsQ0FBQUEsSUFBS2xCLFFBQVE7b0NBQUNEO29DQUFNdUIsUUFBUSxDQUFDSixFQUFFQyxNQUFNLENBQUNKLEtBQUs7Z0NBQUE7Ozs7Ozs7Ozs7O2tDQUc3RCw4REFBQ1E7a0NBQU87Ozs7Ozs7Ozs7Ozs7O0FBR3BCO0dBM0N3QnpCOztRQUtMRixzREFBU0E7OztLQUxKRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3VzZXJzL1tpZF0vZGV0YWlscy91cGRhdGUvcGFnZS9wYWdlLnRzeD9hNWY5Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXHJcblxyXG5pbXBvcnQgeyBnZXRVc2VyQnlJZCB9IGZyb20gXCJAL2xpYi9hcGlcIlxyXG5pbXBvcnQgeyBJbnB1dFVzZXIgfSBmcm9tIFwiQC9saWIvdHlwZXNcIlxyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCJcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiXHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBhZ2UoKSB7XHJcblxyXG4gICAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGU8SVVzZXI+KClcclxuICAgIFxyXG5cclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcblxyXG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGV2ZW50OlJlYWN0LkZvcm1FdmVudCkgPT4ge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICBheGlvc1xyXG4gICAgICAgIC5wb3N0KFwiL3VzZXJzXCIsIHNldFVzZXIpXHJcbiAgICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgcm91dGVyLnB1c2goXCIvXCIpXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIHJldHVybiA8PlxyXG4gICAgICAgIDxoMT5VcGRhdGU8L2gxPlxyXG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3VzZXI/Lm5hbWV9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRVc2VyKHtuYW1lOmUudGFyZ2V0LnZhbHVlfSl9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dXNlcj8uc3VybmFtZX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRVc2VyKHtzdXJuYW1lOmUudGFyZ2V0LnZhbHVlfSl9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0ZXA9ezE1MDAwfVxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt1c2VyPy5zYWxhcnl9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0VXNlcih7dXNlciwgc2FsYXJ5OiArZS50YXJnZXQudmFsdWV9KX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8YnV0dG9uPnNhdmU8L2J1dHRvbj5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICA8Lz5cclxufSJdLCJuYW1lcyI6WyJheGlvcyIsInVzZVJvdXRlciIsInVzZVN0YXRlIiwiUGFnZSIsInVzZXIiLCJzZXRVc2VyIiwicm91dGVyIiwiaGFuZGxlU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInBvc3QiLCJ0aGVuIiwicmVzIiwicHVzaCIsImgxIiwiZm9ybSIsIm9uU3VibWl0IiwiZGl2IiwiaW5wdXQiLCJ0eXBlIiwidmFsdWUiLCJuYW1lIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0Iiwic3VybmFtZSIsInN0ZXAiLCJzYWxhcnkiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/users/[id]/details/update/page/page.tsx\n"));

/***/ })

});