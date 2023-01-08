import React, { Component } from "react";
import logo from "../Assests/Logo.jpg";
import "../App.css";
import { Link } from "react-router-dom";
import "bootstrap/dist/js/bootstrap.js";

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
                  <Link className="myBtn" to="/AddUser">
                    Registration
                  </Link>
                </li>
              </ul>
            ) : (
              <ul className="navbar-nav me-auto mb-2 ms-2 mb-lg-0">
                <li className="nav-item mx-2 my-1 align-self-center">
                  <div className="dropdown">
                    <button className="myBtn">Marksheet</button>
                    <div className="dropdown-contents">
                      <Link to="/AddMarksheet" className="dropdown-content">Add Marksheet</Link>
                      <Link to="/MarksheetList" className="dropdown-content">Marksheet List</Link>
                    </div>
                  </div>
                </li>
                <li className="nav-item mx-2 my-1 align-self-center">
                  <div className="dropdown">
                    <button className="myBtn">User</button>
                    <div className="dropdown-contents">
                      <Link to="/AddUser" className="dropdown-content">Add User</Link>
                      <Link to="/UserList" className="dropdown-content">User List</Link>
                    </div>
                  </div>
                </li>
                <li className="nav-item mx-2 my-1 align-self-center">
                  <div className="dropdown">
                    <button className="myBtn">College</button>
                    <div className="dropdown-contents">
                      <Link to="/AddCollege" className="dropdown-content">Add College</Link>
                      <Link to="/CollegeList" className="dropdown-content">CollegeList</Link>
                    </div>
                  </div>
                </li>
                <li className="nav-item mx-2 my-1 align-self-center">
                  <div className="dropdown">
                    <button className="myBtn">Student</button>
                    <div className="dropdown-contents">
                      <Link to="/AddStudent" className="dropdown-content">Add Student</Link>
                      <Link to="/StudentList" className="dropdown-content">Student List</Link>
                    </div>
                  </div>
                </li>
                <li className="nav-item mx-2 my-1 align-self-center">
                  <div className="dropdown">
                    <button className="myBtn">Role</button>
                    <div className="dropdown-contents">
                      <Link to="/AddRole" className="dropdown-content">Add Role</Link>
                      <Link to="/RoleList" className="dropdown-content">Role List</Link>
                    </div>
                  </div>
                </li>
                <li className="nav-item mx-2 my-1 align-self-center">
                  <div className="dropdown">
                    <button className="myBtn text-nowrap">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        fill="currentColor"
                        className="bi bi-person-circle me-1"
                        viewBox="0 0 16 16"
                      >
                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                        <path
                          fillRule="evenodd"
                          d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                        />
                      </svg>
                      {localStorage.getItem("token")}
                    </button>
                    <div className="dropdown-contents">
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
