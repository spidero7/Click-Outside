const cardButtons = document.querySelectorAll('.card button')

function hendleCardButtonClick(event) {
    const button = event .currentTarget;
    const card = button.closest('.card');
    console.log(card);
}

cardButtons.forEach(button => button.addEventListener('click', hendleCardButtonClick));