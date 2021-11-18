
import { useState } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const onClick = () => setValue((prev) => prev+1);
  console.log('render') 
  // component가 처음으로 render될 때 콘솔에 render찍힘
  // state에 변화가 생기면 콘솔에 render찍힘
  // 특정 코드들이 첫번째 component render에서만 실행되게 할 수 있도록
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
