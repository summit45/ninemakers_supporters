// cleanup function

import { useState, useEffect } from "react";

function Hello(){

  // 주로 이렇게 함수를 다 작성하지는 않는다
  function byFn(){
    console.log('bye :( ');
  }
  function hiFn() {
    console.log('created :)');
    return byFn; 
  }

  useEffect(function(){
    console.log("hi :)");
    return function(){
      console.log("bye :(");
    }  
  }, []);

  // useEffect(()=> {
  //   console.log('created :)');
  //   return () => console.log("destroyed :( "); //cleanup 코드
  // },[]);
  return <h1>Hello</h1>;
}

function App() {
  const [showing,setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);
  return(
  <div>
    {showing ? <Hello /> : null}
    <button onClick={onClick}>
      {showing? "Hide" : "Show"}
    </button>
  </div>
  )
  
}

export default App;
