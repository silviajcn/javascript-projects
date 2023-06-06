const canvas = document.querySelector('#game');
const gameContext = canvas.getContext('2d');

const btnUp = document.querySelector('#up');
const btnDown = document.querySelector('#down');
const btnLeft = document.querySelector('#left');
const btnRight = document.querySelector('#right');
const btnStart = document.querySelector('#start');
const btnPause = document.querySelector('#pause');
const btnReset = document.querySelector('#reset');
const modal = document.querySelector('#modalStart');
const btnCloseModal = document.querySelector('.modal_close');

let canvasSize;
let elementsSize;

// window.addEventListener('load', openModal);
// btnCloseModal.addEventListener('click', closeModal);
// btnStart.addEventListener('load', startGame);
window.addEventListener('load', setCanvasSize);
window.addEventListener('resize', setCanvasSize);

function setCanvasSize() {
    if (window.innerHeight > window.innerWidth) {
        canvasSize = window.innerWidth * 0.8;
    } else {
        canvasSize = window.innerHeight * 0.8;
    }
    
    canvas.setAttribute('width', canvasSize);
    canvas.setAttribute('height', canvasSize);

    elementsSize = canvasSize / 10 - 1;

    startGame();
}

function startGame() {

    gameContext.font = elementsSize + 'px Verdana';
    gameContext.textAlign = '';

    for (let i = 0; i < 10; i++) {
        gameContext.fillText(emojis['X'], elementsSize * i, elementsSize);
    }
    
}

function openModal() {
  modal.style.display = "flex";
}

function closeModal() {
  modal.style.display = "none";
}