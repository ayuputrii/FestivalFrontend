import React, { useState } from "react";
import { Link } from "react-router-dom";
import useForm from "./useForm";
import validate from "../../../helpers/validateCreate";
import "./css/update.css";

const UpdateAdmin = ({ submitForm }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );
  return (
    <>
      <div className="container">
        <div className="form-container">
          <span className="close-btn">&nbsp;&nbsp;×</span>
          <div className="form-content-left">
            <form onSubmit={handleSubmit} className="form" noValidate>
              <h1>
                Form Edit!
                <tr>
                  <Link to="/detailadmin">
                    <button className="btn-add">Detail</button>
                  </Link>
                </tr>
              </h1>
              <div className="form-inputs">
                <label className="form-label">Title</label>
                <input
                  className="form-input"
                  type="text"
                  name="title"
                  placeholder="Enter title"
                  value={values.title}
                  onChange={handleChange}
                />
                {errors.title && <p>{errors.title}</p>}
              </div>
              <div className="form-inputs">
                <label className="form-label">Description</label>
                <input
                  className="form-input"
                  type="text"
                  name="description"
                  placeholder="Enter description"
                  value={values.description}
                  onChange={handleChange}
                />
                {errors.description && <p>{errors.description}</p>}
              </div>
              <div className="form-inputs">
                <label className="form-label">Date</label>
                <input
                  className="form-input"
                  type="date"
                  name="date"
                  value={values.date}
                  onChange={handleChange}
                />
              </div>
              <div className="form-inputs">
                <label className="form-label">Category</label>
                <input
                  className="form-input"
                  type="text"
                  name="category"
                  placeholder="Enter category"
                  value={values.category}
                  onChange={handleChange}
                />
                {errors.category && <p>{errors.category}</p>}
              </div>
              <div className="form-inputs">
                <label className="form-label">Photographer</label>
                <input
                  className="form-input"
                  type="text"
                  name="photographer"
                  placeholder="Enter your name"
                  value={values.photographer}
                  onChange={handleChange}
                />
                {errors.photographer && <p>{errors.photographer}</p>}
              </div>
              <Link to="/detailadmin">
                <button className="form-input-btn2" type="submit">
                  Update
                </button>
              </Link>
            </form>
          </div>
          <div className="form-content-right">
            <form className="form" noValidate>
              <h1>Form Edit Photo!</h1>
              <div className="form-inputs">
                <label className="form-label">Photo</label>
                <input
                  className="form-input"
                  type="file"
                  name="photo"
                  placeholder="Update Photo"
                  value={values.photo}
                  onChange={handleChange}
                />
                {errors.photo && <p>{errors.photo}</p>}
              </div>
              <Link to="/detailadmin">
                <button className="form-input-btn2" type="submit">
                  Update
                </button>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateAdmin;
