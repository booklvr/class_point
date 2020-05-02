import { teamUI as UI } from './UI.js';

var controller = (function(UI) {
    var setupEventListeners = function() {
        console.log('setup event listeners')
        var DOMStrings = UI.getDOMStrings();


        var DOM = {
            
        };

        //EVENT LISTENERS

        
    }

    return {
        init: function () { 
            console.log('You can now play an individual game');
            setupEventListeners();
        }
    }
})(UI);

controller.init();