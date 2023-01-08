import React from "react";
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";
import BaseCtrl from "../BaseCtrl";
import { Link } from "react-router-dom";

export default class collegeList extends BaseCtrl {
  constructor() {
    super();
    this.search("College");
  }

  render() {
    return (
      <div className="bg-color">
        <div className="container">
          <h1 className="text-center mb-3">College List</h1>
          <h6 colSpan="2" className={`text-${this.state.txtClr} text-center`}>
            {this.state.message}
          </h6>
          <div className="row row-cols-lg-auto g-3 align-items-center my-4 justify-content-center">
            <div className="col-12">
              <div className="input-group">
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Search by Name"
                  onChange={(ev) => this.changeState(ev)}
                />
              </div>
            </div>
            <div className="col-12">
              <div className="input-group">
                <input
                  type="text"
                  name="address"
                  className="form-control"
                  placeholder="Type your Address"
                  onChange={(ev) => this.changeState(ev)}
                />
              </div>
            </div>
            <div className="col-12">
              <button
                className="btn btn-dark"
                onClick={(ev) => this.search("College")}
              >
                Search
              </button>
            </div>
          </div>
          <Table striped bordered hover responsive variant="dark" size="sm">
            <thead>
              <tr>
                <th className="text-center">Index</th>
                <th className="text-center">ID</th>
                <th className="text-center">Name</th>
                <th className="text-center">Address</th>
                <th className="text-center">City</th>
                <th className="text-center">State</th>
                <th className="text-center">Contact Number</th>
                <th className="text-center" colSpan={2}>
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {this.state.searchList.map((ele, index) => (
                <tr>
                  <td className="text-center">{index + 1}</td>
                  <td className="text-center">{ele.id}</td>
                  <td className="text-center">{ele.name}</td>
                  <td className="text-center">{ele.address}</td>
                  <td className="text-center">{ele.city}</td>
                  <td className="text-center">{ele.state}</td>
                  <td className="text-center">{ele.phoneNo}</td>
                  <td className="text-center">
                    <Link to={"/College/" + ele.id} className="btn btn-light">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-pencil-square"
                        viewBox="0 0 16 16"
                      >
                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                        <path
                          fillRule="evenodd"
                          d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                        />
                      </svg>
                    </Link>
                  </td>
                  <td className="text-center">
                    <button
                      className="btn btn-light"
                      onClick={() => {
                        this.delete("College", ele.id);
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-trash"
                        viewBox="0 0 16 16"
                      >
                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                        <path
                          fillRule="evenodd"
                          d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                        />
                      </svg>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    );
  }
}
