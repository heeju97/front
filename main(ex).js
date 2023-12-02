< M ain.js 작성>

1
input창에 글자를 작성했을 때 어떤 글자를 입력했는지 그 값을 받아오는 방법
=> console 실행
인풋을 가져오기 위해서는 인풋이 가지고있는 워드인풋이라는 클래스를 사용한다
const worldinput = document.querySelector('.world-input');
(변수 worldInput은 world-input이라는 클래스를 가지는 쿼리를 화면에 불러온다)
console.log(worldInput);  하면 콘솔창에 input 의 html 코드가 찍힘

2
콘솔창에 있는 값을 받아오기 위해서는 이벤트를 같이 걸어서 인풋이 되는 이벤트가 발생할 때 마다 value가 찍히도록
worldInput.addEventListener('이벤트','기능');
이벤트: 클릭 마우스오버 인풋 등등 <input>,<textarea>요소 값이 변경되었을 때
기능: 함수 function(){ !함#수$내%용& }
=> worldInput.addEventListener('input','function(){}'); 이렇게 해도 되지만
arrow function 사용가능
=> worldInput.addEventListener('input',()=>{
    console.log(worldInput.value)
});

3
텍스트(hello)와 비교해서 같은 경우 점수를 1점 올려주는 방법
let score = 0; 초기화 시켜주기
hello라는 text를 받아오기 위해서 텍스트 코드가 가진 클래스 world-display 소환
const worldDisplay = document.querySelector('.world-display') 
=> worldInput.addEventListener('input',()=>{
    console.log(worldInput.value.toLowerCase()=== worldDisplay.innerText.toLowerCase());
    ㄴ 의미: console(인풋창에 작성되는 텍스트(value값) === worldDisplay의 html 텍스트(hello))
    * ===(엄격하게 같다)
    * toLowerCase() (소문자로 비교해주는 메서드)
});

조건문: 만약 월드인풋 밸류의 값과 월드디스플레이의 html text값이 같다면, score를 1점 올려주기
const scoreDisplay = document.querySelector('.score');


if(worldInput.value.toLowerCase()===worldDisplay.innerText.toLowerCase()){
    score++;
    scoreDisplay.innerText = score;
    wolrdInput.value=''; 
};

4
button을 눌렀을 때 카운트다운 되게 만들기


*함수제작
function countDown(){
    *삼항연산자
    * (조건)? 참일 경우 : 거짓일 경우
    time > 0 ? time -- : isPlaying = false;
    =time이 0보다 크다면 1씩 줄여주고, 아니라면(0이라면) 함수 중단(false)
    *isPlayng =state 를 관리하도록 전역변수로 선언해놓기
    
}

*변수선언
let isPlaying = false; 

*함수를 1초마다 실행시키는 인터벌
setInterval(countDown,1000);

*변수선언
const timeDisplay = document.querySelector('.time');
let time = 9; 제한시간 설정

*함수 수정
function countDown(){
    time > 0 ? time -- : isPlaying = false;
    timeDisplay.innerText = time;
       
}


*버튼이 active되도록 (loading class가 사라지도록) 만들기

const button = document.querySelector('.button');
buttonChange('게임시작')

*함수제작
function buttonChange(text){ (인자가 text임)
    button.innerText = text;
    text === '게임시작'?button.classList.remove('loding') :button.classList.add('loding') 
}


*버튼 클릭시 인터벌 실행되도록 (setInterval) 만들기
function run(){ html에 onclick 걸어두기
 setInterval(countDown,1000);   
}

*