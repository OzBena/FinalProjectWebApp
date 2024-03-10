import React, { useEffect, useState } from "react";
import "./Contest.css";

const Contest = (props) => {
  const [entityValue, setEntityValue] = useState("");
  const [localEntities, setLocalEntities] = useState(props.ContestUserEntities);

  useEffect(() => {
    setLocalEntities(props.ContestUserEntities);
  }, [props.ContestUserEntities]);
  
  const handleEntityClick = (index) => {
    const removedEntity = localEntities[index];
    const newEntities = localEntities.filter((_, i) => i !== index);
    setLocalEntities(newEntities);
    props.removeEntityFromContest(removedEntity, props.ContestName);
    setEntityValue(removedEntity.entity);
  };

  const handleGoBack = () => {
    props.setIsInContest(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (entityValue.trim() === "") {
      console.log("Cannot submit an empty entity.");
      return;
    }

    const isDuplicate = localEntities.some(
      (entity) => entity.entity.trim() === entityValue.trim()
    );

    if (!isDuplicate) {
      const newEntity = { entity: entityValue.trim() };

      setLocalEntities((current) => [...current, newEntity]);

      props.addEntityToContest(newEntity, props.ContestName);
    } else {
      console.log("This entity already exists.");
    }

    setEntityValue("");
  };

  return (
    <div className="contestMainDiv">
      <div className="headerDiv">{props.ContestName}</div>
      <div className="contentDiv">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            marginTop: "25px",
          }}
        >
          <div className="contestDescriptionDiv">
            {props.ContestDescription}
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "20%",
            }}
          >
            <button className="prizeBtn" disabled>
              {props.ContestPrize}$
            </button>
          </div>
        </div>

        {props.IsOpenContest && (
          <div className="suggestedEntities">
            <div>AI Entities:</div>
            {props.suggestedEntities.map((entity, index) => (
              <div className="Sugentity" key={index}>
                {entity}
              </div>
            ))}
          </div>
        )}

        <div className="entitySubmitDiv">
          <form className="formContainer" onSubmit={handleSubmit}>
            <label>Your entity:</label>
            <input
              className="entityInput"
              name="entity"
              value={entityValue}
              onChange={(e) => setEntityValue(e.target.value)}
            />
            <button className="entityInputBtn" type="submit">
              Submit
            </button>
          </form>
        </div>
        <div className="userEntitys">
          {localEntities &&
            localEntities.map((entry, index) => (
              <div
                className="entity"
                key={index}
                onClick={() => handleEntityClick(index)}
              >
                {entry.entity}
              </div>
            ))}
        </div>
      </div>
      <div>
        <button className="goBackBtn" onClick={handleGoBack}>
          Go Back
        </button>
      </div>
    </div>
  );
};

export default Contest;
