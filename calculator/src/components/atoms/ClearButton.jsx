import { React, useContext } from "react";
import appContext from "../../context";

const ClearButton = () => {
  const { clearCount } = useContext(appContext);

  return (
    <div>
      <button onClick={clearCount} className="clearbutton">
        Clear
      </button>
    </div>
  );
};

export default ClearButton;
