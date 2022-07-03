function createHome() {
    const home = document.createElement('div');

    const h1 = createHeading('About', 'h2');
    const p1 = createParagraph(`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.`);

    const h2 = createHeading('Hours:', 'h2');
    const p2 = document.createElement('p');
    p2.style.textAlign = 'center';
    p2.appendChild(createDiv('Sunday: 8am - 8pm'));
    p2.appendChild(createDiv('Monday: 6am - 6pm'));
    p2.appendChild(createDiv('Tuesday: 6am - 6pm'));
    p2.appendChild(createDiv('Wednesday: 6am - 6pm'));
    p2.appendChild(createDiv('Thursday: 6am - 10pm'));
    p2.appendChild(createDiv('Friday: 6am - 10pm'));
    p2.appendChild(createDiv('Saturday: 8am - 10pm'));

    const h3 = createHeading('Location:', 'h2');
    const p3 = createParagraph('123 Forest Drive, Forestville, Maine');

    home.appendChild(h1);
    home.appendChild(p1);
    home.appendChild(h2);
    home.appendChild(p2);
    home.appendChild(h3);
    home.appendChild(p3);

    return home;
}

function loadHome() {
    const main = document.querySelector('main');
    main.textContent = '';
    main.appendChild(createHome());
}

function createParagraph(text) {
    const paragraph = document.createElement('p');
    paragraph.textContent = text;
    return paragraph;
}

function createHeading(text, size) {
    const heading = document.createElement(size);
    heading.textContent = text;
    return heading;
}

function createDiv(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div;
}

export default loadHome;
