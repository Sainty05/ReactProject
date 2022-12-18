import React from "react";
import axios from "axios";
import Login from "./Login";
import ReactDOM from "react-dom";
import logo from "../Assests/Logo.jpg";
import BaseCtrl from "../BaseCtrl";
import { Link } from "react-router-dom";

export default class Registration extends BaseCtrl {
  registered() {
    let url = "http://api.sunilos.com:9080/ORSP10/User/save";
    axios.post(url, this.state).then((res) => {
      this.setState({ list: res.data.result.data });
      if (res.data.success) {
        ReactDOM.render(
          <React.StrictMode>
            <Login />
          </React.StrictMode>,
          document.getElementById("root")
        );
        this.setState({ message: "Data saved Successfully" });
      } else {
        this.setState({ message: "Data didn't Saved" });
      }
    });
  }

  render() {
    return (
      <div>
        <nav className="Navbar">
          <div>
            <img src={logo} alt="Rays Logo" />
          </div>
        </nav>
        <div className="bg-color">
          <div className="container w-50">
            <h1 className="text-center mb-3">Registration</h1>
            <table className="table table-striped table-danger align-middle">
              <tbody>
                <tr>
                  <td colSpan="2" className="text-danger text-center">
                    {this.state.message}
                  </td>
                </tr>
                <tr>
                  <th>First Name: </th>
                  <td>
                    <input
                      type="text"
                      className="form-control"
                      name="firstName"
                      onChange={(ev) => this.changeState(ev)}
                    />
                  </td>
                </tr>
                <tr>
                  <th>Last Name: </th>
                  <td>
                    <input
                      type="text"
                      className="form-control"
                      name="lastName"
                      onChange={(ev) => this.changeState(ev)}
                    />
                  </td>
                </tr>
                <tr>
                  <th>Login Id: </th>
                  <td>
                    <input
                      type="email"
                      className="form-control"
                      name="loginId"
                      onChange={(ev) => this.changeState(ev)}
                      
                    />
                  </td>
                </tr>
                <tr>
                  <th>Password: </th>
                  <td>
                    <input
                      type="text"
                      className="form-control"
                      name="password"
                      onChange={(ev) => this.changeState(ev)}
                    />
                  </td>
                </tr>
                <tr>
                  <th>Role Id: </th>
                  <td>
                    <input
                      type="number"
                      className="form-control"
                      name="roleId"
                      onChange={(ev) => this.changeState(ev)}
                    />
                  </td>
                </tr>
                <tr>
                  <td colSpan="2"className="text-center">
                    <button className="myBtn" onClick={() => this.registered()}>
                      Register
                    </button>
                  </td>
                </tr>
                <tr>
                  <td colSpan="2" className="text-center">
                    <button className="myBtn" onClick={(ev) => this.reset(ev)}>
                      Reset
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Link to="/Login">Login</Link>
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
