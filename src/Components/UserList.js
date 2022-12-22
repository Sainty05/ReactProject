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
        <Table striped bordered hover responsive variant="dark" size="sm">
          <thead>
            <tr>
              <th className="text-center">Index</th>
              <th className="text-center">ID</th>
              <th className="text-center">Role Id</th>
              <th className="text-center">Full Name</th>
              <th className="text-center">Login Id</th>
              <th className="text-center">Password</th>
              <th className="text-center">Last Login</th>
              <th className="text-center">Creation Date</th>
              <th className="text-center">Modification Date</th>
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
                <td className="text-center">{ele.roleId}</td>
                <td className="text-center">{ele.firstName + " " + ele.lastName}</td>
                <td className="text-center">{ele.loginId}</td>
                <td className="text-center">{ele.password}</td>
                <td className="text-center">{new Date(ele.lastLogin).toLocaleString()}</td>
                <td className="text-center">{new Date(ele.createdDatetime).toDateString()}</td>
                <td className="text-center">{new Date(ele.modifiedDatetime).toDateString()}</td>
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
