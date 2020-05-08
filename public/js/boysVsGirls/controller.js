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
            submit: document.querySelector(DOMStrings.submit),
            gameContainer: document.querySelector(DOMStrings.gameContainer),
            previewTeams: document.querySelector(DOMStrings.previewTeams),
        };

        //EVENT LISTENERS

        DOM.submit.addEventListener('click', UI.submitEvent);
        DOM.previewTeams.addEventListener('click', UI.deleteStudent);
        DOM.teams.addEventListener('click', UI.changePointStudent);
        DOM.teams.addEventListener('click', UI.changeTeamPoints);
        DOM.gameContainer.addEventListener('click', UI.goToNext);
        
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