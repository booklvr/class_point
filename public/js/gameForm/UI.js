var gameFormUI = (function() {
    var DOMStrings = {
        // ID's
        submit: '#submit',
        numberOfTeams: '#numberOfTeams',
        gameFormClassroomData: '#gameFormClassroomData',
        
        // CLASSES
        teams: '.teams',
        gameForm: '.gameForm',
        errors: '.errors'
    };

    var DOM = {
        gameForm: document.querySelector(DOMStrings.gameForm),
        errors: document.querySelector(DOMStrings.errors),
        gameFormClassroomData: document.querySelector(DOMStrings.gameFormClassroomData),
        teams: document.querySelector(DOMStrings.teams),
    } 

    // CREATE STUDENTS AND TEAMS ARRAY
    let studentsArray = [];
    let teamsArray = [];

    // HELPER FUNCTIONS

    // * populate teams array with one team
    const getClassroomData = async function () {
        console.log('get classroom data')
        const classroomID = DOM.gameFormClassroomData.dataset.classroom_id;
        // console.log(classroomID)

        const response = await fetch(`/game/classData/${classroomID}`)
        
        const students = await response.json();

        studentsArray = students;
    }

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
        var i,j,temp, chunk;

        // find chunk size
        chunk = studentsArray.length / teamNumber;

        for (i=0,j=studentsArray.length; i<j; i+=chunk) {
            temp = studentsArray.slice(i,i+chunk);
            console.log(temp);
            teamsArray.push(temp);
        }
        console.log(teamsArray);
    }

    const addTeamsToDOM = function () {
        DOM.teams.innerHTML = '';

        teamsArray.forEach((team, index) => {
            //create new team div
            const newTeam = document.createElement('div');
            newTeam.className += 'team';
            //add title
            const teamName = document.createElement('h3');
            teamName.className += 'teamName';
            teamName.innerHTML = `Team ${index + 1}`
            newTeam.appendChild(teamName);
            let teamList = document.createElement('ul');
            teamList.className += 'teamList';
            team.forEach(student => {
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
            // const teamName = document.createElement('ul')
            DOM.teams.appendChild(newTeam);
        })
    }

    const removeStudentfromArray = function (studentID) {
        // console.log(studentID);

        studentsArray = studentsArray.filter(student => student._id !== studentID)
        console.log(studentsArray);
    }

    const removeStudentFromTeam = function (studentID) {
        teamsArray = teamsArray.map(team => team = team.filter(student => student._id !== studentID))

        console.log(teamsArray);
    }

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

    // * add error messages
    const addErrorMessage = function (message) {
        DOM.errors.innerHTML = message;

        setTimeout(() => {
            DOM.errors.innerHTML = "";
        }, 3000);
    }

    return {
        getDOMStrings: function() {
            return DOMStrings;
        },
        // FUNCTIONS

        getClassroomData: async function () {
            console.log('get classroom data')
            const classroomID = DOM.gameFormClassroomData.dataset.classroom_id;
            // console.log(classroomID)

            const response = await fetch(`/game/classData/${classroomID}`)
            
            const students = await response.json();

            students.forEach(student => studentsArray.push(student));

            //shuffle students array for different game play every time
            studentsArray = shuffleArray(studentsArray);
        },

        logStudents: function () {
            console.log('students array:', studentsArray);
        },

        createTeamsDOM: function (teamSize) {
            
            if (tooManyTeams(teamSize)) {
                console.log('Too many teams, not enough students');
                return addErrorMessage('There are not enough students for that many teams');
            }

            createTeams(teamSize);
            addTeamsToDOM();
        },

        deleteStudent: function (e) {
            if (e.target.classList.contains('deleteStudent')) {
                console.log('delete this mother fucker yeah')
                

                removeStudentfromArray(e.target.id)

                removeStudentFromTeam(e.target.id);
                //remove the student form the DOM
                // console.log(e.target.parentElement);
                let li = e.target.parentElement;
                li.remove();
            }
        },
        
        submitEvent: function (e) {
            // posting teams to teamGame
            e.preventDefault();
            console.log('posting teams to team route');

            const url = "/game/team";
             
            fetch(url, {
                method: 'post',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(teamsArray)
            }).then(res => res)
            .then(text => console.log(text))
        }  
    };
})();

export{gameFormUI};




