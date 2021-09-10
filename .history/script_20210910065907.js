const cardButtons = document.querySelectorAll('.card button')

function hendleCardButtonClick(event) {
    const button = event.currentTarget;
    const card = button.closest('.card');
    
}

cardButtons.forEach(button => button.addEventListener('click', hendleCardButtonClick));