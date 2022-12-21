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
            {this.state.list.map((ele, index) => (
              <tr>
                <td className="text-center">{index + 1}</td>
                <td className="text-center">{ele.id}</td>
                <td className="text-center">{ele.name}</td>
                <td className="text-center">{ele.address}</td>
                <td className="text-center">{ele.city}</td>
                <td className="text-center">{ele.state}</td>
                <td className="text-center">{ele.phoneNo}</td>
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
