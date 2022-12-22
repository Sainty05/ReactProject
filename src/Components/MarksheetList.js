import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import BaseCtrl from "../BaseCtrl";
import { Link } from "react-router-dom";
import Table from "react-bootstrap/Table";

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
        <Table striped bordered hover responsive variant="dark" size="sm">
          <thead>
            <tr>
              <th className="text-center">Index</th>
              <th className="text-center">ID</th>
              <th className="text-center">Student Id</th>
              <th className="text-center">Roll No.</th>
              <th className="text-center">Name</th>
              <th className="text-center">Physics</th>
              <th className="text-center">Chemistry</th>
              <th className="text-center">Maths</th>
              <th className="text-center">Total Marks</th>
              <th className="text-center">Percentage</th>
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
                <td className="text-center">{ele.studentId}</td>                
                <td className="text-center">{ele.rollNo}</td>
                <td className="text-center">{ele.name}</td>
                <td className="text-center">{ele.physics}</td>
                <td className="text-center">{ele.chemistry}</td>
                <td className="text-center">{ele.maths}</td>
                <td className="text-center">{ele.physics + ele.chemistry + ele.maths}</td>
                <td className="text-center">
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
