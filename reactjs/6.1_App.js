
// useEffect : render 반복되지 않고 한번만 실행될 수 있도록
import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const onClick = () => setValue((prev) => prev+1);
  console.log("i run all the time") ; // state가 변할 때마다 출력
  // const iRunOnlyOnce = () => {
  //   console.log("i run only once.") ; // 맨 처음 한번만 실행
  // }
  // useEffect(iRunOnlyOnce, []);
  useEffect(() => { // 9~12 간단하게
    console.log("CALL THE API....");
  }, [] );
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
