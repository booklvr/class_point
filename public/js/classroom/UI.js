var classroomUI = (function() {
    var DOMStrings = {
        // BY CLASS
        checkTeams: '.checkTeams',
        errors: '.errors',
        studentList: '.student__list',

       // BY ID
        
    };

    var DOM = {
        checkTeams: document.querySelectorAll(DOMStrings.checkTeams),
        errors: document.querySelector(DOMStrings.errors),
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
        checkTeamSize: function(e) {
            console.log(e.target.dataset.class_size);
            if(e.target.dataset.class_size < 2) {
                console.log('classSize', e.target.dataset.class_size);
                e.preventDefault();
                console.log('class too small for game');
                addErrorMessage();
                
            }
        },
        updateStudent: function(e) {
            // e.preventDefault();
            if(e.target.classList.contains('updateStudent')) {
                
                console.log('hello there');
                const formTarget = e.target.parentElement.parentElement.parentElement.parentElement.nextElementSibling;

                formTarget.classList.toggle('hide');                
            }
        }

    };
})();

export{classroomUI};






