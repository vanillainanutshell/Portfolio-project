const info = {
    title: 'Keeping trackof hundreds of components website',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
    image: 'imgs/snapshoot.svg',
    technologies: ['html', 'Bootstrap', 'Ruby on rails'],
    live: 'https://vanillainanutshell.github.io/Portfolio-project/',
    source: 'https://github.com/vanillainanutshell/Portfolio-project',
}

let popup = document.createElement('div');
const body = document.getElementById('body');
popup.className = 'popup';
popup.id = 'popup';
popup.innerHTML = `
    <h2>${info.title}</h2>
    <ul>
    <li>${info.technologies[0]}</li>
    <li>${info.technologies[1]}</li>
    <li>${info.technologies[2]}</li>
    </ul>
    <img alt="project" src= "${info.image}">
    <p>${info.text}</p>
    <ul>
    <li><a href="${info.live}">See live<img src="imgs/seelive.svg"></a></li>
    <li><a href="${info.live}">See source<img src="imgs/popupcat.svg"></a></li>
    </ul>
`
body.appendChild(popup);


const popupbutton1 = document.getElementById('popupbtn1');
popupbutton1.addEventListener('click', function() {
    popup.style.display = 'block';
});
const popupbutton2 = document.getElementById('popupbtn2');
popupbutton2.addEventListener('click', function() {
    popup.style.display = 'block';
});
const popupbutton3 = document.getElementById('popupbtn3');
popupbutton3.addEventListener('click', function() {
    popup.style.display = 'block';
});
const popupbutton4 = document.getElementById('popupbtn4');
popupbutton4.addEventListener('click', function() {
    popup.style.display = 'block';
});
const popupbutton5 = document.getElementById('popupbtn5');
popupbutton5.addEventListener('click', function() {
    popup.style.display = 'block';
});
const popupbutton6 = document.getElementById('popupbtn6');
popupbutton6.addEventListener('click', function() {
    popup.style.display = 'block';
});
const popupbutton7 = document.getElementById('popupbtn7');
popupbutton7.addEventListener('click', function() {
    popup.style.display = 'block';
});
const popupbutton8 = document.getElementById('popupbtn8');
popupbutton8.addEventListener('click', function() {
    popup.style.display = 'block';
});
window.onclick = function(event) {
    if (event.target === popup) {
        popup.style.display = 'none';
    }
};