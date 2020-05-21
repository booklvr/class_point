import { classroomUI as UI } from './UI.js';

var controller = (function(UI) {
    var setupEventListeners = function() {
        console.log('setup event listeners')
        var DOMStrings = UI.getDOMStrings();


        var DOM = {
            checkTeams: document.querySelectorAll(DOMStrings.checkTeams),
            studentList: document.querySelector(DOMStrings.studentList),
            addStudentBtn: document.querySelector(DOMStrings.addStudentBtn),
            increment: document.querySelector(DOMStrings.increment),
            decrement: document.querySelector(DOMStrings.decrement),
        };
        console.log("FUCCKKKKKKK")
        console.log(DOM.increment, DOM.decrement)

        DOM.increment.addEventListener('click', UI.increment);
        DOM.decrement.addEventListener('click', UI.decrement);
        DOM.checkTeams.forEach(checkTeam => checkTeam.addEventListener('click', UI.checkTeamSize));
        DOM.studentList.addEventListener('click', UI.updateStudent);
        DOM.addStudentBtn.addEventListener('click', UI.addStudent);
        DOM.studentList.addEventListener('click', UI.increment);
        DOM.studentList.addEventListener('click', UI.decrement);

        
    }

    return {
        init: function () {
            
            console.log('You can now edit students, or play games');
            setupEventListeners();
        }
    }
})(UI);

controller.init();