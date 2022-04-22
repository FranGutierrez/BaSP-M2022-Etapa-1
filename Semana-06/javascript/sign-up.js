window.onload = function(){
    var signUpBtn = document.getElementById('signup-btn');
    var textboxes = document.getElementsByClassName('label-textbox');
    nameTxtboxDiv = textboxes[0];
    surnameTxtboxDiv = textboxes[1];
    dniTxtboxDiv = textboxes[2];
    dateBirthDiv = textboxes[3];
    phoneTxtboxDiv = textboxes[4];
    addressTxtboxDiv = textboxes[5];
    cityTxtboxDiv = textboxes[6];
    cpTxtboxDiv = textboxes[7];
    emailTxtboxDiv = textboxes[8];
    passwordTxtboxDiv = textboxes[9];
    confPasswordTxtboxDiv = textboxes[10];
    signUpBtn.addEventListener('click', signUpClick);
}

function signUpClick(){
    var employee = {
        nameValue : document.getElementById('name').value,
        surname : document.getElementById('surname').value,
        dni : document.getElementById('dni').value,
        birthDate : document.getElementById('date-of-birth').value,
        phoneNumber : document.getElementById('phone-number').value,
        address : document.getElementById('address').value,
        city : document.getElementById('city').value,
        cp : document.getElementById('cp').value,
        email : document.getElementById('email').value,
        password : document.getElementById('password').value,
        confirmPassword : document.getElementById('confirm-password').value,
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