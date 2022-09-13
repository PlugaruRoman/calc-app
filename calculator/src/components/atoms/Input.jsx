import { React, useContext } from "react";
import appContext from "../../context";
const Input = () => {
  const { count } = useContext(appContext);

  return (
    <div>
      <div className="display">{count}</div>
    </div>
  );
};

export default Input;
