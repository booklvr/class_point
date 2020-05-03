import { individualUI as UI } from './UI.js';

var controller = (function(UI) {
    var setupEventListeners = function() {
        console.log('setup event listeners')
        var DOMStrings = UI.getDOMStrings();


        var DOM = {
            students: document.querySelector(DOMStrings.students),
            currentStudent: document.querySelector(DOMStrings.currentStudent),
            nextStudent: document.querySelector(DOMStrings.nextStudent),
            next: document.querySelector(DOMStrings.next),
            previous: document.querySelector(DOMStrings.previous),
        };

        //EVENT LISTENERS
        DOM.students.addEventListener('click', UI.changePoint);
        DOM.currentStudent.addEventListener('click', UI.changePoint);
        DOM.nextStudent.addEventListener('click', UI.changePoint);
        DOM.next.addEventListener('click', UI.goToNext);
        DOM.previous.addEventListener('click', UI.goToPrevious);
    }

    return {
        init: async function () { 
            console.log('You can now play an individual game');
            await UI.getClassroomData();
            UI.createDOM();
            setupEventListeners();
            
        }
    }
})(UI);

controller.init();