import React from "react";
import { Link } from "react-router-dom";
import BaseCtrl from "../BaseCtrl";

export default class Registration extends BaseCtrl {
  constructor(){
  super()
  this.search("Role") 
}

  render() {
    return (
      <div>
        <div className="bg-color">
          <div className="container w-50">
            <h1 className="text-center mb-3">Registration</h1>
            <table className="table table-striped-columns table-sm table-danger align-middle">
              <tbody>
                <tr>
                  <td colSpan="3" className={`text-${this.state.txtClr} text-center txtHgt`}>
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
                      onChange={(ev) => this.changeState(ev)}
                    />
                  </td>
                  <td className="text-danger">
                    {this.state.inputError.lastName}
                  </td>
                </tr>
                <tr>
                  <th className="px-3">Login Id: </th>
                  <td>
                    <input
                      type="email"
                      className="form-control"
                      name="loginId"
                      onChange={(ev) => this.changeState(ev)}
                    />
                  </td>
                  <td className="text-danger">
                    {this.state.inputError.loginId}
                  </td>
                </tr>
                <tr>
                  <th className="px-3">Password: </th>
                  <td>
                    <input
                      type="text"
                      className="form-control"
                      name="password"
                      onChange={(ev) => this.changeState(ev)}
                    />
                  </td>
                  <td className="text-danger">
                    {this.state.inputError.password}
                  </td>
                </tr>
                <tr>
                  <th className="px-3">Role Id: </th>
                  <td>
                    <select name="roleId" placeholder="Select Role Id" className="form-control" onChange=
                    {(ev) => this.changeState(ev)}>
                    <option name="roleId">-- Select Role Id --</option>
                    { this.state.searchList.map((ele)=>
                      <option name="roleId" value={ele.id}>{ele.id}</option>
                      )}
                    </select>
                  </td>
                  <td className="text-danger">
                    {this.state.inputError.roleId}
                  </td>
                </tr>
                <tr>
                  <td colSpan="3" className="text-center">
                    <button
                      className="myBtn"
                      onClick={(ev) => this.save("User", ev)}
                    >
                      Register
                    </button>
                  </td>
                </tr>
                <tr>
                  <td colSpan="3" className="text-center">
                    <button
                      className="myBtn"
                      onClick={(ev) => this.reset("User")}
                    >
                      Reset
                    </button>
                  </td>
                </tr>
                <tr>
                  <td colSpan="3" className="text-center">
                    <Link
                      to='/login'
                      className="btn btn-link text-decoration-none"
                    >
                      Already a User <strong>Login</strong> here
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
