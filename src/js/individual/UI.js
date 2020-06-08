import { commonFunctions as CF } from '../commonFunctions.js';

var individualUI = (function() {
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
        refreshStudentsBtn: document.querySelector(DOMStrings.refreshStudentsBtn),
        shuffleStudentsBtn: document.querySelector(DOMStrings.shuffleStudentsBtn),
        refreshGameBtn: document.querySelector(DOMStrings.refreshGameBtn),
        saveGameBtn: document.querySelector(DOMStrings.saveGameBtn),
        playGameBtn: document.querySelector(DOMStrings.playGameBtn),
        nextStudent: document.querySelector(DOMStrings.nextStudent),
        previousStudent: document.querySelector(DOMStrings.previousStudent),
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
                // create current student
                if (studentIndex === 0) {
                    newStudent.className += ' currentStudent';
                // create next student
                } else if (studentIndex === 1) {
                    
                    newStudent.className += ' nextStudent';
                }
            })
            newTeam.appendChild(teamList);
            DOM.teams.appendChild(newTeam);
        
    }

    const updateStudentsArrayPoints = function(student, action){        
        const studentID = student.id;

        studentsArray.map(student => {
            
            if (student._id === studentID) {
                // add or minus points from student points
                student.points += action;
            }
        })
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
            console.log("let's play")

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

        changePointStudent: function(e) {
            const target = e.target.parentElement;
            
            if (target.classList.contains('add__student') || target.classList.contains('minus__student')) {
                const action = CF.plusOrMinus(target);
                const student = target.parentElement;

                CF.updateStudentPointDom(target, action);

                updateStudentsArrayPoints(student, action);
            }
        },

        goToPreviousStudent: function() {
            console.log('goToPreviousStudent')

            CF.clearDOM();
                
            // shift arrays 
            CF.unShiftStudentsArray(studentsArray);
            
            addIndividualsToDom();
        },

        goToNextStudent: function() {
            console.log('goToNextStudent')

            CF.clearDOM();
                
            // shift arrays 
            CF.shiftStudentsArray(studentsArray);

            addIndividualsToDom();
        },

        refreshScores: function() {
            
            deleteScoresIndividual();
            CF.clearDOM();
            addIndividualsToDom();
        },

        refreshStudents: function() {
            
            console.log('refreshStudents');
            studentsArray = backupArray;
            addPreviewToDOM_Individual();
            
        },
        
        
        shufflePreview: function () {
            console.log('shuffle these students around');
            CF.shuffleArray(studentsArray);

            
            addPreviewToDOM_Individual();
        },

        saveGame: async function () {
            CF.clearDOM();
            CF.endGameOptions();

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

export{individualUI};






