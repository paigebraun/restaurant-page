import {createFooter} from './homepage';
import R1 from './images/R1.png';
import R2 from './images/R2.png';
import R3 from './images/R3.png';
import MenuPDF from './images/Menu.png';

const container = document.getElementById('content');

function menuLoad() {
    createTitle();
    createGallery();
    createMenuPDF();
    createFooter();
}

function createTitle() {
    const title = document.createElement("div");
    title.className = "title";
    const ourMenu = document.createElement("h1");
    ourMenu.innerText = "Our Menu";
    title.appendChild(ourMenu);
    container.appendChild(title);
}

function createGallery() {
    const gallery = document.createElement("div");
    gallery.className = "gallery";
    const image1 = new Image();
    image1.src = R1;
    image1.className = "menuGallery";
    const image2 = new Image();
    image2.src = R2;
    image2.className = "menuGallery";
    const image3 = new Image();
    image3.src = R3;
    image3.className = "menuGallery";
    gallery.appendChild(image1);
    gallery.appendChild(image2);
    gallery.appendChild(image3);

    container.appendChild(gallery);
}

function createMenuPDF() {
    const menuContainer = document.createElement("div");
    menuContainer.className = "menuContainer";
    const menuImg = new Image();
    menuImg.src = MenuPDF;
    menuImg.className = "menuImg";
    menuContainer.appendChild(menuImg);

    container.appendChild(menuContainer);
}


export default menuLoad;