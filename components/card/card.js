export function createCharacterCard(character) {
    const card = document.createElement("li");
    card.classList.add("card");

    const imagecontainer = document.createElement("div");
    imagecontainer.classList.add("card__image-container");
    card.append(imagecontainer);

    const image = document.createElement("img");
    image.classList.add("card_image");
    image.setAttribute("src", character.Image);
    image.setAttribute("alt", charakter.name);
    imagecontainer.append(image);

    const cardContent = document.createElement("div");
    cardContent.classList.add("card__content");
    card.append(cardContent);

    const h2 = document.createElement("h2");
    h2.classlist.add("card__title");
    h2.textContent = character.name;
    cardContent.append(h2);

    const descriptionList = document.createElement("dl");
    descriptionList.classList.add("card__info");
    cardContent.append(descriptionList);

    const statusTitle = document.createElement("dt");
    statusTitle.classList.add("card__info-title");
    statusTitle.textContent = "Status";
    descriptionList.append(statusTitle);

    const statusValue = document.createElement("dd");
    statusValue.classList.add("card__info-description");
    statusValue.textContent = character.status;
    cardContent.append(statusValue);

    const typetitle = document.createElement("dt");
    typetitle.classList.add("card__info-title");
    typetitle.textContent = "Type";
    cardContent.append(typetitle);

    const typeValue = document.createElement("dd");
    typeValue.classList.add("card__info-description");
    typeValue.textContent = character.type;
    descriptionList.append(typeValue);

    const occurencesTitle = document.createElement("dt");
    occurencesTitle.classList.add("card__info-title");
    occurencesTitle.textContent = "Occurences";
    descriptionList.append(occurencesTitle);

    const occurencesValue = document.createElement("dd");
    occurencesValue.classList.add("card__info-descrition");
    occurencesValue.textContent = character.episode.length;
    descriptionList.append(occurencesValue);

    return card;
}
