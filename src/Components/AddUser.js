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
        <div className="container w-50">
          <h1 className="text-center mb-3">
            {this.props.match.params.pid ? "Update User" : "Add User"}
          </h1>
          <table className="table table-striped-columns table-sm table-warning align-middle">
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
                <td className="text-danger">{this.state.inputError.firstName}</td>
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
                <td className="text-danger">{this.state.inputError.lastName}</td>
              </tr>
              <tr>
                <th className="px-3">Login Id: </th>
                <td>
                  <input
                    type="email"
                    className="form-control"
                    name="loginId"
                    value={this.state.loginId}
                    onChange={(ev) => this.changeState(ev)}
                  />
                </td>
                <td className="text-danger">{this.state.inputError.loginId}</td>
              </tr>
              <tr>
                <th className="px-3">Password: </th>
                <td>
                  <input
                    type="text"
                    className="form-control"
                    name="password"
                    value={this.state.password}
                    onChange={(ev) => this.changeState(ev)}
                  />
                </td>
                <td className="text-danger">{this.state.inputError.password}</td>
              </tr>
              <tr>
                <th className="px-3">Role Id: </th>
                <td>
                  <input
                    type="number"
                    className="form-control"
                    name="roleId"
                    value={this.state.roleId}
                    onChange={(ev) => this.changeState(ev)}
                  />
                </td>
                <td className="text-danger">{this.state.inputError.roleId}</td>
              </tr>
              <tr>
                <td colSpan="3" className="text-center">
                  <button
                    className="myBtn"
                    onClick={(ev) => this.save("User", ev)}
                  >
                    {this.props.match.params.pid ? "Update User" : "Add User"}
                  </button>
                </td>
              </tr>
              <tr>
                <td colSpan="3" className="text-center">
                  <button className="myBtn" onClick={(ev) => this.reset("User")}>
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
