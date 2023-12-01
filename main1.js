const Game_time = 5;
let score = 0;
let time = Game_time;
let isPlaying = false;
let timeInterval;
let words = [];

const worldInput = document.querySelector('.world-input');
const worldDisplay = document.querySelector('.world-display');
const scoreDisplay = document.querySelector('.score');
const timeDisplay = document.querySelector('.time');
const button = document.querySelector('button');

init();
function init() {
    getWords();
    word
}

function getWords(){
    words = ['hello','hi','bye','good','goodbye']
}

function checkMatch('input',checkMatch) {
    worldInput.addEventListener('input',()=>{
        if(worldInput.value.toLowerCase() === worldDisplay.innerText.toLowerCase()){
          score++;
          scoreDisplay.innerText = score;
          worldInput.value = '';
      }
      })
}

// worldInput.addEventListener('input',()=>{
//   if(worldInput.value.toLowerCase() === worldDisplay.innerText.toLowerCase()){
//     score++;
//     scoreDisplay.innerText = score;
//     worldInput.value = '';
// }
// })
// setInterval(countDown,1000); 
// <-> clearInterval

buttonChange('게임시작');

function run(){
    isPlaying = true;
    time=Game_time;
    timeInterval = setInterval(countDown,1000);
} 

function countDown(){
    time > 0 ? time -- : isPlaying = false;
    if(!isPlaying){
        clearInterval(timeInterval)}
    timeDisplay.innerText = time;
}





function buttonChange(text){
    button.innerText = text;
    text === '게임시작' ? button.classList.remove('loading') : button.classList.add('loading');
}
