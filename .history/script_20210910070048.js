const cardButtons = document.querySelectorAll('.card button')

function hendleCardButtonClick(event) {
    const button = event.currentTarget;
    const card = button.closest('.card');
    // Grab source image
    const imgSrc = document.querySelector('img').src;
}

cardButtons.forEach(button => button.addEventListener('click', hendleCardButtonClick));