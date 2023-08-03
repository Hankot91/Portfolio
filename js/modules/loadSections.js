function loadBubbles() {
    const bubblesSection = document.getElementById('bubblesSection');
    fetch('templates/bubbles.html')
        .then(response => response.text())
        .then(data => {
            bubblesSection.innerHTML = data;
        })
        .catch(error => {
            console.error('Error al cargar el contenido de "bubbles.html"', error);
        });
}

function loadCards(){
    const cardSection = document.getElementById('cards-hobbies');
fetch('templates/cards.html')
    .then(response => response.text())
    .then(data => {
        cardSection.innerHTML = data;
    })
    .catch(error => {
        console.error('Error al cargar el contenido de "cards.html"', error);
    });
}

export {loadBubbles, loadCards};