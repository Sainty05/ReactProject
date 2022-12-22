import React, { Component } from "react";
import logo from "../Assests/Logo.jpg";
import "../App.css";
import { Link } from "react-router-dom";
import "bootstrap/dist/js/bootstrap.js";
import { FaUserAlt } from 'react-icons/fa';

export default class Navbar extends Component {
  logout() {
    localStorage.clear();
    window.location.href = "/login";
  }
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link to="/">
            <img src={logo} alt="Rays Logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        {
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {!localStorage.token ? (
              <ul className="navbar-nav me-auto mb-2 ms-2 mb-lg-0">
                <li className="nav-item mx-2 my-1">
                  <Link className="myBtn" to="/login">
                    Login{" "}
                  </Link>
                </li>
                <li className="nav-item mx-2 my-1">
                  <Link className="myBtn" to="/registration">
                    Registration
                  </Link>
                </li>
              </ul>
            ) : (
              <ul className="navbar-nav me-auto mb-2 ms-2 mb-lg-0">
                <li className="nav-item mx-2 my-1 align-self-center">
                  <div className="dropdown">
                    <button className="myBtn">Marksheet</button>
                    <div className="dropdown-content">
                      <Link to="/AddMarksheet">Add Marksheet</Link>
                      <Link to="/MarksheetList">Marksheet List</Link>
                    </div>
                  </div>
                </li>
                <li className="nav-item mx-2 my-1 align-self-center">
                  <div className="dropdown">
                    <button className="myBtn">User</button>
                    <div className="dropdown-content">
                      <Link to="/AddUser">Add User</Link>
                      <Link to="/UserList">User List</Link>
                    </div>
                  </div>
                </li>
                <li className="nav-item mx-2 my-1 align-self-center">
                  <div className="dropdown">
                    <button className="myBtn">College</button>
                    <div className="dropdown-content">
                      <Link to="/AddCollege">Add College</Link>
                      <Link to="/CollegeList">CollegeList</Link>
                    </div>
                  </div>
                </li>
                <li className="nav-item mx-2 my-1 align-self-center">
                  <div className="dropdown">
                    <button className="myBtn">Student</button>
                    <div className="dropdown-content">
                      <Link to="/AddStudent">Add Student</Link>
                      <Link to="/StudentList">Student List</Link>
                    </div>
                  </div>
                </li>
                <li className="nav-item mx-2 my-1 align-self-center">
                  <div className="dropdown">
                    <button className="myBtn">Role</button>
                    <div className="dropdown-content">
                      <Link to="/AddRole">Add Role</Link>
                      <Link to="/RoleList">Role List</Link>
                    </div>
                  </div>
                </li>
                <li className="nav-item mx-2 my-1">
                  <div className="dropdown">
                  <button className="myBtn mx-3 rounded-circle border border-warning"><FaUserAlt/>{localStorage.getItem("token")}</button>
                    <div className="dropdown-content">
                      <button className="myBtn" onClick={() => this.logout()}>
                        logout
                      </button>
                    </div>
                  </div>
                </li>
              </ul>
            )}
          </div>
        }
      </nav>
    );
  }
}
