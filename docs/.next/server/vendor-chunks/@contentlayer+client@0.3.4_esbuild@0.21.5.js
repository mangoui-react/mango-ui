"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@contentlayer+client@0.3.4_esbuild@0.21.5";
exports.ids = ["vendor-chunks/@contentlayer+client@0.3.4_esbuild@0.21.5"];
exports.modules = {

/***/ "(rsc)/../node_modules/.pnpm/@contentlayer+client@0.3.4_esbuild@0.21.5/node_modules/@contentlayer/client/dist/guards.js":
/*!************************************************************************************************************************!*\
  !*** ../node_modules/.pnpm/@contentlayer+client@0.3.4_esbuild@0.21.5/node_modules/@contentlayer/client/dist/guards.js ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   guards: () => (/* binding */ guards),\n/* harmony export */   isType: () => (/* binding */ isType)\n/* harmony export */ });\nfunction is(typeName, _) {\n    if (_) {\n        if (Array.isArray(typeName)) {\n            // TODO make type field name dynamic (probably will require to code-gen the guard function)\n            return typeName.some((typeName_) => _?.type === typeName_);\n        }\n        else {\n            return typeName === _?.type;\n        }\n    }\n    else {\n        return (_) => is(typeName, _);\n    }\n}\nconst isType = is;\nconst guards = {\n    is,\n    // isType,\n    // hasAllFields,\n    // allFields,\n    hasField,\n    // withField,\n};\nfunction hasField(_, property) {\n    return _.hasOwnProperty(property);\n}\n//# sourceMappingURL=guards.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0Bjb250ZW50bGF5ZXIrY2xpZW50QDAuMy40X2VzYnVpbGRAMC4yMS41L25vZGVfbW9kdWxlcy9AY29udGVudGxheWVyL2NsaWVudC9kaXN0L2d1YXJkcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNBO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2RvY3MvLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0Bjb250ZW50bGF5ZXIrY2xpZW50QDAuMy40X2VzYnVpbGRAMC4yMS41L25vZGVfbW9kdWxlcy9AY29udGVudGxheWVyL2NsaWVudC9kaXN0L2d1YXJkcy5qcz83NmRjIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGlzKHR5cGVOYW1lLCBfKSB7XG4gICAgaWYgKF8pIHtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodHlwZU5hbWUpKSB7XG4gICAgICAgICAgICAvLyBUT0RPIG1ha2UgdHlwZSBmaWVsZCBuYW1lIGR5bmFtaWMgKHByb2JhYmx5IHdpbGwgcmVxdWlyZSB0byBjb2RlLWdlbiB0aGUgZ3VhcmQgZnVuY3Rpb24pXG4gICAgICAgICAgICByZXR1cm4gdHlwZU5hbWUuc29tZSgodHlwZU5hbWVfKSA9PiBfPy50eXBlID09PSB0eXBlTmFtZV8pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHR5cGVOYW1lID09PSBfPy50eXBlO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gKF8pID0+IGlzKHR5cGVOYW1lLCBfKTtcbiAgICB9XG59XG5leHBvcnQgY29uc3QgaXNUeXBlID0gaXM7XG5leHBvcnQgY29uc3QgZ3VhcmRzID0ge1xuICAgIGlzLFxuICAgIC8vIGlzVHlwZSxcbiAgICAvLyBoYXNBbGxGaWVsZHMsXG4gICAgLy8gYWxsRmllbGRzLFxuICAgIGhhc0ZpZWxkLFxuICAgIC8vIHdpdGhGaWVsZCxcbn07XG5mdW5jdGlvbiBoYXNGaWVsZChfLCBwcm9wZXJ0eSkge1xuICAgIHJldHVybiBfLmhhc093blByb3BlcnR5KHByb3BlcnR5KTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWd1YXJkcy5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/../node_modules/.pnpm/@contentlayer+client@0.3.4_esbuild@0.21.5/node_modules/@contentlayer/client/dist/guards.js\n");

/***/ }),

/***/ "(rsc)/../node_modules/.pnpm/@contentlayer+client@0.3.4_esbuild@0.21.5/node_modules/@contentlayer/client/dist/index.js":
/*!***********************************************************************************************************************!*\
  !*** ../node_modules/.pnpm/@contentlayer+client@0.3.4_esbuild@0.21.5/node_modules/@contentlayer/client/dist/index.js ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   guards: () => (/* reexport safe */ _guards_js__WEBPACK_IMPORTED_MODULE_0__.guards),\n/* harmony export */   isType: () => (/* reexport safe */ _guards_js__WEBPACK_IMPORTED_MODULE_0__.isType),\n/* harmony export */   pick: () => (/* reexport safe */ _utils_js__WEBPACK_IMPORTED_MODULE_1__.pick)\n/* harmony export */ });\n/* harmony import */ var _guards_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./guards.js */ \"(rsc)/../node_modules/.pnpm/@contentlayer+client@0.3.4_esbuild@0.21.5/node_modules/@contentlayer/client/dist/guards.js\");\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils.js */ \"(rsc)/../node_modules/.pnpm/@contentlayer+client@0.3.4_esbuild@0.21.5/node_modules/@contentlayer/client/dist/utils.js\");\n\n\n//# sourceMappingURL=index.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0Bjb250ZW50bGF5ZXIrY2xpZW50QDAuMy40X2VzYnVpbGRAMC4yMS41L25vZGVfbW9kdWxlcy9AY29udGVudGxheWVyL2NsaWVudC9kaXN0L2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQTRCO0FBQ0Q7QUFDM0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kb2NzLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9AY29udGVudGxheWVyK2NsaWVudEAwLjMuNF9lc2J1aWxkQDAuMjEuNS9ub2RlX21vZHVsZXMvQGNvbnRlbnRsYXllci9jbGllbnQvZGlzdC9pbmRleC5qcz82YWZiIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCAqIGZyb20gJy4vZ3VhcmRzLmpzJztcbmV4cG9ydCAqIGZyb20gJy4vdXRpbHMuanMnO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/../node_modules/.pnpm/@contentlayer+client@0.3.4_esbuild@0.21.5/node_modules/@contentlayer/client/dist/index.js\n");

/***/ }),

/***/ "(rsc)/../node_modules/.pnpm/@contentlayer+client@0.3.4_esbuild@0.21.5/node_modules/@contentlayer/client/dist/utils.js":
/*!***********************************************************************************************************************!*\
  !*** ../node_modules/.pnpm/@contentlayer+client@0.3.4_esbuild@0.21.5/node_modules/@contentlayer/client/dist/utils.js ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   pick: () => (/* binding */ pick)\n/* harmony export */ });\nconst pick = (obj, keys) => {\n    return keys.reduce((acc, key) => {\n        acc[key] = obj[key];\n        return acc;\n    }, {});\n};\n//# sourceMappingURL=utils.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0Bjb250ZW50bGF5ZXIrY2xpZW50QDAuMy40X2VzYnVpbGRAMC4yMS41L25vZGVfbW9kdWxlcy9AY29udGVudGxheWVyL2NsaWVudC9kaXN0L3V0aWxzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEtBQUssSUFBSTtBQUNUO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kb2NzLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9AY29udGVudGxheWVyK2NsaWVudEAwLjMuNF9lc2J1aWxkQDAuMjEuNS9ub2RlX21vZHVsZXMvQGNvbnRlbnRsYXllci9jbGllbnQvZGlzdC91dGlscy5qcz82OWE2Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBwaWNrID0gKG9iaiwga2V5cykgPT4ge1xuICAgIHJldHVybiBrZXlzLnJlZHVjZSgoYWNjLCBrZXkpID0+IHtcbiAgICAgICAgYWNjW2tleV0gPSBvYmpba2V5XTtcbiAgICAgICAgcmV0dXJuIGFjYztcbiAgICB9LCB7fSk7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXRpbHMuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/../node_modules/.pnpm/@contentlayer+client@0.3.4_esbuild@0.21.5/node_modules/@contentlayer/client/dist/utils.js\n");

/***/ })

};
;