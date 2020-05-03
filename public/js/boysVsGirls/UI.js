var boysVsGirlsUI = (function() {
    var DOMStrings = {
        // BY CLASS
        add: '.add',
        minus: '.minus',
        currentStudent: '.currentStudent',
        nextStudent: '.nextStudent',
        next: '.next',
        previous: '.previous',
        // students: '.students',
        boys: '.boys',
        girls: '.girls',
        currentBoy: '.currentBoy',
        nextBoy: '.nextBoy',
        currentGirl: '.currentGirl',
        nextGirl: '.nextGirl',
        student: '.student',
        
       // BY ID
       classroomData: '#boysVsGirlsClassData',  
    };

    var DOM = {
        classroomData: document.querySelector(DOMStrings.classroomData),
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
    let count = 0;

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
    };
})();

export{boysVsGirlsUI};






