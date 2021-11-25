// To Do List-part two

import {useState} from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setTODos] = useState([]); 
  const onChange = (event) => setToDo(event.target.value); 

  const onSubmit = (event) => {
    event.preventDefault();
    if(toDo ===""){ 
      return;
    }

    // 수정 함수를 작성하기 위한 2가지 option
    setTODos((currentArray) => [toDo, ...currentArray]); // 1) 함수를 보내는 방법, 첫번째 argument로 현재 state를 보냄
    // 의미) 현재 toDos를 받아와서 새로운 toDo의 array로 return하는 함수
    setToDo(""); // 2) 값을 직접적으로 보낼 수 있음, 저장한 data값을 가짐
    // 의미) setToDo가 비어있는 string값으로 불려진다면, toDO가 비어있는 string이 될 것
  };
  
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
    <hr />
    <ul>
      {toDos.map((item, index) => (
      <li key={index}>{item}</li>
      ))}
    </ul>
    
  </div>
  )
}

export default App;
