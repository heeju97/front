

// 조건
// 1. 5글자 단어 (존재하는 단어가 아니어도 됨)
// 2. 6번의 시도 가능
// 3. 존재하면 노란색, 위치도 맞으면 초록색으로 표시
// 4. 게임 종료 판단
// 5. 상단에 게임 시간 표시하기
// + 키보드에도 동일하게 표시 
// + 키보드 클릭으로도 입력 => keyDown


    const 정답 = 'APPLE';

   
    let attempts = 0;
    let index = 0;

   function appStart(){
    const nextLine = () => {
       attempts ++ ;
       index = 0;
    };       
    const handleEnterkey = () => {
        for(let i = 0; i<5; i++){
        const block = document.querySelector(`.board-block[data-index='${attempts}${i}']`);
        const 입력한글자 = block.innerText;
        const 정답글자 = 정답[i];
        if(입력한글자===정답글자){
            block.style.background = "#6aaa64";
        }else if(정답.includes(입력한글자)){block.style.background = "#c9b458";
        }else {
            block.style.backgroundColor = "#ccc";
            
        }
        block.style.color = "#fff";
        block.style.fontWeight = "bold";
    } nextLine();
    };


    const handlekeydown = (event) => {
        

        const key = event.key.toUpperCase();
        const keyCode = event.keyCode;
        const thisBlock = document.querySelector(`.board-block[data-index='${attempts}${index}']`);
        
        if(index === 5){
            if (event.key === "Enter")handleEnterkey();  
        else return;
        }else if (65 <= keyCode && keyCode <= 90){
            thisBlock.innerText = key;
            index ++ ;
        }
    };

    window.addEventListener("keydown",handlekeydown);
   }
   appStart();