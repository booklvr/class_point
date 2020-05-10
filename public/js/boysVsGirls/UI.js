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

    ///////////////////////////////////////////////////////////////////////////////
    // *** for game play

   
    // const addTeamsToDom = function () {
    //     // add button to the DOM
    //     const buttons = document.createElement('div');
    //     buttons.classList += 'buttons';
    //     buttons.innerHTML = `
    //         <button class="next">Next</button>
    //     `
    //     DOM.gameContainer.insertBefore(buttons, DOM.gameContainer.firstChild);

    //     // add teams to the dom
    //     teamsArray.forEach((team, teamIndex) => {
            
    //         //create new team div
    //         const newTeam = document.createElement('div');
    //         newTeam.className += 'team';
    //         newTeam.setAttribute('id', team.teamID)
            
    //         //add title
    //         const teamName = document.createElement('h3');
    //         teamName.className += 'teamName';
    //         teamName.innerHTML = team.name;
    //         newTeam.appendChild(teamName);
    //         let teamPoint = document.createElement('div');
    //         teamPoint.className += 'teamPoint';
    //         teamPoint.innerHTML = `
    //             <button class="minus minus__team"><i class="fas fa-minus"></i></button>
    //             <button class="add add__team"><i class="fas fa-plus"></i></button>
    //             <span class="teamPointValue">${team.totalPoints}</span>
    //         `;
    //         newTeam.appendChild(teamPoint);

    //         let teamList = document.createElement('ul');
    //         teamList.className += 'teamList';
    //         let totalPoints = 0;
    //         team.students.forEach((student, studentIndex) => {
                
    //             let newStudent = document.createElement("li");
    //             newStudent.className += 'student';
    //             newStudent.setAttribute('id', student._id);
    //             newStudent.innerHTML = `
    //                 <span class=name>${student.name}</span>
    //                 <button class="minus minus__student"><i class="fas fa-minus"></i></button>
    //                 <button class="add add__student"><i class="fas fa-plus"></i></button>
    //                 <span class="points">${student.points}</span>
    //             `;
    //             teamList.appendChild(newStudent);
    //             // create current student
    //             if (teamIndex === 0 && studentIndex === 0) {
    //                 const currentTitle = document.createElement('h3');
    //                 currentTitle.classList += 'currentTitle';
    //                 currentTitle.innerHTML = 'Current Student';
    //                 teamList.insertBefore(currentTitle, teamList.firstChild);
    //                 // console.log('current student');
    //                 newStudent.className += ' currentStudent';
    //             // create next student
    //             } else if (teamIndex === 1 && studentIndex === 0) {
    //                 const nextTitle = document.createElement('h3');
    //                 nextTitle.classList += 'nextTitle';
    //                 nextTitle.innerHTML = 'Upcoming Student';
    //                 teamList.insertBefore(nextTitle, teamList.firstChild);
    //                 // console.log('next student');
    //                 newStudent.className += ' nextStudent';
    //             }
    //         })
    //         newTeam.appendChild(teamList);
    //         DOM.teams.appendChild(newTeam);
    //     })
    // }

    //is it an add or minus button;
    // const plusOrMinus = function (target) {
    //     return target.classList.contains('add') ? 1 : -1;
    // };

    // const updateStudentPointDom = function (target, action) {        
    //     //find pointsDiv
    //     const pointsDiv = target.parentElement.lastElementChild;
    //     //update pointsDiv
    //     pointsDiv.innerHTML = +pointsDiv.innerHTML + action;
    // };

    // const updatePointsArrayAll = function(student, action){        
    //     const studentID = student.id;

    //     teamsArray.forEach(team => team.students.map(student => {
            
    //         if (student._id === studentID) {
    //             // add or minus points from student points
    //             student.points += action;
    //             team.totalPoints += action
    //         }
    //     }))
    // }

    // const updatePointsArrayTeam = function (teamID, action) {
    //     // iterate over teams array
    //     // add or minus point to teamPoints
    //     teamsArray.forEach(team => {
    //         if (team.teamID === teamID) {
    //             team.totalPoints += action;
    //         }
    //     })
    // }

    // const updateTeamPointDom = function (team, action) {
    //     console.log('updateTeamPointDom-teamsArray', teamsArray);    
    //     const pointValue = team.querySelector('.teamPointValue');
        
    //     action === 1 ? pointValue.innerHTML = +pointValue.innerHTML + 1 : pointValue.innerHTML = +pointValue.innerHTML -1;
    // }

    // const clearDOM = function() {
    //     DOM.teams.innerHTML = '';
    //     DOM.gameContainer.firstChild.remove();
    // }

    // const shiftArrays = function (array) {
    //     console.log("shift array");
    //     array[0].students.push(array[0].students.shift())
    //     array.push(array.shift());
    // };

    // const deleteScores = function () {
    //     teamsArray.forEach(team => {
    //         team.totalPoints = 0;
    //         team.students.forEach(student => {
    //             student.points = 0;
    //         })
    //     })
    //     console.log(teamsArray);
    // };

    
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
            // console.log(studentsArray);
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
        submitEvent: function (e) {
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
                
                const team = pointDiv.parentElement;
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
            if (e.target.parentElement.classList.contains('refresh')) {
                CF.deleteScores(teamsArray);
                CF.clearDOM();
                CF.addTeamsToDom(teamsArray);
            }
            
        },
    };
})(CF);

export{boysVsGirlsUI};






