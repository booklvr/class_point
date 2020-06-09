
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
        refreshStudentsBtn: '.refresh-studentsBtn',
        refreshGameBtn: '.refresh-gameBtn',
        playGameBtn: '.playGameBtn',
        shuffleStudentsBtn: '.shuffle-studentsBtn',
        saveGameBtn: '.save-gameBtn', // not yet
        goToClassroomBtn: '.goToClassroomBtn',
        playAgainBtn: '.playAgainBtn',
        previous: '.previous',
        previousStudent: '.previous-student',
        nextStudent: '.next-student',
        next: '.next',
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
        refreshStudentsBtn: document.querySelector(DOMStrings.refreshStudentsBtn),
        shuffleStudentsBtn: document.querySelector(DOMStrings.shuffleStudentsBtn),
        playGameBtn: document.querySelector(DOMStrings.playGameBtn),
        refreshGameBtn: document.querySelector(DOMStrings.refreshGameBtn),
        saveGameBtn: document.querySelector(DOMStrings.saveGameBtn),
        goToClassroomBtn: document.querySelector(DOMStrings.goToClassroomBtn),
        playAgainBtn: document.querySelector(DOMStrings.playAgainBtn),
        next: document.querySelector(DOMStrings.next),
        nextStudent: document.querySelector(DOMStrings.nextStudent),
        previousStudent: document.querySelector(DOMStrings.previousStudent),
        previous: document.querySelector(DOMStrings.previous),
    } 
    

    //is it an add or minus button;
    return {
        plusOrMinus: function (target) {
            return target.classList.contains('add') ? 1 : -1;
        },

        addPreviewToDOM: function (teamsArray) {
            DOM.previewTeams.innerHTML = '';
            
            teamsArray.forEach((team) => {
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
                        <span class="student-gender">${student.sex === 'male' ? 'boy' : 'girl'}</span>
                        <i id="${student._id}" class="deleteStudent fas fa-minus"></i></a>
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
            DOM.refreshStudentsBtn.remove();
            DOM.shuffleStudentsBtn.remove();
            DOM.playGameBtn.remove();
            DOM.refreshGameBtn.classList.toggle('hide');
            DOM.saveGameBtn.classList.toggle('hide');
            DOM.previous.classList.toggle('hide');
            DOM.nextStudent.classList.toggle('hide');
            DOM.previousStudent.classList.toggle('hide');
            DOM.next.classList.toggle('hide');
            DOM.teams.classList.toggle('hide');
        },

        addTeamsToDom: function (teamsArray) {    
            // add teams to the dom
            
            teamsArray.forEach((team, teamIndex) => {
                //create new team div
                const newTeam = document.createElement('div');
                newTeam.className += 'team';
                
                newTeam.setAttribute('id', team.teamID)                
                //add title
                
                const teamInfo = document.createElement('div');
                teamInfo.className += 'team-info';

                const teamName = document.createElement('h3');
                teamName.className += 'teamName';
                teamName.innerHTML = team.name;
                
                teamInfo.appendChild(teamName);
                let teamPoint = document.createElement('div');
                teamPoint.className += 'teamPoint';
                teamPoint.innerHTML = `
                    <button class="minus minus__team"><i class="fas fa-minus"></i></button>
                    <button class="add add__team"><i class="fas fa-plus"></i></button>
                    <span class="teamPointValue">${team.totalPoints}</span>
                `;
                
                teamInfo.appendChild(teamPoint);
                newTeam.appendChild(teamInfo);
    
                let teamList = document.createElement('ul');
                teamList.className += 'teamList';
                team.students.forEach((student, studentIndex) => {
                    
                    let newStudent = document.createElement("li");
                    newStudent.className += 'student';
                    newStudent.setAttribute('id', student._id);
                    newStudent.innerHTML = `
                        <span class=name>${student.name}</span>
                        <button class="add-plus-btn minus minus__student"><i class="fas fa-minus"></i></button>
                        <button class="add-plus-btn add add__student"><i class="fas fa-plus"></i></button>
                        <span class="points">${student.points}</span>
                    `;
                    teamList.appendChild(newStudent);
                    // create current student
                    if (teamIndex === 0 && studentIndex === 0) {
                        // const currentTitle = document.createElement('h3');
                        // currentTitle.classList += 'currentTitle';
                        // currentTitle.innerHTML = 'Current Student';
                        // teamList.insertBefore(currentTitle, teamList.firstChild);
                        // console.log('current student');
                        newStudent.className += ' currentStudent';
                    // create next student
                    } else if (teamIndex === 1 && studentIndex === 0) {
                        // const nextTitle = document.createElement('h3');
                        // nextTitle.classList += 'nextTitle';
                        // nextTitle.innerHTML = 'Upcoming Student';
                        // teamList.insertBefore(nextTitle, teamList.firstChild);
                        // console.log('current student');
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
                console.log('team.teamID', team.teamID);
                console.log('teamID', teamID);
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
            // DOM.gameContainer.firstChild.remove();
        },

        shiftTeamsAndStudentArray: function (array) {
            console.log("shift array");
            console.log(array);
            array[0].students.push(array[0].students.shift())
            console.log(array);
            array.push(array.shift());
            console.log(array);
        },

        unShiftTeamsAndStudentArray: function (array) {
            console.log('unshift array');
            array.unshift(array.pop());
            array[0].students.unshift(array[0].students.pop());
        },

        unShiftStudentsArray: function (array) {
            console.log("unShift array");
            array.unshift(array.pop());
        },

        shiftStudentsArray: function (array) {
            console.log("shift array");
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
        
        clearInput: function() {
            DOM.numberOfTeams.value = 1;
        },

        endGameOptions: function () {
            DOM.teams.innerHTML = '';
            DOM.refreshGameBtn.remove();
            DOM.saveGameBtn.remove();
            DOM.previous.remove();
            DOM.previousStudent.remove();
            DOM.nextStudent.remove();
            DOM.next.remove();

            DOM.goToClassroomBtn.classList.toggle('hide');
            DOM.playAgainBtn.classList.toggle('hide');
        },

        addWinningTeam: function (array) {
            console.log(array);
            const winningTeamScore = Math.max.apply(Math, array.map(o => o.totalPoints));
            const winningTeams = array.filter(o => o.totalPoints == winningTeamScore);
            console.log(winningTeams);

            const winningTeamContainer = document.createElement('div');

            winningTeamContainer.classList += 'winningStudentContainer';
            winningTeamContainer.innerHTML = `
                <h3 class="winningStudentTitle">${winningTeams.length === 1 ? 'First Place Team' : 'Tied for First'}</h3> 
            `;
            winningTeams.forEach(team => {
                winningTeamContainer.innerHTML += `
                    <div class="firstPlace">
                        <p class="winnerName">${team.name} <span class="winnerPoints">${team.totalPoints}</span></p>
                    </div>
                `;
            })
            DOM.teams.appendChild(winningTeamContainer);
        },

        addWinningStudent: function (array) {

            const winningStudentScore = Math.max.apply(Math, array.map(o => o.points))
            const winningStudents = array.filter(o => o.points == winningStudentScore);
            console.log(winningStudents);

            const winningStudentContainer = document.createElement('div');

            winningStudentContainer.classList += 'winningStudentContainer';
            winningStudentContainer.innerHTML = `
                <h3 class="winningStudentTitle">${winningStudents.length === 1 ? 'First Place Student' : 'Tied for First'}</h3> 
            `;
            winningStudents.forEach(student => {
                winningStudentContainer.innerHTML += `
                    <div class="firstPlace">
                        <p class="winnerName">${student.name} <span class="winnerPoints">${student.points}</span></p>
                    </div>
                `;
            })
            DOM.teams.appendChild(winningStudentContainer);
        }
    } 
})();

export{commonFunctions};
