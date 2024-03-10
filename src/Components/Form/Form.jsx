import React from "react";
import { useState } from "react";
import "./Form.css";
import FormInput from "../FormInput/FormInput";

const Form = ({ setStage }) => {
  const [values, setValues] = useState({
    username: "",
    workerID: "",
    gender: "",
    country: "",
    city: "",
  });
  const [errors, setErrors] = useState({});

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      label: "Username",
    },
    {
      id: 2,
      name: "workerID",
      type: "text",
      placeholder: "Worker ID",
      label: "Worker ID",
    },
    {
      id: 3,
      name: "gender",
      type: "select",
      options: ["Male", "Female", "Other", "Rather not say"],
      label: "Gender",
    },
    {
      id: 4,
      name: "country",
      type: "text",
      placeholder: "Country",
      label: "Country",
    },
    {
      id: 5,
      name: "city",
      type: "text",
      placeholder: "City",
      label: "City",
    },
  ];

  const validityCheck = () => {
    let newErrors = {};
    if (values.username.trim() === "") {
      newErrors.username = true;
    }
    if (values.workerID.trim() === "") {
      newErrors.workerID = true;
    }
    if (values.gender.trim() === "") {
      newErrors.gender = true;
    }
    if (values.country.trim() === "") {
      newErrors.country = true;
    }
    if (values.city.trim() === "") {
      newErrors.city = true;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validityCheck()) {
      setStage(5);
    }
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="formMainDiv">
      <div className="headerDiv">Fill your Details</div>
      <form onSubmit={handleSubmit}>
        {inputs.map((input) => {
          if (input.type === "select") {
            return (
              <div key={input.id}>
                <div className="labelsContainer">
                  <label>{input.label}</label>
                </div>
                <div className="selectContainer">
                  <select
                    className={`selectInput ${
                      errors[input.name] ? "error" : ""
                    }`}
                    name={input.name}
                    value={values[input.name]}
                    onChange={onChange}
                  >
                    <option value="" disabled hidden>
                      -- Gender --
                    </option>
                    {input.options.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            );
          } else {
            return (
              <FormInput
                key={input.id}
                className={`${errors[input.name] ? "error" : ""}`}
                {...input}
                value={values[input.name]}
                onChange={onChange}
              />
            );
          }
        })}

        <button className="sendBtn" type="submit">Send</button>
      </form>
    </div>
  );
};

export default Form;
