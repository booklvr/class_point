var addClassroomUI = (function() {
    var DOMStrings = {
        file: '.file',
        className: '.className',
        submitBtn: '.submit',
        formBtn: '.formBtn',
        fileInput: '.fileInput',
        fileValue: '.fileValue',
       
    };

    var DOM = {
        className: document.querySelector(DOMStrings.className),
        or: document.querySelector(DOMStrings.or),
        submitBtn: document.querySelector(DOMStrings.submitBtn),
        file: document.querySelector(DOMStrings.file),
        fileInput: document.querySelector(DOMStrings.fileInput),
        fileValue: document.querySelector(DOMStrings.fileValue),
    }

    //HELPER FUNCTIONS
    const isCSVfile = function(fileUploadPath) {
        if (fileUploadPath != '') {
            const extension = fileUploadPath.substring(fileUploadPath.lastIndexOf('.') + 1).toLowerCase();

            if (extension === 'csv') {
                return true;
            }
            else {
                alert('You can only upload CSV files.')
                DOM.file.type = '';
                DOM.file.type = 'file';
                return false;
            }
        }
    }

    return {
        getDOMStrings: function() {
            return DOMStrings;
        },
        checkForClassName: function() {
            // get elements
            
            const fileUploadPath = DOM.file.value;
            fileValue.text = fileUploadPath;
            fileValue.style.display = 'block';
            

            
            if (isCSVfile(fileUploadPath)) {
                if(DOM.className.value !== '') {
                    return event.target.closest('form').submit();
                } else {
                    DOM.submitBtn.innerText = 'Upload File';
                    
                    return alert('Please enter the class name first.');
                }
            } else {
                console.log('it is not a csv file')
            }
        },

        clickAddFile: function() {
            console.log('FUCCKKKKKKKKK')
            fileInput.trigger('click');
        }
        

    };
})();

export{addClassroomUI};






