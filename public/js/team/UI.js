var gameFormUI = (function() {
    var DOMStrings = {
        // ID's
        submit: '#submit',
        numberOfTeams: '#numberOfTeams',
        gameFormClassroomData: '#gameFormClassroomData',
        
        
        // CLASSES
        teams: '.teams',
        gameForm: '.gameForm',
        errors: '.errors',
        addTeam: '.add__team',
        minusTeam: '.minus__team',
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

    // ********************************************************* 
    // *** Functions for Game Form ***


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

    const createPreview = function (teamNumber) {
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

    const addPreviewToDOM = function () {
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

    // ********************************************************* 
    // *** Functions for Game Play ***
    const clearPage = function () {
        DOM.gameForm.remove();
        DOM.teams.innerHTML = '';
    }

    const addTeamsToDom = function () {

        teamsArray.forEach((team, index) => {
            //create new team div
            const newTeam = document.createElement('div');
            newTeam.className += 'team';
            //add title
            const teamName = document.createElement('h3');
            teamName.className += 'teamName';
            teamName.innerHTML = `Team ${index + 1}`
            newTeam.appendChild(teamName);
            let teamPoint = document.createElement('div');
            teamPoint.className += 'teamPoint';
            teamPoint.innerHTML = `
                <button class="minus__team"><i class="fas fa-minus"></i></button>
                <button class="add__team"><i class="fas fa-plus"></i></button>
                <span class="teamPointValue">0</span>
            `;
            newTeam.appendChild(teamPoint);
            let teamList = document.createElement('ul');
            teamList.className += 'teamList';
            team.forEach(student => {
                let newStudent = document.createElement("li");
                newStudent.className += 'student';
                newStudent.setAttribute('id', student._id);
                newStudent.innerHTML = `
                <span class=name>${student.name}</span>
                <button class="minus"><i class="fas fa-minus"></i></button>
                <button class="add"><i class="fas fa-plus"></i></button>
                <span class="points">${student.points}</span>
                `;
                teamList.appendChild(newStudent);
            })
            // console.log(newTeam)
            newTeam.appendChild(teamList);
            // const teamName = document.createElement('ul')
            DOM.teams.appendChild(newTeam);
        })
    }

    const updatePointDom = function(student, plusOrMinus) {
        // console.log('studentID', student.id);
        let children = student.children;
        // console.log('children',children);

        if (plusOrMinus === 'add') {
            children[3].innerHTML = +children[3].innerHTML + 1;
        } else if (plusOrMinus === 'minus') {
            children[3].innerHTML = +children[3].innerHTML - 1;
        }
    };

    const updatePointStudentArray = function(student, addOrMinus){
        console.log(student);
        const studentID = student.id;
        console.log('studentID', studentID)

        teamsArray.forEach(team => team.map(student => {
            if (student._id === studentID ) {
                addOrMinus === 'add' ? student.points++ : student.points--;
            }
        }))
    }

    const updateTeamPointsDOM = function (team, addOrMinus) {
        console.log('change team points');

        const pointDiv = team.children[1].children[2];

        addOrMinus === 'add' ? +pointDiv.innerHTML++ : +pointDiv.innerHTML--;
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

        createPreviewDOM: function (teamSize) {
            
            if (tooManyTeams(teamSize)) {
                console.log('Too many teams, not enough students');
                return addErrorMessage('There are not enough students for that many teams');
            }

            createPreview(teamSize);
            addPreviewToDOM();
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

        // ********************************************************* 
        // *** Functions for Game Play ***

        
        
        submitEvent: function (e) {
            // posting teams to teamGame
            e.preventDefault();
            console.log('creating game teams to team route');

            clearPage();
            addTeamsToDom();

            // console.log(teamsArray);

            // const url = "/game/team";
             
            // fetch(url, {
            //     method: 'post',
            //     // redirect: 'follow',
            //     headers: {
            //         'Content-Type': 'application/json',
            //     },
            //     // credentials: 'same-origin',
            //     body: JSON.stringify(teamsArray)
            // }).then(res => res.json())
            // .then(text => console.log('final result', text))
            
            // // console.log('clasroom data', DOM.gameFormClassroomData.dataset.classroom_id);
            // window.location.href = `/game/teams/${DOM.gameFormClassroomData.dataset.classroom_id}`;
        },
        
        changePoint: function(e) {
            
            if (e.target.parentElement.classList.contains('add')) {
                console.log('add please');
                updatePointDom(e.target.parentElement.parentElement, 'add');
                updatePointStudentArray(e.target.parentElement.parentElement, 'add');
                updateTeamPointsDOM(e.target.parentElement.parentElement.parentElement.parentElement, 'add');

            } else if (e.target.parentElement.classList.contains('minus')) {
                console.log('minus the points')
                updatePointDom(e.target.parentElement.parentElement, 'minus');
                updatePointStudentArray(e.target.parentElement.parentElement, 'minus');
                updateTeamPointsDOM(e.target.parentElement.parentElement.parentElement.parentElement, 'minus');
                
            }
        },
        changeTeamPoints: function(e) {
            const target = e.target.parentElement;
            
            const pointDiv = e.target.parentElement.parentElement;
            
            if (target.classList.contains('add__team')) {
                console.log('add to team')
                pointDiv.children[2].innerHTML = +pointDiv.children[2].innerHTML + 1;
            } else if (target.classList.contains('minus__team')) {
                console.log('minus from the team');
                pointDiv.children[2].innerHTML = +pointDiv.children[2].innerHTML - 1;
            }


            
        }
    };
})();

export{gameFormUI};




