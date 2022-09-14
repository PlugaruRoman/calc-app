import { React, useContext } from "react";
import ClearButton from "../atoms/ClearButton";
import Button from "../atoms/Button";
import store from "../../store";
import FuncButton from "../atoms/FuncButton";
import appContext from "../../context";

const ControlPanel = () => {
  const { count } = useContext(appContext);

  return (
    <div className="panel">
      <div className="inputpanel">
        <div className="display">{count}</div>
      </div>
      <div className="buttonpanel">
        <div className="leftbutton">
          <div className="buttons">
            <ClearButton />
            {store.buttons.map((el) => (
              <Button key={el} num={el} />
            ))}
          </div>
        </div>
        <div className="rightbutton">
          <div className="buttons">
            {store.funcButtons.map((el) => (
              <FuncButton key={el} num={el} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ControlPanel;
