const file = document.getElementById('file');
const className = document.getElementById('className');
const formManual = document.getElementById('formManual');
const addStudent = document.getElementById('addStudent');
const studentName = document.getElementById('studentName');
const radios = document.querySelectorAll('input[name="sex"]');
const allStudents = document.getElementById('students');
const quickEditStudent = document.getElementById('quickEditStudent');
const quickDeleteStudent = document.getElementById('quickDeleteStudent');

console.log('made it to CSV helper function');

// CONSTANTS
let students = [];



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
    // create student object
    student = createStudentObject(radios, studentName);

    students.push(student)

    var studentDiv = document.createElement("div");
    studentDiv.className += 'student';
    studentDiv.setAttribute('id', student.id)
    studentDiv.innerHTML = `
        <p>${student.name}</p>
        <p>${student.gender}</p>
        <i class="quickEditStudent far fa-edit"></i>
        <i class="quickDeleteStudent far fa-trash-alt"></i>
    `;
    allStudents.appendChild(studentDiv);

    //clear values
    // console.log(radios);
    //iterate over radio buttons and uncheck
    [...radios].forEach(radio => radio.checked = false);
    studentName.value = '';

    console.log("students:", students)
})

// DELETE STUDENT FROM DOM ELEMENT AND 
allStudents.addEventListener('click', (e) => {
    console.log('reached students array')
    if (hasClass(e.target, 'quickDeleteStudent')) {
        console.log('removing', e.target.parentElement);
        console.log('id', e.target.parentElement.id);
        students = students.filter(student => {
            console.log('student.id:', student.id);

            student.id === e.target.parentElement.id ? console.log('they fucking match') : console.log("some fuckery is going down with this shit !")
            
            console.log('e.target.parentElement.id:', e.target.parentElement.id);
            return student.id !== e.target.parentElement.id
        });
        e.target.parentElement.remove();
    } 
    
    console.log(students);
})

allStudents.addEventListener('click', (e) => {
    console.log('reached students array');
    if (hasClass(e.target, 'quickEditStudent')) {
        console.log('editing', e.target.parentElement);
        console.log("let's edit this fucker")
    }
})





// HELPER FUNCTIONS
function createStudentObject(radios, studentName) {
    const student = {};

    // get student name
    console.log('studentName.value.length:', studentName.value.length);
    if (studentName.value.length === 0 ) {
        
        return alert("please add the students name");
    }

    student.name = studentName.value;

    const id = ID();
    console.log("id = ", id)
    student.id = id;
    
    // get gender
    //loop through radio buttons and check for checked radio
    let radioValue;
    for (const radio of radios) {
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
    return student;
}

function hasClass(elem, className) {
    return elem.className.split(' ').indexOf(className) > -1;
}

function ID () {
    return '_' + Math.random().toString(36).substr(2, 9);
}