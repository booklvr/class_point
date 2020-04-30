var addClassroomUI = (function() {
    var DOMStrings = {
        file: '.file',
        className: '.className',
        submit: '.submit',
        or: '.or'
    };

    // var DOM = {
    //     file = document.querySelector(DOMStrings.file),
    //     className = document.querySelector(DOMStrings.className),
    //     submit = document.querySelector(DOMStrings.submit),
    // }

    return {
        getDOMStrings: function() {
            return DOMStrings;
        },
        checkForClassName: function() {
            // get elements
            const className = document.querySelector(DOMStrings.className)
            const or = document.querySelector(DOMStrings.or);
            const submitBtn = document.querySelector(DOMStrings.submit);
            
            if(className.value !== '') {
                return event.target.closest('form').submit();
            } else {
                submitBtn.innerText = 'Upload File';
                or.remove();
                return alert('Please enter the class name first.');
            }
        },
        

    };
})();

export{addClassroomUI};






