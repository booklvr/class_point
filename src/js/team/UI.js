import { commonFunctions as CF } from '../commonFunctions.js';

var gameFormUI = (function(CF) {
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
        saveGameBtn: '.save-gameBtn', // not yet
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
        gameFormContainer: '.game__form__container',
    };

    var DOM = {
        
        classroomData: document.querySelector(DOMStrings.classroomData),
        title2: document.querySelector(DOMStrings.title2),
        gameFormContainer: document.querySelector(DOMStrings.gameFormContainer)
        // refreshStudentsBtn: document.querySelector(DOMStrings.refreshStudentsBtn),
    } 
    // CREATE STUDENTS AND TEAMS ARRAY
    let studentsArray = [];
    let teamsArray = [];
    let backupArray = [];
    
    ////////////////////////////////////////////////////////////////////////////
    // HELPER FUNCTIONS UNIQUE TO TEAM GAME

    ////////////////////////////////////////////////////////////////////////////
    // *** Functions for Game Form ***

    const tooManyTeams = function (teamSize) {
        console.log(studentsArray.length);
        console.log((( studentsArray.length + 1 ) / teamSize) < 2)
        if ((( studentsArray.length + 1 ) / teamSize) < 2) {
            return true;
        }
    }

    const createTeams = function (teamNumber) {
        console.log('creatingTeams');
        // clear array
        teamsArray = [];
        
        // instantiate variables
        var i,j,k,temp, chunk;

        // find chunk size
        chunk = studentsArray.length / teamNumber;

        for (i=0,j=studentsArray.length, k=1; i<j; i+=chunk, k++) {
            const team = {}
            team.name = `Team ${k}`
            team.totalPoints = 0;
            team.teamID = `team${k}`;
            temp = studentsArray.slice(i,i+chunk);
            console.log('temp', temp);
            team.students = temp;
            teamsArray.push(team);
        }
        console.log(teamsArray);
    }

    // ********************************************************* 
    // *** Functions for Game Play ***
    // * check common functions 

    return {
        getDOMStrings: function() {
            // send domstrings to controller
            return DOMStrings;
        },

        // FUNCTIONS
        // * GET CLASSROOM DATA
        // * get the classroom data from the backend 
        // * ID used as search parameter stored on main dataset in html
        // * shuffle the returned data for unique gamepaly
        getClassroomData: async function () {
            console.log('get classroom data')
            const classroomID = DOM.classroomData.dataset.classroom_id;
            // console.log(classroomID)

            const response = await fetch(`/game/classData/${classroomID}`)
            
            const students = await response.json();

            students.forEach(student => studentsArray.push(student));

            // backup students array for refresh
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
                studentsArray = CF.removeStudentfromArray(studentsArray, e.target.id)
                //remove the student form the DOM
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
        changePointStudent: function(e) {
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
        changeTeamPoints: function(e) {
            console.log('change team points')

            const target = e.target.parentElement;
            const pointDiv = target.parentElement;
            
            if (pointDiv.classList.contains('teamPoint')) {
                const team = pointDiv.parentElement.parentElement;
                // const pointValue = pointDiv.lastElementChild;

                let action = CF.plusOrMinus(target);

                // change points in teamsArray
                CF.updatePointsArrayTeam(teamsArray, team.id, action)

                //update DOM 
                CF.updateTeamPointDom(team, action);
            }
        },

        

        goToPrevious: function(e) {
            console.log('gotoprevious')

            CF.clearDOM();
                
            // shift arrays 
            CF.unShiftTeamsAndStudentArray(teamsArray);
            
            
            // console.log('teamArray-post-shift', teamsArray);
            CF.addTeamsToDom(teamsArray);
        },

        goToPreviousStudent: function(e) {
            console.log('goToPreviousStudent')

            CF.clearDOM();
            CF.unShiftStudentsArray(teamsArray[0].students);
            CF.addTeamsToDom(teamsArray);


        },

        goToNextStudent: function(e) {
            console.log('goToNextStudent')

            // CF.clearDOM();
                
            CF.clearDOM();
            CF.shiftStudentsArray(teamsArray[0].students);
            CF.addTeamsToDom(teamsArray);
        },

        // *************************************
        // * GO TO THE NEXT TEAMS TURN
        goToNext: function(e) {
            
                CF.clearDOM();
                // shift arrays 
                CF.shiftTeamsAndStudentArray(teamsArray);
                CF.addTeamsToDom(teamsArray);
        },


        // *************************************
        // * START A NEW GAME
        refreshScores: function(e) {
            CF.deleteScores(teamsArray);
            CF.clearDOM();
            CF.addTeamsToDom(teamsArray);
        },
        refreshStudents: function(e) {
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
                body: JSON.stringify(studentsArray),
            }).then(res => res)
            .then(text => console.log('final result', text))
        },
        playAgain: function() {
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
})(CF);

export{gameFormUI};




