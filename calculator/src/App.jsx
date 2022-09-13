import React from "react";
import { useState } from "react";
import "./App.css";
import appContext from "./context";
import ControlPanel from "./components/organism/ControlPanel";

function App() {
  const [count, setCount] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (e) => {
    setCount((prev) => prev + e.target);
  };

  const calculate = () => {
    setResult(eval(count.join("")));

    setCount(result);
  };
  return (
    <appContext.Provider value={{ count, setCount, handleClick }}>
      <div className="app">
        <div className="calculator">
          <ControlPanel />
        </div>
        <button onClick={calculate}>resolve</button>
        <div>{result}</div>
      </div>
    </appContext.Provider>
  );
}

export default App;
