const cardButtons = document.querySelectorAll('.card button')

function hendleCardButtonClick(event) {
    const button = event.currentTarget;
    const card = button.closest('.card');
    // Grab source image
    const imgSrc = document.querySelector('img').src;
    const desc = card.dataset.description;
    console.log(desc)
}

cardButtons.forEach(button => button.addEventListener('click', hendleCardButtonClick));