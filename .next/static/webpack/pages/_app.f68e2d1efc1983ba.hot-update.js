"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initialState\": function() { return /* binding */ initialState; },\n/* harmony export */   \"addPost\": function() { return /* binding */ addPost; }\n/* harmony export */ });\n/* module decorator */ module = __webpack_require__.hmd(module);\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) {\n        for(var i = 0, arr2 = new Array(arr.length); i < arr.length; i++){\n            arr2[i] = arr[i];\n        }\n        return arr2;\n    }\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _iterableToArray(iter) {\n    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance\");\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {\n        };\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();\n}\nvar initialState = {\n    mainPosts: [\n        {\n            id: 1,\n            User: {\n                id: 1,\n                nickname: '제로초'\n            },\n            content: '첫 번째 게시글 #해시태그 #익스프레스',\n            Images: [\n                {\n                    src: 'https://bookthumb-phinf.pstatic.net/cover/137/995/13799585.jpg?udate=20180726'\n                },\n                {\n                    src: 'https://gimg.gilbut.co.kr/book/BN001958/rn_view_BN001958.jpg'\n                },\n                {\n                    src: 'https://gimg.gilbut.co.kr/book/BN001998/rn_view_BN001998.jpg'\n                }\n            ]\n        }\n    ],\n    Comments: [\n        {\n            User: {\n                nickname: 'nero'\n            },\n            content: 'nero~!~!~!'\n        },\n        {\n            User: {\n                nickname: 'nero2'\n            },\n            content: 'nero2~!~!~!'\n        }, \n    ],\n    imagePaths: [],\n    postedAdd: false\n};\nvar ADD_POST = 'ADD_POST';\nvar dummyPost = {\n    id: 2,\n    content: '!더미데이터',\n    User: {\n        id: 1,\n        nickname: 'ian'\n    },\n    Images: [],\n    Comments: []\n};\nvar addPost = function(data) {\n    return {\n        type: ADD_POST,\n        data: data\n    };\n};\nvar reducer = function(param, action) {\n    var state = param === void 0 ? initialState : param;\n    switch(action.type){\n        case ADD_POST:\n            return _objectSpread({\n            }, state, {\n                ////앞으로 추가해야 반복문돌면서 위에서 포스팅을 로드할 수 있기 때문에 돌기 때문\n                mainPosts: [\n                    action.data\n                ].concat(_toConsumableArray(state.mainPosts)),\n                postAdded: true\n            });\n        default:\n            return state;\n    }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (reducer);\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZWR1Y2Vycy9wb3N0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFTyxHQUFLLENBQUNBLFlBQVksR0FBRSxDQUFDO0lBQ3hCQyxTQUFTLEVBQUUsQ0FBQztRQUFBLENBQUM7WUFDVEMsRUFBRSxFQUFFLENBQUM7WUFDTEMsSUFBSSxFQUFDLENBQUM7Z0JBQ0ZELEVBQUUsRUFBRSxDQUFDO2dCQUNMRSxRQUFRLEVBQUUsQ0FBSztZQUNiLENBQUw7WUFDREMsT0FBTyxFQUFFLENBQXVCO1lBQ0ZDLE1BQXhCLEVBQUUsQ0FBQztnQkFBQSxDQUFDO29CQUNOQyxHQUFHLEVBQUUsQ0FBK0U7Z0JBQ3RGLENBQUM7Z0JBQUUsQ0FBQztvQkFDRkEsR0FBRyxFQUFFLENBQThEO2dCQUNyRSxDQUFDO2dCQUFFLENBQUM7b0JBQ0ZBLEdBQUcsRUFBRSxDQUE4RDtnQkFDckUsQ0FBQztZQUFBLENBQUM7UUFDUixDQUFDO0lBQUEsQ0FBQztJQUNGQyxRQUFRLEVBQUUsQ0FBQztRQUNQLENBQUNMO1lBQUFBLElBQUksRUFBRSxDQUFDO2dCQUNKQyxRQUFRLEVBQUUsQ0FBTTtZQUNwQixDQUFDO1lBQ0RDLE9BQU8sRUFBRSxDQUFZO1FBQ3JCLENBQUM7UUFDRCxDQUFDRjtZQUFBQSxJQUFJLEVBQUUsQ0FBQztnQkFDSkMsUUFBUSxFQUFFLENBQU87WUFDckIsQ0FBQztZQUNEQyxPQUFPLEVBQUUsQ0FBYTtRQUN0QixDQUFDO0lBQ0wsQ0FBQztJQUNESSxVQUFVLEVBQUUsQ0FBQyxDQUFDO0lBQ2RDLFNBQVMsRUFBRSxLQUFLO0FBQ3BCLENBQUM7QUFFRCxHQUFLLENBQUNDLFFBQVEsR0FBRyxDQUFVO0FBRzNCLEdBQUssQ0FBQ0MsU0FBUyxHQUFHLENBQUM7SUFDZlYsRUFBRSxFQUFFLENBQUM7SUFDTEcsT0FBTyxFQUFFLENBQVE7SUFDUEYsSUFBTixFQUFFLENBQUM7UUFDSEQsRUFBRSxFQUFFLENBQUM7UUFDTEUsUUFBUSxFQUFFLENBQUs7SUFDbkIsQ0FBQztJQUNERSxNQUFNLEVBQUUsQ0FBQyxDQUFDO0lBQ1ZFLFFBQVEsRUFBRSxDQUFDLENBQUM7QUFDaEIsQ0FBQztBQUVNLEdBQUssQ0FBQ0ssT0FBTyxHQUFHLFFBQVEsQ0FBUEMsSUFBSSxFQUFLLENBQUM7SUFDOUIsTUFBTSxDQUFDLENBQUM7UUFDSkMsSUFBSSxFQUFFSixRQUFRO1FBQ2RHLElBQUksRUFBSkEsSUFBSTtJQUNKLENBQUM7QUFDVCxDQUFDO0FBRUQsR0FBSyxDQUFDRSxPQUFPLEdBQUcsUUFBUSxRQUFlQyxNQUFNLEVBQUssQ0FBQztRQUFsQ0MsS0FBSyxzQkFBR2xCLFlBQVk7SUFDakMsTUFBTSxDQUFDaUIsTUFBTSxDQUFDRixJQUFJO1FBQ2QsSUFBSSxDQUFDSixRQUFRO1lBQ1QsTUFBTTtlQUNDTyxLQUFLO2dCQUNSLEVBQStDO2dCQUMvQ2pCLFNBQVMsRUFBRSxDQUFDZ0I7b0JBQUFBLE1BQU0sQ0FBQ0gsSUFBSTtnQkFBb0IsQ0FBQyxDQUFqQyxNQUFpQyxvQkFBaEJJLEtBQUssQ0FBQ2pCLFNBQVM7Z0JBQzNDa0IsU0FBUyxFQUFFLElBQUk7OztZQUluQixNQUFNLENBQUNELEtBQUs7O0FBRXhCLENBQUM7QUFFRCwrREFBZUYsT0FBTyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3JlZHVjZXJzL3Bvc3QuanM/NmZmNiJdLCJzb3VyY2VzQ29udGVudCI6WyJcblxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9e1xuICAgIG1haW5Qb3N0czogW3tcbiAgICAgICAgaWQ6IDEsXG4gICAgICAgIFVzZXI6e1xuICAgICAgICAgICAgaWQ6IDEsXG4gICAgICAgICAgICBuaWNrbmFtZTogJ+ygnOuhnOy0iCdcbiAgICAgICAgfSxcbiAgICAgICAgY29udGVudDogJ+yyqyDrsojsp7gg6rKM7Iuc6riAICPtlbTsi5ztg5zqt7ggI+ydteyKpO2UhOugiOyKpCcsXG4gICAgICAgIEltYWdlczogW3tcbiAgICAgICAgICAgIHNyYzogJ2h0dHBzOi8vYm9va3RodW1iLXBoaW5mLnBzdGF0aWMubmV0L2NvdmVyLzEzNy85OTUvMTM3OTk1ODUuanBnP3VkYXRlPTIwMTgwNzI2JyxcbiAgICAgICAgICB9LCB7XG4gICAgICAgICAgICBzcmM6ICdodHRwczovL2dpbWcuZ2lsYnV0LmNvLmtyL2Jvb2svQk4wMDE5NTgvcm5fdmlld19CTjAwMTk1OC5qcGcnLFxuICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgIHNyYzogJ2h0dHBzOi8vZ2ltZy5naWxidXQuY28ua3IvYm9vay9CTjAwMTk5OC9ybl92aWV3X0JOMDAxOTk4LmpwZycsXG4gICAgICAgICAgfV1cbiAgICB9XSxcbiAgICBDb21tZW50czogW1xuICAgICAgICB7VXNlcjoge1xuICAgICAgICAgICAgbmlja25hbWU6ICduZXJvJ1xuICAgICAgICB9LFxuICAgICAgICBjb250ZW50OiAnbmVyb34hfiF+IScsXG4gICAgICAgIH0sXG4gICAgICAgIHtVc2VyOiB7XG4gICAgICAgICAgICBuaWNrbmFtZTogJ25lcm8yJ1xuICAgICAgICB9LFxuICAgICAgICBjb250ZW50OiAnbmVybzJ+IX4hfiEnLFxuICAgICAgICB9LFxuICAgIF0sXG4gICAgaW1hZ2VQYXRoczogW10sXG4gICAgcG9zdGVkQWRkOiBmYWxzZSwgLy/stpTqsIAg7JmE66OMIOyLnFxufTtcblxuY29uc3QgQUREX1BPU1QgPSAnQUREX1BPU1QnO1xuXG5cbmNvbnN0IGR1bW15UG9zdCA9IHtcbiAgICBpZDogMixcbiAgICBjb250ZW50OiAnIeuNlOuvuOuNsOydtO2EsCcsXG4gICAgVXNlcjoge1xuICAgICAgICBpZDogMSxcbiAgICAgICAgbmlja25hbWU6ICdpYW4nXG4gICAgfSxcbiAgICBJbWFnZXM6IFtdLFxuICAgIENvbW1lbnRzOiBbXSxcbn1cblxuZXhwb3J0IGNvbnN0IGFkZFBvc3QgPSAoZGF0YSkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IEFERF9QT1NULFxuICAgICAgICBkYXRhXG4gICAgICAgIH0gICAgXG59XG5cbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xuICAgIHN3aXRjaChhY3Rpb24udHlwZSl7XG4gICAgICAgIGNhc2UgQUREX1BPU1Q6XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIC8vLy/slZ7snLzroZwg7LaU6rCA7ZW07JW8IOuwmOuzteusuOuPjOuptOyEnCDsnITsl5DshJwg7Y+s7Iqk7YyF7J2EIOuhnOuTnO2VoCDsiJgg7J6I6riwIOuVjOusuOyXkCDrj4zquLAg65WM66y4XG4gICAgICAgICAgICAgICAgbWFpblBvc3RzOiBbYWN0aW9uLmRhdGEsIC4uLnN0YXRlLm1haW5Qb3N0c10sXG4gICAgICAgICAgICAgICAgcG9zdEFkZGVkOiB0cnVlLFxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyOyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJtYWluUG9zdHMiLCJpZCIsIlVzZXIiLCJuaWNrbmFtZSIsImNvbnRlbnQiLCJJbWFnZXMiLCJzcmMiLCJDb21tZW50cyIsImltYWdlUGF0aHMiLCJwb3N0ZWRBZGQiLCJBRERfUE9TVCIsImR1bW15UG9zdCIsImFkZFBvc3QiLCJkYXRhIiwidHlwZSIsInJlZHVjZXIiLCJhY3Rpb24iLCJzdGF0ZSIsInBvc3RBZGRlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./reducers/post.js\n");

/***/ })

});