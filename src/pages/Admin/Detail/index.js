import React from "react";
import "./style.css";
import SearchIcon from "../../assets/icons/search.svg";
import { Table } from "react-bootstrap";
import imgImage from "../../assets/svg/img-3.svg";
import { Link } from "react-router-dom";

const Detail = () => {
  return (
    <>
      <div className="container d-flex mt-5">
        <div className="form-container">
          <div className="input">
            <div className="title data-title bold d-none d-sm-block">
              Data information
              <tr>
                <td>
                  <Link to="/createadmin" className="bold primary">
                    <button className="form-input-btn3" type="submit">
                      Add Data
                    </button>
                  </Link>
                  <Link to="/login" className="bold primary">
                    <button className="form-input-btn2" type="submit">
                      Logout
                    </button>
                  </Link>
                </td>
              </tr>
            </div>
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
                      <div>
                        <Link to="/updateadmin">
                          <td className="btnEdit">Edit</td>
                        </Link>
                        <Link to="/delete">
                          <td className="btnDelete">Delete</td>
                        </Link>
                      </div>
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

export default Detail;
