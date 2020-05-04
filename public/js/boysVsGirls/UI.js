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
        currentBoy: '.currentBoy',
        nextBoy: '.nextBoy',
        currentGirl: '.currentGirl',
        nextGirl: '.nextGirl',
        student: '.student',
        next: '.next',
        previous: '.previous',
        
       // BY ID
       classroomData: '#boysVsGirlsClassData',  
    };

    var DOM = {
        classroomData: document.querySelector(DOMStrings.classroomData),
        gameContainer: document.querySelector(DOMStrings.gameContainer),
        boysContainer: document.querySelector(DOMStrings.boysContainer),
        girlsContainer: document.querySelector(DOMStrings.girlsContainer),
        boys: document.querySelector(DOMStrings.boys),
        girls: document.querySelector(DOMStrings.girls),
        currentBoy: document.querySelector(DOMStrings.currentBoy),
        currentGirl: document.querySelector(DOMStrings.currentGirl),
        nextBoy: document.querySelector(DOMStrings.nextBoy),
        nextGirl: document.querySelector(DOMStrings.nextGirl),
    }

    //persistent data
    
    let boysArray = [];
    let girlsArray = [];
    
    let boysTurn;

    //HELPER FUNCTIONS

    const createTeam = function (array, appendTo) {
        console.log('creating boys DOM')
        
        for (let i = 2; i < array.length; i++) {
            const newStudent = document.createElement('div');
            newStudent.className += 'student';
            newStudent.setAttribute('id', array[i]._id);
            newStudent.innerHTML = `
                <span class=name>${array[i].name}</span>
                <button class="minus"><i class="fas fa-minus"></i></button>
                <button class="add"><i class="fas fa-plus"></i></button>
                <span class="points">0</span>
            `;
            // console.log('newStudent', newStudent);
            
            appendTo.appendChild(newStudent);
        };
    }

    const boysStart = function () {
        return Math.floor(Math.random() * 2);
    }

    const getCurrentandNext = function (array, appendTo, index) {
        console.log('create new student DOM')
        const addStudent = array[index];
        const newStudent = document.createElement('div');
        newStudent.className += 'student';
        newStudent.setAttribute('id', addStudent._id);
        newStudent.innerHTML = `
            <span class=name>${addStudent.name}</span>
            <button class="minus"><i class="fas fa-minus"></i></button>
            <button class="add"><i class="fas fa-plus"></i></button>
            <span class="points">0</span>
        `;
        console.log('newStudent', newStudent);
        appendTo.appendChild(newStudent);
    };

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
        
        console.log('studentID', studentID);

        if (student.parentElement.classList.contains('boy_array')) {
            console.log('update boys array')
            updateArray(boysArray);
        } else if (student.parentElement.classList.contains('girl_array')) {
            console.log('update girls array')
            updateArray(girlsArray);
        }
        console.log(boysArray);
        console.log(girlsArray);
    }

    const changeOrder = function (boysTurn) {
        if(boysTurn) {
            console.log('boys boysTurn');
            DOM.gameContainer.appendChild(DOM.girlsContainer);
            boysTurn = true;
        } else {
            console.log('girls Turn')
            DOM.gameContainer.appendChild(DOM.boysContainer);
            boysTurn = false;
        }
    }

    const addErrorMessage = function () {
        DOM.errors.innerHTML = "Class is too small, please add students";

        setTimeout(() => {
            DOM.errors.innerHTML = "";
        }, 3000);
    }

    return {
        getDOMStrings: function() {
            return DOMStrings;
        },

        whoGoesFirst: function() { 
            boysTurn = boysStart();
            changeOrder(boysTurn);
            
        },
        // OTHER FUNCTIONS
        getClassroomData: async function () {
            console.log('get classroom data')
            
            //get classroom ID
            const classroomID = DOM.classroomData.dataset.classroom_id;
            console.log('classroomID', classroomID);
            
            // fetch classroom data
            const response = await fetch(`/game/boysVsGirls/data/${classroomID}`)
            
            // add data to students array
            const result = await response.json();

            girlsArray = result.girls;
            boysArray = result.boys;

            console.log('boys', boysArray);
            console.log('girls', girlsArray);
        },
        createDOM: function () {
            // console.log('studentsArray', studentsArray);
            getCurrentandNext(boysArray, DOM.currentBoy, 0);
            getCurrentandNext(girlsArray, DOM.currentGirl, 0);
            getCurrentandNext(boysArray, DOM.nextBoy, 1);
            getCurrentandNext(girlsArray, DOM.nextGirl, 1);
            
            // getNextStudent();
            createTeam(boysArray, DOM.boys);
            createTeam(girlsArray, DOM.girls);
        },
        changePoint: function(e) {
            // console.log(e.target);
            
            if (e.target.parentElement.classList.contains('add')) {
                console.log('add please');
                updatePointDom(e.target.parentElement.parentElement, 'add');
                updatePointStudentArray(e.target.parentElement.parentElement, 'add');
            } else if (e.target.parentElement.classList.contains('minus')) {
                console.log('minus the points')
                updatePointDom(e.target.parentElement.parentElement, 'minus');
                updatePointStudentArray(e.target.parentElement.parentElement, 'minus');
            }
        },
        goToNext: function(e) {
            console.log('go to next')
            boysTurn = !boysTurn;
            changeOrder(boysTurn);
            
            // shift the correct array
            boysTurn ? shiftArray(boysArray) : shiftArray(girlsArray);
            

            // shiftArray();
            // clearDOM();
            // getCurrentStudent();
            // getNextStudent();
            // createStudents();
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






