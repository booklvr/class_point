var gameFormUI = (function() {
    var DOMStrings = {
        // ID's
        classroomID: '#classroomID',
        individual: '#individual',
        teams: '#teams',
        boysVsGirls: '#boysVsGirls',
        numberOfTeams: '#numberOfTeams',
        submit: '#submit',
        checkboxes: '#checkboxes',
        
        // CLASSES
        radios: '.radios',
        radio: '.radio'
    };

    var DOM = {
        teams: document.querySelector(DOMStrings.teams),
        numberOfTeams: document.querySelector(DOMStrings.numberOfTeams),
        submit: document.querySelector(DOMStrings.submit),
        checkboxes: document.querySelector(DOMStrings.checkboxes),
        boysVsGirls: document.querySelector(DOMStrings.boysVsGirls),
    }

    return {
        getDOMStrings: function() {
            return DOMStrings;
        },
        // FUNCTIONS

        radioChecked: function() {
            
            if(DOM.teams.checked === true) {
                // show the number of teams input
                DOM.numberOfTeams.parentElement.classList.remove('hide');
                DOM.numberOfTeams.setAttribute('required', true);
            } else {
                // hide number of teams input 
                DOM.numberOfTeams.parentElement.classList.add('hide');
                DOM.numberOfTeams.removeAttribute('required');
            }

            if(DOM.teams.checked || DOM.boysVsGirls.checked) {
                console.log('do something here!!!!!! FUCK')
            }
            // show the submit button
            DOM.submit.classList.remove('hide');
        },

        submitEvent: function () {
            console.log('submit clicked')
        }

        // checkForClassName: function() {
        //     // get elements
        //     const className = document.querySelector(DOMStrings.className)
        //     const or = document.querySelector(DOMStrings.or);
        //     const submitBtn = document.querySelector(DOMStrings.submit);
            
        //     if(className.value !== '') {
        //         return event.target.closest('form').submit();
        //     } else {
        //         submitBtn.innerText = 'Upload File';
        //         or.remove();
        //         return alert('Please enter the class name first.');
        //     }
        // },
    };
})();

export{gameFormUI};




