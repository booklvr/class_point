var classroomUI = (function() {
    var DOMStrings = {
        // BY CLASS
        checkTeams: '.checkTeams',
        errors: '.errors',
        studentList: '.student__list',
        addStudentBtn: '.addStudentBtn',
        nameInput: '.addStudentName-input',
        addStudentForm: '.form__add-student',
        genderRadio: '.gender-radio',
        

       // BY ID
        
    };

    var DOM = {
        checkTeams: document.querySelectorAll(DOMStrings.checkTeams),
        errors: document.querySelector(DOMStrings.errors),
        radios: document.querySelector(DOMStrings.addStudentForm).querySelectorAll(DOMStrings.genderRadio),
        // radios: document.querySelectorAll(DOMStrings.addStudentForm.DOMStrings.genderRadio),
        nameInput: document.querySelector(DOMStrings.nameInput),
    }

    // HELPER FUNCTIONS

    const addErrorMessage = function (message) {
        DOM.errors.style.display = 'block',
        DOM.errors.innerHTML = message;

        setTimeout(() => {
            DOM.errors.innerHTML = "";
            DOM.errors.style.display = 'none';
        }, 3000);
    }

    const radioIsChecked = function (radioNodeList) {
        // returns true if radio is checked or false if radio not checked
        return [].some.call(radioNodeList, (radioNode) => radioNode.checked === true)
    }

    return {
        getDOMStrings: function() {
            return DOMStrings;
        },
        // OTHER FUNCTIONS
        checkTeamSize: function(e) {
            console.log(e.target.dataset.class_size);
            if(e.target.dataset.class_size < 2) {
                console.log('classSize', e.target.dataset.class_size);
                e.preventDefault();
                console.log('class too small for game');
                addErrorMessage('Sorry, you need to add some students before you can play a game.');
                
            }
        },
        updateStudent: function(e) {
            // e.preventDefault();
            if(e.target.classList.contains('updateStudent')) {
                
                console.log('hello there');
                const formTarget = e.target.parentElement.parentElement.parentElement.parentElement.querySelector('.update__form');
                console.log(formTarget);

                formTarget.classList.toggle('hide');                
            }
        }, 
        addStudent: function(e) {
            // e.preventDefault();
            // console.log("let's add the fucker")
            // console.log('radio is checked', radioIsChecked(DOM.radios))
            
            if (DOM.nameInput.value === '') {
                e.preventDefault();
                console.log('no name input');
                addErrorMessage('Please include a student name.');
            }
            else if (!radioIsChecked(DOM.radios)) {
                e.preventDefault();
                addErrorMessage('Please choose a gender.');
                console.log('You need to include a gender');
            }
        }

    };
})();

export{classroomUI};






