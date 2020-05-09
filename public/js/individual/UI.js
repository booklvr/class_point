var boysVsGirlsUI = (function() {
    var DOMStrings = {
        // BY CLASS
        gameContainer: '.game__container',
        classroomData: '.classroomData',
        teams: '.teams',  
        submit: '.submit',
        previewTeams: '.preview__teams',
    };

    var DOM = {
        classroomData: document.querySelector(DOMStrings.classroomData),
        gameContainer: document.querySelector(DOMStrings.gameContainer),
        teams: document.querySelector(DOMStrings.teams),
        previewTeams: document.querySelector(DOMStrings.previewTeams),
        submit: document.querySelector(DOMStrings.submit),
    }

    //persistent data
    let studentsArray = [];
    let teamsArray = [];

    //HELPER FUNCTIONS
    const removeStudentFromTeam = function (studentID) {
        teamsArray.forEach(team => team.students = team.students.filter(student => student._id !== studentID))
    }

    const removeStudentfromArray = function (studentID) {
        studentsArray = studentsArray.filter(student => student._id !== studentID)
    }

    const clearPage = function () {
        DOM.previewTeams.remove();
        DOM.submit.remove();
        DOM.teams.innerHTML = '';
    };

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

   
    const addTeamsToDom = function () {
        // add button to the DOM
        const buttons = document.createElement('div');
        buttons.classList += 'buttons';
        buttons.innerHTML = `
            <button class="previous">Previous</button>
            <button class="next">Next</button>
        `
        DOM.gameContainer.insertBefore(buttons, DOM.gameContainer.firstChild);

        // add teams to the dom
        
            
            //create new team div
            const newTeam = document.createElement('div');
            newTeam.className += 'team';
            
            //add title
            const teamName = document.createElement('h3');
            teamName.className += 'teamName';
            teamName.innerHTML = 'students';
            newTeam.appendChild(teamName);

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
                // create current student
                if (studentIndex === 0) {
                    const currentTitle = document.createElement('h3');
                    currentTitle.classList += 'currentTitle';
                    currentTitle.innerHTML = 'Current Student';
                    teamList.insertBefore(currentTitle, teamList.firstChild);
                    // console.log('current student');
                    newStudent.className += ' currentStudent';
                // create next student
                } else if (studentIndex === 1) {
                    const nextTitle = document.createElement('h3');
                    nextTitle.classList += 'nextTitle';
                    nextTitle.innerHTML = 'Upcoming Student';
                    teamList.insertBefore(nextTitle, teamList.children[2]);
                    // console.log('next student');
                    newStudent.className += ' nextStudent';
                }
            })
            newTeam.appendChild(teamList);
            DOM.teams.appendChild(newTeam);
        
    }

    //is it an add or minus button;
    const plusOrMinus = function (target) {
        return target.classList.contains('add') ? 1 : -1;
    };

    const updateStudentPointDom = function (target, action) {        
        //find pointsDiv
        const pointsDiv = target.parentElement.lastElementChild;
        //update pointsDiv
        pointsDiv.innerHTML = +pointsDiv.innerHTML + action;
    };

    const updateStudentsArrayPoints = function(student, action){        
        const studentID = student.id;

        studentsArray.map(student => {
            
            if (student._id === studentID) {
                // add or minus points from student points
                student.points += action;
            }
        })
    }

    const clearDOM = function() {
        DOM.teams.innerHTML = '';
        DOM.previewTeams = '';
        DOM.gameContainer.firstChild.remove();
    }

    const shiftArrays = function (array) {
        console.log("shift array");
        array.push(array.shift());
    }

    const unShiftArrays = function (array) {
        console.log("unShift array");
        array.unshift(array.pop());
        // array.push(studentsArray.pop());
        // console.log('arrayAfter', array)
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
            console.log(studentsArray);
        },
        
        addPreviewToDOM: function () {
            DOM.teams.innerHTML = '';

            const newTeam = document.createElement('div');
            newTeam.className += 'team';
            let teamList = document.createElement('ul');
            teamList.className += 'teamList';
            studentsArray.forEach(student => {
                let newStudent = document.createElement("li");
                newStudent.className += 'student';
                newStudent.innerHTML = `
                    <span class="student-name">${student.name}</span>
                    <i class="${'fas fa-child icon-' + student.sex}"></i>
                    <i id="${student._id}" class="deleteStudent fas fa-trash-alt"></i></a>
                `;
                teamList.appendChild(newStudent);
            })
            newTeam.appendChild(teamList);
            DOM.previewTeams.appendChild(newTeam);
        },

        deleteStudent: function (e) {
            if (e.target.classList.contains('deleteStudent')) {
                console.log('delete student from arrays')
                
                removeStudentFromTeam(e.target.id);
                removeStudentfromArray(e.target.id)
                
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

            clearPage();

            shuffleArray(studentsArray);
            
            addTeamsToDom();
            console.log('after-AddTeamsToDOM-teamsArray', teamsArray);

            
        },

        changePointStudent: function(e) {
            const target = e.target.parentElement;
            
            if (target.classList.contains('add__student') || target.classList.contains('minus__student')) {
                const action = plusOrMinus(target);
                const student = target.parentElement;
                const team = student.parentElement.parentElement;
                console.log('CHANGE POINT STUDENT')
                console.log('action', action);
                console.log('student', student);
                console.log('team', team);

                updateStudentPointDom(target, action);

                updateStudentsArrayPoints(student, action);
            }
        },

        goToNext: function(e) {
            if(e.target.classList.contains('next')) {
                console.log('go to next')
                
                clearDOM();
                
                // shift arrays 
                shiftArrays(studentsArray);
                // console.log('teamArray-post-shift', teamsArray);
                addTeamsToDom();
            }
        },
        goToPrevious: function(e) {
            if(e.target.classList.contains('previous')) {
                console.log('go to next')
                
                clearDOM();
                
                // shift arrays 
                unShiftArrays(studentsArray);
                
                
                // console.log('teamArray-post-shift', teamsArray);
                addTeamsToDom();
            }
        },
    };
})();

export{boysVsGirlsUI};






