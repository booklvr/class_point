var boysVsGirlsUI = (function() {
    var DOMStrings = {
        // BY CLASS
        add: '.add',
        minus: '.minus',
        currentStudent: '.currentStudent',
        nextStudent: '.nextStudent',
        next: '.next',
        previous: '.previous',
        gameContainer: '.game__container',
        boysContainer: '.boy__container',
        girlsContainer: '.girl__container',
        boys: '.boys',
        girls: '.girls',
        boyFocus: '.boy__focus',
        girlFocus: '.girl__focus',
        student: '.student',
        next: '.next',
        previous: '.previous',
        boyPoints: '.boy__point',
        girlPoints: '.girl__point',
        classroomData: '.classroomData',
        teams: '.teams',  
        submit: '.submit',
        previewTeams: '.preview__teams',
    };

    var DOM = {
        classroomData: document.querySelector(DOMStrings.classroomData),
        gameContainer: document.querySelector(DOMStrings.gameContainer),
        boysContainer: document.querySelector(DOMStrings.boysContainer),
        girlsContainer: document.querySelector(DOMStrings.girlsContainer),
        boys: document.querySelector(DOMStrings.boys),
        girls: document.querySelector(DOMStrings.girls),
        boyFocus: document.querySelector(DOMStrings.boyFocus),
        girlFocus: document.querySelector(DOMStrings.girlFocus),
        boyPoints: document.querySelector(DOMStrings.boyPoints),
        girlPoints: document.querySelector(DOMStrings.girlPoints),
        teams: document.querySelector(DOMStrings.teams),
        previewTeams: document.querySelector(DOMStrings.previewTeams),
        submit: document.querySelector(DOMStrings.submit),
    }

    //persistent data
    let studentsArray = [];
    let teamsArray = [];
    // let boysArray = [];
    // let girlsArray = [];
    
    // let boysTurn;

    //HELPER FUNCTIONS
    const removeStudentFromTeam = function (studentID) {
        teamsArray.forEach(team => team.students = team.students.filter(student => student._id !== studentID))
        
        console.log('teamsArray', teamsArray);
    }

    const removeStudentfromArray = function (studentID) {
        // console.log(studentID);

        studentsArray = studentsArray.filter(student => student._id !== studentID)
        console.log('studentsArray', studentsArray);
    }

    const clearPage = function () {
       
        DOM.previewTeams.remove();
        DOM.submit.remove();
        DOM.teams.innerHTML = '';
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
            
            console.log('team', team)
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
                    console.log('current student');
                    newStudent.className += ' currentStudent';
                // create next student
                } else if (teamIndex === 1 && studentIndex === 0) {
                    const nextTitle = document.createElement('h3');
                    nextTitle.classList += 'nextTitle';
                    nextTitle.innerHTML = 'Upcoming Student';
                    teamList.insertBefore(nextTitle, teamList.firstChild);
                    console.log('next student');
                    newStudent.className += ' nextStudent';
                }

                // totalPoints += student.points;
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
        console.log('updateStudentPointDom-teamsArray', teamsArray)
        
        //find pointsDiv
        const pointsDiv = target.parentElement.lastElementChild;
        //update pointsDiv
        pointsDiv.innerHTML = +pointsDiv.innerHTML + action;
    };

   
    const updatePointsArrayAll = function(student, action){
        console.log('updatePointsArrayAll-teamsArray', teamsArray)
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
        console.log('updatePointsArrayTeam-teamsArray', teamsArray);
        // iterate over teams array
        // add or minus point to teamPoints
        console.log('teamsArray-before', teamsArray);
        

        teamsArray.forEach(team => {
            console.log('team', team);
            console.log('team.id', team.id);
            console.log('teamID', teamID);
            if (team.teamID === teamID) {
                team.totalPoints += action;
            }
        })


        console.log('teamsArray-before', teamsArray);
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
    }
    
    return {
        getDOMStrings: function() {
            return DOMStrings;
        },
        getClassroomData: async function () {
            console.log('get classroom data')
            const classroomID = DOM.classroomData.dataset.classroom_id;
            // console.log(classroomID)

            const response = await fetch(`/game/classData/${classroomID}`)
            
            const students = await response.json();

            students.forEach(student => studentsArray.push(student));

            //shuffle students array for different game play every time
            // studentsArray = shuffleArray(studentsArray);
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
                students: studentsArray.filter(student => student.sex === 'male'),
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

            clearPage();
            
            addTeamsToDom();
            console.log('after-AddTeamsToDOM-teamsArray', teamsArray);
        },

        changePointStudent: function(e) {
            console.log('changePointStudent-teamsArray', teamsArray);
            const target = e.target.parentElement;
            
            if (target.classList.contains('add__student') || target.classList.contains('minus__student')) {
                const action = plusOrMinus(target);
                const student = target.parentElement;
                const team = student.parentElement.parentElement;
                
                console.log(action);

                updateStudentPointDom(target, action);
                console.log('prePostUpdateAll', teamsArray);
                updatePointsArrayAll(student, action);
                console.log('postPointsUpdateAll', teamsArray);
                updateTeamPointDom(team, action);
            }
            console.log('postStudent point update', teamsArray);
        },

        changeTeamPoints: function(e) {
            console.log('changeTeamPoints-teamsArray', teamsArray);
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
                console.log('preClear', teamsArray);
                clearDOM();
                console.log('pre-shift', teamsArray);
                // shift arrays 
                shiftArrays(teamsArray);
                console.log('teamArray-post-shift', teamsArray);
                // addTeamsToDom();
            }
        },
        


        // whoGoesFirst: function() { 
        //     boysTurn = boysStart();
        //     changeOrder(boysTurn);
            
        // },
        // OTHER FUNCTIONS
        
        // createDOM: function () {
        //     // console.log('studentsArray', studentsArray);
        //     getCurrent();
        //     getNext();
            
            
        //     // getNextStudent();
        //     createTeam(boysArray, DOM.boys);
        //     createTeam(girlsArray, DOM.girls);
        // },

        // changePoint: function(e) {
            
        //     if (e.target.parentElement.classList.contains('add')) {
        //         console.log('add please');
        //         updatePointDom(e.target.parentElement.parentElement, 'add');
        //         updatePointStudentArray(e.target.parentElement.parentElement, 'add');
                
                
        //         //add points to team
        //         e.target.parentElement.parentElement.parentElement.classList.contains('boy_array') ? 
        //             changeTeamPoints(DOM.boyPoints, 'add') : 
        //             changeTeamPoints(DOM.girlPoints, 'add');

        //     } else if (e.target.parentElement.classList.contains('minus')) {
        //         console.log('minus the points')
        //         updatePointDom(e.target.parentElement.parentElement, 'minus');
        //         updatePointStudentArray(e.target.parentElement.parentElement, 'minus');
                
        //         //minus points from team
        //         e.target.parentElement.parentElement.parentElement.classList.contains('boy_array') ? 
        //             changeTeamPoints(DOM.boyPoints, 'minus') : 
        //             changeTeamPoints(DOM.girlPoints, 'minus');
        //     }
        // },

        
        // goToPrevious: function(e) {
        //     console.log('go to previous')
            
        // }
    };
})();

export{boysVsGirlsUI};






