import { addClassroomUI as UI } from './UI.js';

var controller = (function(UI) {
    var setupEventListeners = function() {
        console.log('setup event listeners')
        var DOMStrings = UI.getDOMStrings();

        var DOM = {
            file: document.querySelector(DOMStrings.file)
        };

        DOM.file.addEventListener('change', UI.checkForClassName); 
    }

    return {
        init: function () {
            console.log('You can now add a class');
            setupEventListeners();
        }
    }
})(UI);

controller.init();