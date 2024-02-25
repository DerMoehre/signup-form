

let validatePassword = () => {
    let password = document.getElementById("password");
    let confirmPassword = document.getElementById("confirm_password")
    if (password.value !== confirmPassword.value) {
        document.querySelector(".password_error").textContent = "*Passwords do not match";
        } else if (!password.checkValidity()) {
            document.querySelector(".password_error").textContent = "*Password needs 8+ characters";
        } else {
            inputField = document.querySelectorAll("input");
            inputField.forEach((input) => {
                input.style.border = "2px solid var(--color-valid)";
            });
        } 
}

let validateMail = () => {
    let mail = document.getElementById("email");
    if (!mail.checkValidity()) {
        document.querySelector(".email_error").textContent = "*eMail form incorrect";
        } else {
            inputField = document.querySelectorAll("input");
            inputField.forEach((input) => {
                input.style.border = "2px solid var(--color-valid)";
            });
        } 
}

let submit = () => {
    let btn_submit = document.querySelector("button");
    btn_submit.addEventListener('click', () => {
        validatePassword();
        validateMail();
    });
}

submit();
