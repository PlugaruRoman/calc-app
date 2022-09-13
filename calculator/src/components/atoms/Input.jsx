import { React, useContext } from "react";
import appContext from "../../context";
const Input = () => {
  const { count, result, clearCount } = useContext(appContext);

  return (
    <div>
      <div onClick={() => clearCount()} className="display">
        {result ? result : count}
      </div>
    </div>
  );
};

export default Input;
