const file = document.getElementById('file');
const className = document.getElementById('className');
const formManual = document.getElementById('formManual');
const addStudent = document.getElementById('addStudent');
const studentName = document.getElementById('studentName');
const radios = document.querySelectorAll('input[name="sex"]');

// iterate over radio buttons and bind event


console.log('made it to CSV helper function');



file.addEventListener('change', (e) => {
    if(className.value !== '') {
        // console.log(className.value);
        return e.target.closest('form').submit();
    } else {
        return alert('Please enter class name first.')
    }
})

const students = [];

// students.push('add to push')
// console.log(students);

addStudent.addEventListener('click', (e) => {
    e.preventDefault();
    student = {}
    // get student name
    student.name = studentName.value;
    
    // get gender
    //loop through radio buttons
    let radioValue;
    for (const radio of radios) {
        if (radio.checked) {
            radioValue = radio.value;
        } 
    }
    if (radioValue) {
        student.gender = radioValue;
    } else {
        alert("Please choose a gender");
    }
    
    students.push(student)


    console.log("students:", students)
})



