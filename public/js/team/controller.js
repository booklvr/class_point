import { gameFormUI as UI } from './UI.js';

var controller = (function(UI) {
    var setupEventListeners = function() {
        console.log('setup event listeners')
        var DOMStrings = UI.getDOMStrings();

        var DOM = {
            gameContainer: document.querySelector(DOMStrings.gameContainer),
            submit: document.querySelector(DOMStrings.submit),
            numberOfTeams: document.querySelector(DOMStrings.numberOfTeams),
            gameFormClassroomData: document.querySelector(DOMStrings.gameFormClassroomData),
            previewTeams: document.querySelector(DOMStrings.previewTeams),
            teams: document.querySelector(DOMStrings.teams),
            titleContainer: document.querySelector(DOMStrings.titleContainer),

            
            // gameForm: document.querySelector(DOMStrings.gameForm),
        };
        

        //EVENT LISTENERS
        // submit event -> go to game
        DOM.submit.addEventListener('click', UI.submitEvent);
        // DOM.gameForm.addEventListener('submit', UI.submitEvent)

        // create teams on change of number input
        DOM.numberOfTeams.addEventListener('change', (e) => {
            UI.createPreviewDOM(e.target.value);
        });

        //delete student from teams
        DOM.previewTeams.addEventListener('click', UI.deleteStudent);
        DOM.teams.addEventListener('click', UI.changePointStudent);
        DOM.teams.addEventListener('click', UI.changeTeamPoints);
        DOM.gameContainer.addEventListener('click', UI.goToNext);
        DOM.titleContainer.addEventListener('click', UI.refreshScores);
    }

    return {
        init: async function () {
            console.log('You can now create a game');
            await UI.getClassroomData();
            
            // UI.logStudents();
            UI.createPreviewDOM(1);
            // UI.addTeamsToDOM();
            setupEventListeners();
            
        }
    }
})(UI);

controller.init();

