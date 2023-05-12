import {createFooter} from './homepage';

const container = document.getElementById('content');

const cardContainer = document.createElement("div");
cardContainer.className = "cardContainer";

function locationLoad() {
    createTitle();
    while (cardContainer.firstChild) {
        cardContainer.removeChild(cardContainer.lastChild);
    }
    createCard("Hollywood", "1514 N Gower St, Los Angeles, CA 90028", "(323) 466-7453");
    createCard("South Los Angeles", "106 W Manchester Blvd, Los Angeles, CA 90003", "(323) 752-6211");
    createCard("Long Beach", "730 East Broadway, Long Beach, CA 90802", "(562) 437-8355");
    createCard("Pasadena", "830 North Lake Ave, Pasadena, CA 91104", "(626) 791-4890");
    createCard("Inglewood", "621 West Manchester Blvd, Inglewood, CA 90301", "(310) 981-4141");
    createCard("Anaheim", "2110 South Harbor Blvd, Anaheim, CA 92802", "(714) 823-4130");
    createCard("La Brea", "1865 S La Brea Ave, Los Angeles, CA 90019", "(323) 847-5027");
    createFooter();
}

function createTitle() {
    const title = document.createElement("div");
    title.className = "title";
    const ourLocations = document.createElement("h1");
    ourLocations.innerText = "Our Locations";
    title.appendChild(ourLocations);

    container.appendChild(title);
}

function createCard (locationTitle, address, phone) {
    const locationCard = document.createElement("div");
    locationCard.className = "card";
    const locationText = document.createElement("h4");
    locationText.innerText = locationTitle;
    locationText.className = "locationTitle";
    const locationInfo = document.createElement("div");
    locationInfo.className = "locationInfo";
    const locationAddress = document.createElement("p");
    locationAddress.innerText = address;
    const phoneDiv = document.createElement("div");
    const locationPhone = document.createElement("p");
    locationPhone.innerText = "Phone:";
    locationPhone.className = "phone";
    const locationNumber = document.createElement("p");
    locationNumber.innerText = phone;
    locationNumber.className = "number";

    cardContainer.appendChild(locationCard);
    locationCard.appendChild(locationText);
    locationCard.appendChild(locationInfo);

    locationInfo.appendChild(locationAddress);
    locationInfo.appendChild(phoneDiv);
    phoneDiv.appendChild(locationPhone);
    phoneDiv.appendChild(locationNumber);

    container.appendChild(cardContainer);
}


export default locationLoad;