import { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  const asyncIncrement = () => {
    setTimeout(() => {
      setCount((prevCount)=>prevCount +1);
    }, 3000);
  };
  return (
    <div>
      <p> count:{count}</p>
      <button onClick={increment}>increment</button>
      <button onClick={asyncIncrement}>async Increment</button>
    </div>
  );
}

export default App;
