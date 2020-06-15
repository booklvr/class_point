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
var registerUI = (function() {
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
        password2: '#password2',
    };

    //HELPER FUNCTIONS
    const showError = function(input, msg) {
        const formControl = input.parentElement;
        formControl.className = 'form-control error';
        const small = formControl.querySelector('small');
        small.innerText = msg;
    }

    function showSuccess(input) {
        const formControl = input.parentElement;
        formControl.className = 'form-control success';
    }
    
    function checkEmail(input) {
        const re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
        if(re.test(input.value.trim())) {
          showSuccess(input);
          console.log('Email verified');
          return true;
        } else {
          showError(input, "Email is not valid");
          return false;
        }
    }

    function checkRequired(inputArr) {
        inputArr.forEach((input) => {
          if (input.value === '') {
            showError(input, `${getFieldName(input)} is required`);
            return false;
          } else {
            showSuccess(input);
            console.log('All fields filled, verified');
            return true;
          }
        })
    }

    // Check input length
    function checkLength(input, min, max) {
        if(input.value.length < min) {
            showError(input, `${getFieldName(input)} must be at least ${min}`)
            return false;
        } else if (input.value.length > max ) {
            showError(input, `${getFieldName(input)} must be less than ${max}`)
            return false;
        } else {
            showSuccess(input);
            console.log('Length, verified');
            return true;
        }
    }

    function checkPasswordsMatch(input1, input2) {
        if(input1.value === input2.value) {
            console.log('input1.value', input1.value)
            console.log('input2.value', input2.value)
            showSuccess(input2);
            console.log('Passwords Match, verified');
            return true;
        } else {
            console.log('input1.value', input1.value)
            console.log('input2.value', input2.value)
            showError(input2, 'Passwords do not match');
            return false;
        }
    }

    function getFieldName(input) {
        return input.id.charAt(0).toUpperCase() + input.id.slice(1);
    }


    return {
        getDOMStrings: function() {
            return DOMStrings;
        },
    
        //////////////////////////////////////////////////////////////////
        // *** functions for game play ***
        submitEvent: function () {
            
        },
    };
})();










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




var controller = (function(UI) {
    var setupEventListeners = function() {
        console.log('setup event listeners')
        var DOMStrings = UI.getDOMStrings();


        var DOM = {
            btnSubmit: document.querySelector(DOMStrings.btnSubmit),
        };

        //EVENT LISTENERS

        DOM.btnSubmit.addEventListener('click', UI.submitEvent);
    }

    return {
        init: async function () { 
            console.log('You can now register');
            
            setupEventListeners();
        }
    }
})(_UI_js__WEBPACK_IMPORTED_MODULE_0__["registerUI"]);

controller.init();

/***/ })

/******/ });
//# sourceMappingURL=register.js.map