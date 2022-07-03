function createContact() {
    const contact = document.createElement('div');
    const name = document.createElement('h3');
    const mobile = document.createElement('span');

    name.textContent = 'Husan Eshonqulov';
    mobile.textContent = '+998910066506';

    contact.appendChild(name);
    contact.appendChild(mobile);

    return contact;
}

function loadContact() {
    const main = document.querySelector('main');
    main.textContent = '';
    main.appendChild(createContact());
}

export default loadContact;