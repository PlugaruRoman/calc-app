import { React, useContext } from "react";
import appContext from "../../context";

const Button = ({ num }) => {
  const { count, setCount } = useContext(appContext);
  const newFn = () => {
    setCount([...count, num]);
  };
  return (
    <div>
      <button onClick={newFn} className="button">
        {num}
      </button>
    </div>
  );
};

export default Button;
