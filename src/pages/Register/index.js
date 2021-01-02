import React from "react";
import "./register.css";
import RegisterForm from "./registerForm";
import imgImage from "../assets/svg/login.svg";

const Register = () => {
  return (
    <>
      <div className="container">
        <div className="form-container">
          <span className="close-btn">×</span>
          <div className="form-content-left">
            <img className="form-img" src={imgImage} alt="fotografer" />
          </div>
          <RegisterForm />
        </div>
      </div>
    </>
  );
};

export default Register;
