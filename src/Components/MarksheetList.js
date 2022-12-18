import React from "react";
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";
import BaseCtrl from "../BaseCtrl";
import { Link } from "react-router-dom";

export default class MarksheetList extends BaseCtrl {
  constructor(props) {
    super(props);
    this.search("Marksheet");
  }

  render() {
    return (
      <div className="container">
        <h1 className="text-center mb-3">Marksheet List</h1>
        <h6 colSpan="2" className={`text-${this.state.txtClr} text-center`}>
          {this.state.message}
        </h6>
        <Table striped bordered hover responsive variant="dark">
          <thead>
            <tr>
              <th>Index</th>
              <th>ID</th>
              <th>Student Id</th>
              <th>Roll No.</th>
              <th>Name</th>
              <th>Physics</th>
              <th>Chemistry</th>
              <th>Maths</th>
              <th>Total Marks</th>
              <th>Percentage</th>
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
                <td>{ele.rollNo}</td>
                <td>{ele.name}</td>
                <td>{ele.physics}</td>
                <td>{ele.chemistry}</td>
                <td>{ele.maths}</td>
                <td>{ele.physics + ele.chemistry + ele.maths}</td>
                <td>
                  {((ele.physics + ele.chemistry + ele.maths) / 3).toFixed(2)}%
                </td>
                <td className="text-center">
                  <Link to={"/Marksheet/" + ele.id} className="btn btn-dark">
                    Edit
                  </Link>
                </td>
                <td className="text-center">
                  <button
                    className="btn btn-dark"
                    onClick={() => {
                      this.delete("Marksheet", ele.id);
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
