const cardButtons = document.querySelectorAll('.card button')

function hendleCardButtonClick(event) {
    const button = event.currentTarget;
    const card = button.closest('.card');
    // Grab source image
    const img
}

cardButtons.forEach(button => button.addEventListener('click', hendleCardButtonClick));