var registerUI = (function() {
    var DOMStrings = {
        // BY CLASS
        btnSubmit: '.btnSubmit',
        formControl: '.form-control',
     
        // By ID
        registerForm: '#registerForm',
        name: '#name',
        email: '#email',
        password: '#password',
        password2: '#password2',
    };

    var DOM = {
        name: document.querySelector(DOMStrings.name),
        email: document.querySelector(DOMStrings.email),
        password: document.querySelector(DOMStrings.password),
        password2: document.querySelector(DOMStrings.password2),
        // formControl: document.querySelectorAll()
    }

    //persistent data
  

    //HELPER FUNCTIONS
    const showError = function(input, msg) {
        const formControl = input.parentElement;
        formControl.className = 'form-control error';
        const small = formControl.querySelector('small');
        small.innerText = msg;
    }

    function showSuccess(input) {
        const formControl = input.parentElement;
        formControl.className = 'form-control success';
    }
    
    function checkEmail(input) {
        const re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
        if(re.test(input.value.trim())) {
          showSuccess(input);
        } else {
          showError(input, "Email is not valid");
        }
    }

    function checkRequired(inputArr) {
        inputArr.forEach((input) => {
          if (input.value === '') {
            showError(input, `${getFieldName(input)} is required`);
          } else {
            showSuccess(input);
          }
        })
    }

    // Check input length
    function checkLength(input, min, max) {
        if(input.value.length < min) {
            showError(input, `${getFieldName(input)} must be at least ${min}`)
        } else if (input.value.length > max ) {
            showError(input, `${getFieldName(input)} must be less than ${max}`)
        } else {
            showSuccess(input);
        }
    }

    function checkPasswordsMatch(input1, input2) {
        if(input1.value === input2.value) {
            showSuccess(input2);
        } else {
            showError(input2, 'Passwords do not match');
        }
    }

    function getFieldName(input) {
        return input.id.charAt(0).toUpperCase() + input.id.slice(1);
    }
      
    
    return {
        getDOMStrings: function() {
            return DOMStrings;
        },
      
        

        //////////////////////////////////////////////////////////////////
        // *** functions for game play ***
        submitEvent: function (e) {
            // posting teams to teamGame
            e.preventDefault();
            console.log("register form validation")

            checkRequired([DOM.name, DOM.email, DOM.password, DOM.password2]),
            checkLength(DOM.name, 3, 15);
            checkLength(DOM.password, 6, 20);
            checkEmail(DOM.email);
            checkPasswordsMatch(DOM.password, DOM.password2);

            e.submit();
        },
    };
})();

export{registerUI};






