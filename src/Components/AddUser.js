import React from "react";
import BaseCtrl from "../BaseCtrl";

export default class AddUser extends BaseCtrl {
  constructor(props) {
    super(props);
    if (this.props.match.params.pid) {
      this.edit("User");
    }
  }
  render() {
    return (
      <div>
        <div className="container">
          <h1 className="text-center mb-3">
            {this.props.match.params.pid ? "Update User" : "Add User"}
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
                <td>Login Id: </td>
                <td>
                  <input
                    type="email"
                    className="form-control"
                    name="loginId"
                    value={this.state.loginId}
                    onChange={(ev) => this.changeState(ev)}
                  />
                </td>
              </tr>
              <tr>
                <td>Password: </td>
                <td>
                  <input
                    type="text"
                    className="form-control"
                    name="password"
                    value={this.state.password}
                    onChange={(ev) => this.changeState(ev)}
                  />
                </td>
              </tr>
              <tr>
                <td>Role Id: </td>
                <td>
                  <input
                    type="number"
                    className="form-control"
                    name="roleId"
                    value={this.state.roleId}
                    onChange={(ev) => this.changeState(ev)}
                  />
                </td>
              </tr>
              <tr>
                <td colSpan="2">
                  <button
                    className="myBtn"
                    onClick={(ev) => this.save("User", ev)}
                  >
                    {this.props.match.params.pid ? "Update User" : "Add User"}
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
      </div>
    );
  }
}
