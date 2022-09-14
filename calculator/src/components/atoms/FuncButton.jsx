import { React, useContext } from "react";
import appContext from "../../context";

function FuncButton({ num }) {
  const { count, setCount, calculate } = useContext(appContext);

  const newFn = () => {
    setCount([...count, num]);
  };

  return (
    <div>
      <button
        type="submit"
        onClick={num === "=" ? calculate : newFn}
        className="funcbutton"
      >
        {num}
      </button>
    </div>
  );
}

export default FuncButton;
