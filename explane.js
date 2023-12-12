let target = document.querySelector("#typing");
let stringArr = ["Learn to HTML","Learn to css","Learn to javascript"];
let selectString = stringArr[Math.floor(Math.random() * stringArr.length)];
let selectStringArr = selectString.split("");

function dynamic(randomArr) {
    if(randomArr.length>0){
        target.textContent += randomArr.shift();
    }
}

function blink(){
    target.classList.toggle("active");
    // classList는 element의 읽기전용 속성으로 css class의 현재 값을 반환합니다.
    // css에서 active는 텍스트 위에 오는 깜빡이 커서이며 display:none; 설정해둠
    // 만일 element의 class 목록에 특정 class명이 들어있다면 toggle() 메소드는 그 class명을 지웁니다. 
    // 만약 class 목록에 그 class명이 없다면 toggle() 메소드는 그 class를 element의 class 목록에 추가합니다.
    // 즉 active가 있으면 없애주고 없으면 만들어줌=> display가 none이였다가 block이였다가 반복하게 해줌
}

// 0.5 초마다 실행
setInterval(blink,500); 

