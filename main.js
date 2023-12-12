// 1. 깜빡이 만들기
// 2. 글자 랜덤으로 나오게 만들기
// 3. 한 글자씩 타이핑 효과 내기


let cursor = document.querySelector('#typing');

// let textArr = ["Learn to Html","Learn to css","Learn to javascript"]
// let selectText = textArr[Math.floor(Math.random()*textArr.length)];
// let selectTextArr = selectText.split("");


function reStart(){
    let textArr = ["Learn to Html","Learn to css","Learn to javascript"]
    let selectText = textArr[Math.floor(Math.random()*textArr.length)];
    let selectTextArr = selectText.split("");

    return selectTextArr ;
}



function textReset(){
    cursor.textContent = '';
    dynamic(reStart());
}



function dynamic(random){
    if(random.length > 0){
        cursor.textContent += random.shift(); 
        setTimeout(function(){
            dynamic(random);
        },80);
    }else{
      setTimeout(textReset,1000);
    }
}
dynamic(reStart());

function blink(){
    cursor.classList.toggle("active");
}

setInterval(blink,500);