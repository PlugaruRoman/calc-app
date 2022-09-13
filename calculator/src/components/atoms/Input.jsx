import { React, useContext } from "react";
import appContext from "../../context";
const Input = () => {
  const { count, result } = useContext(appContext);

  return (
    <div>
      <div className="display">{result ? result : count}</div>
    </div>
  );
};

export default Input;
