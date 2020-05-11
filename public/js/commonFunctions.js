
var commonFunctions = (function() {
    
    var DOMStrings = {
        // ID's
        numberOfTeams: '#numberOfTeams',
        
        // CLASSES
        submit: '.submit',
        gameContainer: '.game__container',
        // classroomData: '.classroomData',
        teams: '.teams',
        previewTeams: '.preview__teams',
        gameForm: '.gameForm',
        errors: '.errors',
        titleContainer: '.title__container',
        title: '.title',
        // refreshStudentsBtn: '.refresh-studentsBtn',
        options: '.options'
    };

    var DOM = {
        numberOfTeams: document.querySelector(DOMStrings.numberOfTeams),
        submit: document.querySelector(DOMStrings.submit),
        gameForm: document.querySelector(DOMStrings.gameForm),
        gameContainer: document.querySelector(DOMStrings.gameContainer),
        errors: document.querySelector(DOMStrings.errors),
        // classroomData: document.querySelector(DOMStrings.classroomData),
        teams: document.querySelector(DOMStrings.teams),
        previewTeams: document.querySelector(DOMStrings.previewTeams),
        titleContainer: document.querySelector(DOMStrings.titleContainer),
        title: document.querySelector(DOMStrings.title),
        // refreshStudentsBtn: document.querySelector(DOMStrings.refreshStudentsBtn),
        options: document.querySelector(DOMStrings.options),
    } 
    

    //is it an add or minus button;
    return {
        plusOrMinus: function (target) {
            return target.classList.contains('add') ? 1 : -1;
        },
        
        addPreviewToDOM: function (teamsArray) {
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
        },
        removeStudentFromTeam: function (teamsArray, studentID) {
            teamsArray.forEach(team => team.students = team.students.filter(student => student._id !== studentID))
            
            console.log('teamsArray', teamsArray);
        },
        removeStudentfromArray: function (studentsArray, studentID) {
            // console.log(studentID);

            studentsArray = studentsArray.filter(student => student._id != studentID)
    
            console.log(studentsArray);

            return studentsArray;
            
        },
        shuffleArray: function(array) {
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
        },

        addErrorMessage: function (message) {
            DOM.errors.innerHTML = message;
    
            setTimeout(() => {
                DOM.errors.innerHTML = "";
            }, 3000);
        },

        startGame: function () {
            DOM.title.innerHTML = "Let's Play";
            if (DOM.gameForm) {
                DOM.gameForm.remove();
            }

            
            DOM.previewTeams.remove();
            DOM.teams.innerHTML = '';

            console.log(DOM.options.children)
            for (let i = 0; i < DOM.options.children.length; i++) {
                DOM.options.children[i].classList.toggle('hide');
            }            
        },

        addTeamsToDom: function (teamsArray) {
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
                // console.log('newTeam', newTeam)
                
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
                })
                // console.log('teamsPoints.team1', teamsPoints.team1);
                // totalPoints += teamsPoints[newTeam.id];
                // teamPoint.querySelector('.teamPointValue').innerHTML = totalPoints;
                // console.log(newTeam)
                newTeam.appendChild(teamList);
    
                // const teamName = document.createElement('ul')
                DOM.teams.appendChild(newTeam);
            })
        },

        plusOrMinus: function (target) {
            return target.classList.contains('add') ? 1 : -1;
        },

        updateStudentPointDom: function (target, action) {
        
            //find pointsDiv
            const pointsDiv = target.parentElement.lastElementChild;
            //update pointsDiv
            pointsDiv.innerHTML = +pointsDiv.innerHTML + action;
        },
        updatePointsArrayAll: function (teamsArray, student, action){

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
        },
        updatePointsArrayTeam: function (teamsArray, teamID, action) {  
            // iterate over teams array
            // add or minus point to teamPoints
            teamsArray.forEach(team => {
                if (team.teamID === teamID) {
                    
                    console.log("its a match :) ")
                    team.totalPoints += action;
                }
            })
            console.log(teamsArray)
        },

        updateTeamPointDom: function (team, action) {
        
            const pointValue = team.querySelector('.teamPointValue');
            
            action === 1 ? pointValue.innerHTML = +pointValue.innerHTML + 1 : pointValue.innerHTML = +pointValue.innerHTML -1;
        },

        clearDOM: function () {
            DOM.teams.innerHTML = '';
            DOM.gameContainer.firstChild.remove();
        },

        shiftTeamsAndStudentArray: function (array) {
            console.log("shift array");
            array[0].students.push(array[0].students.shift())
            array.push(array.shift());
        },

        deleteScores: function (teamsArray) {
            teamsArray.forEach(team => {
                team.totalPoints = 0;
                team.students.forEach(student => {
                    student.points = 0;
                })
            })
            console.log(teamsArray);
        },
        clearPreviewTeams: function() {
            DOM.previewTeams.innerHTML = '';
        },
        clearInput: function() {
            DOM.numberOfTeams.value = 1;
        }
    } 
})();

export{commonFunctions};
