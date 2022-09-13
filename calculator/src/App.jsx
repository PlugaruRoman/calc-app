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

  const clearCount = () => {
    setCount("");
    setResult("");
  };

  const calculate = () => {
    setResult(eval(count.join("")));
  };

  return (
    <appContext.Provider
      value={{ count, setCount, handleClick, calculate, result, clearCount }}
    >
      <div className="app">
        <div className="calculator">
          <ControlPanel />
        </div>
      </div>
    </appContext.Provider>
  );
}

export default App;
