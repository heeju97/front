        // 이벤트를 form 을 submit 할 때로 지정 (폼이 제출될 때) => submit event는 언제 일어나는가? 
        // 1. 폼 내부에 있는 input 위젯에서 enter를 입력한 경우 2. 폼 내부에 있는 submit type의 button 을 cilck한 경우
        const form = document.querySelector('form');
        const input = document.querySelector('input');
        const ul = document.querySelector('ul');

        // 삭제버튼 추가
        // 새로고침돼도 list 가 사라지지 않게
        // 삭제버튼을 누르면 저장된 데이터 자체에서 해당 부분을 지우도록 만들기


        const todos = [];



        const delItem = (event)=>{
            const target = event.target.parentElement;
            target.remove();

        }


        const addItem=(todo)=>{
            if(todo.text !==''){
                const li = document.createElement('li'); // li를 추가해준다
                const button = document.createElement('button');
                const span = document.createElement('span');

                // li.innerText = text; 
                // li에 들어갈 텍스트는 Input의 value
                button.innerText = 'X'
                span.innerText = todo.text;
                button.addEventListener('click',delItem);
                li.appendChild(span);
                li.appendChild(button);
                ul.appendChild(li); //화면에 출력이 되려면 문서를 구성하고 있는 어떠한 요소에 붙여줘야하기 때문에 ul태그의 자식 요소로 붙여줌

                // input.value = ' '
                //텍스트를 입력해 제출해도 입력창에 텍스트가 지워지지 않고 그대로 있음, 이를 지워주기 위한것으로 input의 value 를 비워줌

            }else{
                alert('텍스트를 입력하세요');
            }
            //공백인 상태로 엔터를 치면 공백으로 리스트가 생섬됨, 이를 방지하기 위한 if 조건문
        }

        const handler = (event)=>{
            event.preventDefault();

            const todo = {
                id: Date.now(),
                text: input.value,
            };
            todos.push(todo);
            addItem(todo);
            input.value = '';
    
        };
        form.addEventListener('submit', handler);
            //  event.preventDefault(); 
            //폼이 제출되면 새로고침이 되어 입력한 텍스트가 사라짐, 새로고침을 막아주는 preventDefault 사용
            // console.log(input.value); 사용자가 입력한 텍스트

            //li 태그를 추가하기
            
        // localStorage.setItem('hello','world')
        // const myData = localStorage.getItem('hello');
        // console.log(myData);