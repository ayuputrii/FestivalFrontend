import React, { useState } from "react";
import "./login.css";
import LoginForm from "./loginForm";

import imgImage from "../assets/svg/img-3.svg";

const Login = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className="container">
        <div className="form-container">
          <span className="close-btn">×</span>
          <div className="form-content-left">
            <img className="form-img" src={imgImage} alt="fotografer" />
          </div>
          {!isSubmitted ? <LoginForm /> : <LoginForm />}
        </div>
      </div>
    </>
  );
};

export default Login;
