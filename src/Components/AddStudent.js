import React from "react";
import BaseCtrl from "../BaseCtrl";

export default class AddStudent extends BaseCtrl {
  constructor(props) {
    super(props);
    if (this.props.match.params.pid) {
      this.edit("Student");
    }
  }
  render() {
    return (
      <div className="bg-color">
        <div className="container w-50">
          <h1 className="text-center mb-3">
            {this.props.match.params.pid ? "Update Student" : "Add Student"}
          </h1>
          <table className="table table-striped-columns table-sm table-secondary align-middle">
            <tbody>
              <tr>
                <td
                  colSpan="3"
                  className={`text-${this.state.txtClr} text-center txtHgt`}
                >
                  {this.state.message}
                </td>
              </tr>
              <tr>
                <th className="px-3">First Name: </th>
                <td>
                  <input
                    type="text"
                    className="form-control"
                    name="firstName"
                    value={this.state.firstName}
                    onChange={(ev) => this.changeState(ev)}
                  />
                </td>
                <td className="text-danger">
                  {this.state.inputError.firstName}
                </td>
              </tr>
              <tr>
                <th className="px-3">Last Name: </th>
                <td>
                  <input
                    type="text"
                    className="form-control"
                    name="lastName"
                    value={this.state.lastName}
                    onChange={(ev) => this.changeState(ev)}
                  />
                </td>
                <td className="text-danger">
                  {this.state.inputError.lastName}
                </td>
              </tr>
              <tr>
                <th className="px-3">College ID: </th>
                <td>
                  <input
                    type="text"
                    className="form-control"
                    name="collegeId"
                    value={this.state.collegeId}
                    onChange={(ev) => this.changeState(ev)}
                  />
                </td>
                <td className="text-danger">
                  {this.state.inputError.collegeId}
                </td>
              </tr>
              <tr>
                <th className="px-3">College Name: </th>
                <td>
                  <input
                    type="text"
                    className="form-control"
                    name="collegeName"
                    value={this.state.collegeName}
                    onChange={(ev) => this.changeState(ev)}
                  />
                </td>
                <td className="text-danger">
                  {this.state.inputError.collegeName}
                </td>
              </tr>
              <tr>
                <th className="px-3">Contact No: </th>
                <td>
                  <input
                    type="text"
                    className="form-control"
                    name="mobileNo"
                    value={this.state.mobileNo}
                    onChange={(ev) => this.changeState(ev)}
                  />
                </td>
                <td className="text-danger">
                  {this.state.inputError.mobileNo}
                </td>
              </tr>
              <tr>
                <th className="px-3">Email ID: </th>
                <td>
                  <input
                    type="text"
                    className="form-control"
                    name="email"
                    value={this.state.email}
                    onChange={(ev) => this.changeState(ev)}
                  />
                </td>
                <td className="text-danger">{this.state.inputError.email}</td>
              </tr>
              <tr>
                <td colSpan="3" className="text-center">
                  <button
                    className="btn btn-dark"
                    onClick={() => this.save("Student")}
                  >
                    {this.props.match.params.pid
                      ? "Update Student"
                      : "Add Student"}
                  </button>
                </td>
              </tr>
              <tr>
                <td colSpan="3" className="text-center">
                  <button
                    className="btn btn-dark"
                    onClick={(ev) => this.reset("Student")}
                  >
                    Reset
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
