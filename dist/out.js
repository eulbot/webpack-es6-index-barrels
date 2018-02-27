/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/app.js":
/*!********************!*\
  !*** ./app/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ \"./app/index.js\");\n\r\n\r\nconsole.log(___WEBPACK_IMPORTED_MODULE_0__[\"Icons\"]);\n\n//# sourceURL=webpack:///./app/app.js?");

/***/ }),

/***/ "./app/iconSet.js":
/*!************************!*\
  !*** ./app/iconSet.js ***!
  \************************/
/*! exports provided: IconSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"IconSet\", function() { return IconSet; });\nconst IconSet = {\r\n    Add: 'icon-add',\r\n    Remove: 'icon-remove'\r\n}\n\n//# sourceURL=webpack:///./app/iconSet.js?");

/***/ }),

/***/ "./app/icons.js":
/*!**********************!*\
  !*** ./app/icons.js ***!
  \**********************/
/*! exports provided: Icons */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Icons\", function() { return Icons; });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ \"./app/index.js\");\n\r\n\r\nconst Icons = {\r\n    Add: ___WEBPACK_IMPORTED_MODULE_0__[\"IconSet\"].Add,\r\n    Remove: ___WEBPACK_IMPORTED_MODULE_0__[\"IconSet\"].Remove\r\n}\n\n//# sourceURL=webpack:///./app/icons.js?");

/***/ }),

/***/ "./app/index.js":
/*!**********************!*\
  !*** ./app/index.js ***!
  \**********************/
/*! exports provided: IconSet, Icons */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _iconSet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./iconSet */ \"./app/iconSet.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"IconSet\", function() { return _iconSet__WEBPACK_IMPORTED_MODULE_0__[\"IconSet\"]; });\n\n/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icons */ \"./app/icons.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Icons\", function() { return _icons__WEBPACK_IMPORTED_MODULE_1__[\"Icons\"]; });\n\n\r\n\n\n//# sourceURL=webpack:///./app/index.js?");

/***/ }),

/***/ 0:
/*!**************************!*\
  !*** multi ./app/app.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./app/app.js */\"./app/app.js\");\n\n\n//# sourceURL=webpack:///multi_./app/app.js?");

/***/ })

/******/ });