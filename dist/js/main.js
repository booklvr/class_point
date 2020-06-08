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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/main.scss":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--7-1!./node_modules/postcss-loader/src!./node_modules/sass-loader/dist/cjs.js!./src/sass/main.scss ***!
  \*****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "/*\n1150px +  (normal) \n700px - 1150px \n700px - \n\n*/\n/*\n breakpoint argument choices\n- small-screen\n- game-mode\n*/\n* {\n  margin: 0;\n  padding: 0; }\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box; }\n\nhtml {\n  box-sizing: inherit;\n  font-size: 62.5%; }\n\nbody {\n  font-weight: 400;\n  line-height: 1.6;\n  width: 100%;\n  height: 100vh;\n  font-family: \"Gilroy\", sans-serif;\n  overflow: auto;\n  margin: 0;\n  padding: 0; }\n\nbody {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center; }\n\nmain {\n  width: 120rem;\n  flex: 1;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: center; }\n  @media (max-width: 1300px) {\n    main {\n      width: 100%; } }\n\n.align-middle {\n  justify-content: center; }\n\n.align-top {\n  justify-content: flex-start; }\n\n.align-right {\n  padding-right: 2.5rem;\n  align-self: flex-end;\n  align-items: flex-end;\n  justify-content: end;\n  width: 50rem;\n  position: relative; }\n\nheader {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  position: relative; }\n\nfooter {\n  align-self: flex-end;\n  margin-top: 5rem; }\n  footer p {\n    font-family: \"Open Sans\"; }\n\n.info__paragraph {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center; }\n  @media (max-width: 1300px) {\n    .info__paragraph {\n      padding: 0 10rem; } }\n  @media (max-width: 500px) {\n    .info__paragraph {\n      padding: 0 5rem; } }\n  .info__paragraph > * {\n    margin-bottom: 3rem;\n    font-size: 2rem;\n    text-align: center; }\n\n.navbar {\n  width: 100vw;\n  height: 8rem;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center; }\n  .navbar__container {\n    height: 100%;\n    width: 120rem;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center; }\n    @media (max-width: 1300px) {\n      .navbar__container {\n        width: 100%;\n        margin: 0 10rem; } }\n    @media (max-width: 950px) {\n      .navbar__container {\n        margin: 0 5rem; } }\n    @media (max-width: 500px) {\n      .navbar__container {\n        margin: 0 2.5rem; } }\n  .navbar__brand {\n    text-decoration: none;\n    font-weight: 800;\n    font-size: 2.4rem;\n    color: #4b3d6d;\n    text-transform: uppercase; }\n  .navbar__brand .text-style-1 {\n    color: #7bc0bd; }\n  .navbar__links {\n    list-style-type: none;\n    display: flex;\n    flex-direction: row;\n    font-weight: 300;\n    font-size: 1.8rem;\n    color: #302929; }\n    .navbar__links li .navbar__link {\n      text-decoration: none;\n      color: #302929; }\n      .navbar__links li .navbar__link:visited {\n        color: #302929;\n        text-decoration: none; }\n      .navbar__links li .navbar__link:hover {\n        transform: scale(1.2); }\n      .navbar__links li .navbar__link:active {\n        transform: scale(1.1); }\n    .navbar__links li:not(:last-of-type) {\n      margin-right: 2rem; }\n\n.title1__container {\n  margin: 7.6rem 0;\n  position: relative;\n  z-index: 1; }\n  @media (max-width: 950px) {\n    .title1__container {\n      margin: 5rem 0; } }\n  .title1__container .title-1 {\n    position: relative;\n    font-family: \"Gilroy\", sans-serif;\n    font-size: 3.2rem;\n    font-weight: 800;\n    color: #4b3d6d;\n    z-index: 2; }\n  .title1__container:before {\n    content: \"\";\n    border-top: 1.2rem solid #7bc0bd;\n    width: 120%;\n    position: absolute;\n    top: 50%;\n    left: -10%;\n    right: 0;\n    bottom: 0; }\n  @media (max-width: 500px) {\n    .title1__container {\n      margin: 3rem 0; } }\n\n.title-2 {\n  font-size: 3.2rem;\n  font-weight: 800;\n  color: #7bc0bd;\n  align-self: center; }\n  .title-2 a {\n    text-decoration: none;\n    color: inherit; }\n\n.title3__container {\n  margin-right: 1rem; }\n  .title3__container .title-3 {\n    -webkit-writing-mode: tb-rl;\n        -ms-writing-mode: tb-rl;\n            writing-mode: tb-rl;\n    font-family: \"Gilroy\", sans-serif;\n    font-size: 3.2rem;\n    font-weight: 800;\n    color: #4b3d6d; }\n\n.m-b-xl {\n  margin-bottom: 8.7rem; }\n\n.m-b-l {\n  margin-bottom: 7.9rem; }\n  @media (max-width: 950px) {\n    .m-b-l {\n      margin-bottom: 5rem; } }\n\n.m-b-m {\n  margin-bottom: 6rem; }\n\n.m-b-s {\n  margin-bottom: 1.6rem; }\n\n.submitBtn,\n.cta__button {\n  height: 5rem;\n  width: 13.6rem;\n  margin-top: 6.4rem;\n  font-family: \"Gilroy\", sans-serif;\n  font-size: 2rem;\n  font-weight: 800;\n  color: #fff;\n  background-color: #7bc0bd;\n  border-radius: 2.5rem;\n  border: none; }\n\n.cta__button {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer; }\n  .cta__button a {\n    text-decoration: none;\n    color: #fff; }\n\n.student__gender .male {\n  color: skyblue; }\n\n.student__gender .female {\n  color: pink; }\n\n.hide {\n  display: none; }\n\n.icon-male {\n  color: blue; }\n\n.icon-female {\n  color: pink; }\n\n.errors {\n  font-size: 2rem;\n  color: #e27488; }\n\nfooter {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  height: 4rem;\n  width: 100vw;\n  border: 1px solid #eaeaea;\n  font-family: OpenSans;\n  padding: 1rem 0;\n  text-transform: uppercase; }\n\n.game-header {\n  width: 100%;\n  height: 7rem;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  border-bottom: 1rem solid #4b3d6d;\n  margin-bottom: 2rem; }\n  .game-header .options {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center;\n    height: 100%; }\n    .game-header .options .option-Btn {\n      height: 3.8rem;\n      width: 3.8rem;\n      border-radius: 1.9rem;\n      border: none;\n      color: #fff;\n      font-size: 2rem; }\n      .game-header .options .option-Btn:not(:last-of-type) {\n        margin-right: 1rem; }\n    .game-header .options .shuffle-studentsBtn {\n      background-color: #4b3d6d; }\n    .game-header .options .refresh-studentsBtn,\n    .game-header .options .refresh-gameBtn,\n    .game-header .options .playAgainBtn {\n      background-color: #e27488; }\n    .game-header .options .save-gameBtn,\n    .game-header .options .goToClassroomBtn {\n      background-color: #302929; }\n  .game-header .game__form__container {\n    align-self: flex-end;\n    width: 30rem;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: flex-start; }\n    .game-header .game__form__container .gameForm {\n      display: flex;\n      position: relative;\n      flex-direction: row;\n      align-items: center; }\n      .game-header .game__form__container .gameForm .team_number_label {\n        font-family: \"Open Sans\";\n        font-size: 2rem;\n        font-weight: bold;\n        color: #7bc0bd; }\n      .game-header .game__form__container .gameForm .team_number {\n        width: 9.5rem;\n        padding: 1rem;\n        font-family: \"Open Sans\";\n        color: #302929;\n        font-size: 2rem;\n        font-weight: bold;\n        text-align: center;\n        outline: none;\n        border: none; }\n        .game-header .game__form__container .gameForm .team_number::-webkit-outer-spin-button, .game-header .game__form__container .gameForm .team_number::-webkit-inner-spin-button {\n          -webkit-appearance: none;\n          -moz-appearance: none;\n          appearance: none;\n          margin: 0; }\n      .game-header .game__form__container .gameForm .increment-buttons {\n        position: absolute;\n        right: 7rem;\n        top: 50%;\n        transform: translateY(-50%);\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        justify-content: center;\n        border: none; }\n        .game-header .game__form__container .gameForm .increment-buttons .increment-button {\n          border: none;\n          background-color: inherit;\n          cursor: pointer; }\n          .game-header .game__form__container .gameForm .increment-buttons .increment-button i {\n            font-size: 2rem;\n            color: #bdbdbd; }\n\n.game__container {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  align-items: flex-start; }\n  .game__container .line {\n    position: relative;\n    min-height: 150%;\n    width: 1.2rem;\n    align-self: stretch;\n    border-left: 1.2rem solid #7bc0bd;\n    top: -8rem; }\n  .game__container .game-options {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    height: 100%;\n    width: 6.5rem; }\n    .game__container .game-options .game-Btn {\n      height: 3.8rem;\n      width: 3.8rem;\n      border-radius: 1.9rem;\n      border: none;\n      color: #fff;\n      font-size: 2rem;\n      margin-bottom: 1rem; }\n    .game__container .game-options .playGameBtn,\n    .game__container .game-options .previous,\n    .game__container .game-options .previous-student,\n    .game__container .game-options .next-student,\n    .game__container .game-options .next {\n      background-color: #7bc0bd; }\n  .game__container .teams,\n  .game__container .preview__teams {\n    width: 30rem; }\n    .game__container .teams .team,\n    .game__container .preview__teams .team {\n      margin-bottom: 1.5rem;\n      border: 1px solid #eaeaea; }\n      .game__container .teams .team .teamName,\n      .game__container .preview__teams .team .teamName {\n        margin-bottom: 1rem; }\n      .game__container .teams .team .teamList,\n      .game__container .preview__teams .team .teamList {\n        list-style: none;\n        font-family: \"Open Sans\";\n        font-size: 1.8rem;\n        padding: 0 3.5rem; }\n  .game__container .preview__teams .team .teamName {\n    margin-top: 2rem;\n    width: 100%;\n    text-align: center;\n    color: #7bc0bd;\n    font-size: \"Open Sans\";\n    font-size: 2rem;\n    font-weight: bold; }\n  .game__container .preview__teams .team .teamList .student {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: flex-end;\n    height: 4rem;\n    padding: 0 1rem; }\n    .game__container .preview__teams .team .teamList .student .student-name {\n      flex: 1;\n      color: #302929; }\n    .game__container .preview__teams .team .teamList .student .student-gender {\n      color: #bdbdbd;\n      font-weight: 600;\n      padding: 0 1rem; }\n    .game__container .preview__teams .team .teamList .student .deleteStudent {\n      display: none;\n      flex-direction: column;\n      align-items: center;\n      justify-content: center;\n      width: 2.4rem;\n      height: 2.4rem;\n      border-radius: 1.2rem;\n      background-color: #e27488; }\n    .game__container .preview__teams .team .teamList .student:hover {\n      background-color: rgba(234, 234, 234, 0.4); }\n      .game__container .preview__teams .team .teamList .student:hover .deleteStudent {\n        display: flex; }\n  .game__container .teams .team-info {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: flex-end;\n    height: 5rem;\n    padding: 0 3.5rem;\n    background-color: rgba(234, 234, 234, 0.4); }\n    .game__container .teams .team-info .teamName {\n      width: 100%;\n      margin: 0;\n      color: #7bc0bd;\n      font-size: \"Open Sans\";\n      font-size: 2rem;\n      font-weight: bold; }\n    .game__container .teams .team-info .teamPoint {\n      display: flex;\n      flex-direction: row;\n      align-items: center; }\n      .game__container .teams .team-info .teamPoint button {\n        width: 3rem;\n        height: 3rem;\n        border-radius: 1.5rem;\n        background-color: #302929;\n        margin-right: .5rem;\n        border: none; }\n        .game__container .teams .team-info .teamPoint button i {\n          display: flex;\n          align-items: center;\n          justify-content: center;\n          color: #fff;\n          width: 100%;\n          height: 100%; }\n      .game__container .teams .team-info .teamPoint .teamPointValue {\n        font-size: 3rem;\n        font-family: \"Open Sans\";\n        font-weight: bold;\n        width: 2rem;\n        text-align: right; }\n  .game__container .teams .teamList .currentStudent .name {\n    color: #e27488 !important; }\n  .game__container .teams .teamList .nextStudent .name {\n    text-decoration: underline;\n    -webkit-text-decoration-color: #e27488;\n            text-decoration-color: #e27488; }\n  .game__container .teams .teamList .student {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: flex-end;\n    height: 4rem; }\n    .game__container .teams .teamList .student .name {\n      flex: 1;\n      color: #302929;\n      -moz-text-align-last: left;\n           text-align-last: left; }\n    .game__container .teams .teamList .student button {\n      width: 2.5rem;\n      height: 2.5rem;\n      border-radius: 1.5rem;\n      background-color: #bdbdbd;\n      margin-right: .85rem;\n      border: none; }\n      .game__container .teams .teamList .student button i {\n        color: #fff;\n        height: 100%;\n        width: 100%;\n        display: flex;\n        align-items: center;\n        justify-content: center; }\n    .game__container .teams .teamList .student .points {\n      font-size: 3rem;\n      font-family: \"Open Sans\";\n      font-weight: bold;\n      width: 2rem;\n      text-align: right; }\n  .game__container .winningStudentContainer {\n    min-width: 30rem;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    border: 1px solid #eaeaea;\n    margin-bottom: 2rem; }\n    .game__container .winningStudentContainer .winningStudentTitle {\n      font-size: 2rem;\n      color: #7bc0bd; }\n    .game__container .winningStudentContainer .firstPlace .winnerName {\n      font-size: 2rem;\n      color: #302929; }\n\n.form__container {\n  width: 100vw;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center; }\n  .form__container .form-main .inputs__container {\n    display: flex;\n    flex-direction: row; }\n    .form__container .form-main .inputs__container-small {\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      align-items: flex-start; }\n      .form__container .form-main .inputs__container-small .form-control {\n        display: flex;\n        flex-direction: column;\n        align-items: flex-start; }\n        .form__container .form-main .inputs__container-small .form-control label {\n          margin-left: 1.5rem;\n          margin-bottom: .9rem;\n          font-family: \"Open Sans\";\n          font-size: 1.4rem;\n          font-weight: 600;\n          text-transform: uppercase; }\n        .form__container .form-main .inputs__container-small .form-control input {\n          height: 5rem;\n          width: 36rem;\n          border-radius: 2.5rem;\n          border: 1px solid #eaeaea;\n          padding-left: 2rem;\n          font-size: 2rem; }\n        .form__container .form-main .inputs__container-small .form-control .error-message {\n          display: none; }\n        .form__container .form-main .inputs__container-small .form-control:not(:last-of-type) {\n          margin-bottom: 3.6rem; }\n      .form__container .form-main .inputs__container-small:not(:last-of-type) {\n        margin-right: 8.1rem; }\n  .form__container .form-change-route {\n    color: #bdbdbd;\n    font-family: \"Open Sans\";\n    font-size: 1.4rem;\n    font-weight: 600;\n    margin-top: 3rem; }\n    .form__container .form-change-route a {\n      color: #4b3d6d; }\n  .form__container .form-secondary {\n    width: 43.5rem; }\n    .form__container .form-secondary .form-control {\n      display: flex;\n      flex-direction: row;\n      justify-content: space-between;\n      align-items: center;\n      margin-bottom: 4rem; }\n      .form__container .form-secondary .form-control label {\n        font-family: \"Open Sans\";\n        font-size: 2rem;\n        font-weight: bold;\n        color: #7bc0bd; }\n      .form__container .form-secondary .form-control .add-class-name {\n        width: 26rem;\n        height: 4rem;\n        border: none;\n        font-size: \"Open Sans\";\n        font-weight: bold;\n        font-size: 2rem;\n        color: #bdbdbd;\n        padding-left: 1rem;\n        border-bottom: 1px solid #eaeaea; }\n      .form__container .form-secondary .form-control .add-students-label {\n        align-self: flex-start;\n        margin-top: 1.4rem; }\n      .form__container .form-secondary .form-control .add-class {\n        width: 26rem;\n        display: flex;\n        flex-direction: column;\n        align-items: stretch; }\n        .form__container .form-secondary .form-control .add-class .form-btn {\n          display: flex;\n          flex-direction: column;\n          justify-content: center;\n          align-items: center;\n          font-family: \"Open Sans\";\n          font-size: 1.8rem;\n          font-weight: bold;\n          color: #bdbdbd;\n          border: 1px solid #eaeaea;\n          height: 5.5rem;\n          width: 100%;\n          background-color: white;\n          margin-bottom: 3rem;\n          cursor: pointer; }\n        .form__container .form-secondary .form-control .add-class .file-value {\n          display: none;\n          font-family: \"Open Sans\";\n          font-size: 2rem;\n          font-weight: bold;\n          color: #bdbdbd;\n          margin-bottom: 3rem;\n          border-bottom: 1px solid #eaeaea; }\n        .form__container .form-secondary .form-control .add-class .file-input {\n          display: none; }\n        .form__container .form-secondary .form-control .add-class .form-btn.upload-file {\n          display: flex;\n          flex-direction: column;\n          justify-content: center;\n          align-items: center;\n          font-family: \"Gilroy\", sans-serif;\n          font-size: 2rem;\n          font-weight: 800;\n          color: #fff;\n          background-color: #4b3d6d;\n          background-color: pink;\n          border: none;\n          border-radius: 2.5rem;\n          height: 5rem;\n          width: 100%;\n          cursor: pointer; }\n  .form__container .form__add-student {\n    width: 120rem;\n    height: 7rem;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-between;\n    flex-wrap: wrap;\n    border: 1px solid #eaeaea;\n    font-size: 2rem;\n    font-weight: bold;\n    color: #7bc0bd;\n    margin-bottom: 6.3rem; }\n    @media (max-width: 1300px) {\n      .form__container .form__add-student {\n        width: calc(100% - 20rem); } }\n    @media (max-width: 950px) {\n      .form__container .form__add-student {\n        width: 50rem;\n        height: 13rem;\n        justify-content: center; } }\n    @media (max-width: 500px) {\n      .form__container .form__add-student {\n        width: calc(100% - 5rem); } }\n    .form__container .form__add-student .form-control {\n      width: 50%;\n      display: flex;\n      flex-direction: row;\n      align-items: center;\n      justify-content: flex-start; }\n      @media (max-width: 950px) {\n        .form__container .form__add-student .form-control {\n          width: 75%;\n          margin: 2.5rem 0 2rem 0;\n          align-items: flex-start; } }\n      .form__container .form__add-student .form-control .addStudentName {\n        padding-left: 4.1rem;\n        padding-right: 1rem; }\n        @media (max-width: 950px) {\n          .form__container .form__add-student .form-control .addStudentName {\n            padding-left: 0; } }\n      .form__container .form__add-student .form-control .addStudentName-input {\n        width: 35.7rem;\n        color: #bdbdbd;\n        font-family: \"Open Sans\";\n        font-size: 2rem;\n        border: none;\n        border-bottom: 1px solid #eaeaea;\n        padding-left: 1rem;\n        cursor: pointer; }\n        .form__container .form__add-student .form-control .addStudentName-input:focus {\n          outline: 1px solid #7bc0bd; }\n    .form__container .form__add-student .form-control-radios {\n      flex: 1;\n      margin-left: 2rem;\n      display: flex;\n      flex-direction: row;\n      justify-self: start;\n      align-items: center; }\n      @media (max-width: 950px) {\n        .form__container .form__add-student .form-control-radios {\n          max-width: 75%;\n          margin-bottom: 2rem;\n          margin-left: 0; } }\n      .form__container .form__add-student .form-control-radios h3 {\n        font-size: 2rem; }\n      .form__container .form__add-student .form-control-radios .radio-control {\n        display: flex;\n        flex-direction: row;\n        align-items: center;\n        margin-left: 3rem; }\n        .form__container .form__add-student .form-control-radios .radio-control .gender-radio-label {\n          padding-left: 2rem;\n          color: #bdbdbd; }\n        .form__container .form__add-student .form-control-radios .radio-control .gender-radio {\n          visibility: hidden; }\n        .form__container .form__add-student .form-control-radios .radio-control .gender-radio + .gender-radio-label::before {\n          content: '';\n          background-color: #fff;\n          border: 0.3rem solid #eaeaea;\n          border-radius: 100%;\n          display: block;\n          box-sizing: border-box;\n          float: left;\n          width: 2.4rem;\n          height: 2.4rem;\n          margin-left: -1.5em;\n          margin-top: .15em;\n          vertical-align: top;\n          cursor: pointer;\n          text-align: center;\n          transition: all .12s ease-out; }\n        .form__container .form__add-student .form-control-radios .radio-control .gender-radio:checked + label::before {\n          background-color: #7bc0bd;\n          box-shadow: inset 0 0 0 0.15em #7bc0bd; }\n    .form__container .form__add-student .add__submit--btn {\n      align-self: flex-end;\n      margin-left: auto;\n      margin-right: 3rem;\n      height: 3.6rem;\n      width: 3.6rem;\n      border-radius: 1.8rem;\n      border: none;\n      background-color: #7bc0bd;\n      cursor: pointer; }\n      @media (max-width: 950px) {\n        .form__container .form__add-student .add__submit--btn {\n          margin-right: 0; } }\n      .form__container .form__add-student .add__submit--btn i {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        width: 100%;\n        height: 100%;\n        font-size: 2rem;\n        color: white; }\n\n.addClassBtn {\n  position: absolute;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  top: 7.6rem;\n  right: 0rem;\n  font-size: 2rem;\n  width: 5.5rem;\n  height: 5.5rem;\n  border-radius: 2.25em;\n  color: #fff;\n  background-color: #7bc0bd; }\n  @media (max-width: 1300px) {\n    .addClassBtn {\n      right: 10rem; } }\n  @media (max-width: 500px) {\n    .addClassBtn {\n      position: static;\n      top: 0;\n      margin: 0rem 0 3rem; } }\n  .addClassBtn a {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    text-decoration: none; }\n    .addClassBtn a i {\n      color: #fff;\n      font-size: 3rem; }\n\n.classrooms__container {\n  width: 120rem;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  align-items: space-between;\n  height: 100%;\n  position: relative;\n  margin-bottom: 2rem; }\n  @media (max-width: 1300px) {\n    .classrooms__container {\n      width: 100%;\n      padding: 0 10rem; } }\n  @media (max-width: 788px) {\n    .classrooms__container {\n      padding: 0 5rem; } }\n  @media (max-width: 650px) {\n    .classrooms__container {\n      justify-content: center; } }\n  .classrooms__container .class__container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    width: 27.75rem;\n    position: relative;\n    border: 1px solid #eaeaea;\n    margin-bottom: 3rem; }\n    @media (max-width: 1300px) {\n      .classrooms__container .class__container {\n        min-width: calc((100% - 6rem) / 3); }\n        .classrooms__container .class__container:not(:nth-child(3n)) {\n          margin-right: 3rem; } }\n    @media (max-width: 1100px) {\n      .classrooms__container .class__container {\n        min-width: calc((100% - 3rem) / 2);\n        font-size: .2rem; }\n        .classrooms__container .class__container:not(:nth-child(3n)) {\n          margin-right: 0; }\n        .classrooms__container .class__container:not(:nth-child(2n)) {\n          margin-right: 3rem; } }\n    @media (max-width: 650px) {\n      .classrooms__container .class__container {\n        min-width: 30rem; }\n        .classrooms__container .class__container:not(:nth-child(2n)) {\n          margin-right: 0rem; } }\n    @media (max-width: 788px) {\n      .classrooms__container .class__container {\n        max-width: 25rem; } }\n    @media (max-width: 500px) {\n      .classrooms__container .class__container {\n        min-width: 23rem; } }\n    .classrooms__container .class__container .trashBtn {\n      position: absolute;\n      top: 2rem;\n      right: 2rem;\n      font-size: 1.5rem;\n      display: none; }\n      .classrooms__container .class__container .trashBtn a {\n        color: red; }\n    .classrooms__container .class__container .class-title {\n      margin-top: 4.1rem;\n      margin-bottom: 2.8rem;\n      font-size: 2rem;\n      font-weight: bold;\n      font-family: \"Open Sans\"; }\n      .classrooms__container .class__container .class-title a {\n        text-decoration: none;\n        color: #7bc0bd; }\n      @media (max-width: 788px) {\n        .classrooms__container .class__container .class-title {\n          margin-top: 2.5rem;\n          margin-bottom: .75rem; } }\n    .classrooms__container .class__container .class {\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      justify-content: center;\n      padding-bottom: 2rem;\n      font-family: \"Open Sans\";\n      font-weight: 600; }\n      .classrooms__container .class__container .class li {\n        list-style: none;\n        width: 21.33rem;\n        text-align: center; }\n        .classrooms__container .class__container .class li a {\n          text-decoration: none; }\n      .classrooms__container .class__container .class .game-link {\n        font-size: 1.8rem;\n        color: #302929;\n        margin: 1.25rem; }\n        @media (max-width: 500px) {\n          .classrooms__container .class__container .class .game-link {\n            margin: .5rem; } }\n        .classrooms__container .class__container .class .game-link:not(:last-of-type) {\n          padding-bottom: 2rem;\n          border-bottom: 2px solid #eaeaea; }\n        .classrooms__container .class__container .class .game-link a {\n          text-decoration: none;\n          color: black; }\n    .classrooms__container .class__container:hover .trashBtn {\n      display: block; }\n\n.choose-game {\n  width: 120rem;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-around;\n  list-style: none;\n  font-family: \"Gilroy\", sans-serif;\n  font-size: 2rem;\n  font-weight: 800;\n  margin-bottom: 6.3rem; }\n  @media (max-width: 950px) {\n    .choose-game {\n      margin-bottom: 2.5rem; } }\n  @media (max-width: 1300px) {\n    .choose-game {\n      width: 100%;\n      padding: 0 10rem; } }\n  @media (max-width: 1200px) {\n    .choose-game {\n      flex-wrap: wrap; } }\n  @media (max-width: 1050px) {\n    .choose-game {\n      width: 100%;\n      padding: 0 10rem; } }\n  @media (max-width: 500px) {\n    .choose-game {\n      width: 100%;\n      padding: 0 2.5rem;\n      margin-bottom: 2rem; } }\n  .choose-game-button {\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    list-style: none;\n    cursor: pointer;\n    width: 25rem;\n    height: 4.9rem;\n    border-radius: 2.45rem;\n    background-color: #f0f0fb; }\n    @media (max-width: 1300px) {\n      .choose-game-button {\n        margin-bottom: 4rem; } }\n    @media (max-width: 1200px) {\n      .choose-game-button {\n        min-width: 38rem; } }\n    @media (max-width: 1050px) {\n      .choose-game-button {\n        font-size: 1.8rem;\n        min-width: 30rem; } }\n    @media (max-width: 950px) {\n      .choose-game-button {\n        min-width: 26rem;\n        margin-bottom: 3rem; } }\n    @media (max-width: 788px) {\n      .choose-game-button {\n        min-width: 22rem; } }\n    @media (max-width: 500px) {\n      .choose-game-button {\n        max-width: 19rem;\n        min-width: 19rem;\n        font-size: 1.6rem; } }\n    .choose-game-button:hover {\n      background-color: #4b3d6d; }\n      .choose-game-button:hover a {\n        color: #fff; }\n    .choose-game-button:not(:last-of-type) {\n      margin-right: 3.7rem; }\n      @media (max-width: 1300px) {\n        .choose-game-button:not(:last-of-type) {\n          margin-right: 0; } }\n    .choose-game-button a {\n      text-decoration: none;\n      color: #4b3d6d; }\n\n.class-participation {\n  margin: 0;\n  padding: 0;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center; }\n\n.errors {\n  font-size: 2rem;\n  color: #e27488; }\n\n.student__list {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: flex-start;\n  flex-wrap: wrap;\n  list-style: none; }\n  @media (max-width: 1200px) {\n    .student__list {\n      justify-content: center; } }\n  .student__list .studentContainer {\n    width: 58.5rem;\n    display: flex;\n    flex-direction: column;\n    border-bottom: 1px solid #eaeaea; }\n    .student__list .studentContainer:not(:nth-child(2n)) {\n      margin-right: 3rem; }\n      @media (max-width: 1200px) {\n        .student__list .studentContainer:not(:nth-child(2n)) {\n          margin-right: 0; } }\n    @media (max-width: 500px) {\n      .student__list .studentContainer {\n        width: calc(100% - 5rem); } }\n    .student__list .studentContainer .student {\n      width: 100%;\n      height: 5rem;\n      display: flex;\n      flex-direction: row;\n      align-items: center;\n      justify-content: space-between;\n      font-family: \"Open Sans\";\n      font-size: 1.8rem;\n      color: #302929; }\n      .student__list .studentContainer .student .student__name {\n        flex: 1;\n        margin-left: 4rem; }\n        @media (max-width: 500px) {\n          .student__list .studentContainer .student .student__name {\n            margin-left: 2rem; } }\n      .student__list .studentContainer .student .studentPoints {\n        display: flex;\n        flex-direction: row;\n        align-items: center;\n        justify-content: space-between;\n        width: 7rem;\n        margin-right: 4rem; }\n        .student__list .studentContainer .student .studentPoints:not(:nth-child(2n)) {\n          margin-right: 5rem; }\n          @media (max-width: 500px) {\n            .student__list .studentContainer .student .studentPoints:not(:nth-child(2n)) {\n              margin-right: 2.5rem; } }\n        @media (max-width: 500px) {\n          .student__list .studentContainer .student .studentPoints {\n            margin-right: 4rem; } }\n        .student__list .studentContainer .student .studentPoints .pointsLabel {\n          display: flex;\n          flex-direction: column;\n          align-items: flex-start;\n          justify-content: center;\n          font-family: \"Open Sans\";\n          font-size: 1rem;\n          text-transform: uppercase;\n          font-weight: 600;\n          letter-spacing: 0.5px;\n          line-height: 1;\n          color: #bdbdbd; }\n        .student__list .studentContainer .student .studentPoints .points {\n          display: flex;\n          flex-direction: row;\n          align-items: center;\n          justify-content: flex-end;\n          width: 10rem;\n          margin-right: 2rem;\n          margin-left: 1.7rem;\n          font-size: 1.8rem;\n          color: #302929; }\n          @media (max-width: 500px) {\n            .student__list .studentContainer .student .studentPoints .points {\n              margin-right: 0; } }\n      .student__list .studentContainer .student .student-edit {\n        display: none;\n        margin-right: 2rem; }\n        .student__list .studentContainer .student .student-edit .student-edit-button {\n          display: flex;\n          justify-content: center;\n          align-items: center;\n          height: 2.4rem;\n          width: 2.4rem;\n          font-size: 1.2rem;\n          border-radius: 1.2rem;\n          color: #fff; }\n          .student__list .studentContainer .student .student-edit .student-edit-button-edit {\n            background-color: #4b3d6d;\n            margin-right: 1rem; }\n          .student__list .studentContainer .student .student-edit .student-edit-button-delete {\n            background-color: #e27488;\n            text-decoration: none; }\n      .student__list .studentContainer .student:hover .student-edit {\n        display: flex;\n        flex-direction: row;\n        align-items: center;\n        justify-content: space-between; }\n    .student__list .studentContainer .update__form {\n      font-size: 1.8rem;\n      background-color: rgba(234, 234, 234, 0.4); }\n      .student__list .studentContainer .update__form .form__update {\n        position: relative;\n        display: flex;\n        flex-direction: row;\n        align-items: center;\n        justify-content: flex-end;\n        height: 5rem; }\n        @media (max-width: 500px) {\n          .student__list .studentContainer .update__form .form__update {\n            flex-wrap: wrap;\n            height: 10rem; } }\n        .student__list .studentContainer .update__form .form__update .update__name {\n          border: none;\n          font-size: 1.8rem;\n          color: #302929;\n          max-width: 14rem;\n          background-color: inherit;\n          margin-right: auto;\n          margin-left: 4rem; }\n        .student__list .studentContainer .update__form .form__update .form-control-radios {\n          display: flex;\n          flex-direction: row;\n          align-items: center;\n          justify-content: flex-end;\n          height: 5rem;\n          margin-right: 2rem; }\n          .student__list .studentContainer .update__form .form__update .form-control-radios .radio-control {\n            display: flex;\n            flex-direction: row;\n            align-items: center;\n            justify-content: space-between; }\n            .student__list .studentContainer .update__form .form__update .form-control-radios .radio-control:not(:last-of-type) {\n              margin-right: 1.3rem; }\n            .student__list .studentContainer .update__form .form__update .form-control-radios .radio-control .gender-radio {\n              visibility: hidden; }\n            .student__list .studentContainer .update__form .form__update .form-control-radios .radio-control .gender-radio-label {\n              padding-left: 2rem;\n              color: #bdbdbd;\n              font-family: \"Open Sans\";\n              font-size: 1.8rem;\n              color: #bdbdbd; }\n            .student__list .studentContainer .update__form .form__update .form-control-radios .radio-control .gender-radio + .gender-radio-label::before {\n              content: '';\n              background-color: #fff;\n              border: 0.3rem solid #eaeaea;\n              border-radius: 100%;\n              display: block;\n              box-sizing: border-box;\n              float: left;\n              width: 2.4rem;\n              height: 2.4rem;\n              margin-left: -1.5em;\n              margin-top: .15em;\n              vertical-align: top;\n              cursor: pointer;\n              text-align: center;\n              transition: all .12s ease-out; }\n            .student__list .studentContainer .update__form .form__update .form-control-radios .radio-control .gender-radio:checked + label::before {\n              background-color: #7bc0bd;\n              box-shadow: inset 0 0 0 0.15em #7bc0bd; }\n        .student__list .studentContainer .update__form .form__update .form-control-number {\n          display: flex;\n          flex-direction: row;\n          align-items: center;\n          justify-content: space-between;\n          padding: 0rem 0.5rem; }\n          .student__list .studentContainer .update__form .form__update .form-control-number:not(:nth-child(2n)) {\n            margin-right: .25rem; }\n          .student__list .studentContainer .update__form .form__update .form-control-number .pointsLabel {\n            display: flex;\n            flex-direction: column;\n            align-items: flex-start;\n            justify-content: center;\n            font-family: \"Open Sans\";\n            font-size: 1rem;\n            text-transform: uppercase;\n            font-weight: 600;\n            letter-spacing: 0.5px;\n            line-height: 1;\n            color: #bdbdbd; }\n          .student__list .studentContainer .update__form .form__update .form-control-number .pointsInput {\n            width: 5rem;\n            font-size: 1.8rem;\n            border: none;\n            height: 5rem;\n            color: #302929;\n            background-color: inherit;\n            text-align: left;\n            padding-left: 1.7rem .student__list .studentContainer .update__form .form__update .form-control-number .pointsInput; }\n            .student__list .studentContainer .update__form .form__update .form-control-number .pointsInput :focus {\n              background-color: inherit;\n              outline: none; }\n            .student__list .studentContainer .update__form .form__update .form-control-number .pointsInput::-webkit-outer-spin-button, .student__list .studentContainer .update__form .form__update .form-control-number .pointsInput::-webkit-inner-spin-button {\n              -webkit-appearance: none;\n              -moz-appearance: none;\n              appearance: none;\n              margin: 0; }\n          .student__list .studentContainer .update__form .form__update .form-control-number .increment-buttons {\n            display: flex;\n            flex-direction: column;\n            align-items: center;\n            justify-content: center;\n            border: none;\n            margin-right: .5rem; }\n            .student__list .studentContainer .update__form .form__update .form-control-number .increment-buttons .increment-button {\n              border: none;\n              background-color: inherit;\n              outline: none; }\n              .student__list .studentContainer .update__form .form__update .form-control-number .increment-buttons .increment-button i {\n                font-size: 2rem;\n                color: #bdbdbd; }\n        .student__list .studentContainer .update__form .form__update .update__submit--btn {\n          position: absolute;\n          right: -2.5rem;\n          top: 50%;\n          transform: translateY(-50%);\n          height: 2.4rem;\n          width: 2.4rem;\n          border-radius: 1.2rem;\n          border: none;\n          background-color: #7bc0bd;\n          color: #fff; }\n\n.game-header {\n  width: 100%;\n  height: 7rem;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  border-bottom: 1rem solid #4b3d6d;\n  margin-bottom: 2rem; }\n  .game-header .options {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center;\n    height: 100%; }\n    .game-header .options .option-Btn {\n      height: 3.8rem;\n      width: 3.8rem;\n      border-radius: 1.9rem;\n      border: none;\n      color: #fff;\n      font-size: 2rem; }\n      .game-header .options .option-Btn:not(:last-of-type) {\n        margin-right: 1rem; }\n    .game-header .options .shuffle-studentsBtn {\n      background-color: #4b3d6d; }\n    .game-header .options .refresh-studentsBtn,\n    .game-header .options .refresh-gameBtn,\n    .game-header .options .playAgainBtn {\n      background-color: #e27488; }\n    .game-header .options .save-gameBtn,\n    .game-header .options .goToClassroomBtn {\n      background-color: #302929; }\n  .game-header .game__form__container {\n    align-self: flex-end;\n    width: 30rem;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: flex-start; }\n    .game-header .game__form__container .gameForm {\n      display: flex;\n      position: relative;\n      flex-direction: row;\n      align-items: center; }\n      .game-header .game__form__container .gameForm .team_number_label {\n        font-family: \"Open Sans\";\n        font-size: 2rem;\n        font-weight: bold;\n        color: #7bc0bd; }\n      .game-header .game__form__container .gameForm .team_number {\n        width: 9.5rem;\n        padding: 1rem;\n        font-family: \"Open Sans\";\n        color: #302929;\n        font-size: 2rem;\n        font-weight: bold;\n        text-align: center;\n        outline: none;\n        border: none; }\n        .game-header .game__form__container .gameForm .team_number::-webkit-outer-spin-button, .game-header .game__form__container .gameForm .team_number::-webkit-inner-spin-button {\n          -webkit-appearance: none;\n          -moz-appearance: none;\n          appearance: none;\n          margin: 0; }\n      .game-header .game__form__container .gameForm .increment-buttons {\n        position: absolute;\n        right: 7rem;\n        top: 50%;\n        transform: translateY(-50%);\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        justify-content: center;\n        border: none; }\n        .game-header .game__form__container .gameForm .increment-buttons .increment-button {\n          border: none;\n          background-color: inherit;\n          cursor: pointer; }\n          .game-header .game__form__container .gameForm .increment-buttons .increment-button i {\n            font-size: 2rem;\n            color: #bdbdbd; }\n\n.game__container {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  align-items: flex-start; }\n  .game__container .line {\n    position: relative;\n    min-height: 150%;\n    width: 1.2rem;\n    align-self: stretch;\n    border-left: 1.2rem solid #7bc0bd;\n    top: -8rem; }\n  .game__container .game-options {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    height: 100%;\n    width: 6.5rem; }\n    .game__container .game-options .game-Btn {\n      height: 3.8rem;\n      width: 3.8rem;\n      border-radius: 1.9rem;\n      border: none;\n      color: #fff;\n      font-size: 2rem;\n      margin-bottom: 1rem; }\n    .game__container .game-options .playGameBtn,\n    .game__container .game-options .previous,\n    .game__container .game-options .previous-student,\n    .game__container .game-options .next-student,\n    .game__container .game-options .next {\n      background-color: #7bc0bd; }\n  .game__container .teams,\n  .game__container .preview__teams {\n    width: 30rem; }\n    .game__container .teams .team,\n    .game__container .preview__teams .team {\n      margin-bottom: 1.5rem;\n      border: 1px solid #eaeaea; }\n      .game__container .teams .team .teamName,\n      .game__container .preview__teams .team .teamName {\n        margin-bottom: 1rem; }\n      .game__container .teams .team .teamList,\n      .game__container .preview__teams .team .teamList {\n        list-style: none;\n        font-family: \"Open Sans\";\n        font-size: 1.8rem;\n        padding: 0 3.5rem; }\n  .game__container .preview__teams .team .teamName {\n    margin-top: 2rem;\n    width: 100%;\n    text-align: center;\n    color: #7bc0bd;\n    font-size: \"Open Sans\";\n    font-size: 2rem;\n    font-weight: bold; }\n  .game__container .preview__teams .team .teamList .student {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: flex-end;\n    height: 4rem;\n    padding: 0 1rem; }\n    .game__container .preview__teams .team .teamList .student .student-name {\n      flex: 1;\n      color: #302929; }\n    .game__container .preview__teams .team .teamList .student .student-gender {\n      color: #bdbdbd;\n      font-weight: 600;\n      padding: 0 1rem; }\n    .game__container .preview__teams .team .teamList .student .deleteStudent {\n      display: none;\n      flex-direction: column;\n      align-items: center;\n      justify-content: center;\n      width: 2.4rem;\n      height: 2.4rem;\n      border-radius: 1.2rem;\n      background-color: #e27488; }\n    .game__container .preview__teams .team .teamList .student:hover {\n      background-color: rgba(234, 234, 234, 0.4); }\n      .game__container .preview__teams .team .teamList .student:hover .deleteStudent {\n        display: flex; }\n  .game__container .teams .team-info {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: flex-end;\n    height: 5rem;\n    padding: 0 3.5rem;\n    background-color: rgba(234, 234, 234, 0.4); }\n    .game__container .teams .team-info .teamName {\n      width: 100%;\n      margin: 0;\n      color: #7bc0bd;\n      font-size: \"Open Sans\";\n      font-size: 2rem;\n      font-weight: bold; }\n    .game__container .teams .team-info .teamPoint {\n      display: flex;\n      flex-direction: row;\n      align-items: center; }\n      .game__container .teams .team-info .teamPoint button {\n        width: 3rem;\n        height: 3rem;\n        border-radius: 1.5rem;\n        background-color: #302929;\n        margin-right: .5rem;\n        border: none; }\n        .game__container .teams .team-info .teamPoint button i {\n          display: flex;\n          align-items: center;\n          justify-content: center;\n          color: #fff;\n          width: 100%;\n          height: 100%; }\n      .game__container .teams .team-info .teamPoint .teamPointValue {\n        font-size: 3rem;\n        font-family: \"Open Sans\";\n        font-weight: bold;\n        width: 2rem;\n        text-align: right; }\n  .game__container .teams .teamList .currentStudent .name {\n    color: #e27488 !important; }\n  .game__container .teams .teamList .nextStudent .name {\n    text-decoration: underline;\n    -webkit-text-decoration-color: #e27488;\n            text-decoration-color: #e27488; }\n  .game__container .teams .teamList .student {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: flex-end;\n    height: 4rem; }\n    .game__container .teams .teamList .student .name {\n      flex: 1;\n      color: #302929;\n      -moz-text-align-last: left;\n           text-align-last: left; }\n    .game__container .teams .teamList .student button {\n      width: 2.5rem;\n      height: 2.5rem;\n      border-radius: 1.5rem;\n      background-color: #bdbdbd;\n      margin-right: .85rem;\n      border: none; }\n      .game__container .teams .teamList .student button i {\n        color: #fff;\n        height: 100%;\n        width: 100%;\n        display: flex;\n        align-items: center;\n        justify-content: center; }\n    .game__container .teams .teamList .student .points {\n      font-size: 3rem;\n      font-family: \"Open Sans\";\n      font-weight: bold;\n      width: 2rem;\n      text-align: right; }\n  .game__container .winningStudentContainer {\n    min-width: 30rem;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    border: 1px solid #eaeaea;\n    margin-bottom: 2rem; }\n    .game__container .winningStudentContainer .winningStudentTitle {\n      font-size: 2rem;\n      color: #7bc0bd; }\n    .game__container .winningStudentContainer .firstPlace .winnerName {\n      font-size: 2rem;\n      color: #302929; }\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sass_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sass/main.scss */ "./src/sass/main.scss");
/* harmony import */ var _sass_main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sass_main_scss__WEBPACK_IMPORTED_MODULE_0__);
 // if(typeof(module.hot) !== 'undefined') {
//     module.hot.accept() 
// }

/***/ }),

/***/ "./src/sass/main.scss":
/*!****************************!*\
  !*** ./src/sass/main.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--7-1!../../node_modules/postcss-loader/src!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/main.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ })

/******/ });
//# sourceMappingURL=main.js.map