import React from "react";
import "./textContainer.css";

const TextContainer = (props) => {
  const createMarkup = (htmlContent) => {
    return { __html: htmlContent };
  };

  return (
    <div className="textContainerDiv">
      <div className="textHeader">
        <h2>{props.header}</h2>
      </div>
      <div
        className="textContainerContent"
        dangerouslySetInnerHTML={createMarkup(props.content)}
      ></div>
    </div>
  );
};

export default TextContainer;
