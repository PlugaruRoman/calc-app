/* eslint-disable no-eval */
import { React, useState, useMemo } from "react";
import appContext from "./context";
import "./App.scss";
import ControlPanel from "./components/organism/ControlPanel";

function AppContextProvider({ children }) {
  const [count, setCount] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (e) => {
    setCount((prev) => prev + e.target);
  };

  const calculate = () => {
    setCount(setResult(eval(count.join(""))));
  };

  const clearCount = () => {
    setCount("");
    setResult("");
  };

  const value = useMemo(
    () => ({
      count,
      setCount,
      result,
      setResult,
      handleClick,
      clearCount,
      calculate,
    }),
    [count]
  );

  return <appContext.Provider value={value}>{children}</appContext.Provider>;
}
function App() {
  return (
    <AppContextProvider>
      <div className="app">
        <div className="calculator">
          <ControlPanel />
        </div>
      </div>
    </AppContextProvider>
  );
}

export default App;
