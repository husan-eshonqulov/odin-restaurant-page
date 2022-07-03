function createMenu() {
    const menu = document.createElement('div');

    menu.appendChild(createCard('Osh', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard', '$4'));
    menu.appendChild(createCard('Manti', 'Lorem Ipsum is simply dummy text of the printing and typesetting', '$1'));
    menu.appendChild(createCard('Tandir', 'It is a long established fact that a reader will be distracted by the readable', '$20'));

    return menu;
}

function createCard(name, description, price) {
    const card = document.createElement('div');
    const foodName= document.createElement('h2');
    const foodDescription = document.createElement('p');
    const foodPice = document.createElement('h4');
    const foodImage = document.createElement('img');

    foodName.textContent = name;
    foodDescription.textContent = description;
    foodPice.textContent = price;
    foodImage.src = `./images/${name.toLowerCase()}.png`;
    foodImage.alt = name;

    card.appendChild(foodName);
    card.appendChild(foodDescription);
    card.appendChild(foodPice);
    card.appendChild(foodImage);

    return card;
}

function loadMenu() {
    const main = document.querySelector('main');
    main.textContent = '';
    main.appendChild(createMenu());
}

export default loadMenu;