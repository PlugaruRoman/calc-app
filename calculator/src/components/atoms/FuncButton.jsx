import { React, useContext } from "react";
import appContext from "../../context";

const FuncButton = ({ num }) => {
  const { calculate, onButtonClick } = useContext(appContext);

  return (
    <div>
      <button
        onClick={num !== "=" ? () => onButtonClick(num) : calculate}
        className="funcbutton"
      >
        {num}
      </button>
    </div>
  );
};

export default FuncButton;
