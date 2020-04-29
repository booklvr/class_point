import { gameFormUI as UI } from './gameFormUI.js';

var controller = (function(UI) {
    var setupEventListeners = function() {
        console.log('setup event listeners')
        var DOMStrings = UI.getDOMStrings();

        var DOM = {
            // file: document.querySelector(DOMStrings.file)
            // radios = document.querySelector(DOMStrings.radios),
            radios: document.querySelectorAll('input[type=radio]'),
            submit: document.querySelector(DOMStrings.submit),
            
        };
        

        //EVENT LISTENERS
        // ** radio changed
        DOM.radios.forEach(radio => {
            radio.addEventListener('change', UI.radioChecked);
        })

        // ** submit clicked
        DOM.submit.addEventListener('click', UI.submitEvent);
    }

    return {
        init: function () {
            console.log('You can now create a game');
            setupEventListeners();
            
        }
    }
})(UI);

controller.init();

