const cardButtons = document.querySelectorAll('.card button')

function hendleCardButtonClick(event) {
    const button = event .currentTarget;
}

cardButtons.forEach(button => button.addEventListener('click', hendleCardButtonClick));