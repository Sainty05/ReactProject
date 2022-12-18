import React from "react";
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";
import BaseCtrl from "../BaseCtrl";
import { Link } from "react-router-dom";

export default class StudentList extends BaseCtrl {
  constructor() {
    super();
    this.search("Student");
  }

  render() {
    return (
      <div className="container">
        <h1 className="text-center mb-3">Students List</h1>
        <h6 colSpan="2" className={`text-${this.state.txtClr} text-center`}>
          {this.state.message}
        </h6>
        <Table striped bordered hover responsive variant="dark">
          <thead>
            <tr>
              <th>Index</th>
              <th>ID</th>
              <th>Full Name</th>
              <th>Registration Date</th>
              <th>Contact No.</th>
              <th>Email</th>
              <th>College Id</th>
              <th>College Name</th>
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
                <td>{ele.firstName + " " + ele.lastName}</td>
                <td>{new Date(ele.createdDatetime).toDateString()}</td>
                <td>{ele.mobileNo}</td>
                <td>{ele.email}</td>
                <td>{ele.collegeId}</td>
                <td>{ele.collegeName}</td>
                <td className="text-center">
                  <Link to={"/Student/" + ele.id} className="btn btn-dark">
                    Edit
                  </Link>
                </td>
                <td className="text-center">
                  <button
                    className="btn btn-dark"
                    onClick={() => {
                      this.delete("Student",ele.id);
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
