import React from "react";
import "./ContestsPage.css";

const ContestBar = (props) => {
  const handleContestClick = () => {
    props.setIsInContest(true);
  };

  return (
    <div className="ContestBar">
      <div className="btnDiv">
        <button className="contestBtn" onClick={handleContestClick}>
          {props.ContestName}
        </button>
      </div>
      <div className="detailsDiv">
        <div style={{width:"50%"}}>{props.ContestPrize}$</div>
        <div style={{width:"50%"}}>{props.IsOpenContest ? "Open" : "Close"} Contest</div>
      </div>
    </div>
  );
};

export default ContestBar;
