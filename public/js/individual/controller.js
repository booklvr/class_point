import { boysVsGirlsUI as UI } from './UI.js';

var controller = (function(UI) {
    var setupEventListeners = function() {
        console.log('setup event listeners')
        var DOMStrings = UI.getDOMStrings();


        var DOM = {
            teams: document.querySelector(DOMStrings.teams),
            submit: document.querySelector(DOMStrings.submit),
            gameContainer: document.querySelector(DOMStrings.gameContainer),
            previewTeams: document.querySelector(DOMStrings.previewTeams),
            titleContainer: document.querySelector(DOMStrings.titleContainer),

        };

        //EVENT LISTENERS

        DOM.submit.addEventListener('click', UI.submitEvent);
        DOM.previewTeams.addEventListener('click', UI.deleteStudent);
        DOM.teams.addEventListener('click', UI.changePointStudent);
        DOM.gameContainer.addEventListener('click', UI.goToNext);
        DOM.gameContainer.addEventListener('click', UI.goToPrevious);
        DOM.titleContainer.addEventListener('click', UI.refreshScores);
    }

    return {
        init: async function () { 
            console.log('You can now play an individual game');
            await UI.getClassroomData();
            // s
            UI.addPreviewToDOM();
            setupEventListeners();
        }
    }
})(UI);

controller.init();