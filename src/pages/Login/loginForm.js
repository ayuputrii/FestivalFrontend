import React from "react";
import { Link } from "react-router-dom";
import validate from "../../helpers/validation";
import useForm from "./useForm";
import "./login.css";

const LoginForm = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  return (
    <div className="form-content-right">
      <form onSubmit={handleSubmit} className="form" noValidate>
        <h1>Login Your Account!</h1>
        <div className="form-inputs">
          <label className="form-label">Email</label>
          <input
            className="form-input"
            type="text"
            name="email"
            placeholder="Enter your email"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className="form-inputs">
          <label className="form-label">Password</label>
          <input
            className="form-input"
            type="password"
            name="password"
            placeholder="Enter your password"
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <button className="form-input-btn" type="submit">
          <Link to="/detailadmin" className="bold primary">
            Login
          </Link>
        </button>
        <span className="form-input-login">
          You don't have account?
          <Link to="/" className="bold primary">
            Sign Up
          </Link>
        </span>
      </form>
    </div>
  );
};

export default LoginForm;
