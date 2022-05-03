window.onload = function(){
    var logInBtn = document.getElementById('login-btn');
    logInBtn.addEventListener('click', logInClick);
    var textboxes = document.getElementsByClassName('label-textbox');
    var emailInput = document.getElementById('email');
    var passwordInput = document.getElementById('password');

    function myFocus(input, divTxtbox){
        hideError(divTxtbox);
    }

    emailInput.onfocus = function(){
        myFocus(emailInput, textboxes[0]);
    }

    emailInput.onblur = function(){
        inputStatus[0] = validateEmail(emailInput.value, textboxes[0]);
    }

    passwordInput.onfocus = function(){
        myFocus(passwordInput, textboxes[1]);
    }

    passwordInput.onblur = function(){
        inputStatus[1] = validatePassword(passwordInput.value, textboxes[1]);
    }

    var modal = document.getElementById("myModal");

    var span = document.getElementsByClassName("close")[0];
    span.onclick = function(){
    modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
    }
}

var inputStatus = [true, true];

function modalSuccess(modal, message){
        modal.style.display = "block";
        modal.children[0].children[1].children[0].innerHTML = message;
        modal.children[0].children[0].classList.add('success');
        modal.children[0].children[0].children[1].innerHTML = 'LOG IN SUCCESSFULLY!';
}

function modalError(modal){
    modal.children[0].children[0].classList.add('error');
    modal.children[0].children[0].children[1].innerHTML = 'ERROR';
    modal.style.display = "block";
}

function requestLogIn(emailValue, passwordValue, url, modal){
    fetch((url + '?email=' + emailValue + '&password=' + passwordValue), {
        method : 'GET',
        params : {
            email : emailValue,
            password : passwordValue
        }
    })
        .then(function(response){
            return response.json();
        })
        .then(function(jsonResponse){
            if (jsonResponse.success) {
                modalSuccess(modal, jsonResponse.msg);
            } else {
                modalError(modal);
                modal.children[0].children[1].children[0].innerHTML = jsonResponse.msg;
            }
        })
        .catch(function(error){
            console.log(error);
        });
}

function logInClick(){
    var modal = document.getElementById("myModal");
    var modalText = modal.children[0].children[1];
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var allIsValid = true;
    if(!inputStatus[0]){
        modalText.innerHTML = 'E-mail invalid';
        modalError(modal);
        allIsValid = false
    }
    if(!inputStatus[1]){
        modalText.innerHTML = 'Password invalid';
        modalError(modal);
        allIsValid = false
    }
    if(allIsValid){
        requestLogIn(email, password, 'https://basp-m2022-api-rest-server.herokuapp.com/login', modal);
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