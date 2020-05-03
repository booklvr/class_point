var individualUI = (function() {
    var DOMStrings = {
        // BY CLASS
        add: '.add',
        minus: '.minus',
        currentStudent: '.currentStudent',
        nextStudent: '.nextStudent',
        next: '.next',
        previous: '.previous',
        students: '.students',
        student: '.student',
        
        
       // BY ID
       classroomData: '#individualGameClassData',  
    };

    var DOM = {
        classroomData: document.querySelector(DOMStrings.classroomData),
        students: document.querySelector(DOMStrings.students),
        currentStudent: document.querySelector(DOMStrings.currentStudent),
        nextStudent: document.querySelector(DOMStrings.nextStudent),
        allStudents: document.querySelectorAll(DOMStrings.student),
    }

    //PERSISTENT DATA
    let count = 0;
    let studentsArray = [];

    //HELPER FUNCTIONS

    
    const getCurrentStudent = function () {
        console.log('create current student DOM')
        const currentStudent = studentsArray[count];
        const newStudent = document.createElement('div');
        newStudent.className += 'student';
        newStudent.setAttribute('id', currentStudent._id);
        newStudent.innerHTML = `
            <span class=name>${currentStudent.name}</span>
            <button class="minus"><i class="fas fa-minus"></i></button>
            <button class="add"><i class="fas fa-plus"></i></button>
            <span class="points">0</span>
        `;
        console.log('newStudent', newStudent);
        DOM.currentStudent.appendChild(newStudent);
    }

    const getNextStudent = function () {
        console.log('create next student DOM')
        const nextStudent = studentsArray[count + 1];
        const newStudent = document.createElement('div');
        newStudent.className += 'student';
        newStudent.setAttribute('id', nextStudent._id);
        newStudent.innerHTML = `
            <span class=name>${nextStudent.name}</span>
            <button class="minus"><i class="fas fa-minus"></i></button>
            <button class="add"><i class="fas fa-plus"></i></button>
            <span class="points">0</span>
        `;
        console.log('newStudent', newStudent);
        DOM.nextStudent.appendChild(newStudent); 
    }

    const createStudents = function () {
        
        console.log('create students DOM');
        
        for (let i = 2; i < studentsArray.length; i++) {
            const newStudent = document.createElement('div');
            newStudent.className += 'student';
            newStudent.setAttribute('id', studentsArray[i]._id);
            newStudent.innerHTML = `
                <span class=name>${studentsArray[i].name}</span>
                <button class="minus"><i class="fas fa-minus"></i></button>
                <button class="add"><i class="fas fa-plus"></i></button>
                <span class="points">0</span>
            `;
            // console.log('newStudent', newStudent);
            
            DOM.students.appendChild(newStudent);
        };
    }

    const clearDOM = function() {
        DOM.students.innerHTML = '';


        const removeStudent = function (student) {
            for (let i = 0; i < student.childNodes.length; i++ ) {
                if (student.childNodes[i].className === 'student') {
                    student.childNodes[i].remove();
                }
            }
        }
        removeStudent(DOM.currentStudent);
        removeStudent(DOM.nextStudent);
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
    }

    const updatePointStudentArray = function(studentID, addOrMinus){
        console.log('studentID', studentID);
        studentsArray.map(student => {
            if (student._id === studentID) {
                addOrMinus === 'add' ? student.points++ : student.points--;
            }
        })
        // console.log(studentsArray);
    }

    const addErrorMessage = function () {
        DOM.errors.innerHTML = "Class is too small, please add students";

        setTimeout(() => {
            DOM.errors.innerHTML = "";
        }, 3000);
    }

    const shiftArray = function () {
        studentsArray.push(studentsArray.shift());
        // console.log(studentsArray)
    }

    const unshiftArray = function () {
        // const itemtoMove = studentsArray.pop();
        // console.log('itemtomove', itemtoMove)
        studentsArray.unshift(studentsArray.pop());
        // studentsArray.push(studentsArray.pop());
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
            // console.log('classroomID', classroomID);
            
            // fetch classroom data
            const response = await fetch(`/game/individual/data/${classroomID}`)
            
            // add data to students array
            studentsArray = await response.json();
        },

        createDOM: function () {
            // console.log('studentsArray', studentsArray);
            getCurrentStudent();
            getNextStudent();
            createStudents();
        },

        changePoint: function(e) {
            console.log(e.target);
            console.log('event.currentTarget', e.currentTarget);
            if (e.target.parentElement.classList.contains('add')) {
                console.log('add please');
                updatePointDom(e.target.parentElement.parentElement, 'add');
                updatePointStudentArray(e.target.parentElement.parentElement.id, 'add');
            } else if (e.target.parentElement.classList.contains('minus')) {
                console.log('minus the points')
                updatePointDom(e.target.parentElement.parentElement, 'minus');
                updatePointStudentArray(e.target.parentElement.parentElement.id, 'minus');
            }
        },

        goToNext: function(e) {
            shiftArray();
            clearDOM();
            getCurrentStudent();
            getNextStudent();
            createStudents();
        },

        goToPrevious: function(e) {
            unshiftArray();
            clearDOM();
            getCurrentStudent();
            getNextStudent();
            createStudents();
        }


    };
})();

export{individualUI};






