var individualUI = (function() {
    var DOMStrings = {
        // BY CLASS
        
       // BY ID
        
    };

    var DOM = {
        
    }

    //HELPER FUNCTIONS

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
    };
})();

export{individualUI};






