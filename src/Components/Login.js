import React from "react";
import "../App.css";
import axios from "axios";
import BaseCtrl from "../BaseCtrl";
import { Link } from "react-router-dom";

export default class Login extends BaseCtrl {
  constructor(){
    super()
    this.state= {
      loginId:"",
      password:"",
      inputError:{
        loginId:"",
        password:""
      }
    }
  }
  signIn() {
    let url = "http://api.sunilos.com:9080/ORSP10/Auth/login";
    axios.post(url, this.state).then((res) => {
      if (res.data.success) {
        sessionStorage.setItem("token", res.data.result.data.name);
        window.location.href = "/";
      } else {
        if (res.data.result.message === undefined) {
          this.setState({
            inputError: {
              loginId: res.data.result.inputerror.loginId,
              password: res.data.result.inputerror.password,
            },
            message: "",
          });
        } else {
          this.setState({
            message: res.data.result.message,
            inputError: {
              loginId: "",
              password: "",
            },
          });
        }
      }
    }).catch((err)=>{
      this.setState({message:err.message})
    });
  }

  render() {
    return (
      <div className="bg-color">
        <div className="container w-50">
          <h1 className="text-center mb-3">LOGIN HERE</h1>
          <table className="table table-striped-columns table-sm table-danger align-middle">
            <tbody>
              <tr>
                <td colSpan="3" className="text-danger text-center txtHgt">
                  {this.state.message}
                </td>
              </tr>
              <tr>
                <th className="px-3"> Login Id: </th>
                <td>
                  <input
                    type="email"
                    name="loginId"
                    className="form-control"
                    onChange={(ev) => this.changeState(ev)}
                  />
                </td>
                <td className="text-danger">{this.state.inputError.loginId}</td>
              </tr>
              <tr>
                <th className="px-3">Password: </th>
                <td>
                  <input
                    type="password"
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
                <td colSpan="3" className="text-center">
                  <button className="btn btn-dark" onClick={() => this.signIn()}>
                    Login
                  </button>
                </td>
              </tr>
              <tr>
                <td colSpan="3" className="text-center">
                  <Link
                    to="/addUser"
                    className="btn btn-link text-decoration-none"
                  >
                    Not a User <strong>Register</strong> here
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
