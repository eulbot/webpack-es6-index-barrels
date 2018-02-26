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

/***/ "./app.ts":
/*!****************!*\
  !*** ./app.ts ***!
  \****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ \"./index.ts\");\n\r\nconsole.log(___WEBPACK_IMPORTED_MODULE_0__[\"Icons\"]);\r\n\n\n//# sourceURL=webpack:///./app.ts?");

/***/ }),

/***/ "./iconSet.ts":
/*!********************!*\
  !*** ./iconSet.ts ***!
  \********************/
/*! exports provided: IconSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"IconSet\", function() { return IconSet; });\nvar IconSet = {\r\n    Add: 'icon-add',\r\n    Remove: 'icon-remove'\r\n};\r\n\n\n//# sourceURL=webpack:///./iconSet.ts?");

/***/ }),

/***/ "./icons.ts":
/*!******************!*\
  !*** ./icons.ts ***!
  \******************/
/*! exports provided: Icons */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Icons\", function() { return Icons; });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ \"./index.ts\");\n\r\nvar Icons = {\r\n    Add: ___WEBPACK_IMPORTED_MODULE_0__[\"IconSet\"].Add,\r\n    Remove: ___WEBPACK_IMPORTED_MODULE_0__[\"IconSet\"].Remove\r\n};\r\n\n\n//# sourceURL=webpack:///./icons.ts?");

/***/ }),

/***/ "./index.ts":
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
/*! exports provided: Icons, IconSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icons */ \"./icons.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Icons\", function() { return _icons__WEBPACK_IMPORTED_MODULE_0__[\"Icons\"]; });\n\n/* harmony import */ var _iconSet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iconSet */ \"./iconSet.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"IconSet\", function() { return _iconSet__WEBPACK_IMPORTED_MODULE_1__[\"IconSet\"]; });\n\n\r\n\r\n\n\n//# sourceURL=webpack:///./index.ts?");

/***/ }),

/***/ 0:
/*!**********************!*\
  !*** multi ./app.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./app.ts */\"./app.ts\");\n\n\n//# sourceURL=webpack:///multi_./app.ts?");

/***/ })

/******/ });