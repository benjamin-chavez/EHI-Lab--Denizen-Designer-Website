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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "/packs/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/javascript/packs/denizenDesigner.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/javascript/denizenDesigner/index.js":
/*!*************************************************!*\
  !*** ./app/javascript/denizenDesigner/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /home/benchavez/Code (Ubuntu VM)/Projects/EHI Lab - Denizen Designer Website/EHI-Lab_Denizen-Designer-Website/app/javascript/denizenDesigner/index.js: Support for the experimental syntax 'jsx' isn't currently enabled (11:3):\n\n   9 | \n  10 | ReactDOM.render(\n> 11 |   <Provider store={store}>\n     |   ^\n  12 |     <BrowserRouter>\n  13 |       <Switch>\n  14 |         <Route path=\"/\" component={App} />\n\nAdd @babel/preset-react (https://git.io/JfeDR) to the 'presets' section of your Babel config to enable transformation.\nIf you want to leave it as-is, add @babel/plugin-syntax-jsx (https://git.io/vb4yA) to the 'plugins' section to enable parsing.\n    at Parser._raise (/home/benchavez/Code (Ubuntu VM)/Projects/EHI Lab - Denizen Designer Website/EHI-Lab_Denizen-Designer-Website/node_modules/@babel/parser/lib/index.js:799:17)\n    at Parser.raiseWithData (/home/benchavez/Code (Ubuntu VM)/Projects/EHI Lab - Denizen Designer Website/EHI-Lab_Denizen-Designer-Website/node_modules/@babel/parser/lib/index.js:792:17)\n    at Parser.expectOnePlugin (/home/benchavez/Code (Ubuntu VM)/Projects/EHI Lab - Denizen Designer Website/EHI-Lab_Denizen-Designer-Website/node_modules/@babel/parser/lib/index.js:9104:18)\n    at Parser.parseExprAtom (/home/benchavez/Code (Ubuntu VM)/Projects/EHI Lab - Denizen Designer Website/EHI-Lab_Denizen-Designer-Website/node_modules/@babel/parser/lib/index.js:10410:22)\n    at Parser.parseExprSubscripts (/home/benchavez/Code (Ubuntu VM)/Projects/EHI Lab - Denizen Designer Website/EHI-Lab_Denizen-Designer-Website/node_modules/@babel/parser/lib/index.js:9976:23)\n    at Parser.parseUpdate (/home/benchavez/Code (Ubuntu VM)/Projects/EHI Lab - Denizen Designer Website/EHI-Lab_Denizen-Designer-Website/node_modules/@babel/parser/lib/index.js:9956:21)\n    at Parser.parseMaybeUnary (/home/benchavez/Code (Ubuntu VM)/Projects/EHI Lab - Denizen Designer Website/EHI-Lab_Denizen-Designer-Website/node_modules/@babel/parser/lib/index.js:9945:17)\n    at Parser.parseExprOps (/home/benchavez/Code (Ubuntu VM)/Projects/EHI Lab - Denizen Designer Website/EHI-Lab_Denizen-Designer-Website/node_modules/@babel/parser/lib/index.js:9815:23)\n    at Parser.parseMaybeConditional (/home/benchavez/Code (Ubuntu VM)/Projects/EHI Lab - Denizen Designer Website/EHI-Lab_Denizen-Designer-Website/node_modules/@babel/parser/lib/index.js:9789:23)\n    at Parser.parseMaybeAssign (/home/benchavez/Code (Ubuntu VM)/Projects/EHI Lab - Denizen Designer Website/EHI-Lab_Denizen-Designer-Website/node_modules/@babel/parser/lib/index.js:9752:21)\n    at allowInAnd (/home/benchavez/Code (Ubuntu VM)/Projects/EHI Lab - Denizen Designer Website/EHI-Lab_Denizen-Designer-Website/node_modules/@babel/parser/lib/index.js:9718:39)\n    at Parser.allowInAnd (/home/benchavez/Code (Ubuntu VM)/Projects/EHI Lab - Denizen Designer Website/EHI-Lab_Denizen-Designer-Website/node_modules/@babel/parser/lib/index.js:11448:12)\n    at Parser.parseMaybeAssignAllowIn (/home/benchavez/Code (Ubuntu VM)/Projects/EHI Lab - Denizen Designer Website/EHI-Lab_Denizen-Designer-Website/node_modules/@babel/parser/lib/index.js:9718:17)\n    at Parser.parseExprListItem (/home/benchavez/Code (Ubuntu VM)/Projects/EHI Lab - Denizen Designer Website/EHI-Lab_Denizen-Designer-Website/node_modules/@babel/parser/lib/index.js:11196:18)\n    at Parser.parseCallExpressionArguments (/home/benchavez/Code (Ubuntu VM)/Projects/EHI Lab - Denizen Designer Website/EHI-Lab_Denizen-Designer-Website/node_modules/@babel/parser/lib/index.js:10187:22)\n    at Parser.parseCoverCallAndAsyncArrowHead (/home/benchavez/Code (Ubuntu VM)/Projects/EHI Lab - Denizen Designer Website/EHI-Lab_Denizen-Designer-Website/node_modules/@babel/parser/lib/index.js:10092:29)\n    at Parser.parseSubscript (/home/benchavez/Code (Ubuntu VM)/Projects/EHI Lab - Denizen Designer Website/EHI-Lab_Denizen-Designer-Website/node_modules/@babel/parser/lib/index.js:10028:19)\n    at Parser.parseSubscripts (/home/benchavez/Code (Ubuntu VM)/Projects/EHI Lab - Denizen Designer Website/EHI-Lab_Denizen-Designer-Website/node_modules/@babel/parser/lib/index.js:9999:19)\n    at Parser.parseExprSubscripts (/home/benchavez/Code (Ubuntu VM)/Projects/EHI Lab - Denizen Designer Website/EHI-Lab_Denizen-Designer-Website/node_modules/@babel/parser/lib/index.js:9982:17)\n    at Parser.parseUpdate (/home/benchavez/Code (Ubuntu VM)/Projects/EHI Lab - Denizen Designer Website/EHI-Lab_Denizen-Designer-Website/node_modules/@babel/parser/lib/index.js:9956:21)\n    at Parser.parseMaybeUnary (/home/benchavez/Code (Ubuntu VM)/Projects/EHI Lab - Denizen Designer Website/EHI-Lab_Denizen-Designer-Website/node_modules/@babel/parser/lib/index.js:9945:17)\n    at Parser.parseExprOps (/home/benchavez/Code (Ubuntu VM)/Projects/EHI Lab - Denizen Designer Website/EHI-Lab_Denizen-Designer-Website/node_modules/@babel/parser/lib/index.js:9815:23)\n    at Parser.parseMaybeConditional (/home/benchavez/Code (Ubuntu VM)/Projects/EHI Lab - Denizen Designer Website/EHI-Lab_Denizen-Designer-Website/node_modules/@babel/parser/lib/index.js:9789:23)\n    at Parser.parseMaybeAssign (/home/benchavez/Code (Ubuntu VM)/Projects/EHI Lab - Denizen Designer Website/EHI-Lab_Denizen-Designer-Website/node_modules/@babel/parser/lib/index.js:9752:21)\n    at Parser.parseExpressionBase (/home/benchavez/Code (Ubuntu VM)/Projects/EHI Lab - Denizen Designer Website/EHI-Lab_Denizen-Designer-Website/node_modules/@babel/parser/lib/index.js:9696:23)\n    at allowInAnd (/home/benchavez/Code (Ubuntu VM)/Projects/EHI Lab - Denizen Designer Website/EHI-Lab_Denizen-Designer-Website/node_modules/@babel/parser/lib/index.js:9690:39)\n    at Parser.allowInAnd (/home/benchavez/Code (Ubuntu VM)/Projects/EHI Lab - Denizen Designer Website/EHI-Lab_Denizen-Designer-Website/node_modules/@babel/parser/lib/index.js:11442:16)\n    at Parser.parseExpression (/home/benchavez/Code (Ubuntu VM)/Projects/EHI Lab - Denizen Designer Website/EHI-Lab_Denizen-Designer-Website/node_modules/@babel/parser/lib/index.js:9690:17)\n    at Parser.parseStatementContent (/home/benchavez/Code (Ubuntu VM)/Projects/EHI Lab - Denizen Designer Website/EHI-Lab_Denizen-Designer-Website/node_modules/@babel/parser/lib/index.js:11708:23)\n    at Parser.parseStatement (/home/benchavez/Code (Ubuntu VM)/Projects/EHI Lab - Denizen Designer Website/EHI-Lab_Denizen-Designer-Website/node_modules/@babel/parser/lib/index.js:11577:17)");

/***/ }),

/***/ "./app/javascript/packs/denizenDesigner.js":
/*!*************************************************!*\
  !*** ./app/javascript/packs/denizenDesigner.js ***!
  \*************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _denizenDesigner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../denizenDesigner */ "./app/javascript/denizenDesigner/index.js");
/* harmony import */ var _denizenDesigner__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_denizenDesigner__WEBPACK_IMPORTED_MODULE_0__);


/***/ })

/******/ });
//# sourceMappingURL=denizenDesigner-57e46428392bcda300f8.js.map