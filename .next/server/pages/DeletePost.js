module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/DeletePost.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/utilDeletePost.js":
/*!*******************************!*\
  !*** ./lib/utilDeletePost.js ***!
  \*******************************/
/*! exports provided: deleteId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"deleteId\", function() { return deleteId; });\n/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! isomorphic-fetch */ \"isomorphic-fetch\");\n/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction deleteId(id) {\n  console.log(\"1\");\n  return fetch(`http://localhost:3001/deleteEntry?journalID=${id}`, {\n    method: 'DELETE',\n    headers: {\n      'Content-Type': 'application/json'\n    },\n    body: JSON.stringify({\n      id\n    })\n  });\n  console.log(\"4\");\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvdXRpbERlbGV0ZVBvc3QuanM/NjQ0MyJdLCJuYW1lcyI6WyJkZWxldGVJZCIsImlkIiwiY29uc29sZSIsImxvZyIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRU8sU0FBU0EsUUFBVCxDQUFrQkMsRUFBbEIsRUFBc0I7QUFDNUJDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLEdBQVo7QUFDQSxTQUFPQyxLQUFLLENBQUUsK0NBQThDSCxFQUFHLEVBQW5ELEVBQXNEO0FBQ2pFSSxVQUFNLEVBQUUsUUFEeUQ7QUFFakVDLFdBQU8sRUFBRTtBQUFFLHNCQUFnQjtBQUFsQixLQUZ3RDtBQUdqRUMsUUFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZTtBQUFFUjtBQUFGLEtBQWY7QUFIMkQsR0FBdEQsQ0FBWjtBQUtBQyxTQUFPLENBQUNDLEdBQVIsQ0FBWSxHQUFaO0FBQ0EiLCJmaWxlIjoiLi9saWIvdXRpbERlbGV0ZVBvc3QuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCJpc29tb3JwaGljLWZldGNoXCJcblxuZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZUlkKGlkKSB7XG5cdGNvbnNvbGUubG9nKFwiMVwiKTtcblx0cmV0dXJuIGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjMwMDEvZGVsZXRlRW50cnk/am91cm5hbElEPSR7aWR9YCwge1xuXHRcdG1ldGhvZDogJ0RFTEVURScsXG5cdFx0aGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXG5cdFx0Ym9keTogSlNPTi5zdHJpbmdpZnkoeyBpZCB9KVxuXHR9KVxuXHRjb25zb2xlLmxvZyhcIjRcIik7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/utilDeletePost.js\n");

/***/ }),

/***/ "./pages/DeletePost.js":
/*!*****************************!*\
  !*** ./pages/DeletePost.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_utilDeletePost_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/utilDeletePost.js */ \"./lib/utilDeletePost.js\");\n\nvar _jsxFileName = \"/Users/Austin/cpsc430/Austin/goodTimeJournal/pages/DeletePost.js\";\n\n\n\nfunction DeleteUser() {\n  const [id, setId] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(\"\");\n\n  function handleUpdate(evt) {\n    setId(evt.target.value);\n  }\n\n  async function handleDelete(evt) {\n    console.log(id);\n    await Object(_lib_utilDeletePost_js__WEBPACK_IMPORTED_MODULE_2__[\"deleteId\"])(id);\n    alert(\"Deleted!\");\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h4\", {\n      children: \"Enter post id to delete:\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 3\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n        type: \"text\",\n        value: id,\n        onChange: handleUpdate\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 6\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 3\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n      className: \"button-style\",\n      onClick: handleDelete,\n      children: \"Delete Post\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 3\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 17,\n    columnNumber: 9\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (DeleteUser);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9EZWxldGVQb3N0LmpzP2VhN2EiXSwibmFtZXMiOlsiRGVsZXRlVXNlciIsImlkIiwic2V0SWQiLCJSZWFjdCIsInVzZVN0YXRlIiwiaGFuZGxlVXBkYXRlIiwiZXZ0IiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVEZWxldGUiLCJjb25zb2xlIiwibG9nIiwiZGVsZXRlSWQiLCJhbGVydCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBOztBQUNBLFNBQVNBLFVBQVQsR0FBc0I7QUFDckIsUUFBTSxDQUFDQyxFQUFELEVBQUtDLEtBQUwsSUFBY0MsNENBQUssQ0FBQ0MsUUFBTixDQUFlLEVBQWYsQ0FBcEI7O0FBRUEsV0FBU0MsWUFBVCxDQUFzQkMsR0FBdEIsRUFBMkI7QUFDMUJKLFNBQUssQ0FBQ0ksR0FBRyxDQUFDQyxNQUFKLENBQVdDLEtBQVosQ0FBTDtBQUNBOztBQUVELGlCQUFlQyxZQUFmLENBQTRCSCxHQUE1QixFQUFpQztBQUNoQ0ksV0FBTyxDQUFDQyxHQUFSLENBQVlWLEVBQVo7QUFDQSxVQUFNVyx1RUFBUSxDQUFDWCxFQUFELENBQWQ7QUFDQVksU0FBSyxDQUFDLFVBQUQsQ0FBTDtBQUNBOztBQUdELHNCQUFPO0FBQUEsNEJBQ047QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFETSxlQUVOO0FBQUEsNkJBQUc7QUFBTyxZQUFJLEVBQUMsTUFBWjtBQUFtQixhQUFLLEVBQUVaLEVBQTFCO0FBQThCLGdCQUFRLEVBQUVJO0FBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBSDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRk0sZUFHTjtBQUFRLGVBQVMsRUFBQyxjQUFsQjtBQUFpQyxhQUFPLEVBQUVJLFlBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSE07QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUFLQTs7QUFFY1QseUVBQWYiLCJmaWxlIjoiLi9wYWdlcy9EZWxldGVQb3N0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGRlbGV0ZUlkIH0gZnJvbSBcIi4uL2xpYi91dGlsRGVsZXRlUG9zdC5qc1wiO1xuZnVuY3Rpb24gRGVsZXRlVXNlcigpIHtcblx0Y29uc3QgW2lkLCBzZXRJZF0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcblxuXHRmdW5jdGlvbiBoYW5kbGVVcGRhdGUoZXZ0KSB7XG5cdFx0c2V0SWQoZXZ0LnRhcmdldC52YWx1ZSk7XG5cdH1cblxuXHRhc3luYyBmdW5jdGlvbiBoYW5kbGVEZWxldGUoZXZ0KSB7XG5cdFx0Y29uc29sZS5sb2coaWQpO1xuXHRcdGF3YWl0IGRlbGV0ZUlkKGlkKTtcblx0XHRhbGVydChcIkRlbGV0ZWQhXCIpO1xuXHR9XG5cblxuXHRyZXR1cm4gPGRpdj5cblx0XHQ8aDQ+RW50ZXIgcG9zdCBpZCB0byBkZWxldGU6PC9oND5cblx0XHQ8cD48aW5wdXQgdHlwZT0ndGV4dCcgdmFsdWU9e2lkfSBvbkNoYW5nZT17aGFuZGxlVXBkYXRlfSAvPjwvcD5cblx0XHQ8YnV0dG9uIGNsYXNzTmFtZT0nYnV0dG9uLXN0eWxlJyBvbkNsaWNrPXtoYW5kbGVEZWxldGV9PkRlbGV0ZSBQb3N0PC9idXR0b24+XG5cdDwvZGl2PlxufVxuXG5leHBvcnQgZGVmYXVsdCBEZWxldGVVc2VyOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/DeletePost.js\n");

/***/ }),

/***/ "isomorphic-fetch":
/*!***********************************!*\
  !*** external "isomorphic-fetch" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"isomorphic-fetch\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpc29tb3JwaGljLWZldGNoXCI/NzNhOCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJpc29tb3JwaGljLWZldGNoLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaXNvbW9ycGhpYy1mZXRjaFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///isomorphic-fetch\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });