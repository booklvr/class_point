import { registerUI as UI } from './UI.js';



var controller = (function(UI) {
    var setupEventListeners = function() {
        console.log('setup event listeners')
        var DOMStrings = UI.getDOMStrings();


        var DOM = {
            btnSubmit: document.querySelector(DOMStrings.btnSubmit),
        };

        //EVENT LISTENERS

        DOM.btnSubmit.addEventListener('click', UI.submitEvent);
    }

    return {
        init: async function () { 
            console.log('You can now register');
            
            setupEventListeners();
        }
    }
})(UI);

controller.init();