import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("useEffect");
  }, [count]);

  const handleClick = () => {
    console.log("click");
    setCount(count + 1);
  };

  return (
    <div className="App">
      <h1>Counter</h1>
      <h1>{count}</h1>
      <button className="my-buttun" onClick={handleClick}>+</button>
    </div>
  );
}

export default App;
