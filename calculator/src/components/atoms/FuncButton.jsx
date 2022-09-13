import { React, useContext } from "react";
import appContext from "../../context";

const FuncButton = ({ num }) => {
  const { count, setCount } = useContext(appContext);
  const newFn = () => {
    setCount([...count, num]);
  };
  return (
    <div>
      <button onClick={newFn} className="funcbutton">
        {num}
      </button>
    </div>
  );
};

export default FuncButton;
