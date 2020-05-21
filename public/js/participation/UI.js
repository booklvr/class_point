import { commonFunctions as CF } from '../commonFunctions.js';

var participationUI = (function() {
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
        saveGameBtn: '.save-gameBtn', // not yet
        goToClassroomBtn: '.goToClassroomBtn',
        playAgainBtn: '.playAgainBtn',
        playGameBtn: '.playGameBtn',
    };

    var DOM = {
        classroomData: document.querySelector(DOMStrings.classroomData),
        gameContainer: document.querySelector(DOMStrings.gameContainer),
        teams: document.querySelector(DOMStrings.teams),
        previewTeams: document.querySelector(DOMStrings.previewTeams),
        
        titleContainer: document.querySelector(DOMStrings.titleContainer),
        title: document.querySelector(DOMStrings.title),

    }

    //persistent data
    let studentsArray = [];
    let backupArray = [];
    
    //HELPER FUNCTIONS
    const shuffleArray = function(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    }

    ///////////////////////////////////////////////////////////////////////////////
    // *** for game play
    const addPreviewToDOM_Individual = function () {
        DOM.previewTeams.innerHTML = '';

        const newTeam = document.createElement('div');
        newTeam.className += 'team';
        let teamList = document.createElement('ul');
        teamList.className += 'teamList';
        studentsArray.forEach(student => {
            let newStudent = document.createElement("li");
            newStudent.className += 'student';
            newStudent.innerHTML = `
                <span class="student-name">${student.name}</span>
                <span class="student-gender">${student.sex === 'male' ? 'boy' : 'girl'}</span>
                <i id="${student._id}" class="deleteStudent fas fa-minus"></i></a>
            `;
            teamList.appendChild(newStudent);
        })
        newTeam.appendChild(teamList);
        DOM.previewTeams.appendChild(newTeam);
    };

   
    const addIndividualsToDom = function () {
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
            const newTeam = document.createElement('div');
            newTeam.className += 'team';
            
            //add title
            // const teamName = document.createElement('h3');
            // teamName.className += 'teamName';
            // teamName.innerHTML = 'students';
            // newTeam.appendChild(teamName);

            let teamList = document.createElement('ul');
            teamList.className += 'teamList';
            let totalPoints = 0;
            studentsArray.forEach((student, studentIndex) => {
                
                let newStudent = document.createElement("li");
                newStudent.className += 'student';
                newStudent.setAttribute('id', student._id);
                newStudent.innerHTML = `
                    <span class=name>${student.name}</span>
                    <button class="minus minus__student"><i class="fas fa-minus"></i></button>
                    <button class="add add__student"><i class="fas fa-plus"></i></button>
                    <span class="points">${student.points}</span>
                `;
                teamList.appendChild(newStudent);
                
                
            })
            newTeam.appendChild(teamList);
            DOM.teams.appendChild(newTeam);
        
    }

    //is it an add or minus button;
    const plusOrMinus = function (target) {
        return target.classList.contains('add') ? 1 : -1;
    };

    // const updateStudentPointDom = function (target, action) {        
    //     //find pointsDiv
    //     const pointsDiv = target.parentElement.lastElementChild;
    //     //update pointsDiv
    //     pointsDiv.innerHTML = +pointsDiv.innerHTML + action;
    // };

    const updateStudentsArrayPoints = function(student, action){        
        const studentID = student.id;

        studentsArray.map(student => {
            
            if (student._id === studentID) {
                // add or minus points from student points
                student.points += action;
            }
        })
    }

    // const clearDOM = function() {
    //     DOM.teams.innerHTML = '';
    //     DOM.gameContainer.firstChild.remove();
    // }

    const shiftStudentsArray = function (array) {
        console.log("shift array");
        array.push(array.shift());
    }

    const unShiftStudentsArray = function (array) {
        console.log("unShift array");
        array.unshift(array.pop());
        // array.push(studentsArray.pop());
        // console.log('arrayAfter', array)
    }

    const deleteScoresIndividual = function () {
        studentsArray.forEach(student => {
            student.points = 0;
        })
        console.log(studentsArray);
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
            // studentsArray = shuffleArray(studentsArray);
            backupArray = studentsArray;
            console.log(studentsArray);
        },

        createPreviewDOM: function () {
            addPreviewToDOM_Individual();
        },

        
        
        

        deleteStudent: function (e) {
            console.log(e.target);
            if (e.target.classList.contains('deleteStudent')) {
                console.log('delete student from arrays')
                
                
                studentsArray = CF.removeStudentfromArray(studentsArray, e.target.id)
                
                
                let li = e.target.parentElement;
                li.remove();
            }
        
        },

        //////////////////////////////////////////////////////////////////
        // *** functions for game play ***
        startGame: function (e) {
            // posting teams to teamGame
            e.preventDefault();
            console.log("Classroom Participation")

            CF.startGame();

            shuffleArray(studentsArray);
            
            addIndividualsToDom();
        },

        changePointStudent: function(e) {
            const target = e.target.parentElement;
            
            if (target.classList.contains('add__student') || target.classList.contains('minus__student')) {
                const action = CF.plusOrMinus(target);
                const student = target.parentElement;
                const team = student.parentElement.parentElement;

                CF.updateStudentPointDom(target, action);

                updateStudentsArrayPoints(student, action);
            }
        },

        goToNext: function(e) {
            if(e.target.classList.contains('next')) {
                console.log('go to next')
                
                CF.clearDOM();
                
                // shift arrays 
                shiftStudentsArray(studentsArray);
                // console.log('teamArray-post-shift', teamsArray);
                addIndividualsToDom();
            }
        },
        goToPrevious: function(e) {
            if(e.target.classList.contains('previous')) {
                console.log('go to next')
                
                CF.clearDOM();
                
                // shift arrays 
                unShiftStudentsArray(studentsArray);
                
                
                // console.log('teamArray-post-shift', teamsArray);
                addIndividualsToDom();
            }
        },
        refreshScores: function(e) {
            
            deleteScoresIndividual();
            // shuffleArray(studentsArray);  // not sure best practice....
            CF.clearDOM();
            addIndividualsToDom();
        },

        refreshStudents: function(e) {
            
            console.log('refreshStudents');
            studentsArray = backupArray;
            addPreviewToDOM_Individual();
            
        },
        
        
        shufflePreview: function (e) {
            console.log('shuffle these students around');
            CF.shuffleArray(studentsArray);

            
            addPreviewToDOM_Individual();
        },

        saveGame: async function (e) {
            CF.clearDOM();
            CF.endGameOptions();

            CF.addWinningStudent(studentsArray);

            const url = "/game/updateParticipation";
             
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

export{participationUI};






