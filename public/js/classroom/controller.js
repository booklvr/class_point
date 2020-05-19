import { classroomUI as UI } from './UI.js';

var controller = (function(UI) {
    var setupEventListeners = function() {
        console.log('setup event listeners')
        var DOMStrings = UI.getDOMStrings();


        var DOM = {
            checkTeams: document.querySelectorAll(DOMStrings.checkTeams),
            studentList: document.querySelector(DOMStrings.studentList),
            addStudentBtn: document.querySelector(DOMStrings.addStudentBtn),
        };

        DOM.checkTeams.forEach(checkTeam => checkTeam.addEventListener('click', UI.checkTeamSize));
        DOM.studentList.addEventListener('click', UI.updateStudent);
        DOM.addStudentBtn.addEventListener('click', UI.addStudent);
    }

    return {
        init: function () {
            
            console.log('You can now edit students, or play games');
            setupEventListeners();
        }
    }
})(UI);

controller.init();