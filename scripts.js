
const info = {
  title: 'Multi Post Stories',
  text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
  image: 'imgs/snapshoot.svg',
  technologies: ['html', 'Bootstrap', 'Ruby on rails'],
  live: 'https://vanillainanutshell.github.io/Portfolio-project/',
  source: 'https://github.com/vanillainanutshell/Portfolio-project',
};

const popup = document.createElement('div');
const body = document.getElementById('body');
popup.className = 'containertransp';
popup.id = 'popup';
popup.innerHTML = `
<div class ='popup'>
<h2 class="popuptitle">${info.title}</h2>
<span id="closer" class= "close">&times;</span>
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
</div>
`;
body.appendChild(popup);
const info2 = {
  title: 'Keeping track of hundreds  of components website',
  text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
  image: 'imgs/snapshoot.svg',
  technologies: ['html', 'Bootstrap', 'Ruby on rails'],
  live: 'https://vanillainanutshell.github.io/Portfolio-project/',
  source: 'https://github.com/vanillainanutshell/Portfolio-project',
};

const popupD = document.createElement('div');
popupD.className = 'containertransp';
popupD.id = 'popupD';
popupD.innerHTML = `
<div class ='popup'>
<h2 class="popuptitle">${info2.title}</h2>
<span id="closer2" class= "close">&times;</span>
<ul class="technologies">
<li class="whitebuttons">${info2.technologies[0]}</li>
<li class="whitebuttons">${info2.technologies[1]}</li>
<li class="whitebuttons">${info2.technologies[2]}</li>
</ul>
<div class="flextonator">
<img class="popimg" alt="project" src= "${info2.image}">
<div  class="flextonatorreturns">
<p>${info2.text}</p>
<ul class="links">
<li class="flatbutton"><a href="${info2.live}">See live   <img src="imgs/seelive.svg"></a></li>
<li class="flatbutton"><a href="${info2.live}">See source </a> <img src="imgs/popupcat.svg"></li>
</ul>
</div>
</div>
</div>
`;
body.appendChild(popupD);

const popupbutton1 = document.getElementById('popupbtn1');
popupbutton1.addEventListener('click', () => {
  popup.style.display = 'block';
});

const popupbutton2 = document.getElementById('popupbtn2');
popupbutton2.addEventListener('click', () => {
  popup.style.display = 'block';
});

const popupbutton3 = document.getElementById('popupbtn3');
popupbutton3.addEventListener('click', () => {
  popup.style.display = 'block';
});

const popupbutton4 = document.getElementById('popupbtn4');
popupbutton4.addEventListener('click', () => {
  popup.style.display = 'block';
});

const popupbutton5 = document.getElementById('popupbtn5');
popupbutton5.addEventListener('click', () => {
  popup.style.display = 'block';
});

const popupbutton6 = document.getElementById('popupbtn6');
popupbutton6.addEventListener('click', () => {
  popup.style.display = 'block';
});

const popupbutton7 = document.getElementById('popupbtn7');
popupbutton7.addEventListener('click', () => {
  popup.style.display = 'block';
});

const popupbutton8 = document.getElementById('popupbtn8');
popupbutton8.addEventListener('click', () => {
  popupD.style.display = 'block';
});

const popupbutton9 = document.getElementById('popupbtn9');
popupbutton9.addEventListener('click', () => {
  popupD.style.display = 'block';
});

const span2 = document.getElementById('closer');
span2.addEventListener('click', () => {
  popup.style.display = 'none';
});

const span3 = document.getElementById('closer2');
span3.addEventListener('click', () => {
  popupD.style.display = 'none';
});

window.onclick = function (event) {
  if (event.target === popup) {
    popup.style.display = 'none';
  }
};

window.onclick = function (event) {
  if (event.target === popupD) {
    popupD.style.display = 'none';
  }
};