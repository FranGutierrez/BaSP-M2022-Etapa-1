window.onload = function(){
    var logInBtn = document.getElementById('login-btn');
    var textboxes = document.getElementsByClassName('label-textbox');
    emailTxtboxDiv = textboxes[0];
    passwordTxtboxDiv = textboxes[1];
    emailInput = emailTxtboxDiv.children[1];
    passwordInput = passwordTxtboxDiv.children[1];
    logInBtn.addEventListener('click', logInClick);
}

function logInClick(){
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    if(!validateEmail(email)){
        alert('ERROR\nE-mail invalid');
    }
    if(!validatePassword(password)){
        alert('ERROR\nPassword invalid');
    }
    if(validateEmail(email) && validatePassword(password)){
        alert('Log In succesfully!\nE-Mail: ' + email + '\nPassword: ' + password);
    }
}

function validateEmail(email){
    var emailRegex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
    if (!emailRegex.test(email)) {
        showError(emailTxtboxDiv);
        return false;
    } else{
        hideError(emailTxtboxDiv);
        return true;
    }
}

function validatePassword(password){
    var numbers = ['0','1','2','3','4','5','6','7','8','9'];
    var letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q','r','s','t','u','v','w','x','y','z'];
    var num = 0;
    var char = 0;
    var special = false;
    for (i = 0; i < password.length; i++) {
        if (numbers.includes(password[i])) {
            num++;
        } else if(letters.includes(password[i])){
            char++;
        } else{
            special = true;
        }
    }
    if (password.length >= 8 && num >= 1 && char >=1 && !special) {
        hideError(passwordTxtboxDiv);
        return true;
    } else{
        showError(passwordTxtboxDiv);
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