// To Do List-part one

import {useState} from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setTODos] = useState([]); // toDo를 여러개 입력받을 array, 기본값으로 비어있는 array로 설정(useState안에)
  const onChange = (event) => setToDo(event.target.value); // toDo값을 수정하는 함수
  // console.log(toDo); // input에 값 입력할 때마다 새롭게 생성

  const onSubmit = (event) => {
    event.preventDefault();
    //console.log(toDo);
    if(toDo ===""){ // 비어있으면 함수 작동X
      return;
    }

    // 일반 js였다면 toDos.push(); 를 할 것 
    // 대신에 함수를 사용하고 그 함수가 toDo를 수정하도록 작성
    setTODos((currentArray) => [toDo, ...currentArray]); // 입력한 toDo와 기존의 currentArray를 다시 currentArray로 지정 
    // setTODos(([]) => [toDo, []]); // 첫번째 toDO를 입력할 때
    
    setToDo(""); // input 비우기
    // toDo=""; 라고 쓰지 않음, state를 직접 수정하려고 해서는 안됨!!! 수정하는 함수를 사용할 것

  };
  console.log(toDos); // 배열안에 입력되는 내용 확인하기 위함

  return ( 
  <div>
    <h1>My To Dos({toDos.length})</h1>
    <form onSubmit={onSubmit}>
      <input
        onChange={onChange} 
        value={toDo} 
        type="text"
        placeholder="Write your to do..."
      />
      <button>Add To Do</button>

    </form>
  </div>
  )
}

export default App;
