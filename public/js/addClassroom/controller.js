import { addClassroomUI as UI } from './UI.js';

var controller = (function(UI) {
    var setupEventListeners = function() {
        console.log('setup event listeners')
        var DOMStrings = UI.getDOMStrings();

        var DOM = {
            file: document.querySelector(DOMStrings.file),
            formBtn: document.querySelector(DOMStrings.fileBtn)
        };


        // EVENT LISTENERS
        DOM.file.addEventListener('change', UI.checkForClassName);
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