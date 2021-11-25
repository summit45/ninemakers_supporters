// Coin Tracker
// code challenge : 20dollar -> bitcoin
 
// target.value 사용해서 USD 입력값 인식
// bitcoin 가격으로 환산

import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([])
  const [selected, setSelected] = useState();

  const onChange = (event) => {
    setSelected(event.target.value);
  }

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
    .then(response => response.json())
    .then(json => {
      setCoins(json);
      setLoading(false);
    });
  }, []); // 빈배열이면 한 번만 작동

  return(
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? (
        <strong>Loading...</strong> 
      ) : (
        <div>
          <input 
            type="number" 
            value={selected} 
            onChange={onChange} 
            placeholder="USD you have"
          />
          <span></span>
          <select>
          {coins.map((coin)=>(
            <option>
              {coin.name} ({coin.symbol}): {selected ? selected / coin.quotes["USD"].price : 0} {coin.symbol}
            </option>
          ))}
          </select>
        </div>
      )}
    </div> 
  );
}

export default App;
