import { commonFunctions as CF } from '../commonFunctions.js';

var boysVsGirlsUI = (function() {
    var DOMStrings = {
        // BY CLASS
        submit: '.submit',
        gameContainer: '.game__container',
        classroomData: '.classroomData',
        teams: '.teams',  
        previewTeams: '.preview__teams',
        titleContainer: '.title__container',
        title: '.title',
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
    };

    var DOM = {
        classroomData: document.querySelector(DOMStrings.classroomData),
        gameContainer: document.querySelector(DOMStrings.gameContainer),
        teams: document.querySelector(DOMStrings.teams),
        previewTeams: document.querySelector(DOMStrings.previewTeams),
        submit: document.querySelector(DOMStrings.submit),
        titleContainer: document.querySelector(DOMStrings.titleContainer),
        title: document.querySelector(DOMStrings.title),
    }

    //persistent data
    let studentsArray = [];
    let teamsArray = [];
    let backupArray = [];

    //HELPER FUNCTIONS
    const createBoysGirlsTeams = function () {
        console.log('creatingTeams');
        // clear array
        const boys = {
            name: 'Boys Team',
            totalPoints: 0,
            teamID: 'boys',
            students: studentsArray.filter(student => student.sex === 'male'),
        }

        const girls = {
            name: 'Girls Team',
            totalPoints: 0,
            teamID: 'girls',
            students: studentsArray.filter(student => student.sex === 'female'),
        }
        teamsArray = [];
        teamsArray.push(boys);
        teamsArray.push(girls);
    };
    
    const randomTeamFirst = function () {
        const girlsFirst =  Math.random() >= 0.5;
        if (girlsFirst) {
            console.log('girlsFirst')
            teamsArray.push(teamsArray.shift());
        } else {
            console.log('boysFirst');
        }
    }
    
    return {
        getDOMStrings: function() {
            return DOMStrings;
        },
        getClassroomData: async function () {
            console.log('get classroom data')
            const classroomID = DOM.classroomData.dataset.classroom_id;

            const response = await fetch(`/game/classData/${classroomID}`)
            
            const students = await response.json();

            students.forEach(student => studentsArray.push(student));

            //shuffle students array for different game play every time
            studentsArray = CF.shuffleArray(studentsArray);
            backupArray = studentsArray;
        },
 
        createPreviewDOM: function () {

            createBoysGirlsTeams();
            CF.addPreviewToDOM(teamsArray);
        },

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

        //////////////////////////////////////////////////////////////////
        // *** functions for game play ***
        startGame: function (e) {
            // posting teams to teamGame
            e.preventDefault();
            console.log("let's play")

            CF.startGame();

            randomTeamFirst();

            // teamsArray.forEach(team => shuffleArray(team.students))
            
            CF.addTeamsToDom(teamsArray);

        },

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

        changeTeamPoints: function(e) {
            

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

        goToNext: function(e) {
            if(e.target.classList.contains('next')) {
                console.log('go to next')
                
                CF.clearDOM();
                
                // shift arrays 
                CF.shiftTeamsAndStudentArray(teamsArray);
                // console.log('teamArray-post-shift', teamsArray);
                CF.addTeamsToDom(teamsArray);
            }
        },
        refreshScores: function(e) {
            CF.deleteScores(teamsArray);
            CF.clearDOM();
            CF.addTeamsToDom(teamsArray);
        },
        refreshStudents: function(e) {
            console.log('refreshStudents');
            
            studentsArray = backupArray;
            createBoysGirlsTeams();
            CF.addPreviewToDOM(teamsArray);
        },
        
        shufflePreview: function () {
            console.log('shuffle these students around');
            CF.shuffleArray(studentsArray);
            createBoysGirlsTeams();
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
        }
    };
})(CF);

export{boysVsGirlsUI};






