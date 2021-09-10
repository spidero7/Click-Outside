const cardButtons = document.querySelectorAll('.card button')

function hendleCardButtonClick(event) {
    console.log("yeh")
}

cardButtons.forEach(button => button.addEventListener('click', hendleCardButtonClick));