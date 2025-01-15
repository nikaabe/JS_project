// slider
let presentIndx = 0;
const rows = document.querySelectorAll('.book-row');
const rowContainer = document.querySelector('.book-row-container');
const backB = document.querySelector('.back');
const forwardB = document.querySelector('.forward');

function updateIndex(x) {
    presentIndx = (presentIndx + x + rows.length) % rows.length;
    presentRow(presentIndx);
}

function presentRow(i) {
    rowContainer.style.transform = `translateX(-${i * 100}%)`;
}
presentRow(presentIndx);

backB.addEventListener('click', () => updateIndex(-1));
forwardB.addEventListener('click', () => updateIndex(1));

// registration form
document.getElementById("registerButton").addEventListener("click", function() {
    const input1 = document.getElementById('input1');
    const input2 = document.getElementById('input2');
    const input3 = document.getElementById('input3');
    const input4 = document.getElementById('date');
    const input5 = document.getElementById('input5');
    const input6 = document.getElementById('input6');
    const input7 = document.getElementById('input7');
    const empty_array = [];
    const correct_password = [];
    
    // I took every single character and turned them into contents of an array
    // this kind of way is one of the most ways I went to solve string related problems in python
    function gmail_checker() {
        const gmailInput = document.getElementById("input1").value;
        const gmailError = document.getElementById("gmail-error");
        const invalidGmail = document.getElementById("invalid-gmail");
        const gmail_letters = [];

        for (i = 0; i < gmailInput.length; i++) {
            gmail_letters[i] = gmailInput[i] 
        }

        const length = gmail_letters.length; // I made these variables to make my code look more readable
        const index_of_dot = gmail_letters.indexOf(".");

        if (gmailInput.trim() === "") {
            gmailError.style.display = 'block';
            input1.style.border = 'solid 2px red';
            invalidGmail.style.display = 'none';
        } else if (!gmail_letters.includes('@') || !gmail_letters.includes('.')) {
            invalidGmail.style.display = 'block';
            input1.style.border = 'solid 2px red';
            gmailError.style.display = 'none';
        } else if (length - index_of_dot < 2) {
            invalidGmail.style.display = 'block';
            input1.style.border = 'solid 2px red';
        } else {
            input1.style.border = 'solid 2px #22b14c';
            empty_array.push('valid');
            invalidGmail.style.display = 'none';
            gmailError.style.display = 'none';
        }
    }
    gmail_checker()

    function password_checker() {
        const passwordInput = document.getElementById('input2').value;
        const emptyPassword = document.getElementById('empty-password');
        const weakPassword = document.getElementById('weak-password');
        const mediumPassword = document.getElementById('medium-password');
        const strongPassword = document.getElementById('strong-password');
        const upper = [
            'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
            'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
        ];
        const lower = [
            'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
            'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'                    
        ];
        const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
        const temp_upper = [];
        const temp_lower = [];
        const temp_numbers = [];

        for (i = 0; i < passwordInput.length; i++) {
            if (upper.includes(passwordInput[i])) {
                temp_upper[i] = passwordInput[i];
            } else if (lower.includes(passwordInput[i])) {
                temp_lower[i] = passwordInput[i];
            } else if (numbers.includes(passwordInput[i])) {
                temp_numbers[i] = passwordInput[i];
            }
        }
       
        if (passwordInput.trim() === "") {
            emptyPassword.style.display = 'block';
            input2.style.border = '2px solid red';
        } else if ((temp_upper.length > 0 && temp_lower.length > 0) && temp_numbers.length > 0) {
            strongPassword.style.display = 'block';
            input2.style.border = '2px solid #22b14c';
            empty_array.push('valid');
            emptyPassword.style.display = 'none';
            weakPassword.style.display = 'none';
            mediumPassword.style.display = 'none';
            for (i = 0; i < passwordInput.length; i++) {
                correct_password[i] = passwordInput[i];
            }
        } else if ((temp_upper.length > 0 || temp_lower.length > 0) && temp_numbers.length > 0) {
            mediumPassword.style.display = 'block';
            input2.style.border = '2px solid orange';
            emptyPassword.style.display = 'none';
            weakPassword.style.display = 'none';
        } else if ((temp_upper.length == 0 || temp_lower.length == 0) && temp_numbers.length == 0){
            weakPassword.style.display = 'block';
            input2.style.border = '2px solid red';
            emptyPassword.style.display = 'none';
            mediumPassword.style.display = 'none';

        }
    }
    password_checker()


        
    function confirm_password_checker() {
        const confirm_password = document.getElementById('input3').value;
        const wrong_password = document.getElementById('wrong-password');
        const temp_correct_password_arr = [];
    
        for (i = 0; i < confirm_password.length; i++) {
            temp_correct_password_arr[i] = confirm_password[i];
        }
        
        const temp_correct_password = temp_correct_password_arr.join("");
        const f_correct_password = correct_password.join("");
        
        if (confirm_password.trim() === "") {
            input3.style.border = '2px solid red';
        } else if (temp_correct_password == f_correct_password) {
            input3.style.border = '2px solid #22b14c';
            wrong_password.style.display = 'none';
            empty_array.push('valid'); 
        } else {
            wrong_password.style.display = 'block';
            input3.style.border = '2px solid red';
        }
    }
    confirm_password_checker()


    function date_checker() {
        const dateInput = document.getElementById('date').value;
        const errorMessage = document.getElementById('date-error');

        if (!dateInput) {
            errorMessage.style.display = 'block';
            input4.style.border = 'solid 2px red';
        } else {
            errorMessage.style.display = 'none';
            input4.style.border = 'solid 2px #22b14c';
            empty_array.push('valid');
        }
    }
    date_checker()
    

    function user_checker() {
        const userInput = document.getElementById('input5').value;
        const errorMessage = document.getElementById('empty-username');

        if (!userInput) {
            errorMessage.style.display = 'block';
            input5.style.border = 'solid 2px red';
        } else {
            errorMessage.style.display = 'none';
            input5.style.border = 'solid 2px #22b14c';
            empty_array.push('valid');
        }
    }
    user_checker()
    

    function country_checker() {
        const userInput = document.getElementById('input6').value;
        const errorMessage = document.getElementById('empty-country');

        if (!userInput) {
            errorMessage.style.display = 'block';
            input6.style.border = 'solid 2px red';
        } else {
            errorMessage.style.display = 'none';
            input6.style.border = 'solid 2px #22b14c';
            empty_array.push('valid');
        }
    }
    country_checker()


    function city_checker() {
        const userInput = document.getElementById('input7').value;
        const errorMessage = document.getElementById('empty-city');

        if (!userInput) {
            errorMessage.style.display = 'block';
            input7.style.border = 'solid 2px red';
        } else {
            errorMessage.style.display = 'none';
            input7.style.border = 'solid 2px #22b14c';
            empty_array.push('valid');
        }
    }
    city_checker()


    function phone_checker() {
        const userInput = document.getElementById('input8').value;
        const errorMessage = document.getElementById('empty-phone');

        if (!userInput) {
            errorMessage.style.display = 'block';
            input8.style.border = 'solid 2px red';
        } else {
            errorMessage.style.display = 'none';
            input8.style.border = 'solid 2px #22b14c';
            empty_array.push('valid');
        }
    }
    phone_checker()
    

    if (empty_array.length == 8) {
        alert("registration successfull.")
    }

});
