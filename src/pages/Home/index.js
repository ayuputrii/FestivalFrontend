import React from "react";
import "./home.css";
import SearchIcon from "../assets/icons/search.svg";
import { Table } from "react-bootstrap";
import imgImage from "../assets/svg/img-3.svg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="container d-flex mt-5">
        <div className="title text bold d-none d-sm-block">
          Data information
          <tr>
            <td>
              <Link to="/login" className="bold primary">
                <button className="form-input-btn1" type="submit">
                  Logout
                </button>
              </Link>
            </td>
          </tr>
        </div>
        <div className="form-container">
          <div className="input">
            <img className="search" src={SearchIcon} alt="" />
            <input
              className="form-home"
              name="q"
              type="search"
              autoComplete="off"
              placeholder="Search here"
            />
            <Table responsive="lg list">
              <thead>
                <tr>
                  <th>
                    <div className="avatar">
                      <img
                        className="imageImg"
                        style={{ borderRadius: "10px" }}
                        width="60px"
                        height="60px"
                        src={imgImage}
                        alt=""
                      />
                      <div className="photograph">
                        <td>Photograph</td>
                      </div>
                    </div>
                  </th>
                  <div>
                    <div className="detailData">
                      <tr>
                        <td>Description</td>
                        <td>:</td>
                        <td>&nbsp; Description</td>
                      </tr>
                      <tr>
                        <td>Date </td>
                        <td>:</td>
                        <td>&nbsp; Date</td>
                      </tr>
                      <tr>
                        <td>Category</td>
                        <td>:</td>
                        <td>&nbsp; Category</td>
                      </tr>
                    </div>
                  </div>
                </tr>
              </thead>
            </Table>
            <Table responsive="lg list">
              <thead>
                <tr>
                  <th>
                    <div className="avatar">
                      <img
                        className="imageImg"
                        style={{ borderRadius: "10px" }}
                        width="60px"
                        height="60px"
                        src={imgImage}
                        alt=""
                      />
                      <div className="photograph">
                        <td>Photograph</td>
                      </div>
                    </div>
                  </th>
                  <div>
                    <div className="detailData">
                      <tr>
                        <td>Description</td>
                        <td>:</td>
                        <td>&nbsp; Description</td>
                      </tr>
                      <tr>
                        <td>Date </td>
                        <td>:</td>
                        <td>&nbsp; Date</td>
                      </tr>
                      <tr>
                        <td>Category</td>
                        <td>:</td>
                        <td>&nbsp; Category</td>
                      </tr>
                    </div>
                  </div>
                </tr>
              </thead>
            </Table>
          </div>
        </div>
        );
      </div>
    </>
  );
};

export default Home;
