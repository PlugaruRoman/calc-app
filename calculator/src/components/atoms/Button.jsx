import { React, useContext } from "react";
import appContext from "../../context";

function Button({ num }) {
  const { count, setCount } = useContext(appContext);
  const newFn = () => {
    setCount([...count, num]);
  };
  return (
    <div>
      <button type="submit" onClick={newFn} className="button">
        {num}
      </button>
    </div>
  );
}

export default Button;
