import { boysVsGirlsUI as UI } from './UI.js';

var controller = (function(UI) {
    var setupEventListeners = function() {
        console.log('setup event listeners')
        var DOMStrings = UI.getDOMStrings();


        var DOM = {
            boys: document.querySelector(DOMStrings.boys),
            girls: document.querySelector(DOMStrings.girls),
            boyFocus: document.querySelector(DOMStrings.boyFocus),
            girlFocus: document.querySelector(DOMStrings.girlFocus),
            next: document.querySelector(DOMStrings.next),
            previous: document.querySelector(DOMStrings.previous),
            teams: document.querySelector(DOMStrings.teams),
        };

        //EVENT LISTENERS

        DOM.submit.addEventListener('click', UI.submitEvent);
        DOM.teams.addEventListener('click', UI.deleteStudent);
        // DOM.boys.addEventListener('click', UI.changePoint);
        // DOM.girls.addEventListener('click', UI.changePoint);
        // DOM.boyFocus.addEventListener('click', UI.changePoint);
        // DOM.girlFocus.addEventListener('click', UI.changePoint);
        // DOM.next.addEventListener('click', UI.goToNext);
        // DOM.previous.addEventListener('click', UI.goToPrevious);
    }

    return {
        init: async function () { 
            console.log('You can now play a boy Vs girls game');
            // UI.whoGoesFirst();

            await UI.getClassroomData();
            UI.createTeams();
            UI.addPreviewToDOM();
            // UI.createDOM();
            setupEventListeners();
        }
    }
})(UI);

controller.init();