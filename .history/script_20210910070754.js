const cardButtons = document.querySelectorAll('.card button');
const modalInner = document.querySelector('.modal-inner');


function hendleCardButtonClick(event) {
    const button = event.currentTarget;
    const card = button.closest('.card');
    // Grab source image
    const imgSrc = document.querySelector('img').src;
    const desc = card.dataset.description;
    const name = card.querySelector('h2').textContent;
    // Populate the modal with new info
    modalInner.innerHTML = 
}

cardButtons.forEach(button => button.addEventListener('click', hendleCardButtonClick));