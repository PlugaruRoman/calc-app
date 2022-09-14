import React from "react";
import Input from "../atoms/Input";
import MainButtons from "../molecules/MainButtons";
import FuncButtons from "../molecules/FuncButtons";

function ControlPanel() {
  return (
    <div className="panel">
      <div className="inputpanel">
        <Input />
      </div>
      <div className="buttonpanel">
        <div className="leftbutton">
          <MainButtons />
        </div>
        <div className="rightbutton">
          <FuncButtons />
        </div>
      </div>
    </div>
  );
}

export default ControlPanel;
