import React from "react";
import { Link } from "react-router-dom";
import useForm from "./useForm";
import validate from "../../../helpers/validateCreate";
import "./css/create.css";
const CreateAdmin = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );
  return (
    <>
      <div className="container">
        <div className="form-container">
          <span className="close-btn">×</span>
          <div className="form-content">
            <form onSubmit={handleSubmit} className="form" noValidate>
              <h1>
                Form Data!
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
                <tr>
                  <td className="form-label">Date</td>
                  <input
                    className="form-input"
                    type="date"
                    name="date"
                    value={values.date}
                    onChange={handleChange}
                  />
                  <td className="photo2">
                    <td className="form-label">
                      &nbsp;&nbsp;&nbsp;&nbsp;Photo
                    </td>
                    <input
                      className="form-input"
                      type="file"
                      name="photo"
                      placeholder="Enter photo"
                      value={values.photo}
                      onChange={handleChange}
                    />
                    {errors.title && <p>{errors.title}</p>}
                  </td>
                </tr>
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
              <button className="form-input-btn" type="submit">
                <Link to="/detailadmin" className="bold primary">
                  Create Data
                </Link>
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateAdmin;
