var gameFormUI = (function() {
    var DOMStrings = {
        // ID's
        submit: '#submit',
        numberOfTeams: '#numberOfTeams',
        
        
        
        
        // CLASSES
        gameContainer: '.game__container',
        classroomData: '.classroomData',
        teams: '.teams',
        previewTeams: '.preview__teams',
        gameForm: '.gameForm',
        errors: '.errors',
        addTeam: '.add__team',
        minusTeam: '.minus__team',
        next: '.next',
    };

    var DOM = {
        gameForm: document.querySelector(DOMStrings.gameForm),
        gameContainer: document.querySelector(DOMStrings.gameContainer),
        errors: document.querySelector(DOMStrings.errors),
        classroomData: document.querySelector(DOMStrings.classroomData),
        teams: document.querySelector(DOMStrings.teams),
        previewTeams: document.querySelector(DOMStrings.previewTeams),
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
            team.id = `team${k}`;
            temp = studentsArray.slice(i,i+chunk);
            console.log('temp', temp);
            team.students = temp;
            teamsArray.push(team);
        }
        console.log(teamsArray);
    }

    const addPreviewToDOM = function () {
        DOM.previewTeams.innerHTML = '';
        
        teamsArray.forEach((team, index) => {
            //create new team div
            const newTeam = document.createElement('div');
            newTeam.className += 'team';
            //add title
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
                    <i class="${'fas fa-child icon-' + student.sex}"></i>
                    <i id="${student._id}" class="deleteStudent fas fa-trash-alt"></i></a>
                `;
                teamList.appendChild(newStudent);
            })
            newTeam.appendChild(teamList);
            // const teamName = document.createElement('ul')
            DOM.previewTeams.appendChild(newTeam);
        })
    }

    // const removeStudentfromArray = function (studentID) {
    //     // console.log(studentID);

    //     studentsArray = studentsArray.filter(student => student._id !== studentID)
    //     console.log('studentsArray', studentsArray);
    // }

    const removeStudentFromTeam = function (studentID) {
        // teamsArray.forEach(team => team.students.map(students => students.filter(student => student._id !== studentID)))
        // teamsArray = teamsArray.map(team => team.students = team.students.filter(student => student._id !== studentID))
        teamsArray.forEach(team => {
            console.log('team', team.students);
            team.students.filter(student => {
                console.log('student', student)
                student.filter(student._id !== studentID);
            })
        })
        

        console.log('teamsArray', teamsArray);
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
        DOM.previewTeams.remove();
        DOM.teams.innerHTML = '';
    }

    const addTeamsToDom = function () {
        // add button to the DOM
        const buttons = document.createElement('div');
        buttons.classList += 'buttons';
        buttons.innerHTML = `
            <button class="next">Next</button>
        `
        DOM.gameContainer.insertBefore(buttons, DOM.gameContainer.firstChild);

        // add teams to the dom
        
        teamsArray.forEach((team, teamIndex) => {
            //create new team div
            const newTeam = document.createElement('div');
            newTeam.className += 'team';
            newTeam.setAttribute('id', `team${teamIndex+1}`)
            
            //add title
            const teamName = document.createElement('h3');
            teamName.className += 'teamName';
            teamName.innerHTML = team.name;
            newTeam.appendChild(teamName);
            let teamPoint = document.createElement('div');
            teamPoint.className += 'teamPoint';
            teamPoint.innerHTML = `
                <button class="minus minus__team"><i class="fas fa-minus"></i></button>
                <button class="add add__team"><i class="fas fa-plus"></i></button>
                <span class="teamPointValue">${team.totalPoints}</span>
            `;
            newTeam.appendChild(teamPoint);

            let teamList = document.createElement('ul');
            teamList.className += 'teamList';
            let totalPoints = 0;
            team.students.forEach((student, studentIndex) => {
                
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
                if (teamIndex === 0 && studentIndex === 0) {
                    const currentTitle = document.createElement('h3');
                    currentTitle.classList += 'currentTitle';
                    currentTitle.innerHTML = 'Current Student';
                    teamList.insertBefore(currentTitle, teamList.firstChild);
                    console.log('current student');
                    newStudent.className += ' currentStudent';
                // create next student
                } else if (teamIndex === 1 && studentIndex === 0) {
                    const nextTitle = document.createElement('h3');
                    nextTitle.classList += 'nextTitle';
                    nextTitle.innerHTML = 'Upcoming Student';
                    teamList.insertBefore(nextTitle, teamList.firstChild);
                    console.log('current student');
                    newStudent.className += ' nextStudent';
                }

                totalPoints += student.points;
            })
            // console.log('teamsPoints.team1', teamsPoints.team1);
            // totalPoints += teamsPoints[newTeam.id];
            // teamPoint.querySelector('.teamPointValue').innerHTML = totalPoints;
            // console.log(newTeam)
            newTeam.appendChild(teamList);

            // const teamName = document.createElement('ul')
            DOM.teams.appendChild(newTeam);
        })
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

   
    const updatePointsArrayAll = function(student, action){

        console.log(student.parentElement.parentElement);
        
        const studentID = student.id;

        teamsArray.forEach(team => team.students.map(student => {
            
            if (student._id === studentID) {
                console.log("it's a match");
                // add or minus points from student points
                student.points += action;
                team.totalPoints += action
            }
        }))
        console.log(teamsArray);

        
    }
    const updatePointsArrayTeam = function (teamID, action) {
        
        // iterate over teams array
        // add or minus point to teamPoints
        teamsArray.forEach(team => {
            if (team.id === teamID) {
                team.totalPoints += action;
            }
        })
        // console.log(teamsArray)
    }

    const updateTeamPointDom = function (team, action) {
        
        const pointValue = team.querySelector('.teamPointValue');
        
        action === 1 ? pointValue.innerHTML = +pointValue.innerHTML + 1 : pointValue.innerHTML = +pointValue.innerHTML -1;
    }

    // const updateTeamPointsDOM = function (team, addOrMinus) {
    //     console.log('change team points');

    //     const pointDiv = team.children[1].children[2];

    //     addOrMinus === 'add' ? +pointDiv.innerHTML++ : +pointDiv.innerHTML--;
    // }

    const clearDOM = function() {
        DOM.teams.innerHTML = '';
        DOM.gameContainer.firstChild.remove();
    }

    const shiftArrays = function (array) {
        console.log("shift array");
        array[0].students.push(array[0].students.shift())
        array.push(array.shift());
    }

    return {
        getDOMStrings: function() {
            return DOMStrings;
        },
        // FUNCTIONS

        getClassroomData: async function () {
            console.log('get classroom data')
            const classroomID = DOM.classroomData.dataset.classroom_id;
            // console.log(classroomID)

            const response = await fetch(`/game/classData/${classroomID}`)
            
            const students = await response.json();

            students.forEach(student => studentsArray.push(student));

            //shuffle students array for different game play every time
            // studentsArray = shuffleArray(studentsArray);
        },

        logStudents: function () {
            console.log('students array:', studentsArray);
        },

        createPreviewDOM: function (teamSize) {
            
            if (tooManyTeams(teamSize)) {
                console.log('Too many teams, not enough students');
                return addErrorMessage('There are not enough students for that many teams');
            }

            createTeams(teamSize);
            addPreviewToDOM();
        },

        deleteStudent: function (e) {
            if (e.target.classList.contains('deleteStudent')) {
                console.log('delete this mother fucker yeah')
                
                // removeStudentfromArray(e.target.id)

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
        
        changePointStudent: function(e) {
            const target = e.target.parentElement;
            
            if (target.classList.contains('add__student') || target.classList.contains('minus__student')) {
                const action = plusOrMinus(target);
                const student = target.parentElement;
                const team = student.parentElement.parentElement;
                
                console.log(action);

                updateStudentPointDom(target, action);

                updatePointsArrayAll(student, action);

                updateTeamPointDom(team, action);
            }
        },
        changeTeamPoints: function(e) {

            const target = e.target.parentElement;
            const pointDiv = target.parentElement;
            
            if (pointDiv.classList.contains('teamPoint')) {
                const team = pointDiv.parentElement;
                // const pointValue = pointDiv.lastElementChild;

                let action = plusOrMinus(target);

                // change points in teamsArray
                updatePointsArrayTeam(team.id, action)

                //update DOM 
                updateTeamPointDom(team, action);
            }
        },
        goToNext: function(e) {
            if(e.target.classList.contains('next')) {
                console.log('go to next')

                clearDOM();
                // shift arrays 
                shiftArrays(teamsArray);
                addTeamsToDom();
            }
            
            // boysTurn = !boysTurn;
            // changeOrder(boysTurn);
            
            // // shift the correct array
            // boysTurn ? shiftArray(girlsArray) : shiftArray(boysArray);
            
            
            
            // clearDOM();
            // getCurrent();
            // getNext();
            
            // // getNextStudent();
            // createTeam(boysArray, DOM.boys);
            // createTeam(girlsArray, DOM.girls);
        },

    };
})();

export{gameFormUI};




