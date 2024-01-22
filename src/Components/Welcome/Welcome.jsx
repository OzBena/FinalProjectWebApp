import React, { useState } from "react";
import "./welcome.css";

const Welcome = (props) => {
  const [confirmed, setConfirmed] = useState(false);

  return (
    <div className="wlcomeContainer">
      <div>
        <h2>Welcome</h2>
      </div>
      <div>
        <p>
          Lorem ipsum dolor sit amet, pri lobortis delicata at, nam elitr
          explicari gloriatur et. Ne his elitr commune, quo te summo error. In
          graecis hendrerit usu, cum ea elit splendide expetendis. Per ea dolor
          civibus mnesarchum.
        </p>
      </div>
      <div>
        <input type="checkbox"  onClick={() => setConfirmed(!confirmed)} /> i
        confirm
      </div>
      <div>
        <button onClick={() => props.setStage(2)} disabled={!confirmed} >Aprrove</button>
      </div>
    </div>
  );
};

export default Welcome;
