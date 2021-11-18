// state+input 조합
import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const[keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev+1);
  const onChange = (event) => setKeyword(event.target.value); // 타이핑할때마다 state가 바뀜 

  //console.log("i run all the time") ; // state가 변할 때마다 출력
  useEffect(() => { 
    console.log("i run only once");
  }, [] );
  // console.log("SEARCH FOR", keyword); // counter가 변할때도 계속 실행됨
  useEffect(() => { // keyword가 변화할때만 실행하도록 
    console.log("i run when 'keyword' changes");
    //if (keyword !== "" && keyword.length > 5){
      //console.log("i run when 'keyword' changes and some conditions");
    //}
  }, [keyword] ); // keyword가 변화할 때마다 코드를 실행
  useEffect(() => { 
    console.log("i run when 'counter' changes.");
  }, [counter] );
  useEffect(() => { 
    console.log("i run when keyword & counter change.");
  }, [keyword, counter] );

  return (
    <div>
      <input 
      value = {keyword} 
      onChange = {onChange} 
      type="text" 
      placeholder="Search here..." 
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
