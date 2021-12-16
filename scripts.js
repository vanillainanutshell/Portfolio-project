const modal = document.getElementById('mobileModal');
const btn = document.getElementById('burgir');
const span = document.getElementsByClassName('close')[0];
const close1 = document.getElementById('close');
const close2 = document.getElementById('close2');
const close3 = document.getElementById('close3');

btn.onclick = function openButt() {
    modal.style.display = 'block';
};

span.onclick = function spanClose() {
    modal.style.display = 'none';
};

close1.onclick = function button1Close() {
    modal.style.display = 'none';
};

close2.onclick = function button2Close() {
    modal.style.display = 'none';
};

close3.onclick = function button3Close() {
    modal.style.display = 'none';
};

window.onclick = function outerClose(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};

function upperCaseErrorMessage() {
    const messageContainer = document.getElementById('errorMessage');
    messageContainer.innerHTML = '<b>Error</b>: Email should only contain lower cases.';
}

function checkEmailUppercase() {
    let email = document.getElementById('email').value;
    email = email.split('');

    for (let i = 0; i < email.length; i += 1) {
        if (email[i].match(/[a-z]/i)) {
            if (email[i] === email[i].toUpperCase()) {
                const errorContainer = document.getElementById('errorMessage');
                errorContainer.style.display = 'block';
                upperCaseErrorMessage();
                return false;
            }
        }
    }
    return true;
}

const errorContainer = document.getElementById('errorMessage'); 
const submit = document.getElementById('submit'); 

submit.addEventListener('click', () => {
    errorContainer.fadeOut(3000); 
}); 

document.getElementById('myForm').onsubmit = function checkMailUpper() {
    return checkEmailUppercase();
};