/* eslint-disable no-eval */
import { React, useState } from "react";
import appContext from "./context";
import ControlPanel from "./components/molecules/ControlPanel";
import "./App.scss";

const App = () => {
  const [count, setCount] = useState("");

  const onButtonClick = (e) => {
    setCount((prev) => prev + e);
  };

  const calculate = () => {
    setCount(eval(count));
  };

  const clearCount = () => {
    setCount("");
  };

  return (
    <appContext.Provider
      value={{ clearCount, calculate, onButtonClick, count, setCount }}
    >
      <div className="app">
        <div className="calculator">
          <ControlPanel />
        </div>
      </div>
    </appContext.Provider>
  );
};

export default App;
