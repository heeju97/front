// 1. 낌빡이 만들기
// 2. 한 글자씩 만들어서 타이핑 효과
// 



let cursor = document.querySelector(".dynamic");
let text1 = document.querySelector(".text1");
let text2 = document.querySelector(".text2");
let text3 = document.querySelector(".text3");
let text4 = document.querySelector(".text4");


let introText = '임지형바보멍청이';
let textArr = introText.split("");

let text1Arr = ['N','I','C','E'];
let text2Arr = ['T','','','O'];
let text3Arr = ['M','E','E','T'];
let text4Arr = ['Y','O','U','💓'];

function tArr1(arr1){
    if(arr1.length > 0){
        text1.textContent += text1Arr.shift();
        setTimeout(function(){
            tArr1(arr1)}, 1000);}
}
tArr1(text1Arr);

function tArr2(arr2){
    if(arr2.length > 0){
        text2.textContent += text2Arr.shift();
        setTimeout(function(){
            tArr2(arr2)}, 1000);}
}
tArr2(text2Arr);

function tArr3(arr3){
    if(arr3.length > 0){
        text3.textContent += text3Arr.shift();
        setTimeout(function(){
            tArr3(arr3)}, 1000);}
}
tArr3(text3Arr);

function tArr4(arr4){
    if(arr4.length > 0){
        text4.textContent += text4Arr.shift();
        setTimeout(function(){
            tArr4(arr4)}, 1000);}
}
tArr4(text4Arr);


function dynamic(arr){
    if(arr.length > 0){
        cursor.textContent += textArr.shift();
        setTimeout(function(){
            dynamic(arr)}, 100);
    }
}
dynamic(textArr);

function blink(){
    cursor.classList.toggle("active");
}

setInterval(blink,500);

