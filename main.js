// input창에 글자를 입력했을 때 그 값을 받아오는 것
let score = 0;
let time = 9;
let isPlaying = false;

const worldInput = document.querySelector('.world-input');
const worldDisplay = document.querySelector('.world-display');
const scoreDisplay = document.querySelector('.score');
const timeDisplay = document.querySelector('.time');
const button = document.querySelector('.button');
// console.log(worldinput); 잘 걸렸는지 확인

//event 생성 ('이벤트', '기능')

worldInput.addEventListener('input',()=>{
    // console.log(worldinput.value) 잘 걸렸는지 확인
    // worldInput.value =
//    console.log(worldInput.value.toLowerCase()===worldDisplay.innerTexttoLowerCase())
    if(worldInput.value.toLowerCase()=== worldDisplay.innerText.toLowerCase()){
        score++;
        scoreDisplay.innerText = score;
        worldInput.value='';
    }
});

//시간

//setInterval(countDown,1000);
buttonChange('게임시작')


function countDown(){
    //(조건) ? 참일경우 : 거짓일 경우
    time>0 ? time -- : isPlaying = false;
    timeDisplay.innerText = time;
}


function buttonChange(text){
    button.innerText = text;
    text === '게임시작'? button.classList.remove('loading'):button.classList.add('loading');
}