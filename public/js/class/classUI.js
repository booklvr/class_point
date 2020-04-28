var classUI = (function() {
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

export{classUI};


// const file = document.getElementById('file');
// const className = document.getElementById('className');

// console.log('made it to CSV helper functions');

//ADD EVENT LISTENERS

// CHECK THAT THE CLASS NAME FIELD ISN"T EMPTY BEFORE UPLOAD CSV CLASS FORM
// file.addEventListener('change', (e) => {
//     if(className.value !== '') {
//         // console.log(className.value);
//         return e.target.closest('form').submit();
//     } else {

//         return alert('Please enter class name first.')
//     }
// })




