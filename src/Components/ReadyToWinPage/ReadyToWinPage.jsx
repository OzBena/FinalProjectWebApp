import React from "react";
import './ReadyToWinPage.css'

const ReadyToWinPage = (props) => {
  return (
    <div className="readyToWinMainDiv">
      <div className="RTWheaderDiv"> Ready To Win?</div>
      
      <div className="RTWcontentDiv">
        <p>
          Welcome to our Crowdsourcing Naming Contests Platform. Here, you're
          invited to participate in contests designed to find unique names for
          various companies and products. Each contest presents an opportunity
          not only to outdo fellow participants but also to exceed the
          creativity of AI-generated names, including those from platforms like
          chat GPT.
        </p>

        <h2 style={{ color: "green" }}>Key Points:</h2>
        <ul>
          <li>
            <strong>Objective:</strong> Your goal is to craft names that are
            more catchy, memorable, and original than both your{" "}
            <span style={{ color: "blue" }}>
              competitors and AI suggestions
            </span>
            .
          </li>
          <li>
            <strong>Prizes:</strong> Specific rewards are detailed alongside
            each contest, reflecting the challenge's uniqueness.
          </li>
          <li>
            <strong>Conditions:</strong> Contests vary in their requirements and
            rewards. Some offer insights into AI proposals to inspire your
            creativity.
          </li>
          <li>
            <strong>Time Management:</strong>{" "}
            <span style={{ color: "blue" }}>You have 5 minutes </span>to
            allocate across contests as you see fit.
          </li>
        </ul>

        <p>
          Embark on this journey with the aim to showcase human creativity's
          superiority over AI.
        </p>
        <p>
          <strong>
            {" "}
            <span style={{ color: "blue" }}> Good luck!</span>
          </strong>
        </p>
      </div>
      <div className="actionSection">
        <button onClick={() => props.setStage(3)} className="approveBtn">
          Continue
        </button>
      </div>
    </div>
  );
};

export default ReadyToWinPage;
