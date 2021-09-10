const cardButtons = document.querySelectorAll('.card button');
const modalInner = document.querySelector('.modal-inner');
const modalOuter = document.querySelector('.modal-outer');


function hendleCardButtonClick(event) {
    const button = event.currentTarget;
    const card = button.closest('.card');
    // Grab source image
    const imgSrc = document.querySelector('img').src;
    const desc = card.dataset.description;
    const name = card.querySelector('h2').textContent;
    // Populate the modal with new info
    modalInner.innerHTML = `<img width="600" heisrc="${imgSrc.replace('200', '600')}" alt="${name}"/> <p>${desc}</p>`;
    // Show the modal
    modalOuter.classList.add('open');
}

cardButtons.forEach(button => button.addEventListener('click', hendleCardButtonClick));

function closeModal() {
    modalOuter.classList.remove('open');
}

modalOuter.addEventListener('click', function(event) {
    const isOutside = !event.target.closest('.modal-inner');
    if (isOutside) {
        closeModal();
    }
})

window.addEventListener('keydown', event => {
    console.log(event);
    if (event.key === "Escape") {
        closeModal();
    }
})