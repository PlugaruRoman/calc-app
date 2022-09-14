import { React, useContext } from "react";
import appContext from "../../context";

function ClearButton() {
  const { clearCount } = useContext(appContext);

  return (
    <div>
      <button type="submit" onClick={clearCount} className="clearbutton">
        Clear
      </button>
    </div>
  );
}

export default ClearButton;
