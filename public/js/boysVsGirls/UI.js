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
    }

    //persistent data
    let studentsArray = [];
    let teamsArray = [];
    // let boysArray = [];
    // let girlsArray = [];
    
    // let boysTurn;

    //HELPER FUNCTIONS
    const removeStudentfromArray = function (studentID) {
        console.log(studentID);

        studentsArray = studentsArray.filter(student => student._id !== studentID)
        console.log(studentsArray);
    };

    const removeStudentFromTeam = function (studentID) {
        console.log(teamsArray);
        teamsArray = teamsArray.map(team => team = team.students.filter(student => student._id !== studentID))

        console.log(teamsArray);
    }

   

    // const createTeam = function (array, appendTo) {
    //     console.log('creating DOM')
        
    //     for (let i = 1; i < array.length; i++) {
    //         const newStudent = document.createElement('div');
    //         newStudent.className += 'student';
    //         newStudent.setAttribute('id', array[i]._id);
    //         newStudent.innerHTML = `
    //             <span class=name>${array[i].name}</span>
    //             <button class="minus"><i class="fas fa-minus"></i></button>
    //             <button class="add"><i class="fas fa-plus"></i></button>
    //             <span class="points">${array[i].points}</span>
    //         `;
    //         // console.log('newStudent', newStudent);
            
    //         appendTo.appendChild(newStudent);
    //     };
    // }

    const boysStart = function () {
        return Math.floor(Math.random() * 2);
    }

    const getCurrent = function () {
        console.log('create current student DOM');

        const array = boysTurn ? boysArray : girlsArray;
        const appendTo = boysTurn ? DOM.boyFocus : DOM.girlFocus;
        appendTo.innerHTML = '';
        
        const addStudent = array[0];
        const newStudent = document.createElement('div');
        newStudent.className += 'student';
        newStudent.setAttribute('id', addStudent._id);
        newStudent.innerHTML = `
            <span class=name>${addStudent.name}</span>
            <button class="minus"><i class="fas fa-minus"></i></button>
            <button class="add"><i class="fas fa-plus"></i></button>
            <span class="points">${addStudent.points}</span>
        `;
        // console.log('newStudent', newStudent);
        appendTo.appendChild(newStudent);
    };

    const getNext = function () {
        console.log('create next student dom');
        const array = boysTurn ? girlsArray : boysArray;
        const appendTo = boysTurn ? DOM.girlFocus : DOM.boyFocus;

        appendTo.innerHTML = '';
        
        const addStudent = array[0];
        const newStudent = document.createElement('div');
        newStudent.className += 'student';
        newStudent.setAttribute('id', addStudent._id);
        newStudent.innerHTML = `
            <span class=name>${addStudent.name}</span>
            <button class="minus"><i class="fas fa-minus"></i></button>
            <button class="add"><i class="fas fa-plus"></i></button>
            <span class="points">${addStudent.points}</span>
        `;
        // console.log('newStudent', newStudent);

        const upNext = document.createElement('h4');
        upNext.className += 'upNext__title';
        upNext.innerHTML = 'Up Next';
        appendTo.appendChild(upNext);  
        appendTo.appendChild(newStudent);
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

    

    // different from individual
    const updatePointStudentArray = function(student, addOrMinus){
        const studentID = student.id;

        const updateArray = function (array) {
            array.map(student => {
                if (student._id === studentID ) {
                    addOrMinus === 'add' ? student.points++ : student.points--;
                }
            })
        }
        
        if (student.parentElement.classList.contains('boy_array')) {
            console.log('update boys array')
            updateArray(boysArray);
        } else if (student.parentElement.classList.contains('girl_array')) {
            console.log('update girls array')
            updateArray(girlsArray);
        }
    }

    const changeTeamPoints = function (team, addOrMinus) {
        console.log('change team points');
        
        if (addOrMinus === 'add') {
            console.log('add points to team');
            team.innerHTML = +team.innerHTML + 1;
        } else if (addOrMinus === 'minus') {
            console.log('minus points from team');
            team.innerHTML = team.innerHTML - 1;
        }
        // addOrMinus === 'add' ? team.innerHTML = +team.innerHTML++ : team.innerHTML = +team.innerHTML--;
    }

    const changeOrder = function (boysTurn) {
        if(boysTurn) {
            console.log('boys Turn');
            DOM.gameContainer.appendChild(DOM.girlsContainer);
            boysTurn = true;
        } else {
            console.log('girls Turn')
            DOM.gameContainer.appendChild(DOM.boysContainer);
            boysTurn = false;
        }
    }

    const shiftArray = function (array) {
        console.log("shift array");
        array.push(array.shift());
    }

    // const addErrorMessage = function () {
    //     DOM.errors.innerHTML = "Class is too small, please add students";

    //     setTimeout(() => {
    //         DOM.errors.innerHTML = "";
    //     }, 3000);
    // }

    const clearDOM = function() {
        DOM.boys.innerHTML = '';
        DOM.girls.innerHTML = '';

        const removeStudent = function (student) {
            for (let i = 0; i < student.childNodes.length; i++ ) {
                if (student.childNodes[i].className === 'student') {
                    student.childNodes[i].remove();
                }
            }
        }
        removeStudent(DOM.boyFocus);
        removeStudent(DOM.girlFocus);
        
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
                teamId: 'girls',
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
                DOM.teams.appendChild(newTeam);
            })
        },

        deleteStudent: function (e) {
            console.log('deleting student')
            if (e.target.classList.contains('deleteStudent')) {
                
                removeStudentfromArray(e.target.id)

                removeStudentFromTeam(e.target.id);
                //remove the student form the DOM
                // console.log(e.target.parentElement);
                let li = e.target.parentElement;
                li.remove();
            }
        },



        // whoGoesFirst: function() { 
        //     boysTurn = boysStart();
        //     changeOrder(boysTurn);
            
        // },
        // OTHER FUNCTIONS
        // getClassroomData: async function () {
        //     console.log('get classroom data')
            
        //     //get classroom ID
        //     const classroomID = DOM.classroomData.dataset.classroom_id;
        //     console.log('classroomID', classroomID);
            
        //     // fetch classroom data
        //     const response = await fetch(`/game/boysVsGirls/data/${classroomID}`)
            
        //     // add data to students array
        //     const result = await response.json();

        //     girlsArray = result.girls;
        //     boysArray = result.boys;

        //     // console.log('boys', boysArray);
        //     // console.log('girls', girlsArray);
        // },
        createDOM: function () {
            // console.log('studentsArray', studentsArray);
            getCurrent();
            getNext();
            
            
            // getNextStudent();
            createTeam(boysArray, DOM.boys);
            createTeam(girlsArray, DOM.girls);
        },

        changePoint: function(e) {
            
            if (e.target.parentElement.classList.contains('add')) {
                console.log('add please');
                updatePointDom(e.target.parentElement.parentElement, 'add');
                updatePointStudentArray(e.target.parentElement.parentElement, 'add');
                
                
                //add points to team
                e.target.parentElement.parentElement.parentElement.classList.contains('boy_array') ? 
                    changeTeamPoints(DOM.boyPoints, 'add') : 
                    changeTeamPoints(DOM.girlPoints, 'add');

            } else if (e.target.parentElement.classList.contains('minus')) {
                console.log('minus the points')
                updatePointDom(e.target.parentElement.parentElement, 'minus');
                updatePointStudentArray(e.target.parentElement.parentElement, 'minus');
                
                //minus points from team
                e.target.parentElement.parentElement.parentElement.classList.contains('boy_array') ? 
                    changeTeamPoints(DOM.boyPoints, 'minus') : 
                    changeTeamPoints(DOM.girlPoints, 'minus');
            }
        },
        goToNext: function(e) {
            console.log('go to next')
            boysTurn = !boysTurn;
            changeOrder(boysTurn);
            
            // shift the correct array
            boysTurn ? shiftArray(girlsArray) : shiftArray(boysArray);
            

            
            clearDOM();
            getCurrent();
            getNext();
            
            // getNextStudent();
            createTeam(boysArray, DOM.boys);
            createTeam(girlsArray, DOM.girls);
        },

        goToPrevious: function(e) {
            console.log('go to previous')
            // unshiftArray();
            // clearDOM();
            // getCurrentStudent();
            // getNextStudent();
            // createStudents();
        }
    };
})();

export{boysVsGirlsUI};






