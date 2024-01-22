import React from "react";
import "./formInput.css";

const FormInput = (props) => {
  const { label, onChange, id, ...inputProps } = props;
  return (
    <div className="formInput">
      <div className="labelsContainer">
        {" "}
        <label>{label}:</label>
      </div>
      <div className="inputsContainer">
        {" "}
        <input {...inputProps} onChange={onChange} />
      </div>
    </div>
  );
};

export default FormInput;
