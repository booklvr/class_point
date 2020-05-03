import { boysVsGirlsUI as UI } from './UI.js';

var controller = (function(UI) {
    var setupEventListeners = function() {
        console.log('setup event listeners')
        var DOMStrings = UI.getDOMStrings();


        var DOM = {
            
        };

        //EVENT LISTENERS

        
    }

    return {
        init: async function () { 
            console.log('You can now play a boy Vs girls game');
            await UI.getClassroomData();
            UI.createDOM();
            setupEventListeners();
        }
    }
})(UI);

controller.init();