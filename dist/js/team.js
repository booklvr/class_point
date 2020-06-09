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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/team/controller.js");
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

/***/ "./src/js/team/UI.js":
/*!***************************!*\
  !*** ./src/js/team/UI.js ***!
  \***************************/
/*! exports provided: gameFormUI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gameFormUI", function() { return gameFormUI; });
/* harmony import */ var _commonFunctions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../commonFunctions.js */ "./src/js/commonFunctions.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



var gameFormUI = function (CF) {
  var DOMStrings = {
    // ID's
    numberOfTeams: '#numberOfTeams',
    // CLASSES
    gameContainer: '.game__container',
    classroomData: '.classroomData',
    teams: '.teams',
    previewTeams: '.preview__teams',
    titleContainer: '.title__container',
    refreshStudentsBtn: '.refresh-studentsBtn',
    refreshGameBtn: '.refresh-gameBtn',
    shuffleStudentsBtn: '.shuffle-studentsBtn',
    saveGameBtn: '.save-gameBtn',
    goToClassroomBtn: '.goToClassroomBtn',
    playAgainBtn: '.playAgainBtn',
    playGameBtn: '.playGameBtn',
    previous: '.previous',
    previousStudent: '.previous-student',
    nextStudent: '.next-student',
    next: '.next',
    increment: '.increment',
    decrement: '.decrement',
    title2: '.title-2',
    gameFormContainer: '.game__form__container'
  };
  var DOM = {
    classroomData: document.querySelector(DOMStrings.classroomData),
    title2: document.querySelector(DOMStrings.title2),
    gameFormContainer: document.querySelector(DOMStrings.gameFormContainer),
    numberOfTeams: document.querySelector(DOMStrings.numberOfTeams)
  }; // CREATE STUDENTS AND TEAMS ARRAY

  var studentsArray = [];
  var teamsArray = [];
  var backupArray = []; ////////////////////////////////////////////////////////////////////////////
  // HELPER FUNCTIONS UNIQUE TO TEAM GAME
  ////////////////////////////////////////////////////////////////////////////
  // *** Functions for Game Form ***

  var tooManyTeams = function tooManyTeams(teamSize) {
    console.log(studentsArray.length);
    console.log((studentsArray.length + 1) / teamSize < 2);

    if ((studentsArray.length + 1) / teamSize < 2) {
      return true;
    }
  };

  var createTeams = function createTeams(teamNumber) {
    console.log('creatingTeams'); // clear array

    teamsArray = []; // instantiate variables

    var i, j, k, temp, chunk; // find chunk size

    chunk = studentsArray.length / teamNumber;

    for (i = 0, j = studentsArray.length, k = 1; i < j; i += chunk, k++) {
      var team = {};
      team.name = "Team ".concat(k);
      team.totalPoints = 0;
      team.teamID = "team".concat(k);
      temp = studentsArray.slice(i, i + chunk);
      console.log('temp', temp);
      team.students = temp;
      teamsArray.push(team);
    }

    console.log(teamsArray);
  }; // ********************************************************* 
  // *** Functions for Game Play ***
  // * check common functions 


  return {
    getDOMStrings: function getDOMStrings() {
      // send domstrings to controller
      return DOMStrings;
    },
    // FUNCTIONS
    // * GET CLASSROOM DATA
    // * get the classroom data from the backend 
    // * ID used as search parameter stored on main dataset in html
    // * shuffle the returned data for unique gamepaly
    getClassroomData: function () {
      var _getClassroomData = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var classroomID, response, students;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                classroomID = DOM.classroomData.dataset.classroom_id;
                _context.next = 3;
                return fetch("/game/classData/".concat(classroomID));

              case 3:
                response = _context.sent;
                _context.next = 6;
                return response.json();

              case 6:
                students = _context.sent;
                students.forEach(function (student) {
                  return studentsArray.push(student);
                }); // backup students array for refresh

                backupArray = studentsArray;

              case 9:
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
    // *************************************
    // * CREATE PREVIEW DOM
    // * check that the user doesn't request too many games for student number
    // * create teams to preview
    // * add those teams to the dom
    createPreviewDOM: function createPreviewDOM(teamSize) {
      if (tooManyTeams(teamSize)) {
        console.log('Too many teams, not enough students');
        return CF.addErrorMessage('There are not enough students for that many teams');
      }

      createTeams(teamSize);
      CF.addPreviewToDOM(teamsArray);
    },
    // *************************************
    // * DELETE STUDENT
    // * delete the student from the dom as well as the students array
    // * purpose is to delete abesent students
    deleteStudent: function deleteStudent(e) {
      if (e.target.classList.contains('deleteStudent')) {
        CF.removeStudentFromTeam(teamsArray, e.target.id);
        studentsArray = CF.removeStudentfromArray(studentsArray, e.target.id); //remove the student form the DOM

        var li = e.target.parentElement;
        li.remove();
      }
    },
    /////////////////////////////////////////////////////////////////////////////////////////////
    // *** Functions for Game Play ***
    // *************************************
    // * START THE GAME
    // * clear the preview from the dom
    // * add tems to the dom for game play 
    startGame: function startGame(e) {
      // posting teams to teamGame
      e.preventDefault();
      CF.startGame();
      DOM.title2.classList.toggle('hide');
      DOM.gameFormContainer.remove();
      CF.addTeamsToDom(teamsArray);
    },
    // *************************************
    // * CHANGE THE STUDENTS POINTS
    // * Change the studnets points in dom
    // * change the team points in dom
    // * change the students points and team points in teams array
    changePointStudent: function changePointStudent(e) {
      var target = e.target.parentElement;

      if (target.classList.contains('add__student') || target.classList.contains('minus__student')) {
        var action = CF.plusOrMinus(target);
        var student = target.parentElement;
        var team = student.parentElement.parentElement;
        console.log(action);
        CF.updateStudentPointDom(target, action);
        CF.updatePointsArrayAll(teamsArray, student, action);
        CF.updateTeamPointDom(team, action);
      }
    },
    // *************************************
    // * CHANGE TEAM POINTS
    // * change team points in DOM
    // * cange team points in teams points array
    changeTeamPoints: function changeTeamPoints(e) {
      console.log('change team points');
      var target = e.target.parentElement;
      var pointDiv = target.parentElement;

      if (pointDiv.classList.contains('teamPoint')) {
        var team = pointDiv.parentElement.parentElement;
        var action = CF.plusOrMinus(target);
        CF.updatePointsArrayTeam(teamsArray, team.id, action); //update DOM 

        CF.updateTeamPointDom(team, action);
      }
    },
    goToPrevious: function goToPrevious() {
      console.log('gotoprevious');
      CF.clearDOM(); // shift arrays 

      CF.unShiftTeamsAndStudentArray(teamsArray);
      CF.addTeamsToDom(teamsArray);
    },
    goToPreviousStudent: function goToPreviousStudent() {
      console.log('goToPreviousStudent');
      CF.clearDOM();
      CF.unShiftStudentsArray(teamsArray[0].students);
      CF.addTeamsToDom(teamsArray);
    },
    goToNextStudent: function goToNextStudent() {
      CF.clearDOM();
      CF.shiftStudentsArray(teamsArray[0].students);
      CF.addTeamsToDom(teamsArray);
    },
    // *************************************
    // * GO TO THE NEXT TEAMS TURN
    goToNext: function goToNext() {
      CF.clearDOM();
      CF.shiftTeamsAndStudentArray(teamsArray);
      CF.addTeamsToDom(teamsArray);
    },
    // *************************************
    // * START A NEW GAME
    refreshScores: function refreshScores() {
      CF.deleteScores(teamsArray);
      CF.clearDOM();
      CF.addTeamsToDom(teamsArray);
    },
    refreshStudents: function refreshStudents() {
      console.log('refreshStudents');
      CF.clearInput();
      studentsArray = backupArray;
      createTeams(1);
      CF.addPreviewToDOM(teamsArray);
    },
    shufflePreview: function shufflePreview() {
      console.log('shuffle these students around');
      CF.shuffleArray(studentsArray);
      var teamsSize = DOM.numberOfTeams.value;
      createTeams(teamsSize);
      console.log('teamsSize', teamsSize);
      console.log('shuffle preview and create teams function');
      CF.addPreviewToDOM(teamsArray);
    },
    saveGame: function () {
      var _saveGame = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var url;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                CF.clearDOM();
                CF.endGameOptions();
                CF.addWinningTeam(teamsArray);
                CF.addWinningStudent(studentsArray);
                url = "/game/updatePoints";
                _context2.next = 7;
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

              case 7:
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
    },
    increment: function increment() {
      this.parentNode.parentNode.querySelector('.team_number').stepUp();
      var teamSize = this.parentNode.parentNode.querySelector('.team_number').value;

      if (tooManyTeams(teamSize)) {
        console.log('Too many teams, not enough students');
        return CF.addErrorMessage('There are not enough students for that many teams');
      }

      createTeams(teamSize);
      CF.addPreviewToDOM(teamsArray);
    },
    decrement: function decrement() {
      this.parentNode.parentNode.querySelector('.team_number').stepDown();
      var teamSize = this.parentNode.parentNode.querySelector('.team_number').value;

      if (tooManyTeams(teamSize)) {
        console.log('Too many teams, not enough students');
        return CF.addErrorMessage('There are not enough students for that many teams');
      }

      createTeams(teamSize);
      CF.addPreviewToDOM(teamsArray);
    }
  };
}(_commonFunctions_js__WEBPACK_IMPORTED_MODULE_0__["commonFunctions"]);



/***/ }),

/***/ "./src/js/team/controller.js":
/*!***********************************!*\
  !*** ./src/js/team/controller.js ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UI_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UI.js */ "./src/js/team/UI.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



var controller = function (UI) {
  var setupEventListeners = function setupEventListeners() {
    console.log('setup event listeners');
    var DOMStrings = UI.getDOMStrings();
    var DOM = {
      gameContainer: document.querySelector(DOMStrings.gameContainer),
      numberOfTeams: document.querySelector(DOMStrings.numberOfTeams),
      gameFormClassroomData: document.querySelector(DOMStrings.gameFormClassroomData),
      previewTeams: document.querySelector(DOMStrings.previewTeams),
      teams: document.querySelector(DOMStrings.teams),
      titleContainer: document.querySelector(DOMStrings.titleContainer),
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
      previous: document.querySelector(DOMStrings.previous),
      increment: document.querySelector(DOMStrings.increment),
      decrement: document.querySelector(DOMStrings.decrement)
    }; //EVENT LISTENERS
    // create teams on change of number input

    DOM.numberOfTeams.addEventListener('change', function (e) {
      UI.createPreviewDOM(e.target.value);
    });
    DOM.previewTeams.addEventListener('click', UI.deleteStudent);
    DOM.teams.addEventListener('click', UI.changePointStudent);
    DOM.teams.addEventListener('click', UI.changeTeamPoints);
    DOM.refreshGameBtn.addEventListener('click', UI.refreshScores);
    DOM.refreshStudentsBtn.addEventListener('click', UI.refreshStudents);
    DOM.playGameBtn.addEventListener('click', UI.startGame);
    DOM.shuffleStudentsBtn.addEventListener('click', UI.shufflePreview);
    DOM.saveGameBtn.addEventListener('click', UI.saveGame);
    DOM.goToClassroomBtn.addEventListener('click', UI.goToClassroom);
    DOM.playAgainBtn.addEventListener('click', UI.playAgain);
    DOM.playAgainBtn.addEventListener('click', UI.playAgain);
    DOM.previous.addEventListener('click', UI.goToPrevious);
    DOM.previousStudent.addEventListener('click', UI.goToPreviousStudent);
    DOM.nextStudent.addEventListener('click', UI.goToNextStudent);
    DOM.next.addEventListener('click', UI.goToNext);
    DOM.increment.addEventListener('click', UI.increment);
    DOM.decrement.addEventListener('click', UI.decrement);
  };

  return {
    init: function () {
      var _init = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                console.log('You can now create a game');
                _context.next = 3;
                return UI.getClassroomData();

              case 3:
                UI.createPreviewDOM(1);
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
}(_UI_js__WEBPACK_IMPORTED_MODULE_0__["gameFormUI"]);

controller.init();

/***/ })

/******/ });
//# sourceMappingURL=team.js.map