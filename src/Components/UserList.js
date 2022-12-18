import React from "react";
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";
import BaseCtrl from "../BaseCtrl";
import { Link } from "react-router-dom";

export default class UserList extends BaseCtrl {
  constructor() {
    super();
    this.search("User");
  }

  render() {
    return (
      <div className="container">
        <h1 className="text-center mb-3">User List</h1>
        <h6 colSpan="2" className={`text-${this.state.txtClr} text-center`}>
          {this.state.message}
        </h6>
        <Table striped bordered hover responsive variant="dark">
          <thead>
            <tr>
              <th>Index</th>
              <th>ID</th>
              <th>Role Id</th>
              <th>Full Name</th>
              <th>Login Id</th>
              <th>Password</th>
              <th>Last Login</th>
              <th>Creation Date</th>
              <th>Modification Date</th>
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
                <td>{ele.roleId}</td>
                <td>{ele.firstName + " " + ele.lastName}</td>
                <td>{ele.loginId}</td>
                <td>{ele.password}</td>
                <td>{new Date(ele.lastLogin).toLocaleString()}</td>
                <td>{new Date(ele.createdDatetime).toDateString()}</td>
                <td>{new Date(ele.modifiedDatetime).toDateString()}</td>
                <td className="text-center">
                  <Link to={"/User/" + ele.id} className="btn btn-dark">
                    Edit
                  </Link>
                </td>
                <td className="text-center">
                  <button
                    className="btn btn-dark"
                    onClick={() => {
                      this.delete("User",ele.id);
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
