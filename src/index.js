import { homepageLoad } from './homepage';
import menuLoad from './menu';
import locationLoad from './locations'
import Logo from './images/rosco-logo.png';
import './styles.css';

const content = document.getElementById('content');

createNavBar();
homepageLoad();

const homeBtn = document.querySelector('.home');
const menuBtn = document.querySelector('.menu');
const locationBtn = document.querySelector('.locations')

homeBtn.addEventListener('click', ()=> {
    while (content.firstChild) {
        content.removeChild(content.lastChild);
    }
    menuBtn.classList.remove("selected");
    locationBtn.classList.remove("selected");
    homeBtn.classList.add("selected");
    homepageLoad();
})

menuBtn.addEventListener('click', ()=> {
    while (content.firstChild) {
        content.removeChild(content.lastChild);
    }
    homeBtn.classList.remove("selected");
    locationBtn.classList.remove("selected");
    menuBtn.classList.add("selected");
    menuLoad();
})

locationBtn.addEventListener('click', ()=> {
    while (content.firstChild) {
        content.removeChild(content.lastChild);
    }
    homeBtn.classList.remove("selected");
    menuBtn.classList.remove("selected");
    locationBtn.classList.add("selected");
    locationLoad();
})

function createNavBar() {
    //create navigation bar
    const navBar = document.createElement("div");
    navBar.id = 'navBar';
    const navLeft = document.createElement("div");
    navLeft.id = 'navLeft';
    const logo = new Image();
    logo.src = Logo;
    logo.className = 'logo';

    const navRight = document.createElement("div");
    navRight.id = 'navRight';
    const home = document.createElement("button");
    home.classList.add('tab', 'selected', 'home');
    home.innerText = 'Home';
    const menu = document.createElement("button");
    menu.classList.add('tab', 'menu');
    menu.innerText = 'Menu';
    const locations = document.createElement("button");
    locations.classList.add('tab', 'locations');
    locations.innerText = 'Locations';
    
    document.body.prepend(navBar);
    navBar.appendChild(navLeft);
    navBar.appendChild(navRight);
    navLeft.appendChild(logo);
    navRight.appendChild(home);
    navRight.appendChild(menu);
    navRight.appendChild(locations);
}