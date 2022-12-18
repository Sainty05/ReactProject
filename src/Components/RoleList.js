import React from "react";
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";
import BaseCtrl from "../BaseCtrl";
import { Link } from "react-router-dom";

export default class RoleList extends BaseCtrl {
  constructor() {
    super();
    this.search("Role");
  }

  render() {
    return (
      <div className="container mainBody">
        <h1 className="text-center mb-3">Role List</h1>
        <h6 colSpan="2" className={`text-${this.state.txtClr} text-center`}>
          {this.state.message}
        </h6>
        <Table striped bordered hover responsive variant="dark">
          <thead>
            <tr>
              <th>Index</th>
              <th>ID</th>
              <th>Name</th>
              <th>Created By</th>
              <th>Creation Date</th>
              <th>Modified By</th>
              <th>Modification Date</th>
              <th>Description</th>
              <th>Status</th>
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
                <td>{ele.createdBy}</td>
                <td>{new Date(ele.createdDatetime).toDateString()}</td>
                <td>{ele.modifiedBy}</td>
                <td>{new Date(ele.modifiedDatetime).toDateString()}</td>
                <td>{ele.discription}</td>
                <td>{ele.status}</td>
                <td className="text-center">
                <Link to={"/Role/" + ele.id} className="btn btn-dark">
                    Edit
                  </Link>
                </td>
                <td className="text-center">
                  <button
                    className="btn btn-dark"
                    onClick={() => {
                      this.delete("Role", ele.id);
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
