import React, { Component } from "react";
import logo from "../Assests/Logo.jpg";
import "../App.css";
import { Link } from "react-router-dom";
import "bootstrap/dist/js/bootstrap.js";

export default class Navbar extends Component {
  logout() {
    sessionStorage.clear();
    window.location.href = "/login";
  }
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid" style={{ width: "auto" }}>
          <Link to="/">
            <img src={logo} alt="Rays Logo" />
          </Link>
          <button
            className="navbar-toggler ms-3"
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
        {!sessionStorage.token ? (
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 ms-2 mb-lg-0">
              <li className="nav-item mx-2 my-1">
                <Link className="btn btn-outline-primary" to="/login">
                  Login{" "}
                </Link>
              </li>
              <li className="nav-item mx-2 my-1">
                <Link className="btn btn-outline-primary" to="/AddUser">
                  Registration
                </Link>
              </li>
            </ul>
          </div>
        ) : (
          <>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 ms-2 mb-lg-0">
                <li className="nav-item mx-2 my-1 align-self-center">
                  <div className="dropdown">
                    <button className="myBtn">Marksheet</button>
                    <div className="dropdown-contents">
                      <Link to="/AddMarksheet" className="dropdown-content">
                        Add Marksheet
                      </Link>
                      <Link to="/MarksheetList" className="dropdown-content">
                        Marksheet List
                      </Link>
                    </div>
                  </div>
                </li>
                <li className="nav-item mx-2 my-1 align-self-center">
                  <div className="dropdown">
                    <button className="myBtn">User</button>
                    <div className="dropdown-contents">
                      <Link to="/AddUser" className="dropdown-content">
                        Add User
                      </Link>
                      <Link to="/UserList" className="dropdown-content">
                        User List
                      </Link>
                    </div>
                  </div>
                </li>
                <li className="nav-item mx-2 my-1 align-self-center">
                  <div className="dropdown">
                    <button className="myBtn">College</button>
                    <div className="dropdown-contents">
                      <Link to="/AddCollege" className="dropdown-content">
                        Add College
                      </Link>
                      <Link to="/CollegeList" className="dropdown-content">
                        CollegeList
                      </Link>
                    </div>
                  </div>
                </li>
                <li className="nav-item mx-2 my-1 align-self-center">
                  <div className="dropdown">
                    <button className="myBtn">Student</button>
                    <div className="dropdown-contents">
                      <Link to="/AddStudent" className="dropdown-content">
                        Add Student
                      </Link>
                      <Link to="/StudentList" className="dropdown-content">
                        Student List
                      </Link>
                    </div>
                  </div>
                </li>
                <li className="nav-item mx-2 my-1 align-self-center">
                  <div className="dropdown">
                    <button className="myBtn">Role</button>
                    <div className="dropdown-contents">
                      <Link to="/AddRole" className="dropdown-content">
                        Add Role
                      </Link>
                      <Link to="/RoleList" className="dropdown-content">
                        Role List
                      </Link>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <ul className="navbar-nav me-auto mb-2 ms-2 mb-lg-0">
                <li className="nav-item mx-2 my-1 align-self-center">
                  <h6 className="text-light mt-2 border px-2 py-1 rounded-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      fill="currentColor"
                      className="bi bi-person-fill me-2"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                    </svg>
                    {sessionStorage.getItem("token")}
                  </h6>
                </li>
                <li className="nav-item mx-2 my-1 align-self-center">
                  <button className="btn btn-light btn-sm" onClick={() => this.logout()}>
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          </>
        )}
      </nav>
    );
  }
}
