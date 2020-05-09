var boysVsGirlsUI = (function() {
    var DOMStrings = {
        // BY CLASS
        gameContainer: '.game__container',
        classroomData: '.classroomData',
        teams: '.teams',  
        submit: '.submit',
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
    const removeStudentFromTeam = function (studentID) {
        teamsArray.forEach(team => team.students = team.students.filter(student => student._id !== studentID))
    }

    const removeStudentfromArray = function (studentID) {
        studentsArray = studentsArray.filter(student => student._id !== studentID)
    }

    const startGame = function () {
        DOM.title.innerHTML = "Let's Play",
        DOM.previewTeams.remove();
        DOM.submit.remove();
        DOM.teams.innerHTML = '';

        // add save refresh buttons
        const saveRefreshButtons = document.createElement('div');
        console.log(saveRefreshButtons);
        
        saveRefreshButtons.classList += saveRefreshButtons;
        saveRefreshButtons.innerHTML = `
            <button class="refresh"><i class="fas fa-sync-alt"></i></button>  
        `
        //add this later
        // <button class="save"><i class="fas fa-save"></i></button>
        DOM.titleContainer.insertBefore(saveRefreshButtons, DOM.titleContainer.children[1]);
        // DOM.titleContainer.appendChild(saveRefreshButtons);
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
            newTeam.setAttribute('id', team.teamID)
            
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
                    // console.log('current student');
                    newStudent.className += ' currentStudent';
                // create next student
                } else if (teamIndex === 1 && studentIndex === 0) {
                    const nextTitle = document.createElement('h3');
                    nextTitle.classList += 'nextTitle';
                    nextTitle.innerHTML = 'Upcoming Student';
                    teamList.insertBefore(nextTitle, teamList.firstChild);
                    // console.log('next student');
                    newStudent.className += ' nextStudent';
                }
            })
            newTeam.appendChild(teamList);
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
        const studentID = student.id;

        teamsArray.forEach(team => team.students.map(student => {
            
            if (student._id === studentID) {
                // add or minus points from student points
                student.points += action;
                team.totalPoints += action
            }
        }))
    }

    const updatePointsArrayTeam = function (teamID, action) {
        // iterate over teams array
        // add or minus point to teamPoints
        teamsArray.forEach(team => {
            if (team.teamID === teamID) {
                team.totalPoints += action;
            }
        })
    }

    const updateTeamPointDom = function (team, action) {
        console.log('updateTeamPointDom-teamsArray', teamsArray);    
        const pointValue = team.querySelector('.teamPointValue');
        
        action === 1 ? pointValue.innerHTML = +pointValue.innerHTML + 1 : pointValue.innerHTML = +pointValue.innerHTML -1;
    }

    const clearDOM = function() {
        DOM.teams.innerHTML = '';
        DOM.previewTeams = '';
        DOM.gameContainer.firstChild.remove();
    }

    const shiftArrays = function (array) {
        console.log("shift array");
        array[0].students.push(array[0].students.shift())
        array.push(array.shift());
    };

    const deleteScores = function () {
        teamsArray.forEach(team => {
            team.totalPoints = 0;
            team.students.forEach(student => {
                student.points = 0;
            })
        })
        console.log(teamsArray);
    };

    
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
            studentsArray = shuffleArray(studentsArray);
            console.log(studentsArray);
            
        },
        createTeams: function () {
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
    
            console.log(teamsArray);
        },

        addPreviewToDOM: function () {
            DOM.teams.innerHTML = '';
            
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

            startGame();

            randomTeamFirst();

            // teamsArray.forEach(team => shuffleArray(team.students))
            
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
                // console.log('teamArray-post-shift', teamsArray);
                addTeamsToDom();
            }
        },
        refreshScores: function(e) {
            if (e.target.parentElement.classList.contains('refresh')) {
                deleteScores();
                clearDOM();
                addTeamsToDom();
            }
            
        },
    };
})();

export{boysVsGirlsUI};






