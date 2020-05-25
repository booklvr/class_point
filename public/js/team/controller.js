import { gameFormUI as UI } from './UI.js';

var controller = (function(UI) {
    var setupEventListeners = function() {
        console.log('setup event listeners')
        var DOMStrings = UI.getDOMStrings();

        var DOM = {
            gameContainer: document.querySelector(DOMStrings.gameContainer),
            numberOfTeams: document.querySelector(DOMStrings.numberOfTeams),
            gameFormClassroomData: document.querySelector(DOMStrings.gameFormClassroomData),
            previewTeams: document.querySelector(DOMStrings.previewTeams),
            teams: document.querySelector(DOMStrings.teams),
            titleContainer: document.querySelector(DOMStrings.titleContainer),
            refreshStudentsBtn: document.querySelector(DOMStrings.refreshStudentsBtn),
            shuffleStudentsBtn: document.querySelector(DOMStrings.shuffleStudentsBtn),
            playGameBtn: document.querySelector(DOMStrings.playGameBtn),
            refreshGameBtn: document.querySelector(DOMStrings.refreshGameBtn),
            saveGameBtn: document.querySelector(DOMStrings.saveGameBtn),
            goToClassroomBtn: document.querySelector(DOMStrings.goToClassroomBtn),
            playAgainBtn: document.querySelector(DOMStrings.playAgainBtn),
            next: document.querySelector(DOMStrings.next),
            nextStudent: document.querySelector(DOMStrings.nextStudent),
            previousStudent: document.querySelector(DOMStrings.previousStudent),
            previous: document.querySelector(DOMStrings.previous),
            increment: document.querySelector(DOMStrings.increment),
            decrement: document.querySelector(DOMStrings.decrement),
        };
        

        //EVENT LISTENERS
        // submit event -> go to game
        
        // DOM.gameForm.addEventListener('submit', UI.submitEvent)

        // create teams on change of number input
        DOM.numberOfTeams.addEventListener('change', (e) => {
            UI.createPreviewDOM(e.target.value);
        });

        DOM.previewTeams.addEventListener('click', UI.deleteStudent);
        DOM.teams.addEventListener('click', UI.changePointStudent);
        DOM.teams.addEventListener('click', UI.changeTeamPoints);
        // DOM.gameContainer.addEventListener('click', UI.goToNext);
        DOM.refreshGameBtn.addEventListener('click', UI.refreshScores);
        DOM.refreshStudentsBtn.addEventListener('click', UI.refreshStudents);
        DOM.playGameBtn.addEventListener('click', UI.startGame);
        DOM.shuffleStudentsBtn.addEventListener('click', UI.shufflePreview);
        DOM.saveGameBtn.addEventListener('click', UI.saveGame);
        DOM.goToClassroomBtn.addEventListener('click', UI.goToClassroom);
        DOM.playAgainBtn.addEventListener('click', UI.playAgain);
        DOM.playAgainBtn.addEventListener('click', UI.playAgain);
        DOM.previous.addEventListener('click', UI.goToPrevious);
        DOM.previousStudent.addEventListener('click', UI.goToPreviousStudent);
        DOM.nextStudent.addEventListener('click', UI.goToNextStudent);
        DOM.next.addEventListener('click', UI.goToNext);
        DOM.increment.addEventListener('click', UI.increment);
        DOM.decrement.addEventListener('click', UI.decrement);
    }

    return {
        init: async function () {
            console.log('You can now create a game');
            await UI.getClassroomData();
            

            UI.createPreviewDOM(1);
            // UI.addTeamsToDOM();
            setupEventListeners();
            
        }
    }
})(UI);

controller.init();

