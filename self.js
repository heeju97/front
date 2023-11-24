const form = document.querySelector('form');
const input = document.querySelector('input');
const ol = document.querySelector('ol');

form.addEventListener('submit',(event)=>{
    event.preventDefault();
//   alert('작성');
  
if(input.value!==''){
    const li = document.createElement('li');
  li.innerText = input.value;
  ol.appendChild(li);
  input.value = ''
}else{
    alert('텍스트를 입력하세요');
}

})