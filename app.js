//TO DO: refactor using DRY principals

const catImageOne = document.getElementById('cat-image-one');
const catImageTwo = document.getElementById('cat-image-two');
const counterOne = document.getElementById('count-one');
const counterTwo = document.getElementById('count-two');

const clickingFunctionOne = () => {
    number = parseInt(counterOne.innerText);
    counterOne.innerText = number + 1;
}

const clickingFunctionTwo = () => {
    number = parseInt(counterTwo.innerText);
    counterTwo.innerText = number + 1;
}

catImageOne.addEventListener('click', clickingFunctionOne);
catImageTwo.addEventListener('click', clickingFunctionTwo);