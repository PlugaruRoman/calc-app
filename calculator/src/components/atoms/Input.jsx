import { React, useContext } from "react";
import appContext from "../../context";

function Input() {
  const { count, result } = useContext(appContext);

  return (
    <div>
      <div className="display">{result || count}</div>
    </div>
  );
}

export default Input;
