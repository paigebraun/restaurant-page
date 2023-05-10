
import HeroBck from './images/R4.png';
import HeroImg from './images/roscoe-hero.png';
import Pico from './images/roscoes-chicken-waffles-pico.jpg';
import Stevie from './images/Stevie_Wonder_Roscoe.png';
import IG from './images/ig-logo.png';
import FB from './images/fb-logo.png';

const container = document.getElementById('content');

export function homepageLoad() {
    createHero();
    createSection1();
    createSection2();
    createFooter();
}

function createHero() {
    //create hero section
    const heroContainer = document.createElement("div");
    heroContainer.className = 'heroContainer';
    const heroBackground = new Image();
    heroBackground.src = HeroBck;
    heroBackground.className = 'heroBck';
    heroContainer.appendChild(heroBackground);

    const heroContent = document.createElement("div");
    heroContent.className = 'heroContent';

    const hero = new Image();
    hero.src = HeroImg;
    hero.className = 'heroImg'
    heroContent.appendChild(hero);

    const aboutUs = document.createElement("div");
    aboutUs.className = 'aboutUs';
    const aboutText = document.createElement("h3");
    aboutText.innerText = 'About Us';
    const carret = document.createElement("h3");
    carret.innerText = '⌄'
    aboutUs.appendChild(aboutText);
    aboutUs.appendChild(carret);
    heroContent.appendChild(aboutUs);

    heroContainer.appendChild(heroContent);

    container.appendChild(heroContainer);
}

function createSection1() {
    //create section 1 (our founder)
    const section1 = document.createElement("div");
    section1.className = 'section1';
    const section1Left = document.createElement("div");
    section1Left.className = 'section1Left';
    const section1Title = document.createElement("h1");
    section1Title.innerText = 'Our Founder';
    section1Left.appendChild(section1Title);
    const section1Text = document.createElement("p");
    section1Text.innerText = "Roscoe's House of Chicken and Waffles is a Hollywood, California-based soul food restaurant chain founded by Herb Hudson, a Harlem native, in 1975. It is best known, as the name states, for serving chicken and waffles, both together and separately, although they do offer more traditional menu items as well.";
    section1Left.appendChild(section1Text);
    const section1Img = new Image();
    section1Img.src = Pico;
    section1Img.className = 'section1Img';
    section1.appendChild(section1Left);
    section1.appendChild(section1Img);

    container.appendChild(section1);
}

function createSection2() {
    //create section 2 (our story)
    const section2 = document.createElement("div");
    section2.className = 'section2';
    const section2Right = document.createElement("div");
    section2Right.className = 'section2Right';
    const section2Title = document.createElement("h1");
    section2Title.innerText = 'Our Story';
    section2Right.appendChild(section2Title);
    const section2Text = document.createElement("p");
    section2Text.innerText = "Soon after Roscoe's was opened, Mr. Hudson's friends in Motown and television, such as Stevie Wonder and Natalie Cole, would spread the word to other celebrities including Redd Foxx who would go on to tell their audiences about Roscoe's incredible soul food menu offerings. Other celebrities, like Snoop Dogg, Shaquille O'Neil, and even global leaders including President Obama have enjoyed Roscoe's House of Chicken and Waffles making it a timeless L.A classic.";
    section2Right.appendChild(section2Text);
    const section2Img = new Image();
    section2Img.src = Stevie;
    section2Img.className = 'section2Img';
    section2.appendChild(section2Img);
    section2.appendChild(section2Right);

    container.appendChild(section2);
}

export function createFooter() {
    //create footer
    const footer = document.createElement("div");
    footer.className = 'footer';
    const igContainer = document.createElement("a");
    igContainer.setAttribute('href', 'https://www.instagram.com/roscoesofficial');
    const ig = new Image();
    igContainer.className = 'social';
    ig.src = IG;
    igContainer.appendChild(ig);
    const fbContainer = document.createElement("a");
    fbContainer.setAttribute('href', 'https://www.facebook.com/RoscoesOfficial/');
    const fb = new Image();
    fbContainer.className = 'social';
    fb.src = FB;
    fbContainer.appendChild(fb);
    footer.appendChild(igContainer);
    footer.appendChild(fbContainer);

    container.appendChild(footer);
}
