window.onload = function(){
    var logInBtn = document.getElementById('login-btn');
    var textboxes = document.getElementsByClassName('label-textbox');
    emailTxtboxDiv = textboxes[0];
    passwordTxtboxDiv = textboxes[1];
    emailInput = emailTxtboxDiv.children[1];
    passwordInput = passwordTxtboxDiv.children[1];
    emailInput.addEventListener('focus', hideError(emailTxtboxDiv));
    passwordInput.addEventListener('focus', hideError(passwordTxtboxDiv));
    logInBtn.addEventListener('click', logInClick);
}

function logInClick(){
    email = document.getElementById('email').value;
    password = document.getElementById('password').value;
    if(!validateEmail(email)){
        showError(emailTxtboxDiv);
        alert('ERROR\nE-mail invalid');
    } else {
        hideError(emailTxtboxDiv);
    }
    if(!validatePassword(password)){
        showError(passwordTxtboxDiv);
        alert('ERROR\nPassword invalid');
    } else {
        hideError(passwordTxtboxDiv);
    }
    if(validateEmail(email) && validatePassword(password)){
        alert('Log In succesfully!\nE-Mail: ' + email + '\nPassword: ' + password);
    }
}

function validateEmail(email){
    var emailRegex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
    if (!emailRegex.test(email)) {
        return false;
    } else{
        return true;
    }
}

function validatePassword(password){
    var numbers = ['0','1','2','3','4','5','6','7','8','9'];
    var num = 0;
    var char = 0;
    for (i = 0; i < password.length; i++) {
        if (numbers.includes(password[i])) {
            num++;
        } else{
            char++;
        }
    }
    if (password.length >= 8 && num >= 1 && char >=1) {
        return true;
    } else{
        return false;
    }
}

function showError(textboxDiv){
    var divChilds = textboxDiv.children;
    divChilds[0].classList.add('label-error');
    divChilds[1].classList.add('input-error');
    divChilds[2].classList.add('label-error');
    divChilds[2].classList.remove('label-error-none');
}

function hideError(textboxDiv){
    var divChilds = textboxDiv.children;
    divChilds[0].classList.remove('label-error');
    divChilds[1].classList.remove('input-error');
    divChilds[2].classList.remove('label-error');
    divChilds[2].classList.add('label-error-none');
}