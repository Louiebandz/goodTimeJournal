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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/getJournals.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/viewJournal.js":
/*!****************************!*\
  !*** ./lib/viewJournal.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! isomorphic-fetch */ \"isomorphic-fetch\");\n\nfunction viewJournal(id) {\n  return fetch(`http://localhost:3001/viewJournal?id=${id}`).then(function (resp) {\n    return resp.json();\n  });\n}\n\nfunction handleError(error) {\n  console.warn(error);\n  return null;\n}\n\nmodule.exports = {\n  getJournal: function (id) {\n    return viewJournal(id).catch(handleError);\n  }\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvdmlld0pvdXJuYWwuanM/YWQyYiJdLCJuYW1lcyI6WyJyZXF1aXJlIiwidmlld0pvdXJuYWwiLCJpZCIsImZldGNoIiwidGhlbiIsInJlc3AiLCJqc29uIiwiaGFuZGxlRXJyb3IiLCJlcnJvciIsImNvbnNvbGUiLCJ3YXJuIiwibW9kdWxlIiwiZXhwb3J0cyIsImdldEpvdXJuYWwiLCJjYXRjaCJdLCJtYXBwaW5ncyI6IkFBQUFBLG1CQUFPLENBQUMsMENBQUQsQ0FBUDs7QUFFQSxTQUFTQyxXQUFULENBQXFCQyxFQUFyQixFQUF5QjtBQUN4QixTQUFPQyxLQUFLLENBQUUsd0NBQXVDRCxFQUFHLEVBQTVDLENBQUwsQ0FBb0RFLElBQXBELENBQXlELFVBQVNDLElBQVQsRUFBZTtBQUM5RSxXQUFPQSxJQUFJLENBQUNDLElBQUwsRUFBUDtBQUNBLEdBRk0sQ0FBUDtBQUdBOztBQUVELFNBQVNDLFdBQVQsQ0FBcUJDLEtBQXJCLEVBQTRCO0FBQzNCQyxTQUFPLENBQUNDLElBQVIsQ0FBYUYsS0FBYjtBQUNBLFNBQU8sSUFBUDtBQUNBOztBQUVERyxNQUFNLENBQUNDLE9BQVAsR0FBaUI7QUFDaEJDLFlBQVUsRUFBRSxVQUFTWCxFQUFULEVBQWE7QUFDeEIsV0FBT0QsV0FBVyxDQUFDQyxFQUFELENBQVgsQ0FBZ0JZLEtBQWhCLENBQXNCUCxXQUF0QixDQUFQO0FBQ0E7QUFIZSxDQUFqQiIsImZpbGUiOiIuL2xpYi92aWV3Sm91cm5hbC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbInJlcXVpcmUoXCJpc29tb3JwaGljLWZldGNoXCIpO1xuXG5mdW5jdGlvbiB2aWV3Sm91cm5hbChpZCkge1xuXHRyZXR1cm4gZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS92aWV3Sm91cm5hbD9pZD0ke2lkfWApLnRoZW4oZnVuY3Rpb24ocmVzcCkge1xuXHRcdHJldHVybiByZXNwLmpzb24oKTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZUVycm9yKGVycm9yKSB7XG5cdGNvbnNvbGUud2FybihlcnJvcik7XG5cdHJldHVybiBudWxsO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0Z2V0Sm91cm5hbDogZnVuY3Rpb24oaWQpIHtcblx0XHRyZXR1cm4gdmlld0pvdXJuYWwoaWQpLmNhdGNoKGhhbmRsZUVycm9yKTtcblx0fSxcbn07Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/viewJournal.js\n");

/***/ }),

/***/ "./pages/getJournals.js":
/*!******************************!*\
  !*** ./pages/getJournals.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_viewJournal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/viewJournal */ \"./lib/viewJournal.js\");\n/* harmony import */ var _lib_viewJournal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_lib_viewJournal__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _jsxFileName = \"/Users/Austin/cpsc430/Austin/goodTimeJournal/pages/getJournals.js\";\n\n\n\nclass getJournals extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      id: 0\n    };\n  }\n\n  handleUpdate(evt) {\n    this.setState({\n      id: evt.target.value\n    });\n  }\n\n  async handleId(evt) {\n    const post = await Object(_lib_viewJournal__WEBPACK_IMPORTED_MODULE_2__[\"getJournal\"])(this.state.id);\n    console.log(post);\n    this.setState({\n      post: post.rows\n    });\n  }\n\n  render() {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n        children: \"Enter the post\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 4\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n          type: \"text\",\n          value: this.state.id,\n          onChange: this.handleUpdate.bind(this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 27,\n          columnNumber: 8\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 5\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        className: \"button-style\",\n        onClick: this.handleId.bind(this),\n        children: \"Search\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 5\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 4\n    }, this);\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (getJournals);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9nZXRKb3VybmFscy5qcz9jZGMwIl0sIm5hbWVzIjpbImdldEpvdXJuYWxzIiwiUmVhY3QiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwic3RhdGUiLCJpZCIsImhhbmRsZVVwZGF0ZSIsImV2dCIsInNldFN0YXRlIiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVJZCIsInBvc3QiLCJnZXRKb3VybmFsIiwiY29uc29sZSIsImxvZyIsInJvd3MiLCJyZW5kZXIiLCJiaW5kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLE1BQU1BLFdBQU4sU0FBMEJDLDRDQUFLLENBQUNDLFNBQWhDLENBQTBDO0FBQ3pDQyxhQUFXLENBQUNDLEtBQUQsRUFBUTtBQUNsQixVQUFNQSxLQUFOO0FBQ0EsU0FBS0MsS0FBTCxHQUFhO0FBQUNDLFFBQUUsRUFBRTtBQUFMLEtBQWI7QUFDQTs7QUFFREMsY0FBWSxDQUFDQyxHQUFELEVBQU07QUFDakIsU0FBS0MsUUFBTCxDQUFjO0FBQUNILFFBQUUsRUFBRUUsR0FBRyxDQUFDRSxNQUFKLENBQVdDO0FBQWhCLEtBQWQ7QUFDQTs7QUFFRCxRQUFNQyxRQUFOLENBQWVKLEdBQWYsRUFBb0I7QUFDbkIsVUFBTUssSUFBSSxHQUFHLE1BQU1DLG1FQUFVLENBQUMsS0FBS1QsS0FBTCxDQUFXQyxFQUFaLENBQTdCO0FBQ0FTLFdBQU8sQ0FBQ0MsR0FBUixDQUFZSCxJQUFaO0FBQ0EsU0FBS0osUUFBTCxDQUFjO0FBQUVJLFVBQUksRUFBRUEsSUFBSSxDQUFDSTtBQUFiLEtBQWQ7QUFDQTs7QUFJREMsUUFBTSxHQUFHO0FBQ1Isd0JBQ0M7QUFBQSw4QkFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURBLGVBR0M7QUFBQSwrQkFBRztBQUFPLGNBQUksRUFBQyxNQUFaO0FBQW1CLGVBQUssRUFBRSxLQUFLYixLQUFMLENBQVdDLEVBQXJDO0FBQXlDLGtCQUFRLEVBQUUsS0FBS0MsWUFBTCxDQUFrQlksSUFBbEIsQ0FBdUIsSUFBdkI7QUFBbkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFIO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FIRCxlQUlDO0FBQVEsaUJBQVMsRUFBQyxjQUFsQjtBQUFpQyxlQUFPLEVBQUUsS0FBS1AsUUFBTCxDQUFjTyxJQUFkLENBQW1CLElBQW5CLENBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREQ7QUFTQTs7QUE1QndDOztBQStCM0JuQiwwRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2dldEpvdXJuYWxzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGdldEpvdXJuYWwgfSBmcm9tICcuLi9saWIvdmlld0pvdXJuYWwnO1xuXG5jbGFzcyBnZXRKb3VybmFscyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpO1xuXHRcdHRoaXMuc3RhdGUgPSB7aWQ6IDB9O1xuXHR9XG5cblx0aGFuZGxlVXBkYXRlKGV2dCkge1xuXHRcdHRoaXMuc2V0U3RhdGUoe2lkOiBldnQudGFyZ2V0LnZhbHVlfSk7XG5cdH1cblxuXHRhc3luYyBoYW5kbGVJZChldnQpIHtcblx0XHRjb25zdCBwb3N0ID0gYXdhaXQgZ2V0Sm91cm5hbCh0aGlzLnN0YXRlLmlkKTtcblx0XHRjb25zb2xlLmxvZyhwb3N0KTtcblx0XHR0aGlzLnNldFN0YXRlKHsgcG9zdDogcG9zdC5yb3dzIH0pO1xuXHR9XG5cblxuXG5cdHJlbmRlcigpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdj5cblx0XHRcdDxoMT5FbnRlciB0aGUgcG9zdDwvaDE+XG5cdFx0XHRcblx0XHRcdFx0PHA+PGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e3RoaXMuc3RhdGUuaWR9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVVwZGF0ZS5iaW5kKHRoaXMpfSAvPjwvcD5cblx0XHRcdFx0PGJ1dHRvbiBjbGFzc05hbWU9XCJidXR0b24tc3R5bGVcIiBvbkNsaWNrPXt0aGlzLmhhbmRsZUlkLmJpbmQodGhpcyl9PlNlYXJjaDwvYnV0dG9uPlxuXHRcdFx0PC9kaXY+XG5cblx0XHQpXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2V0Sm91cm5hbHM7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/getJournals.js\n");

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