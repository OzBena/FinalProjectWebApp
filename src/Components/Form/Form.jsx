import React from "react";
import { useState } from "react";
import "./Form.css";
import FormInput from "../FormInput/FormInput";
import Model from "../Popup/Model";

const Form = ({ setUserData }) => {
  const [pop, setPop] = useState(false);
  const [values, setValues] = useState({
    username: "",
    email: "",
    gender: "",
    password: "",
    confirmPassword: "",
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      label: "username",
    },
    {
      id: 2,
      name: "email",
      type: "text",
      placeholder: "Email",
      label: "email",
    },
    {
      id: 3,
      name: "gender",
      type: "select",
      options: ["Male", "Female", "Other"],
      label: "Gender",
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Password",
      label: "Password",
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      placeholder: "ConfirmPassword",
      label: "ConfirmPassword",
    },
  ];

  const validityCheck = () => {
    let errorString = "Please enter:";
    if (values.username.trim() === "") {
      errorString += "\nusername ";
    }
    if (values.email.trim() === "") {
      errorString += "\nemail ";
    }
    if (values.gender.trim() === "") {
      errorString += "\ngender ";
    }
    if (values.password.trim() === "") {
      errorString += "\npassword ";
    }
    if (values.confirmPassword.trim() === "") {
      errorString += "\nconfirmPassword ";
    }
    if (errorString === "Please enter:") {
      return true;
    } else {
      console.log(errorString);
      return false;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPop(!pop)
    if (validityCheck()) {
      console.log(values);
      setUserData(values);
    }
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="">
      <h1>regisretion</h1>

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
                    className="selectInput"
                    name={input.name}
                    value={values[input.name]}
                    onChange={onChange}
                    defaultValue=""
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
                {...input}
                value={values[input.name]}
                onChange={onChange}
              />
            );
          }
        })}

        <button type="submit">Submit</button>
        {pop ? <Model /> : null}
      </form>
    </div>
  );
};

export default Form;
