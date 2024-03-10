import React from "react";
import "./model.css";
import { X } from "lucide-react";

const Model = (props) => {
  return (
    <div className="popupContainer">
      <div className="popupWindow">
        <div className="popupHeader">
          <button className="exitBtn">
            <X />
          </button>
        </div>
        <div className="popupContent">
          <h2>Welcome</h2>
          <p className="participationCodeText">
            Your participation code: Y34Q11T8
          </p>
          <div className="btnContainer">
            <button name="CompleteBtn" className="popupBtn" onClick={props.handlePopUp}>
              Complete
            </button>
            <button name="GoOutBtn" className="popupBtn" onClick={props.handlePopUp}>
              Go Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Model;
