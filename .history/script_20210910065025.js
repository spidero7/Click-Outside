const cardButtons = document.querySelectorAll('.card button')

function hendleCardButtonClick() {
    console.log("yeh")
}

cardButtons.forEach(button => button.addEventListener('click', hendleCardButtonClick));