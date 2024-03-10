import React, { useState } from "react";
import "./welcome.css";

const Welcome = (props) => {
  const [confirmed, setConfirmed] = useState(false);

  return (
    <div className="WelcomMainDiv">
      <div className="headerDiv">Welcome</div>
      <div className="WcontentDiv">
        <p>Informed consent to participate in a study:</p>
        <ol>
          <li>You are about to participate in a decision-making study.</li>
          <li>During the study, you will be presented with several web pages, and you will be asked to perform several tasks and answer several questions (or alternative activities).</li>
          <li>You can withdraw your participation at any time or refuse to answer any question; however, participants who withdraw before completing any task will not receive credit for their participation.</li>
          <li>Upon completion of the study, you will reach a completion page in which you will receive a verification code. This code will verify that you completed the study in Amazon Mechanical Turk (or an alternative platform) so that you will receive credit for your participation.</li>
          <li>Confidentiality as to the identity of each participant is guaranteed, and only summary data will be published. It is impossible to connect the personal details of the participant with the answers and data provided during the study.</li>
          <li>There is no time limit for completing the study, which should take about 20 minutes (or an alternative duration).</li>
          <li>The study has been approved by Ben-Gurion University’s ethics committee.</li>
          <li>If you have any questions about the study, please email Prof. Lior Fink from Ben-Gurion University at finkl@bgu.ac.il</li>
          <li>Please check the following box to continue:</li>
        </ol>
        <input
          type="checkbox"
          onChange={() => setConfirmed(!confirmed)}
          id="confirm"
          name="confirm"
          checked={confirmed} 
        />
        <label htmlFor="confirm"> I hereby confirm that I have understood the above and freely give my consent to participate in this study</label>
      </div>
      <div>
        <button
          onClick={() => props.setStage(2)}
          disabled={!confirmed}
          className="approveBtn"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default Welcome;
