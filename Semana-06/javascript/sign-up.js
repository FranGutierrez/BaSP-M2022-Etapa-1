window.onload = function(){
    var signUpBtn = document.getElementById('signup-btn');
    signUpBtn.addEventListener('click', signUpClick);
}

var nameInput = document.getElementById('name');
var surnameInput = document.getElementById('surname');
var dniInput = document.getElementById('dni');
var birthDateInput = document.getElementById('date-of-birth');
var phoneNumberInput = document.getElementById('phone-number');
var addressInput = document.getElementById('address');
var cityInput = document.getElementById('city');
var cpInput = document.getElementById('cp');
var emailInput = document.getElementById('email');
var passwordInput = document.getElementById('password');
var confirmPasswordInput = document.getElementById('confirm-password');

function signUpClick(){
    var textboxes = document.getElementsByClassName('label-textbox');
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
    if(!validateNameOrSurname(employee.nameValue, textboxes[0])){
        alert('ERROR\nName invalid');
        allIsValid = false;
    }
    if(!validateNameOrSurname(employee.surname, textboxes[1])){
        alert('ERROR\nSurname invalid');
        allIsValid = false;
    }
    if(!validateDNI(employee.dni, textboxes[2])){
        alert('ERROR\nDNI invalid');
        allIsValid = false;
    }
    /*if(!validateDateOfBirth(employee.birthDate, textboxes[3])){
        alert('ERROR\nDate of birth invalid');
        allIsValid = false;
    }*/
    if (!validatePhoneNumber(employee.phoneNumber, textboxes[4])){
        alert('ERROR\nPhone number invalid');
        allIsValid = false;
    }
    if (!validateAddress(employee.address, textboxes[5])) {
        alert('ERROR\nAddress invalid');
        allIsValid = false;
    }
    if(!validateCity(employee.city, textboxes[6])){
        alert('ERROR\nCity invalid');
        allIsValid = false;
    }
    if(!validateCP(employee.cp, textboxes[7])){
        alert('ERROR\nPostal code invalid');
        allIsValid = false;
    }
    if(!validateEmail(employee.email, textboxes[8])){
        allIsValid = false;
        alert('ERROR\nE-mail invalid');
    }
    if(!validatePassword(employee.password, textboxes[9])){
        allIsValid = false;
        alert('ERROR\nPassword invalid');
    }
    if(!validateConfirmPassword(employee.password, employee.confirmPassword, textboxes[10])){
        allIsValid = false;
        alert('ERROR\nConfirm password invalid');
    }
    if(allIsValid){
        alert('Log In succesfully!\nName: ' + employee.nameValue + '\nSurname: '+ employee.surname +
        '\nDNI: '+ employee.dni + '\nBirth Date: \nPhone Number: ' + employee.phoneNumber +
        '\nAddress: \nCity: ' + employee.city + '\nPostal Code: ' + employee.cp + 
        '\nE-Mail: ' + employee.email + '\nPassword: ' + employee.password);
    }

}

function validateNameOrSurname(word, divTxtbox){
    var letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q','r','s','t','u','v','w','x','y','z'];
    var isValid = true;
    var name = word.toLowerCase();
    for (i = 0; i < name.length; i++) {
        if (!letters.includes(name[i])) {
            isValid = false;
        }
    }
    if (name.length >= 3 && isValid){
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

function validateAddress(address,divTxtbox){
    var numbers = ['0','1','2','3','4','5','6','7','8','9'];
    var letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q','r','s','t','u','v','w','x','y','z'];
    var space = ' ';
    var isValid = true;
    var char = [];
    for (i = 0; i < address.length; i++) {
        if (letters.includes(address[i])) {
            char.push('l');
            if (i !== 0 && char[(i-1)] === 'n') {
                isValid = false;
            }
        } else if (space === address[i]) {
            char.push('s');
        } else if (numbers.includes(address[i])) {
            char.push('n');
            if (i !== 0 && char[(i-1)] === 'l') {
                isValid = false;
            }
        }
    }
    if(address.length >= 5 && isValid){
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
    var cityLower = city.toLowerCase();
    var num = 0;
    var char = 0;
    var special = false;
    for (i = 0; i < cityLower.length; i++) {
        if (numbers.includes([i])) {
            num++;
        } else if(letters.includes(cityLower[i])){
            char++;
        } else{
            special = true;
        }
    }
    if (cityLower.length >= 3 && !special) {
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