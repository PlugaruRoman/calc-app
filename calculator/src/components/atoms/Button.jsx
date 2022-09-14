import { React, useContext } from "react";
import appContext from "../../context";

const Button = ({ num }) => {
  const { onButtonClick } = useContext(appContext);

  return (
    <div>
      <button onClick={() => onButtonClick(num)} className="button">
        {num}
      </button>
    </div>
  );
};

export default Button;
