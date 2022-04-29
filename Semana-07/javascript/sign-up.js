window.onload = function(){
    var signUpBtn = document.getElementById('signup-btn');
    signUpBtn.addEventListener('click', signUpClick);
    getTodayDate();
    var textboxes = document.getElementsByClassName('label-textbox');
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

    function myFocus(input, divTxtbox){
        hideError(divTxtbox);
    }

    function myBlur(input, divTxtbox){
        if (input.value == '') {
            showError(divTxtbox);
        } else {
            hideError(divTxtbox);
        }
    }

    nameInput.onfocus = function(){
        myFocus(nameInput, textboxes[0]);
    }

    nameInput.onblur = function(){
        myBlur(nameInput, textboxes[0]);
    }

    surnameInput.onfocus = function(){
        myFocus(surnameInput, textboxes[1]);
    }

    surnameInput.onblur = function(){
        myBlur(surnameInput, textboxes[1]);
    }

    dniInput.onfocus = function(){
        myFocus(dniInput, textboxes[2]);
    }

    dniInput.onblur = function(){
        myBlur(dniInput, textboxes[2]);
    }

    birthDateInput.onfocus = function(){
        myFocus(birthDateInput, textboxes[3]);
    }

    birthDateInput.onblur = function(){
        myBlur(birthDateInput, textboxes[3]);
    }

    phoneNumberInput.onfocus = function(){
        myFocus(phoneNumberInput, textboxes[4]);
    }

    phoneNumberInput.onblur = function(){
        myBlur(phoneNumberInput, textboxes[4]);
    }

    addressInput.onfocus = function(){
        myFocus(addressInput, textboxes[5]);
    }

    addressInput.onblur = function(){
        myBlur(addressInput, textboxes[5]);
    }

    cityInput.onfocus = function(){
        myFocus(cityInput, textboxes[6]);
    }

    cityInput.onblur = function(){
        myBlur(cityInput, textboxes[6]);
    }

    cpInput.onfocus = function(){
        myFocus(cpInput, textboxes[7]);
    }

    cpInput.onblur = function(){
        myBlur(cpInput, textboxes[7]);
    }

    emailInput.onfocus = function(){
        myFocus(emailInput, textboxes[8]);
    }

    emailInput.onblur = function(){
        myBlur(emailInput, textboxes[8]);
    }

    passwordInput.onfocus = function(){
        myFocus(passwordInput, textboxes[9]);
    }

    passwordInput.onblur = function(){
        myBlur(passwordInput, textboxes[9]);
    }

    confirmPasswordInput.onfocus = function(){
        myFocus(confirmPasswordInput, textboxes[10]);
    }

    confirmPasswordInput.onblur = function(){
        myBlur(confirmPasswordInput, textboxes[10]);
    }

    function setSavedValues(){
        nameInput.value = localStorage.getItem('Name');
        surnameInput.value = localStorage.getItem('Surname');
        dniInput.value = localStorage.getItem('DNI');
        birthDateInput.value = convertDateFormatYMD(localStorage.getItem('Date of Birth'));
        phoneNumberInput.value = localStorage.getItem('Phone');
        addressInput.value = localStorage.getItem('Address');
        cityInput.value = localStorage.getItem('City');
        cpInput.value = localStorage.getItem('Postal Code');
        emailInput.value = localStorage.getItem('Email');
        passwordInput.value = localStorage.getItem('Password');
        confirmPasswordInput.value = localStorage.getItem('Password');
    }

    if (localStorage.getItem('Saved') === 'true') {
        setSavedValues();
    }
}

function requestSignUp(employee, url){
    fetch(url + '?name=' + employee.nameValue + '&lastName=' + employee.surname + '&dni=' + employee.dni
    + '&dob=' + employee.birthDate + '&phone=' + employee.phoneNumber + '&address=' + employee.address
    + '&city=' + employee.city + '&zip=' + employee.cp + '&email=' + employee.email + '&password=' + employee.password,{
        method : 'GET',
        params : {
            name : employee.nameValue,
            lastName : employee.surname,
            dni : employee.dni,
            dob : employee.birthDate,
            phone : employee.phoneNumber,
            address : employee.address,
            city : employee.city,
            zip : employee.cp,
            email : employee.email,
            password : employee.password
        }
    })
        .then(function(response){
            return response.json();
        })
        .then(function(jsonResponse){
            alert(jsonResponse.msg);
            if (jsonResponse.success) {
                saveInLocalStorage(employee);
            }
        })
        .catch(function(error){
            console.log(error);
        })
}

function saveInLocalStorage(employee){
    localStorage.setItem('Name', employee.nameValue);
    localStorage.setItem('Surname', employee.surname);
    localStorage.setItem('DNI', employee.dni);
    localStorage.setItem('Date of Birth', employee.birthDate);
    localStorage.setItem('Phone', employee.phoneNumber);
    localStorage.setItem('Address', employee.address);
    localStorage.setItem('City', employee.city);
    localStorage.setItem('Postal Code', employee.cp);
    localStorage.setItem('Email', employee.email);
    localStorage.setItem('Password', employee.password);
    localStorage.setItem('Saved', 'true');
}

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
    if (!isFullAge(employee.birthDate, textboxes[3])) {
        alert('ERROR\nDate of Birth invalid. You must have more than 18 years.');
        allIsValid = false;
    }
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
        employee.birthDate = convertDateFormatMDY(employee.birthDate);
        requestSignUp(employee, 'https://basp-m2022-api-rest-server.herokuapp.com/signup');
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

function getTodayDate(){
	var birthDateInput = document.getElementById('date-of-birth');
    var currentDate = new Date();
    var day = currentDate.getDate().toString();
    var month = currentDate.getMonth() + 1;
    if (month < 10) {
        month = '0' + month;
    }
    month = month.toString();
    var year = currentDate.getFullYear().toString();
    var maxValue = year + '-' + month + '-' + day;
    console.log(day,month,year);
    birthDateInput.setAttribute('max',maxValue);
}

function convertDateFormatMDY(date){
    var inputDate = new Date(date);
    var month = inputDate.getMonth();
    month++;
    if (month < 10) {
        month = '0' + month;
    }
    month = month.toString();
    var day = inputDate.getDate();
    day++;
    if (day < 10) {
        day = '0' + day;
    }
    day = day.toString();
    var year = inputDate.getFullYear().toString();
    date = month + '/' + day + '/' + year;
    return date;
}

function convertDateFormatYMD(date){
    var inputDate = new Date(date);
    var month = inputDate.getMonth();
    month++;
    if (month < 10) {
        month = '0' + month;
    }
    month = month.toString();
    var day = inputDate.getDate();
    if (day < 10) {
        day = '0' + day;
    }
    day = day.toString();
    var year = inputDate.getFullYear().toString();
    date = year + '-' + month + '-' + day;
    return date;
}

function isFullAge(date, divTxtbox) {
    var inputDate = new Date(date);
    var thisMoment = new Date(Date.now());
    var isMajor = new Date(thisMoment - inputDate).getFullYear() - 1970 >= 18;
    if (isMajor) {
        hideError(divTxtbox);
        return true;
    } else {
        showError(divTxtbox);
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
    var passLow = password.toLowerCase();
    var num = 0;
    var char = 0;
    var special = false;
    for (i = 0; i < passLow.length; i++) {
        if (numbers.includes(passLow[i])) {
            num++;
        } else if(letters.includes(passLow[i])){
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