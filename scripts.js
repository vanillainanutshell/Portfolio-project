const modal = document.getElementById('mobileModal');
const btn = document.getElementById('burgir');
const span = document.getElementsByClassName('close')[0];
const close1 = document.getElementById('close');
const close2 = document.getElementById('close2');
const close3 = document.getElementById('close3');
let popup = document.createElement('div');
let popupTitle = document.createElement('h2');
let list = document.createElement('ul');
let listContent = document.createElement('li');

popup.id = 'popupModal';
popup.className = 'popupModal';

popupTitle.id = 'ptitle';
popupTitle.textContent = 'Keeping track of hundreds of components website';
popupTitle.className = 'ptitle';

list.id = 'popupList';

listContent = document.createElement('li');

listContent = document.createElement('li');

listContent = document.createElement('li');

listContent = document.createElement('li');

listContent = document.createElement('li');
listContent.textContent = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.'

listContent = document.createElement('li');


popup.appendChild('popupTitle');
popup.appendChild('list');
list.appendChild('listContent');

document.getElementById.appendChild('mobileModal');

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