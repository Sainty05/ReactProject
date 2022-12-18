import React from "react";
import "../App.css";
import axios from "axios";
import ReactDOM from "react-dom";
import App from "../App";
import Registration from "./Registration";
import logo from "../Assests/Logo.jpg";
import Footer from "./Footer";
import BaseCtrl from "../BaseCtrl";

export default class Login extends BaseCtrl {
  signIn(props) {
    if (this.state.loginId === "" || this.state.password === "") {
      if (this.state.loginId === "") {
        this.setState({ message: "Enter Login Id" });
      }
      if (this.state.password === "") {
        this.setState({ message: "Enter Password" });
      }
      if (this.state.loginId === "" && this.state.password === "") {
        this.setState({ message: "Enter Login Id & Password" });
      }
    } else {
      let url = "http://api.sunilos.com:9080/ORSP10/Auth/login";
      axios.post(url, this.state).then((res) => {
        if (res.data.success) {
          ReactDOM.render(
            <React.StrictMode>
              <App Admin={res.data.result.data} />
            </React.StrictMode>,
            document.getElementById("root")
          );
        } else {
          this.setState({ message: "Invalid LoginId & Password" });
        }
      });
    }
  }

  openReg() {
    ReactDOM.render(
      <React.StrictMode>
        <Registration />
        <Footer />
      </React.StrictMode>,
      document.getElementById("root")
    );
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
            <h1 className="text-center mb-3">Login</h1>
            <table className="table table-striped table-danger align-middle">
              <tbody>
                <tr>
                  <td colSpan="2" className="text-danger text-center txtHgt">
                    {this.state.message}
                  </td>
                </tr>
                <tr>
                  <th> Login Id: </th>
                  <td>
                    <input
                      type="email"
                      name="loginId"
                      className="form-control"
                      onChange={(ev) => this.changeState(ev)}
                    />
                  </td>
                </tr>
                <tr>
                  <th>Password: </th>
                  <td>
                    <input
                      type="password"
                      className="form-control"
                      name="password"
                      onChange={(ev) => this.changeState(ev)}
                    />
                  </td>
                </tr>
                <tr>
                  <td colSpan="2" className="text-center">
                    <button className="myBtn" onClick={() => this.signIn()}>
                      Login
                    </button>
                  </td>
                </tr>
                <tr>
                  <td colSpan="2" className="text-center">
                    <button className="myBtn" onClick={() => this.openReg()}>
                      Registration
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
