import { addClassroomUI as UI } from './UI.js';

var controller = (function(UI) {
    var setupEventListeners = function() {
        console.log('setup event listeners')
        var DOMStrings = UI.getDOMStrings();

        var DOM = {
            fileInput: document.querySelector(DOMStrings.fileInput),
            formBtn: document.querySelector(DOMStrings.formBtn)
        };


        // EVENT LISTENERS
        DOM.fileInput.addEventListener('change', UI.checkForClassName);
        DOM.formBtn.addEventListener('click', UI.clickAddFile);
        
    }

    return {
        init: function () {
            console.log('You can now add a class');
            setupEventListeners();
        }
    }
})(UI);

controller.init();