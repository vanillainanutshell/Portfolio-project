const modal = document.getElementById('mobileModal');
const btn = document.getElementById('burgir');
const span = document.getElementsByClassName('close')[0];
const close1 = document.getElementById('close');
const close2 = document.getElementById('close2');
const close3 = document.getElementById('close3');

btn.onclick = function() {
    modal.style.display = 'block';
};

span.onclick = function() {
    modal.style.display = 'none';
};

close1.onclick = function() {
    modal.style.display = 'none';
};

close2.onclick = function() {
    modal.style.display = 'none';
};

close3.onclick = function() {
    modal.style.display = 'none';
};

window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};