var classUI = (function() {
    var DOMStrings = {
        file: '.file',
        className: '.className'
    };

    return {

        getDOMSTrings: function() {
            return DOMStrings;
        }
    };
})();

export{UIController};



// const file = document.getElementById('file');
// const className = document.getElementById('className');

//ADD EVENT LISTENERS

// CHECK THAT THE CLASS NAME FIELD ISN"T EMPTY BEFORE UPLOAD CSV CLASS FORM
file.addEventListener('change', (e) => {
    if(className.value !== '') {
        // console.log(className.value);
        return e.target.closest('form').submit();
    } else {
        return alert('Please enter class name first.')
    }
})



// ADD A STUDENT TO STUDENT ARRAY AND CREATE STUDENT DOM ELEMENT
addStudent.addEventListener('click', (e) => {
    e.preventDefault();
    

    // add Student to student array
    const student = createStudentObject(addRadios, addStudentName);

    createStudentsDOM();

    
    
    console.log("students:", students)
})

// DELETE STUDENT FROM DOM ELEMENT AND STUDENT ARRAY
allStudents.addEventListener('click', (e) => {
    
    if (hasClass(e.target, 'quickDeleteStudent')) {
        // delete the student from the students array and the dom
        deleteStudent(e.target.parentElement);
        console.log(students);
    }
})

// EDIT STUDENT IN STUDENT ARRAY AND DOM
allStudents.addEventListener('click', (e) => {
   
    if (hasClass(e.target, 'quickEditStudent')) {
        console.log('editing', e.target.parentElement);
        
        const id = e.target.parentElement.id;

        // FIND STUDENT BY ID
        const student = students.find(obj => obj.id === id)
        console.log(student);
        
        // CREATE EDIT FORM
        const editForm = createEditForm(student);

        e.target.parentElement.insertAdjacentElement('afterend', editForm);

        allStudents.addEventListener('click', (e) => {
            e.preventDefault();
            if (hasClass(e.target, 'editStudent')) {
                // CREATE AN EDITED STUDENT
                const editedStudent = createdEditedStudent(e.target.parentElement.parentElement.elements)
                
                students.forEach((student) => {
                    console.log('editing the student in the array');
                    if(student.id === id) {
                        student.name = editedStudent.name;
                        console.log('editedStudent.gender:', editedStudent.gender);
                        student.gender = editedStudent.gender;
                        console.log(student);
                    }
                })
                console.log(students);
                
                editForm.remove();
                
                createStudentsDOM();
            }
        })
    }
})





// HELPER FUNCTIONS
function createStudentObject(addRadios, addStudentName) {
    const student = {};

    // get student name
    if (addStudentName.value.length === 0 ) {
        
        return alert("please add the students name");
    }
    
    //add student name
    student.name = addStudentName.value;

    //give student a unique id
    student.id = ID();
    
    // get gender
    //loop through radio buttons and check for checked radio
    let radioValue;
    for (const radio of addRadios) {
        if (radio.checked) {
            radioValue = radio.value;
        } 
    }

    // if gender checked than add gender to student object
    if (radioValue) {
        student.gender = radioValue;
        
    } else {
        return alert("Please choose a gender");
    }
    students.push(student);
    return student;
}

function hasClass(elem, className) {
    return elem.className.split(' ').indexOf(className) > -1;
}

function ID () {
    return '_' + Math.random().toString(36).substr(2, 9);
}


// delete student from dom and students array
function deleteStudent (parentElement) {    
    console.log('removing', parentElement);
    students = students.filter(student => student.id !== parentElement.id);
    parentElement.remove();
}

function clearFormValues(radios, studentName) {
    [...addRadios].forEach(radio => radio.checked = false);
    addStudentName.value = '';
}

function addStudentsToDom(students) {
    students.forEach(student => {
        let studentListItem = document.createElement("li");
        studentListItem.className += 'studentListItem';
        studentListItem.setAttribute('id', student.id)
        studentListItem.innerHTML = `
            <span class="list-name">${student.name}</span>
            <i class="${'fas fa-child icon-' + student.gender}"></i>
            <i class="quickEditStudent far fa-edit"></i>
            <i class="quickDeleteStudent far fa-trash-alt"></i>
        `;
        allStudents.appendChild(studentListItem);
    })
}


//CREATE EDIT FORM
function createEditForm (student) {
    let editForm = document.createElement("form");
        editForm.setAttribute('id', 'formEdit');
        
        // editForm.innerHTML = `
        //     <label for="editStudentName" class="">Name</label>
        //     <input class="" type="text" name="studentName" id="editStudentName" value="${student.name}">
        //     <label for="editRadio-male" class="">male</label>
        //     <input class="" id="editRadio-male" type="radio" name="editSex" value="male">
        //     <label for="editRadio-female" class="">female</label>
        //     <input class="" id="editRadio-female" type="radio" name="editSex" value="female">
        //     <button><i class="editStudent fas fa-edit"></i></button>
        // `
        return editForm;
}

function createdEditedStudent (target) {
    console.log('creating the edited student');
    console.log(target);
    if (target[0].value === '' ?? (target[1].checked === false && target[2].checked == false)) {
        return alert('Please fill complete all fields');
    }
    student = {};
    student.name = target[0].value;
    student.gender = target[1].checked ? 'male' : 'female';
    console.log(student.gender);
    return student;
}

function createStudentsDOM () {
    // clear Allstudents dom
    allStudents.innerHTML = '';

    // add the student to the dom
    addStudentsToDom(students);

    // clear form values 
    clearFormValues(addRadios, addStudentName);
}