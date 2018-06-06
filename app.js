const catImage = document.getElementById('cat-image');
const counter = document.getElementById('count');

catImage.addEventListener('click', function(){
    number = parseInt(counter.innerText);
    counter.innerText = number + 1;
});