window.onload = function(){
    var submitBtn = document.getElementById('submit');
    submitBtn.addEventListener('click', submitClick);
    var textboxes = document.getElementsByClassName('label-textbox');
    var nameInput = document.getElementById('name');
    var emailInput = document.getElementById('email');
    var messageInput = document.getElementById('message');
    
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

    emailInput.onfocus = function(){
        myFocus(emailInput, textboxes[1]);
    }

    emailInput.onblur = function(){
        myBlur(emailInput, textboxes[1]);
    }

    messageInput.onfocus = function(){
        myFocus(messageInput, textboxes[2]);
    }

    messageInput.onblur = function(){
        myBlur(messageInput, textboxes[2]);
    }
}

function submitClick(){
    var textboxes = document.getElementsByClassName('label-textbox');
    var report = {
        nameValue : document.getElementById('name').value,
        email : document.getElementById('email').value,
        category : document.getElementById('cat').value,
        message : document.getElementById('message').value,
    }
    var allIsValid = true;
    if (!validateName(report.nameValue, textboxes[0])) {
        alert('ERROR\nName invalid');
        allIsValid = false;
    }
    if (!validateEmail(report.email, textboxes[1])) {
        alert('ERROR\nE-mail invalid');
        allIsValid = false;
    }
    if (!validateMessage(report.message, textboxes[2])) {
        alert('ERROR\nMessage invalid');
        allIsValid = false;
    }
    if (allIsValid) {
        alert('Submit succesfully!\nName: ' + report.nameValue + 
        '\nE-Mail: ' + report.email + 
        '\nContact area: ' + report.category +
        '\nMessage: ' + report.message);
    }
}

function validateName(word, divTxtbox){
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

function validateMessage(message, divTxtbox){
    if (message.length >= 3) {
        hideError(divTxtbox);
        return true;
    } else {
        showError(divTxtbox);
    }
}

function showError(textboxDiv){
    var divChilds = textboxDiv.children;
    divChilds[0].classList.add('input-error');
    divChilds[1].classList.add('label-error');
    divChilds[1].classList.remove('label-error-none');
}

function hideError(textboxDiv){
    var divChilds = textboxDiv.children;
    divChilds[0].classList.remove('input-error');
    divChilds[1].classList.remove('label-error');
    divChilds[1].classList.add('label-error-none');
}