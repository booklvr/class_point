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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/individual/controller.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/commonFunctions.js":
/*!***********************************!*\
  !*** ./src/js/commonFunctions.js ***!
  \***********************************/
/*! exports provided: commonFunctions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "commonFunctions", function() { return commonFunctions; });
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var commonFunctions = function () {
  var _ref;

  var DOMStrings = {
    // ID's
    numberOfTeams: '#numberOfTeams',
    // CLASSES
    submit: '.submit',
    gameContainer: '.game__container',
    // classroomData: '.classroomData',
    teams: '.teams',
    previewTeams: '.preview__teams',
    gameForm: '.gameForm',
    errors: '.errors',
    titleContainer: '.title__container',
    title: '.title',
    refreshStudentsBtn: '.refresh-studentsBtn',
    refreshGameBtn: '.refresh-gameBtn',
    playGameBtn: '.playGameBtn',
    shuffleStudentsBtn: '.shuffle-studentsBtn',
    saveGameBtn: '.save-gameBtn',
    // not yet
    goToClassroomBtn: '.goToClassroomBtn',
    playAgainBtn: '.playAgainBtn',
    previous: '.previous',
    previousStudent: '.previous-student',
    nextStudent: '.next-student',
    next: '.next',
    options: '.options'
  };
  var DOM = {
    numberOfTeams: document.querySelector(DOMStrings.numberOfTeams),
    submit: document.querySelector(DOMStrings.submit),
    gameForm: document.querySelector(DOMStrings.gameForm),
    gameContainer: document.querySelector(DOMStrings.gameContainer),
    errors: document.querySelector(DOMStrings.errors),
    // classroomData: document.querySelector(DOMStrings.classroomData),
    teams: document.querySelector(DOMStrings.teams),
    previewTeams: document.querySelector(DOMStrings.previewTeams),
    titleContainer: document.querySelector(DOMStrings.titleContainer),
    title: document.querySelector(DOMStrings.title),
    refreshStudentsBtn: document.querySelector(DOMStrings.refreshStudentsBtn),
    shuffleStudentsBtn: document.querySelector(DOMStrings.shuffleStudentsBtn),
    playGameBtn: document.querySelector(DOMStrings.playGameBtn),
    refreshGameBtn: document.querySelector(DOMStrings.refreshGameBtn),
    saveGameBtn: document.querySelector(DOMStrings.saveGameBtn),
    goToClassroomBtn: document.querySelector(DOMStrings.goToClassroomBtn),
    playAgainBtn: document.querySelector(DOMStrings.playAgainBtn),
    next: document.querySelector(DOMStrings.next),
    nextStudent: document.querySelector(DOMStrings.nextStudent),
    previousStudent: document.querySelector(DOMStrings.previousStudent),
    previous: document.querySelector(DOMStrings.previous)
  }; //is it an add or minus button;

  return _ref = {
    plusOrMinus: function plusOrMinus(target) {
      return target.classList.contains('add') ? 1 : -1;
    },
    addPreviewToDOM: function addPreviewToDOM(teamsArray) {
      DOM.previewTeams.innerHTML = '';
      teamsArray.forEach(function (team) {
        //create new team div
        var newTeam = document.createElement('div');
        newTeam.className += 'team'; //add title

        var teamName = document.createElement('h3');
        teamName.className += 'teamName';
        teamName.innerHTML = team.name;
        newTeam.appendChild(teamName);
        var teamList = document.createElement('ul');
        teamList.className += 'teamList';
        team.students.forEach(function (student) {
          var newStudent = document.createElement("li");
          newStudent.className += 'student';
          newStudent.innerHTML = "\n                        <span class=\"student-name\">".concat(student.name, "</span>\n                        <span class=\"student-gender\">").concat(student.sex === 'male' ? 'boy' : 'girl', "</span>\n                        <i id=\"").concat(student._id, "\" class=\"deleteStudent fas fa-minus\"></i></a>\n                    ");
          teamList.appendChild(newStudent);
        });
        newTeam.appendChild(teamList); // const teamName = document.createElement('ul')

        DOM.previewTeams.appendChild(newTeam);
      });
    },
    removeStudentFromTeam: function removeStudentFromTeam(teamsArray, studentID) {
      teamsArray.forEach(function (team) {
        return team.students = team.students.filter(function (student) {
          return student._id !== studentID;
        });
      });
      console.log('teamsArray', teamsArray);
    },
    removeStudentfromArray: function removeStudentfromArray(studentsArray, studentID) {
      // console.log(studentID);
      studentsArray = studentsArray.filter(function (student) {
        return student._id != studentID;
      });
      console.log(studentsArray);
      return studentsArray;
    },
    shuffleArray: function shuffleArray(array) {
      var currentIndex = array.length,
          temporaryValue,
          randomIndex; // While there remain elements to shuffle...

      while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1; // And swap it with the current element.

        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }

      return array;
    },
    addErrorMessage: function addErrorMessage(message) {
      DOM.errors.innerHTML = message;
      setTimeout(function () {
        DOM.errors.innerHTML = "";
      }, 3000);
    },
    startGame: function startGame() {
      DOM.title.innerHTML = "Let's Play";

      if (DOM.gameForm) {
        DOM.gameForm.remove();
      }

      DOM.previewTeams.remove();
      DOM.teams.innerHTML = '';
      DOM.refreshStudentsBtn.remove();
      DOM.shuffleStudentsBtn.remove();
      DOM.playGameBtn.remove();
      DOM.refreshGameBtn.classList.toggle('hide');
      DOM.saveGameBtn.classList.toggle('hide');
      DOM.previous.classList.toggle('hide');
      DOM.nextStudent.classList.toggle('hide');
      DOM.previousStudent.classList.toggle('hide');
      DOM.next.classList.toggle('hide');
      DOM.teams.classList.toggle('hide');
    },
    addTeamsToDom: function addTeamsToDom(teamsArray) {
      // add teams to the dom
      teamsArray.forEach(function (team, teamIndex) {
        //create new team div
        var newTeam = document.createElement('div');
        newTeam.className += 'team';
        newTeam.setAttribute('id', team.teamID); //add title

        var teamInfo = document.createElement('div');
        teamInfo.className += 'team-info';
        var teamName = document.createElement('h3');
        teamName.className += 'teamName';
        teamName.innerHTML = team.name;
        teamInfo.appendChild(teamName);
        var teamPoint = document.createElement('div');
        teamPoint.className += 'teamPoint';
        teamPoint.innerHTML = "\n                    <button class=\"minus minus__team\"><i class=\"fas fa-minus\"></i></button>\n                    <button class=\"add add__team\"><i class=\"fas fa-plus\"></i></button>\n                    <span class=\"teamPointValue\">".concat(team.totalPoints, "</span>\n                ");
        teamInfo.appendChild(teamPoint);
        newTeam.appendChild(teamInfo);
        var teamList = document.createElement('ul');
        teamList.className += 'teamList';
        team.students.forEach(function (student, studentIndex) {
          var newStudent = document.createElement("li");
          newStudent.className += 'student';
          newStudent.setAttribute('id', student._id);
          newStudent.innerHTML = "\n                        <span class=name>".concat(student.name, "</span>\n                        <button class=\"add-plus-btn minus minus__student\"><i class=\"fas fa-minus\"></i></button>\n                        <button class=\"add-plus-btn add add__student\"><i class=\"fas fa-plus\"></i></button>\n                        <span class=\"points\">").concat(student.points, "</span>\n                    ");
          teamList.appendChild(newStudent); // create current student

          if (teamIndex === 0 && studentIndex === 0) {
            // const currentTitle = document.createElement('h3');
            // currentTitle.classList += 'currentTitle';
            // currentTitle.innerHTML = 'Current Student';
            // teamList.insertBefore(currentTitle, teamList.firstChild);
            // console.log('current student');
            newStudent.className += ' currentStudent'; // create next student
          } else if (teamIndex === 1 && studentIndex === 0) {
            // const nextTitle = document.createElement('h3');
            // nextTitle.classList += 'nextTitle';
            // nextTitle.innerHTML = 'Upcoming Student';
            // teamList.insertBefore(nextTitle, teamList.firstChild);
            // console.log('current student');
            newStudent.className += ' nextStudent';
          }
        }); // console.log('teamsPoints.team1', teamsPoints.team1);
        // totalPoints += teamsPoints[newTeam.id];
        // teamPoint.querySelector('.teamPointValue').innerHTML = totalPoints;
        // console.log(newTeam)

        newTeam.appendChild(teamList); // const teamName = document.createElement('ul')

        DOM.teams.appendChild(newTeam);
      });
    }
  }, _defineProperty(_ref, "plusOrMinus", function plusOrMinus(target) {
    return target.classList.contains('add') ? 1 : -1;
  }), _defineProperty(_ref, "updateStudentPointDom", function updateStudentPointDom(target, action) {
    //find pointsDiv
    var pointsDiv = target.parentElement.lastElementChild; //update pointsDiv

    pointsDiv.innerHTML = +pointsDiv.innerHTML + action;
  }), _defineProperty(_ref, "updatePointsArrayAll", function updatePointsArrayAll(teamsArray, student, action) {
    console.log(student.parentElement.parentElement);
    var studentID = student.id;
    teamsArray.forEach(function (team) {
      return team.students.map(function (student) {
        if (student._id === studentID) {
          console.log("it's a match"); // add or minus points from student points

          student.points += action;
          team.totalPoints += action;
        }
      });
    });
    console.log(teamsArray);
  }), _defineProperty(_ref, "updatePointsArrayTeam", function updatePointsArrayTeam(teamsArray, teamID, action) {
    // iterate over teams array
    // add or minus point to teamPoints
    teamsArray.forEach(function (team) {
      console.log('team.teamID', team.teamID);
      console.log('teamID', teamID);

      if (team.teamID === teamID) {
        console.log("its a match :) ");
        team.totalPoints += action;
      }
    });
    console.log(teamsArray);
  }), _defineProperty(_ref, "updateTeamPointDom", function updateTeamPointDom(team, action) {
    var pointValue = team.querySelector('.teamPointValue');
    action === 1 ? pointValue.innerHTML = +pointValue.innerHTML + 1 : pointValue.innerHTML = +pointValue.innerHTML - 1;
  }), _defineProperty(_ref, "clearDOM", function clearDOM() {
    DOM.teams.innerHTML = ''; // DOM.gameContainer.firstChild.remove();
  }), _defineProperty(_ref, "shiftTeamsAndStudentArray", function shiftTeamsAndStudentArray(array) {
    console.log("shift array");
    console.log(array);
    array[0].students.push(array[0].students.shift());
    console.log(array);
    array.push(array.shift());
    console.log(array);
  }), _defineProperty(_ref, "unShiftTeamsAndStudentArray", function unShiftTeamsAndStudentArray(array) {
    console.log('unshift array');
    array.unshift(array.pop());
    array[0].students.unshift(array[0].students.pop());
  }), _defineProperty(_ref, "unShiftStudentsArray", function unShiftStudentsArray(array) {
    console.log("unShift array");
    array.unshift(array.pop());
  }), _defineProperty(_ref, "shiftStudentsArray", function shiftStudentsArray(array) {
    console.log("shift array");
    array.push(array.shift());
  }), _defineProperty(_ref, "deleteScores", function deleteScores(teamsArray) {
    teamsArray.forEach(function (team) {
      team.totalPoints = 0;
      team.students.forEach(function (student) {
        student.points = 0;
      });
    });
    console.log(teamsArray);
  }), _defineProperty(_ref, "clearInput", function clearInput() {
    DOM.numberOfTeams.value = 1;
  }), _defineProperty(_ref, "endGameOptions", function endGameOptions() {
    DOM.teams.innerHTML = '';
    DOM.refreshGameBtn.remove();
    DOM.saveGameBtn.remove();
    DOM.previous.remove();
    DOM.previousStudent.remove();
    DOM.nextStudent.remove();
    DOM.next.remove();
    DOM.goToClassroomBtn.classList.toggle('hide');
    DOM.playAgainBtn.classList.toggle('hide');
  }), _defineProperty(_ref, "addWinningTeam", function addWinningTeam(array) {
    console.log(array);
    var winningTeamScore = Math.max.apply(Math, array.map(function (o) {
      return o.totalPoints;
    }));
    var winningTeams = array.filter(function (o) {
      return o.totalPoints == winningTeamScore;
    });
    console.log(winningTeams);
    var winningTeamContainer = document.createElement('div');
    winningTeamContainer.classList += 'winningStudentContainer';
    winningTeamContainer.innerHTML = "\n                <h3 class=\"winningStudentTitle\">".concat(winningTeams.length === 1 ? 'First Place Team' : 'Tied for First', "</h3> \n            ");
    winningTeams.forEach(function (team) {
      winningTeamContainer.innerHTML += "\n                    <div class=\"firstPlace\">\n                        <p class=\"winnerName\">".concat(team.name, " <span class=\"winnerPoints\">").concat(team.totalPoints, "</span></p>\n                    </div>\n                ");
    });
    DOM.teams.appendChild(winningTeamContainer);
  }), _defineProperty(_ref, "addWinningStudent", function addWinningStudent(array) {
    var winningStudentScore = Math.max.apply(Math, array.map(function (o) {
      return o.points;
    }));
    var winningStudents = array.filter(function (o) {
      return o.points == winningStudentScore;
    });
    console.log(winningStudents);
    var winningStudentContainer = document.createElement('div');
    winningStudentContainer.classList += 'winningStudentContainer';
    winningStudentContainer.innerHTML = "\n                <h3 class=\"winningStudentTitle\">".concat(winningStudents.length === 1 ? 'First Place Student' : 'Tied for First', "</h3> \n            ");
    winningStudents.forEach(function (student) {
      winningStudentContainer.innerHTML += "\n                    <div class=\"firstPlace\">\n                        <p class=\"winnerName\">".concat(student.name, " <span class=\"winnerPoints\">").concat(student.points, "</span></p>\n                    </div>\n                ");
    });
    DOM.teams.appendChild(winningStudentContainer);
  }), _ref;
}();



/***/ }),

/***/ "./src/js/individual/UI.js":
/*!*********************************!*\
  !*** ./src/js/individual/UI.js ***!
  \*********************************/
/*! exports provided: individualUI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "individualUI", function() { return individualUI; });
/* harmony import */ var _commonFunctions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../commonFunctions.js */ "./src/js/commonFunctions.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



var individualUI = function () {
  var DOMStrings = {
    // BY CLASS
    gameContainer: '.game__container',
    classroomData: '.classroomData',
    teams: '.teams',
    previewTeams: '.preview__teams',
    titleContainer: '.title__container',
    title: '.title',
    refreshStudentsBtn: '.refresh-studentsBtn',
    refreshGameBtn: '.refresh-gameBtn',
    shuffleStudentsBtn: '.shuffle-studentsBtn',
    saveGameBtn: '.save-gameBtn',
    // not yet
    goToClassroomBtn: '.goToClassroomBtn',
    playAgainBtn: '.playAgainBtn',
    playGameBtn: '.playGameBtn',
    previous: '.previous',
    previousStudent: '.previous-student',
    nextStudent: '.next-student',
    next: '.next'
  };
  var DOM = {
    classroomData: document.querySelector(DOMStrings.classroomData),
    gameContainer: document.querySelector(DOMStrings.gameContainer),
    teams: document.querySelector(DOMStrings.teams),
    previewTeams: document.querySelector(DOMStrings.previewTeams),
    refreshStudentsBtn: document.querySelector(DOMStrings.refreshStudentsBtn),
    shuffleStudentsBtn: document.querySelector(DOMStrings.shuffleStudentsBtn),
    refreshGameBtn: document.querySelector(DOMStrings.refreshGameBtn),
    saveGameBtn: document.querySelector(DOMStrings.saveGameBtn),
    playGameBtn: document.querySelector(DOMStrings.playGameBtn),
    nextStudent: document.querySelector(DOMStrings.nextStudent),
    previousStudent: document.querySelector(DOMStrings.previousStudent),
    titleContainer: document.querySelector(DOMStrings.titleContainer),
    title: document.querySelector(DOMStrings.title)
  }; //persistent data

  var studentsArray = [];
  var backupArray = []; //HELPER FUNCTIONS

  var shuffleArray = function shuffleArray(array) {
    var currentIndex = array.length,
        temporaryValue,
        randomIndex; // While there remain elements to shuffle...

    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1; // And swap it with the current element.

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }; ///////////////////////////////////////////////////////////////////////////////
  // *** for game play


  var addPreviewToDOM_Individual = function addPreviewToDOM_Individual() {
    DOM.previewTeams.innerHTML = '';
    var newTeam = document.createElement('div');
    newTeam.className += 'team';
    var teamList = document.createElement('ul');
    teamList.className += 'teamList';
    studentsArray.forEach(function (student) {
      var newStudent = document.createElement("li");
      newStudent.className += 'student';
      newStudent.innerHTML = "\n                <span class=\"student-name\">".concat(student.name, "</span>\n                <span class=\"student-gender\">").concat(student.sex === 'male' ? 'boy' : 'girl', "</span>\n                <i id=\"").concat(student._id, "\" class=\"deleteStudent fas fa-minus\"></i></a>\n            ");
      teamList.appendChild(newStudent);
    });
    newTeam.appendChild(teamList);
    DOM.previewTeams.appendChild(newTeam);
  };

  var addIndividualsToDom = function addIndividualsToDom() {
    // add button to the DOM
    // const buttons = document.createElement('div');
    // buttons.classList += 'buttons';
    // buttons.innerHTML = `
    //     <button class="previous">Previous</button>
    //     <button class="next">Next</button>
    // `
    // DOM.gameContainer.insertBefore(buttons, DOM.gameContainer.firstChild);
    // add teams to the dom
    //create new team div
    var newTeam = document.createElement('div');
    newTeam.className += 'team'; //add title
    // const teamName = document.createElement('h3');
    // teamName.className += 'teamName';
    // teamName.innerHTML = 'students';
    // newTeam.appendChild(teamName);

    var teamList = document.createElement('ul');
    teamList.className += 'teamList';
    studentsArray.forEach(function (student, studentIndex) {
      var newStudent = document.createElement("li");
      newStudent.className += 'student';
      newStudent.setAttribute('id', student._id);
      newStudent.innerHTML = "\n                    <span class=name>".concat(student.name, "</span>\n                    <button class=\"minus minus__student\"><i class=\"fas fa-minus\"></i></button>\n                    <button class=\"add add__student\"><i class=\"fas fa-plus\"></i></button>\n                    <span class=\"points\">").concat(student.points, "</span>\n                ");
      teamList.appendChild(newStudent); // create current student

      if (studentIndex === 0) {
        newStudent.className += ' currentStudent'; // create next student
      } else if (studentIndex === 1) {
        newStudent.className += ' nextStudent';
      }
    });
    newTeam.appendChild(teamList);
    DOM.teams.appendChild(newTeam);
  };

  var updateStudentsArrayPoints = function updateStudentsArrayPoints(student, action) {
    var studentID = student.id;
    studentsArray.map(function (student) {
      if (student._id === studentID) {
        // add or minus points from student points
        student.points += action;
      }
    });
  };

  var deleteScoresIndividual = function deleteScoresIndividual() {
    studentsArray.forEach(function (student) {
      student.points = 0;
    });
    console.log(studentsArray);
  };

  return {
    getDOMStrings: function getDOMStrings() {
      return DOMStrings;
    },
    getClassroomData: function () {
      var _getClassroomData = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var classroomID, response, students;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                console.log('get classroom data');
                classroomID = DOM.classroomData.dataset.classroom_id;
                _context.next = 4;
                return fetch("/game/classData/".concat(classroomID));

              case 4:
                response = _context.sent;
                _context.next = 7;
                return response.json();

              case 7:
                students = _context.sent;
                students.forEach(function (student) {
                  return studentsArray.push(student);
                });
                backupArray = studentsArray;
                console.log(studentsArray);

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getClassroomData() {
        return _getClassroomData.apply(this, arguments);
      }

      return getClassroomData;
    }(),
    createPreviewDOM: function createPreviewDOM() {
      addPreviewToDOM_Individual();
    },
    deleteStudent: function deleteStudent(e) {
      console.log(e.target);

      if (e.target.classList.contains('deleteStudent')) {
        console.log('delete student from arrays');
        studentsArray = _commonFunctions_js__WEBPACK_IMPORTED_MODULE_0__["commonFunctions"].removeStudentfromArray(studentsArray, e.target.id);
        var li = e.target.parentElement;
        li.remove();
      }
    },
    //////////////////////////////////////////////////////////////////
    // *** functions for game play ***
    startGame: function startGame(e) {
      // posting teams to teamGame
      e.preventDefault();
      console.log("let's play");
      DOM.title.innerHTML = "Let's Play";

      if (DOM.gameForm) {
        DOM.gameForm.remove();
      }

      DOM.previewTeams.remove();
      DOM.teams.innerHTML = '';
      DOM.teams.classList.toggle('hide');
      DOM.refreshStudentsBtn.remove();
      DOM.shuffleStudentsBtn.remove();
      DOM.playGameBtn.remove();
      DOM.refreshGameBtn.classList.toggle('hide');
      DOM.saveGameBtn.classList.toggle('hide');
      DOM.nextStudent.classList.toggle('hide');
      DOM.previousStudent.classList.toggle('hide');
      shuffleArray(studentsArray);
      addIndividualsToDom();
    },
    changePointStudent: function changePointStudent(e) {
      var target = e.target.parentElement;

      if (target.classList.contains('add__student') || target.classList.contains('minus__student')) {
        var action = _commonFunctions_js__WEBPACK_IMPORTED_MODULE_0__["commonFunctions"].plusOrMinus(target);
        var student = target.parentElement;
        _commonFunctions_js__WEBPACK_IMPORTED_MODULE_0__["commonFunctions"].updateStudentPointDom(target, action);
        updateStudentsArrayPoints(student, action);
      }
    },
    goToPreviousStudent: function goToPreviousStudent() {
      console.log('goToPreviousStudent');
      _commonFunctions_js__WEBPACK_IMPORTED_MODULE_0__["commonFunctions"].clearDOM(); // shift arrays 

      _commonFunctions_js__WEBPACK_IMPORTED_MODULE_0__["commonFunctions"].unShiftStudentsArray(studentsArray);
      addIndividualsToDom();
    },
    goToNextStudent: function goToNextStudent() {
      console.log('goToNextStudent');
      _commonFunctions_js__WEBPACK_IMPORTED_MODULE_0__["commonFunctions"].clearDOM(); // shift arrays 

      _commonFunctions_js__WEBPACK_IMPORTED_MODULE_0__["commonFunctions"].shiftStudentsArray(studentsArray);
      addIndividualsToDom();
    },
    refreshScores: function refreshScores() {
      deleteScoresIndividual();
      _commonFunctions_js__WEBPACK_IMPORTED_MODULE_0__["commonFunctions"].clearDOM();
      addIndividualsToDom();
    },
    refreshStudents: function refreshStudents() {
      console.log('refreshStudents');
      studentsArray = backupArray;
      addPreviewToDOM_Individual();
    },
    shufflePreview: function shufflePreview() {
      console.log('shuffle these students around');
      _commonFunctions_js__WEBPACK_IMPORTED_MODULE_0__["commonFunctions"].shuffleArray(studentsArray);
      addPreviewToDOM_Individual();
    },
    saveGame: function () {
      var _saveGame = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var url;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _commonFunctions_js__WEBPACK_IMPORTED_MODULE_0__["commonFunctions"].clearDOM();
                _commonFunctions_js__WEBPACK_IMPORTED_MODULE_0__["commonFunctions"].endGameOptions();
                _commonFunctions_js__WEBPACK_IMPORTED_MODULE_0__["commonFunctions"].addWinningStudent(studentsArray);
                url = "/game/updatePoints";
                _context2.next = 6;
                return fetch(url, {
                  method: 'post',
                  headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                  },
                  // credentials: 'same-origin',
                  body: JSON.stringify(studentsArray)
                }).then(function (res) {
                  return res;
                }).then(function (text) {
                  return console.log('final result', text);
                });

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function saveGame() {
        return _saveGame.apply(this, arguments);
      }

      return saveGame;
    }(),
    playAgain: function playAgain() {
      window.location.reload(false);
    },
    goToClassroom: function goToClassroom() {
      window.location.href = "/classroom/class/".concat(DOM.classroomData.dataset.classroom_id);
    }
  };
}(_commonFunctions_js__WEBPACK_IMPORTED_MODULE_0__["commonFunctions"]);



/***/ }),

/***/ "./src/js/individual/controller.js":
/*!*****************************************!*\
  !*** ./src/js/individual/controller.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UI_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UI.js */ "./src/js/individual/UI.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



var controller = function (UI) {
  var setupEventListeners = function setupEventListeners() {
    console.log('setup event listeners');
    var DOMStrings = UI.getDOMStrings();
    var DOM = {
      teams: document.querySelector(DOMStrings.teams),
      gameContainer: document.querySelector(DOMStrings.gameContainer),
      previewTeams: document.querySelector(DOMStrings.previewTeams),
      refreshStudentsBtn: document.querySelector(DOMStrings.refreshStudentsBtn),
      shuffleStudentsBtn: document.querySelector(DOMStrings.shuffleStudentsBtn),
      playGameBtn: document.querySelector(DOMStrings.playGameBtn),
      refreshGameBtn: document.querySelector(DOMStrings.refreshGameBtn),
      saveGameBtn: document.querySelector(DOMStrings.saveGameBtn),
      goToClassroomBtn: document.querySelector(DOMStrings.goToClassroomBtn),
      playAgainBtn: document.querySelector(DOMStrings.playAgainBtn),
      // next: document.querySelector(DOMStrings.next),
      nextStudent: document.querySelector(DOMStrings.nextStudent),
      previousStudent: document.querySelector(DOMStrings.previousStudent) // previous: document.querySelector(DOMStrings.previous),

    }; //EVENT LISTENERS

    DOM.previewTeams.addEventListener('click', UI.deleteStudent);
    DOM.teams.addEventListener('click', UI.changePointStudent); // DOM.gameContainer.addEventListener('click', UI.goToNext);

    DOM.gameContainer.addEventListener('click', UI.goToPrevious);
    DOM.refreshGameBtn.addEventListener('click', UI.refreshScores);
    DOM.refreshStudentsBtn.addEventListener('click', UI.refreshStudents);
    DOM.playGameBtn.addEventListener('click', UI.startGame);
    DOM.shuffleStudentsBtn.addEventListener('click', UI.shufflePreview);
    DOM.saveGameBtn.addEventListener('click', UI.saveGame);
    DOM.goToClassroomBtn.addEventListener('click', UI.goToClassroom);
    DOM.playAgainBtn.addEventListener('click', UI.playAgain); // DOM.previous.addEventListener('click', UI.goToPrevious);

    DOM.previousStudent.addEventListener('click', UI.goToPreviousStudent);
    DOM.nextStudent.addEventListener('click', UI.goToNextStudent); // DOM.next.addEventListener('click', UI.goToNext);
  };

  return {
    init: function () {
      var _init = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                console.log('You can now play an individual game');
                _context.next = 3;
                return UI.getClassroomData();

              case 3:
                UI.createPreviewDOM();
                setupEventListeners();

              case 5:
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
}(_UI_js__WEBPACK_IMPORTED_MODULE_0__["individualUI"]);

controller.init();

/***/ })

/******/ });
//# sourceMappingURL=individual.js.map