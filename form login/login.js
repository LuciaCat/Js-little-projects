function stringWithoutNumber(string) {
    for (let j = 0; j <= 9; j++) {
        let check = string.includes(j);
        if (check) {
            return false;
        }
    }
    return true;
}

function validateEmail(email) {
    return email.indexOf("@") < 1 ||
        email.indexOf(".") < 0 ||
        email.indexOf("@") > email.lastIndexOf(".")
        ? false
        : true;
}

function checkSpecialChar(string) {
    let specialCharacters = ["!", "*", "?", "#"];
    for (let i = 0; i < specialCharacters.length; i++) {
        if (string.includes(specialCharacters[i])) return true;
    }
    return false;
}

function validatePassword(password) {
    
    return password.length >= 10 &&
        password.length <= 30 &&
        !stringWithoutNumber(password) &&
        checkSpecialChar(password)
        ? true
        : false;

    
}

function checkPassword(password) {
    let oldPassword = document.getElementById("password").value;
    return password === oldPassword ? true : false;
}

function isEmpty(string) {
    return string == "" ? true : false;
}

window.addEventListener("load", function () {
    let myForm = document.getElementById("myForm");

    // pulsante "occhietto" mostra/nascondi password 
    let buttonPassword = document.getElementById("showPassword");
    buttonPassword.addEventListener("click", function () {
        let inputPassword = document.getElementById("password");
        if (inputPassword.type == "password") {
            inputPassword.type = "text";
        } else {
            inputPassword.type = "password";
        }

        
    });

    myForm.addEventListener("submit", function (e) {
        e.preventDefault();

        let name = myForm.elements["name"]; 
        let surname = myForm.elements["surname"];
        let email = myForm.elements["email"];
        let password = myForm.elements["password"];
        let confirmPassword = myForm.elements["confirmPassword"];

        name.className =
            stringWithoutNumber(name.value) && !isEmpty(name.value)
                ? "ok"
                : "error";

        /*
            if(stringWithoutNumber(name.value) && !isEmpty(name.value)){
                name.className = "ok"
                name.setAttribute("class", "ok")
            }else{
                name.className = "error"
            }
        */

        surname.className =
            stringWithoutNumber(surname.value) && !isEmpty(surname.value)
                ? "ok"
                : "error";

        email.className =
            validateEmail(email.value) && !isEmpty(email.password)
                ? "ok"
                : "error";

        password.className =
            validatePassword(password.value) && !isEmpty(password.value)
                ? "ok"
                : "error";

        confirmPassword.className =
            checkPassword(confirmPassword.value) &&
            !isEmpty(confirmPassword.value)
                ? "ok"
                : "error";
    });
});
