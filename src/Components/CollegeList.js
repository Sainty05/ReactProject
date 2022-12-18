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
      <div className="container">
        <h1 className="text-center mb-3">College List</h1>
        <h6 colSpan="2" className={`text-${this.state.txtClr} text-center`}>
          {this.state.message}
        </h6>
        <Table striped bordered hover responsive variant="dark">
          <thead>
            <tr>
              <th>Index</th>
              <th>ID</th>
              <th>Name</th>
              <th>Address</th>
              <th>City</th>
              <th>State</th>
              <th>Contact Number</th>
              <th className="text-center" colSpan={2}>
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {this.state.list.map((ele, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>{ele.id}</td>
                <td>{ele.name}</td>
                <td>{ele.address}</td>
                <td>{ele.city}</td>
                <td>{ele.state}</td>
                <td>{ele.phoneNo}</td>
                <td className="text-center">
                <Link to={"/College/" + ele.id} className="btn btn-dark">
                    Edit
                  </Link>
                </td>
                <td className="text-center">
                  <button
                    className="btn btn-dark"
                    onClick={() => {
                      this.delete("College", ele.id);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}
