var classroomsUI = (function() {
    var DOMStrings = {
        // BY CLASS
        checkTeams: '.checkTeams',
        errors: '.errors',

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
    };
})();

export{classroomsUI};






