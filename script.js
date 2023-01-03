let music = new Audio('./music.mp3');
let turnTing = new Audio('./ting.mp3');
let gameOver = new Audio('./gameover.mp3');
let turn = 'X';
let isGameOver = false;

// Change to the turn
const changeTurn = () => {
    return turn === 'X' ? '0':'X'
}

// function to check win

const checkWin = () =>{
    let boxTexts = document.getElementsByClassName('boxText');
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]
    wins.forEach(e => {
        if((boxTexts[e[0]].innerText === (boxTexts[e[1]]).innerText) && (boxTexts[e[2]].innerText === (boxTexts[e[1]]).innerText) && (boxTexts[e[0]].innerText !== '')){
           document.querySelector('.info').innerText = boxTexts[e[0]].innerText  + ' Win'
           isGameOver = true;
           document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = '200px';
        }
            
    });
}

// Game Logic Start

let boxes = document.getElementsByClassName('box');
Array.from(boxes).forEach((element) => {
    let boxText = element.querySelector('.boxText');
    element.addEventListener('click' , () => {
      if(boxText.innerText === ''){
        boxText.innerText = turn;
        turn = changeTurn();
        turnTing.play();
        checkWin();
        if(!isGameOver){
            document.getElementsByClassName('info')[0].innerText = 'Turn For: ' + turn;
        }
        
      }
    })
});

// addEvent listener
reset.addEventListener('click', () => {
    let boxText = document.querySelectorAll('.boxText');
    Array.from(boxText).forEach(element => {
        element.innerText = '';
    });
    turn = 'X';
    isGameOver = false;
    document.getElementsByClassName('info')[0].innerText = 'Turn For: ' + turn;
    document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = '0px';
})