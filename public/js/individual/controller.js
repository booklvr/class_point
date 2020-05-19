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
            refreshStudentsBtn: document.querySelector(DOMStrings.refreshStudentsBtn),
            shuffleStudentsBtn: document.querySelector(DOMStrings.shuffleStudentsBtn),
            playGameBtn: document.querySelector(DOMStrings.playGameBtn),
            refreshGameBtn: document.querySelector(DOMStrings.refreshGameBtn),
            saveGameBtn: document.querySelector(DOMStrings.saveGameBtn),
            goToClassroomBtn: document.querySelector(DOMStrings.goToClassroomBtn),
            playAgainBtn: document.querySelector(DOMStrings.playAgainBtn),
        };

        //EVENT LISTENERS

       
        DOM.previewTeams.addEventListener('click', UI.deleteStudent);
        DOM.teams.addEventListener('click', UI.changePointStudent);
        DOM.gameContainer.addEventListener('click', UI.goToNext);
        DOM.gameContainer.addEventListener('click', UI.goToPrevious);
        DOM.refreshGameBtn.addEventListener('click', UI.refreshScores);
        DOM.refreshStudentsBtn.addEventListener('click', UI.refreshStudents);
        DOM.playGameBtn.addEventListener('click', UI.startGame);
        DOM.shuffleStudentsBtn.addEventListener('click', UI.shufflePreview);
        DOM.saveGameBtn.addEventListener('click', UI.saveGame);
        DOM.goToClassroomBtn.addEventListener('click', UI.goToClassroom);
        DOM.playAgainBtn.addEventListener('click', UI.playAgain);
    }

    return {
        init: async function () { 
            console.log('You can now play an individual game');
            await UI.getClassroomData();
            
            UI.createPreviewDOM();
            setupEventListeners();


        }
    }
})(UI);

controller.init();