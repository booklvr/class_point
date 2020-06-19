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
/******/ 	__webpack_require__.p = "../../";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/addClassroom/controller.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/addClassroom/UI.js":
/*!***********************************!*\
  !*** ./src/js/addClassroom/UI.js ***!
  \***********************************/
/*! exports provided: addClassroomUI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addClassroomUI", function() { return addClassroomUI; });
var addClassroomUI = function () {
  var DOMStrings = {
    className: ".add-class-name",
    submitBtn: ".submit",
    formBtn: ".form-btn",
    fileInput: ".file-input",
    fileValue: ".file-value"
  };
  var DOM = {
    className: document.querySelector(DOMStrings.className),
    or: document.querySelector(DOMStrings.or),
    submitBtn: document.querySelector(DOMStrings.submitBtn),
    fileInput: document.querySelector(DOMStrings.fileInput),
    fileValue: document.querySelector(DOMStrings.fileValue)
  }; //HELPER FUNCTIONS

  var isCSVfile = function isCSVfile(fileUploadPath) {
    if (fileUploadPath != "") {
      var extension = fileUploadPath.substring(fileUploadPath.lastIndexOf(".") + 1).toLowerCase();

      if (extension === "csv") {
        return true;
      } else {
        alert("You can only upload CSV files.");
        DOM.file.type = "";
        DOM.file.type = "file";
        return false;
      }
    }
  };

  return {
    getDOMStrings: function getDOMStrings() {
      return DOMStrings;
    },
    checkForClassName: function checkForClassName() {
      // get elements
      var fileName = this.value.replace(/C:\\fakepath\\/i, "");
      DOM.fileValue.innerHTML = fileName; // const fileUploadPath = DOM.fileInput.value;
      // console.log(fileUploadPath)
      // DOM.fileValue.text = fileUploadPath;

      DOM.fileValue.style.display = "block";

      if (isCSVfile(fileName)) {
        if (DOM.className.value !== "") {
          return event.target.closest("form").submit();
        } else {
          DOM.submitBtn.innerText = "Upload File";
          DOM.submitBtn.classList += " upload-file";
          return alert("Please enter the class name first.");
        }
      } else {
        console.log("it is not a csv file");
      }
    }
  };
}();

 // export default addClassroomUI;

/***/ }),

/***/ "./src/js/addClassroom/controller.js":
/*!*******************************************!*\
  !*** ./src/js/addClassroom/controller.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UI_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UI.js */ "./src/js/addClassroom/UI.js");


var controller = function (UI) {
  var setupEventListeners = function setupEventListeners() {
    console.log('setup event listeners');
    var DOMStrings = UI.getDOMStrings();
    var DOM = {
      fileInput: document.querySelector(DOMStrings.fileInput),
      formBtn: document.querySelector(DOMStrings.formBtn)
    }; // EVENT LISTENERS

    DOM.fileInput.addEventListener('change', UI.checkForClassName);
    DOM.formBtn.addEventListener('click', UI.clickAddFile);
  };

  return {
    init: function init() {
      console.log('You can now add a class');
      setupEventListeners();
    }
  };
}(_UI_js__WEBPACK_IMPORTED_MODULE_0__["addClassroomUI"]);

controller.init();

/***/ })

/******/ });
//# sourceMappingURL=addClassroom.js.map