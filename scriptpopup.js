const info = {
    title: ['Keeping trackof hundreds of components website', 'Multi Post Stories'],
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
    image: 'imgs/snapshoot.svg',
    technologies: ['html', 'Bootstrap', 'Ruby on rails'],
    live: 'https://vanillainanutshell.github.io/Portfolio-project/',
    source: 'https://github.com/vanillainanutshell/Portfolio-project',
}
let transparente = document.createElement('div');
let popup = document.createElement('div');
const body = document.getElementById('body');
transparente.appendChild(popup);
popup.className = 'popup';
popup.id = 'popup';
popup.innerHTML = `
    <h2 class="popuptitle">${info.title[1]}</h2>
    <span class= "close">&times;</span>
    <ul class="technologies">
    <li class="whitebuttons">${info.technologies[0]}</li>
    <li class="whitebuttons">${info.technologies[1]}</li>
    <li class="whitebuttons">${info.technologies[2]}</li>
    </ul>
    <img class="popimg" alt="project" src= "${info.image}">
    <p>${info.text}</p>
    <ul class="links">
    <li class="flatbutton"><a href="${info.live}">See live   <img src="imgs/seelive.svg"></a></li>
    <li class="flatbutton"><a href="${info.live}">See source </a> <img src="imgs/popupcat.svg"></li>
    </ul>
`
body.appendChild(transparente);


const popupbutton1 = document.getElementById('popupbtn1');
popupbutton1.addEventListener('click', function() {
    transparente.style.display = 'block';
});
const popupbutton2 = document.getElementById('popupbtn2');
popupbutton2.addEventListener('click', function() {
    transparente.style.display = 'block';
});
const popupbutton3 = document.getElementById('popupbtn3');
popupbutton3.addEventListener('click', function() {
    transparente.style.display = 'block';
});
const popupbutton4 = document.getElementById('popupbtn4');
popupbutton4.addEventListener('click', function() {
    transparente.style.display = 'block';
});
const popupbutton5 = document.getElementById('popupbtn5');
popupbutton5.addEventListener('click', function() {
    transparente.style.display = 'block';
});
const popupbutton6 = document.getElementById('popupbtn6');
popupbutton6.addEventListener('click', function() {
    transparente.style.display = 'block';
});
const popupbutton7 = document.getElementById('popupbtn7');
popupbutton7.addEventListener('click', function() {
    transparente.style.display = 'block';
});
const popupbutton8 = document.getElementById('popupbtn8');
popupbutton8.addEventListener('click', function() {
    transparente.style.display = 'block';
});
window.onclick = function(event) {
    if (event.target === popup) {
        transparente.style.display = 'none';
    }
};