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
    var allIsValid = true;
    if(!validateNameOrSurname(employee.nameValue, nameTxtboxDiv)){
        alert('ERROR\nName invalid');
        allIsValid = false;
    }
    if(!validateNameOrSurname(employee.surname, surnameTxtboxDiv)){
        alert('ERROR\nSurname invalid');
        allIsValid = false;
    }
    if(!validateDNI(employee.dni, dniTxtboxDiv)){
        alert('ERROR\nDNI invalid');
        allIsValid = false;
    }
    if(!validateDateOfBirth(employee.birthDate, dateBirthDiv)){
        alert('ERROR\nDate of birth invalid');
        allIsValid = false;
    }
    if (!validatePhoneNumber(employee.phoneNumber, phoneTxtboxDiv)){
        alert('ERROR\nPhone number invalid');
        allIsValid = false;
    }
    if(!validateCity(employee.city, cityTxtboxDiv)){
        alert('ERROR\nCity invalid');
        allIsValid = false;
    }
    if(!validateCP(employee.cp, cpTxtboxDiv)){
        alert('ERROR\nPostal code invalid');
        allIsValid = false;
    }
    if(!validateEmail(employee.email, emailTxtboxDiv)){
        allIsValid = false;
        alert('ERROR\nE-mail invalid');
    }
    if(!validatePassword(employee.password, passwordTxtboxDiv)){
        allIsValid = false;
        alert('ERROR\nPassword invalid');
    }
    if(!validateConfirmPassword(employee.password, employee.confirmPassword, confPasswordTxtboxDiv)){
        allIsValid = false;
        alert('ERROR\nConfirm password invalid');
    }
    if(allIsValid){

    }

}

function validateNameOrSurname(word, divTxtbox){
    var letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q','r','s','t','u','v','w','x','y','z'];
    var isValid = true;
    for (i = 0; i < word.length; i++) {
        if (!letters.includes(word[i])) {
            isValid = false;
        }
    }
    if (word.length >= 3 && isValid){
        hideError(divTxtbox);
        return true;
    } else{
        showError(divTxtbox);
        return false;
    }
}

function validateDNI(dni, divTxtbox){
    var numbers = ['0','1','2','3','4','5','6','7','8','9'];
    var isValid = true;
    for (i = 0; i < dni.length; i++) {
        if(!numbers.includes(dni[i])){
            isValid = false;
        }
    }
    if (dni.length >= 7 && isValid){
        hideError(divTxtbox);
        return true;
    } else{
        showError(divTxtbox);
        return false;
    }
}

function validateDateOfBirth(birthDate, dBirthDiv){
    var currentDate = new Date();
    var today = currentDate.getTime();
    var birth = birthDate.getTime();
    if(today > birth){
        hideError(dBirthDiv)
        return true;
    } else{
        showError(dBirthDiv)
        return false;
    }
}

function validatePhoneNumber(phoneNumber, divTxtbox){
    var numbers = ['0','1','2','3','4','5','6','7','8','9'];
    var isValid = true;
    for (i = 0; i < phoneNumber.length; i++) {
        if(!numbers.includes(phoneNumber[i])){
            isValid = false;
        }
    }
    if (phoneNumber.length >= 10 && isValid){
        hideError(divTxtbox);
        return true;
    } else{
        showError(divTxtbox);
        return false;
    }
}

function validateCity(city, divTxtbox){
    var numbers = ['0','1','2','3','4','5','6','7','8','9'];
    var letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q','r','s','t','u','v','w','x','y','z'];
    var num = 0;
    var char = 0;
    var special = false;
    for (i = 0; i < city.length; i++) {
        if (numbers.includes([i])) {
            num++;
        } else if(letters.includes(city[i])){
            char++;
        } else{
            special = true;
        }
    }
    if (city.length >= 8 && (num >= 1 || char >=1) && !special) {
        hideError(divTxtbox);
        return true;
    } else{
        showError(divTxtbox);
        return false;
    }
}

function validateCP(cp, divTxtbox){
    var numbers = ['0','1','2','3','4','5','6','7','8','9'];
    var isValid = true;
    for (i = 0; i < cp.length; i++) {
        if(!numbers.includes(cp[i])){
            isValid = false;
        }
    }
    if (cp.length >= 4 && cp.length <= 5 && isValid){
        hideError(divTxtbox);
        return true;
    } else{
        showError(divTxtbox);
        return false;
    }
}

function validateEmail(email, divTxtbox){
    var emailRegex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
    if (!emailRegex.test(email)) {
        showError(divTxtbox);
        return false;
    } else{
        hideError(divTxtbox);
        return true;
    }
}

function validatePassword(password, divTxtbox){
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
        hideError(divTxtbox);
        return true;
    } else{
        showError(divTxtbox);
        return false;
    }
}

function validateConfirmPassword(password, confirmPassword, divTxtbox){
    if (password === confirmPassword) {
        hideError(divTxtbox);
        return true;
    } else {
        showError(divTxtbox);
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