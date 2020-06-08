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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/classroom/controller.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/classroom/UI.js":
/*!********************************!*\
  !*** ./src/js/classroom/UI.js ***!
  \********************************/
/*! exports provided: classroomUI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "classroomUI", function() { return classroomUI; });
var classroomUI = function () {
  var DOMStrings = {
    // BY CLASS
    checkTeams: '.checkTeams',
    errors: '.errors',
    studentList: '.student__list',
    addStudentBtn: '.addStudentBtn',
    nameInput: '.addStudentName-input',
    addStudentForm: '.form__add-student',
    genderRadio: '.gender-radio',
    increment: '.increment',
    decrement: '.decrement' // BY ID

  };
  var DOM = {
    checkTeams: document.querySelectorAll(DOMStrings.checkTeams),
    errors: document.querySelector(DOMStrings.errors),
    radios: document.querySelector(DOMStrings.addStudentForm).querySelectorAll(DOMStrings.genderRadio),
    // radios: document.querySelectorAll(DOMStrings.addStudentForm.DOMStrings.genderRadio),
    nameInput: document.querySelector(DOMStrings.nameInput)
  }; // HELPER FUNCTIONS

  const addErrorMessage = function (message) {
    DOM.errors.style.display = 'block', DOM.errors.innerHTML = message;
    setTimeout(() => {
      DOM.errors.innerHTML = "";
      DOM.errors.style.display = 'none';
    }, 3000);
  };

  const radioIsChecked = function (radioNodeList) {
    // returns true if radio is checked or false if radio not checked
    return [].some.call(radioNodeList, radioNode => radioNode.checked === true);
  };

  return {
    getDOMStrings: function () {
      return DOMStrings;
    },
    // OTHER FUNCTIONS
    checkTeamSize: function (e) {
      console.log(e.target.dataset.class_size);

      if (e.target.dataset.class_size < 2) {
        console.log('classSize', e.target.dataset.class_size);
        e.preventDefault();
        console.log('class too small for game');
        addErrorMessage('Sorry, you need to add some students before you can play a game.');
      }
    },
    updateStudent: function (e) {
      // e.preventDefault();
      if (e.target.classList.contains('updateStudent')) {
        console.log('hello there');
        const formTarget = e.target.parentElement.parentElement.parentElement.parentElement.querySelector('.update__form');
        console.log(formTarget);
        formTarget.classList.toggle('hide');
      }
    },
    addStudent: function (e) {
      if (DOM.nameInput.value === '') {
        e.preventDefault();
        console.log('no name input');
        addErrorMessage('Please include a student name.');
      } else if (!radioIsChecked(DOM.radios)) {
        e.preventDefault();
        addErrorMessage('Please choose a gender.');
        console.log('You need to include a gender');
      }
    },
    increment: function (e) {
      // console.log(e.target.parentElement)
      if (e.target.parentElement.classList.contains('increment')) {
        e.target.parentElement.parentNode.parentNode.querySelector('.pointsInput').stepUp();
      }
    },
    decrement: function (e) {
      // console.log(e.target.parentElement)
      if (e.target.parentElement.classList.contains('decrement')) {
        // this.parentNode.querySelector('.team_number').stepDown();
        e.target.parentElement.parentNode.parentNode.querySelector('.pointsInput').stepDown();
      }
    }
  };
}();



/***/ }),

/***/ "./src/js/classroom/controller.js":
/*!****************************************!*\
  !*** ./src/js/classroom/controller.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UI_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UI.js */ "./src/js/classroom/UI.js");


var controller = function (UI) {
  var setupEventListeners = function () {
    console.log('setup event listeners');
    var DOMStrings = UI.getDOMStrings();
    var DOM = {
      checkTeams: document.querySelectorAll(DOMStrings.checkTeams),
      studentList: document.querySelector(DOMStrings.studentList),
      addStudentBtn: document.querySelector(DOMStrings.addStudentBtn),
      increment: document.querySelector(DOMStrings.increment),
      decrement: document.querySelector(DOMStrings.decrement)
    };
    console.log(DOM.increment, DOM.decrement);
    DOM.increment.addEventListener('click', UI.increment);
    DOM.decrement.addEventListener('click', UI.decrement);
    DOM.checkTeams.forEach(checkTeam => checkTeam.addEventListener('click', UI.checkTeamSize));
    DOM.studentList.addEventListener('click', UI.updateStudent);
    DOM.addStudentBtn.addEventListener('click', UI.addStudent);
    DOM.studentList.addEventListener('click', UI.increment);
    DOM.studentList.addEventListener('click', UI.decrement);
  };

  return {
    init: function () {
      console.log('You can now edit students, or play games');
      setupEventListeners();
    }
  };
}(_UI_js__WEBPACK_IMPORTED_MODULE_0__["classroomUI"]);

controller.init();

/***/ })

/******/ });
//# sourceMappingURL=classroom.js.map