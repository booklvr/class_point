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
var commonFunctions = function () {
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

  return {
    plusOrMinus: function (target) {
      return target.classList.contains('add') ? 1 : -1;
    },
    addPreviewToDOM: function (teamsArray) {
      DOM.previewTeams.innerHTML = '';
      teamsArray.forEach((team, index) => {
        //create new team div
        const newTeam = document.createElement('div');
        newTeam.className += 'team'; //add title

        const teamName = document.createElement('h3');
        teamName.className += 'teamName';
        teamName.innerHTML = team.name;
        newTeam.appendChild(teamName);
        let teamList = document.createElement('ul');
        teamList.className += 'teamList';
        team.students.forEach(student => {
          let newStudent = document.createElement("li");
          newStudent.className += 'student';
          newStudent.innerHTML = `
                        <span class="student-name">${student.name}</span>
                        <span class="student-gender">${student.sex === 'male' ? 'boy' : 'girl'}</span>
                        <i id="${student._id}" class="deleteStudent fas fa-minus"></i></a>
                    `;
          teamList.appendChild(newStudent);
        });
        newTeam.appendChild(teamList); // const teamName = document.createElement('ul')

        DOM.previewTeams.appendChild(newTeam);
      });
    },
    removeStudentFromTeam: function (teamsArray, studentID) {
      teamsArray.forEach(team => team.students = team.students.filter(student => student._id !== studentID));
      console.log('teamsArray', teamsArray);
    },
    removeStudentfromArray: function (studentsArray, studentID) {
      // console.log(studentID);
      studentsArray = studentsArray.filter(student => student._id != studentID);
      console.log(studentsArray);
      return studentsArray;
    },
    shuffleArray: function (array) {
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
    addErrorMessage: function (message) {
      DOM.errors.innerHTML = message;
      setTimeout(() => {
        DOM.errors.innerHTML = "";
      }, 3000);
    },
    startGame: function () {
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
    addTeamsToDom: function (teamsArray) {
      // add button to the DOM
      // const buttons = document.createElement('div');
      // buttons.classList += 'buttons';
      // buttons.innerHTML = `
      //     <button class="next">Next</button>
      // `
      // DOM.gameContainer.insertBefore(buttons, DOM.gameContainer.firstChild);
      // add teams to the dom
      teamsArray.forEach((team, teamIndex) => {
        //create new team div
        const newTeam = document.createElement('div');
        newTeam.className += 'team';
        newTeam.setAttribute('id', team.teamID); // console.log('newTeam', newTeam)
        //add title

        const teamInfo = document.createElement('div');
        teamInfo.className += 'team-info';
        const teamName = document.createElement('h3');
        teamName.className += 'teamName';
        teamName.innerHTML = team.name;
        teamInfo.appendChild(teamName);
        let teamPoint = document.createElement('div');
        teamPoint.className += 'teamPoint';
        teamPoint.innerHTML = `
                    <button class="minus minus__team"><i class="fas fa-minus"></i></button>
                    <button class="add add__team"><i class="fas fa-plus"></i></button>
                    <span class="teamPointValue">${team.totalPoints}</span>
                `;
        teamInfo.appendChild(teamPoint);
        newTeam.appendChild(teamInfo);
        let teamList = document.createElement('ul');
        teamList.className += 'teamList';
        let totalPoints = 0;
        team.students.forEach((student, studentIndex) => {
          let newStudent = document.createElement("li");
          newStudent.className += 'student';
          newStudent.setAttribute('id', student._id);
          newStudent.innerHTML = `
                        <span class=name>${student.name}</span>
                        <button class="add-plus-btn minus minus__student"><i class="fas fa-minus"></i></button>
                        <button class="add-plus-btn add add__student"><i class="fas fa-plus"></i></button>
                        <span class="points">${student.points}</span>
                    `;
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
    },
    plusOrMinus: function (target) {
      return target.classList.contains('add') ? 1 : -1;
    },
    updateStudentPointDom: function (target, action) {
      //find pointsDiv
      const pointsDiv = target.parentElement.lastElementChild; //update pointsDiv

      pointsDiv.innerHTML = +pointsDiv.innerHTML + action;
    },
    updatePointsArrayAll: function (teamsArray, student, action) {
      console.log(student.parentElement.parentElement);
      const studentID = student.id;
      teamsArray.forEach(team => team.students.map(student => {
        if (student._id === studentID) {
          console.log("it's a match"); // add or minus points from student points

          student.points += action;
          team.totalPoints += action;
        }
      }));
      console.log(teamsArray);
    },
    updatePointsArrayTeam: function (teamsArray, teamID, action) {
      // iterate over teams array
      // add or minus point to teamPoints
      teamsArray.forEach(team => {
        console.log('team.teamID', team.teamID);
        console.log('teamID', teamID);

        if (team.teamID === teamID) {
          console.log("its a match :) ");
          team.totalPoints += action;
        }
      });
      console.log(teamsArray);
    },
    updateTeamPointDom: function (team, action) {
      const pointValue = team.querySelector('.teamPointValue');
      action === 1 ? pointValue.innerHTML = +pointValue.innerHTML + 1 : pointValue.innerHTML = +pointValue.innerHTML - 1;
    },
    clearDOM: function () {
      DOM.teams.innerHTML = ''; // DOM.gameContainer.firstChild.remove();
    },
    shiftTeamsAndStudentArray: function (array) {
      console.log("shift array");
      console.log(array);
      array[0].students.push(array[0].students.shift());
      console.log(array);
      array.push(array.shift());
      console.log(array);
    },
    unShiftTeamsAndStudentArray: function (array) {
      console.log('unshift array');
      array.unshift(array.pop());
      array[0].students.unshift(array[0].students.pop());
    },
    unShiftStudentsArray: function (array) {
      console.log("unShift array");
      array.unshift(array.pop());
    },
    shiftStudentsArray: function (array) {
      console.log("shift array");
      array.push(array.shift());
    },
    deleteScores: function (teamsArray) {
      teamsArray.forEach(team => {
        team.totalPoints = 0;
        team.students.forEach(student => {
          student.points = 0;
        });
      });
      console.log(teamsArray);
    },
    clearInput: function () {
      DOM.numberOfTeams.value = 1;
    },
    endGameOptions: function () {
      DOM.teams.innerHTML = '';
      DOM.refreshGameBtn.remove();
      DOM.saveGameBtn.remove();
      DOM.previous.remove();
      DOM.previousStudent.remove();
      DOM.nextStudent.remove();
      DOM.next.remove();
      DOM.goToClassroomBtn.classList.toggle('hide');
      DOM.playAgainBtn.classList.toggle('hide');
    },
    addWinningTeam: function (array) {
      console.log(array);
      const winningTeamScore = Math.max.apply(Math, array.map(o => o.totalPoints));
      const winningTeams = array.filter(o => o.totalPoints == winningTeamScore);
      console.log(winningTeams);
      const winningTeamContainer = document.createElement('div');
      winningTeamContainer.classList += 'winningStudentContainer';
      winningTeamContainer.innerHTML = `
                <h3 class="winningStudentTitle">${winningTeams.length === 1 ? 'First Place Team' : 'Tied for First'}</h3> 
            `;
      winningTeams.forEach(team => {
        winningTeamContainer.innerHTML += `
                    <div class="firstPlace">
                        <p class="winnerName">${team.name} <span class="winnerPoints">${team.totalPoints}</span></p>
                    </div>
                `;
      });
      DOM.teams.appendChild(winningTeamContainer);
    },
    addWinningStudent: function (array) {
      const winningStudentScore = Math.max.apply(Math, array.map(o => o.points));
      const winningStudents = array.filter(o => o.points == winningStudentScore);
      console.log(winningStudents);
      const winningStudentContainer = document.createElement('div');
      winningStudentContainer.classList += 'winningStudentContainer';
      winningStudentContainer.innerHTML = `
                <h3 class="winningStudentTitle">${winningStudents.length === 1 ? 'First Place Student' : 'Tied for First'}</h3> 
            `;
      winningStudents.forEach(student => {
        winningStudentContainer.innerHTML += `
                    <div class="firstPlace">
                        <p class="winnerName">${student.name} <span class="winnerPoints">${student.points}</span></p>
                    </div>
                `;
      });
      DOM.teams.appendChild(winningStudentContainer);
    }
  };
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
    // not yet
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
    gameFormContainer: document.querySelector(DOMStrings.gameFormContainer) // refreshStudentsBtn: document.querySelector(DOMStrings.refreshStudentsBtn),

  }; // CREATE STUDENTS AND TEAMS ARRAY

  let studentsArray = [];
  let teamsArray = [];
  let backupArray = []; ////////////////////////////////////////////////////////////////////////////
  // HELPER FUNCTIONS UNIQUE TO TEAM GAME
  ////////////////////////////////////////////////////////////////////////////
  // *** Functions for Game Form ***

  const tooManyTeams = function (teamSize) {
    console.log(studentsArray.length);
    console.log((studentsArray.length + 1) / teamSize < 2);

    if ((studentsArray.length + 1) / teamSize < 2) {
      return true;
    }
  };

  const createTeams = function (teamNumber) {
    console.log('creatingTeams'); // clear array

    teamsArray = []; // instantiate variables

    var i, j, k, temp, chunk; // find chunk size

    chunk = studentsArray.length / teamNumber;

    for (i = 0, j = studentsArray.length, k = 1; i < j; i += chunk, k++) {
      const team = {};
      team.name = `Team ${k}`;
      team.totalPoints = 0;
      team.teamID = `team${k}`;
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
    getDOMStrings: function () {
      // send domstrings to controller
      return DOMStrings;
    },
    // FUNCTIONS
    // * GET CLASSROOM DATA
    // * get the classroom data from the backend 
    // * ID used as search parameter stored on main dataset in html
    // * shuffle the returned data for unique gamepaly
    getClassroomData: async function () {
      console.log('get classroom data');
      const classroomID = DOM.classroomData.dataset.classroom_id; // console.log(classroomID)

      const response = await fetch(`/game/classData/${classroomID}`);
      const students = await response.json();
      students.forEach(student => studentsArray.push(student)); // backup students array for refresh

      backupArray = studentsArray;
    },
    // *************************************
    // * CREATE PREVIEW DOM
    // * check that the user doesn't request too many games for student number
    // * create teams to preview
    // * add those teams to the dom
    createPreviewDOM: function (teamSize) {
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
    deleteStudent: function (e) {
      if (e.target.classList.contains('deleteStudent')) {
        CF.removeStudentFromTeam(teamsArray, e.target.id);
        studentsArray = CF.removeStudentfromArray(studentsArray, e.target.id); //remove the student form the DOM
        // console.log(e.target.parentElement);

        let li = e.target.parentElement;
        li.remove();
      }
    },
    /////////////////////////////////////////////////////////////////////////////////////////////
    // *** Functions for Game Play ***
    // *************************************
    // * START THE GAME
    // * clear the preview from the dom
    // * add tems to the dom for game play 
    startGame: function (e) {
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
    changePointStudent: function (e) {
      const target = e.target.parentElement;

      if (target.classList.contains('add__student') || target.classList.contains('minus__student')) {
        const action = CF.plusOrMinus(target);
        const student = target.parentElement;
        const team = student.parentElement.parentElement;
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
    changeTeamPoints: function (e) {
      console.log('change team points');
      const target = e.target.parentElement;
      const pointDiv = target.parentElement;

      if (pointDiv.classList.contains('teamPoint')) {
        const team = pointDiv.parentElement.parentElement; // const pointValue = pointDiv.lastElementChild;

        let action = CF.plusOrMinus(target); // change points in teamsArray

        CF.updatePointsArrayTeam(teamsArray, team.id, action); //update DOM 

        CF.updateTeamPointDom(team, action);
      }
    },
    goToPrevious: function (e) {
      console.log('gotoprevious');
      CF.clearDOM(); // shift arrays 

      CF.unShiftTeamsAndStudentArray(teamsArray); // console.log('teamArray-post-shift', teamsArray);

      CF.addTeamsToDom(teamsArray);
    },
    goToPreviousStudent: function (e) {
      console.log('goToPreviousStudent');
      CF.clearDOM();
      CF.unShiftStudentsArray(teamsArray[0].students);
      CF.addTeamsToDom(teamsArray);
    },
    goToNextStudent: function (e) {
      console.log('goToNextStudent'); // CF.clearDOM();

      CF.clearDOM();
      CF.shiftStudentsArray(teamsArray[0].students);
      CF.addTeamsToDom(teamsArray);
    },
    // *************************************
    // * GO TO THE NEXT TEAMS TURN
    goToNext: function (e) {
      CF.clearDOM(); // shift arrays 

      CF.shiftTeamsAndStudentArray(teamsArray);
      CF.addTeamsToDom(teamsArray);
    },
    // *************************************
    // * START A NEW GAME
    refreshScores: function (e) {
      CF.deleteScores(teamsArray);
      CF.clearDOM();
      CF.addTeamsToDom(teamsArray);
    },
    refreshStudents: function (e) {
      console.log('refreshStudents');
      CF.clearInput();
      studentsArray = backupArray;
      createTeams(1);
      CF.addPreviewToDOM(teamsArray);
    },
    shufflePreview: function () {
      console.log('shuffle these students around');
      CF.shuffleArray(studentsArray);
      const teamsSize = numberOfTeams.value;
      createTeams(teamsSize);
      CF.addPreviewToDOM(teamsArray);
    },
    saveGame: async function (e) {
      CF.clearDOM();
      CF.endGameOptions();
      CF.addWinningTeam(teamsArray);
      CF.addWinningStudent(studentsArray);
      const url = "/game/updatePoints";
      await fetch(url, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        // credentials: 'same-origin',
        body: JSON.stringify(studentsArray)
      }).then(res => res).then(text => console.log('final result', text));
    },
    playAgain: function () {
      window.location.reload(false);
    },
    goToClassroom: function () {
      window.location.href = `/classroom/class/${DOM.classroomData.dataset.classroom_id}`;
    },
    increment: function () {
      this.parentNode.parentNode.querySelector('.team_number').stepUp();
      const teamSize = this.parentNode.parentNode.querySelector('.team_number').value;

      if (tooManyTeams(teamSize)) {
        console.log('Too many teams, not enough students');
        return CF.addErrorMessage('There are not enough students for that many teams');
      }

      createTeams(teamSize);
      CF.addPreviewToDOM(teamsArray);
    },
    decrement: function () {
      this.parentNode.parentNode.querySelector('.team_number').stepDown();
      const teamSize = this.parentNode.parentNode.querySelector('.team_number').value;

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


var controller = function (UI) {
  var setupEventListeners = function () {
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
    // submit event -> go to game
    // DOM.gameForm.addEventListener('submit', UI.submitEvent)
    // create teams on change of number input

    DOM.numberOfTeams.addEventListener('change', e => {
      UI.createPreviewDOM(e.target.value);
    });
    DOM.previewTeams.addEventListener('click', UI.deleteStudent);
    DOM.teams.addEventListener('click', UI.changePointStudent);
    DOM.teams.addEventListener('click', UI.changeTeamPoints); // DOM.gameContainer.addEventListener('click', UI.goToNext);

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
    init: async function () {
      console.log('You can now create a game');
      await UI.getClassroomData();
      UI.createPreviewDOM(1); // UI.addTeamsToDOM();

      setupEventListeners();
    }
  };
}(_UI_js__WEBPACK_IMPORTED_MODULE_0__["gameFormUI"]);

controller.init();

/***/ })

/******/ });
//# sourceMappingURL=team.js.map