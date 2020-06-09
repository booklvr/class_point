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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/register/controller.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/register/UI.js":
/*!*******************************!*\
  !*** ./src/js/register/UI.js ***!
  \*******************************/
/*! exports provided: registerUI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerUI", function() { return registerUI; });
var registerUI = function () {
  var DOMStrings = {
    // BY CLASS
    btnSubmit: '.btnSubmit',
    formControl: '.form-control',
    refreshGameBtn: '.refresh-gameBtn',
    // By ID
    registerForm: '#registerForm',
    name: '#name',
    email: '#email',
    password: '#password',
    password2: '#password2'
  }; //HELPER FUNCTIONS

  var showError = function showError(input, msg) {
    var formControl = input.parentElement;
    formControl.className = 'form-control error';
    var small = formControl.querySelector('small');
    small.innerText = msg;
  };

  function showSuccess(input) {
    var formControl = input.parentElement;
    formControl.className = 'form-control success';
  }

  function checkEmail(input) {
    var re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

    if (re.test(input.value.trim())) {
      showSuccess(input);
      console.log('Email verified');
      return true;
    } else {
      showError(input, "Email is not valid");
      return false;
    }
  }

  function checkRequired(inputArr) {
    inputArr.forEach(function (input) {
      if (input.value === '') {
        showError(input, "".concat(getFieldName(input), " is required"));
        return false;
      } else {
        showSuccess(input);
        console.log('All fields filled, verified');
        return true;
      }
    });
  } // Check input length


  function checkLength(input, min, max) {
    if (input.value.length < min) {
      showError(input, "".concat(getFieldName(input), " must be at least ").concat(min));
      return false;
    } else if (input.value.length > max) {
      showError(input, "".concat(getFieldName(input), " must be less than ").concat(max));
      return false;
    } else {
      showSuccess(input);
      console.log('Length, verified');
      return true;
    }
  }

  function checkPasswordsMatch(input1, input2) {
    if (input1.value === input2.value) {
      console.log('input1.value', input1.value);
      console.log('input2.value', input2.value);
      showSuccess(input2);
      console.log('Passwords Match, verified');
      return true;
    } else {
      console.log('input1.value', input1.value);
      console.log('input2.value', input2.value);
      showError(input2, 'Passwords do not match');
      return false;
    }
  }

  function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
  }

  return {
    getDOMStrings: function getDOMStrings() {
      return DOMStrings;
    },
    //////////////////////////////////////////////////////////////////
    // *** functions for game play ***
    submitEvent: function submitEvent() {}
  };
}();



/***/ }),

/***/ "./src/js/register/controller.js":
/*!***************************************!*\
  !*** ./src/js/register/controller.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UI_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UI.js */ "./src/js/register/UI.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



var controller = function (UI) {
  var setupEventListeners = function setupEventListeners() {
    console.log('setup event listeners');
    var DOMStrings = UI.getDOMStrings();
    var DOM = {
      btnSubmit: document.querySelector(DOMStrings.btnSubmit)
    }; //EVENT LISTENERS

    DOM.btnSubmit.addEventListener('click', UI.submitEvent);
  };

  return {
    init: function () {
      var _init = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                console.log('You can now register');
                setupEventListeners();

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function init() {
        return _init.apply(this, arguments);
      }

      return init;
    }()
  };
}(_UI_js__WEBPACK_IMPORTED_MODULE_0__["registerUI"]);

controller.init();

/***/ })

/******/ });
//# sourceMappingURL=register.js.map