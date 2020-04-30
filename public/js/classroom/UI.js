var classroomUI = (function() {
    var DOMStrings = {
        checkTeams: '.checkTeams',
        errors: '.errors',
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
            if(e.target.dataset.class_size < 2) {
                e.preventDefault();
                console.log('class too small for game');
                addErrorMessage();
                
            }
           
            // e.preventDefault();
            // console.log(e.target)
            // console.log('class size:', e.target.dataset.class_size);
            // console.log('hello')
        }

    };
})();

export{classroomUI};






