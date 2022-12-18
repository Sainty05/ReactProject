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
      <div className="container">
        <h1 className="text-center mb-3">
          {this.props.match.params.pid ? "Update Student" : "Add Student"}
        </h1>
        <table className="table table-striped table-warning align-middle">
          <tbody>
            <tr>
              <td
                colSpan="2"
                className={`text-${this.state.txtClr} text-center`}
              >
                {this.state.message}
              </td>
            </tr>
            <tr>
              <td>First Name: </td>
              <td>
                <input
                  type="text"
                  className="form-control"
                  name="firstName"
                  value={this.state.firstName}
                  onChange={(ev) => this.changeState(ev)}
                />
              </td>
            </tr>
            <tr>
              <td>Last Name: </td>
              <td>
                <input
                  type="text"
                  className="form-control"
                  name="lastName"
                  value={this.state.lastName}
                  onChange={(ev) => this.changeState(ev)}
                />
              </td>
            </tr>
            <tr>
              <td>College ID: </td>
              <td>
                <input
                  type="text"
                  className="form-control"
                  name="collegeId"
                  value={this.state.collegeId}
                  onChange={(ev) => this.changeState(ev)}
                />
              </td>
            </tr>
            <tr>
              <td>College Name: </td>
              <td>
                <input
                  type="text"
                  className="form-control"
                  name="collegeName"
                  value={this.state.collegeName}
                  onChange={(ev) => this.changeState(ev)}
                />
              </td>
            </tr>
            <tr>
              <td>Contact No: </td>
              <td>
                <input
                  type="text"
                  className="form-control"
                  name="mobileNo"
                  value={this.state.mobileNo}
                  onChange={(ev) => this.changeState(ev)}
                />
              </td>
            </tr>
            <tr>
              <td>Email ID: </td>
              <td>
                <input
                  type="text"
                  className="form-control"
                  name="email"
                  value={this.state.email}
                  onChange={(ev) => this.changeState(ev)}
                />
              </td>
            </tr>
            <tr>
              <td colSpan="2">
                <button
                  className="myBtn"
                  onClick={(ev) => this.save("Student", ev)}
                >
                  {this.props.match.params.pid
                    ? "Update Student"
                    : "Add Student"}
                </button>
              </td>
            </tr>
            <tr>
              <td colSpan="2">
                <button className="myBtn" onClick={(ev) => this.reset(ev)}>
                  Reset
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
