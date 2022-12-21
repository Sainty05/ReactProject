import React from "react";
import axios from "axios";
import Login from "./Login";
import ReactDOM from "react-dom";
import logo from "../Assests/Logo.jpg";
import BaseCtrl from "../BaseCtrl";
import Footer from "./Footer";

export default class Registration extends BaseCtrl {
  registered() {
    let url = "http://api.sunilos.com:9080/ORSP10/User/save";
    axios.post(url, this.state).then((res) => {
      this.setState({ list: res.data.result.data });
      if (res.data.success) {
        console.log("Heloooooooooooooooooooooooooooo");
        ReactDOM.render(
          <React.StrictMode>
            <Login />
          </React.StrictMode>,
          document.getElementById("root")
        );
        this.setState({ message: "Data saved Successfully" });
      } else {
        this.setState({
          inputError: {
            firstName: res.data.result.inputerror.firstName,
            lastName: res.data.result.inputerror.lastName,
            loginId: res.data.result.inputerror.loginId,
            password: res.data.result.inputerror.password,
            roleId: res.data.result.inputerror.roleId,
          },
        });
        if (res.data.result.message == null && this.state.roleId !== "") {
          this.setState({ message: "Role ID Incorrect" });
        }

        if (!res.data.result.message == null) {
          this.setState({ message: res.data.result.message });
        }
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
            <table className="table table-striped-columns table-sm table-danger align-middle">
              <tbody>
                <tr>
                  <td colSpan="3" className="text-danger text-center txtHgt">
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
                    <input
                      type="number"
                      className="form-control"
                      name="roleId"
                      onChange={(ev) => this.changeState(ev)}
                    />
                  </td>
                  <td className="text-danger">
                    {this.state.inputError.roleId}
                  </td>
                </tr>
                <tr>
                  <td colSpan="3" className="text-center">
                    <button className="myBtn" onClick={() => this.registered()}>
                      Register
                    </button>
                  </td>
                </tr>
                <tr>
                  <td colSpan="3" className="text-center">
                    <button className="myBtn" onClick={(ev) => this.reset(ev)}>
                      Reset
                    </button>
                  </td>
                </tr>
                <tr>
                  <td colSpan="3" className="text-center">
                    <button
                      onClick={() => {
                        ReactDOM.render(
                          <React.StrictMode>
                            <Login />
                            <Footer />
                          </React.StrictMode>,
                          document.getElementById("root")
                        );
                      }}
                      className="btn btn-link text-decoration-none"
                    >
                      Already a User <strong>Login</strong> here
                    </button>
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
