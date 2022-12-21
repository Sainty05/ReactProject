import React, { Component } from "react";
import logo from "../Assests/Logo.jpg";
import "../App.css";
import { Link } from "react-router-dom";
import "bootstrap/dist/js/bootstrap.js";
import Login from "./Login";
import ReactDOM from "react-dom";
import Footer from "./Footer";

export default class Navbar extends Component {
  render(props) {
    return (
      // <nav className="navbar navbar-dark bg-dark">
      //   <div>
      //     <Link to="/">
      //       <img src={logo} alt="Rays Logo" />
      //     </Link>
      //   </div>
      //   <div className="Navbar-items">
      //     <div className="dropdown">
      //       <button className="myBtn">Marksheet</button>
      //       <div className="dropdown-content">
      //         <Link to="/AddMarksheet">Add Marksheet</Link>
      //         <Link to="/MarksheetList">Marksheet List</Link>
      //       </div>
      //     </div>
      //     <div className="dropdown">
      //       <button className="myBtn">User</button>
      //       <div className="dropdown-content">
      //         <Link to="/AddUser">Add User</Link>
      //         <Link to="/UserList">User List</Link>
      //       </div>
      //     </div>

      //     <div className="dropdown">
      //       <button className="myBtn">College</button>
      //       <div className="dropdown-content">
      //         <Link to="/AddCollege">Add College</Link>
      //         <Link to="/CollegeList">CollegeList</Link>
      //       </div>
      //     </div>
      //     <div className="dropdown">
      //       <button className="myBtn">Student</button>
      //       <div className="dropdown-content">
      //         <Link to="/AddStudent">Add Student</Link>
      //         <Link to="/StudentList">Student List</Link>
      //       </div>
      //     </div>

      //     <div className="dropdown">
      //       <button className="myBtn">Role</button>
      //       <div className="dropdown-content">
      //         <Link to="/AddRole">Add Role</Link>
      //         <Link to="/RoleList">Role List</Link>
      //       </div>
      //     </div>
      //     <div className="dropdown">
      //       <button className="myBtn">
      //         User:{" "}
      //         {this.props.Admin.firstName.charAt(0).toUpperCase() +
      //           this.props.Admin.firstName.slice(1).toLowerCase()}
      //       </button>
      //       <div className="dropdown-content">
      //         <Link to="/MyProfile">MyProfile</Link>
      //         <button
      //           onClick={() => {
      //             ReactDOM.render(
      //               <React.StrictMode>
      //                 <Login />
      //                 <Footer />
      //               </React.StrictMode>,
      //               document.getElementById("root")
      //             );
      //           }}
      //           className="myBtn"
      //         >
      //           Log Out
      //         </button>
      //       </div>
      //     </div>
      //   </div>
      // </nav>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <Link to="/">
            <img src={logo} alt="Rays Logo" />
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 ms-2 mb-lg-0">
              <li class="nav-item mx-2 my-1">
                <div className="dropdown">
                  <button className="myBtn">Marksheet</button>
                  <div className="dropdown-content">
                    <Link to="/AddMarksheet">Add Marksheet</Link>
                    <Link to="/MarksheetList">Marksheet List</Link>
                  </div>
                </div>
              </li>
              <li class="nav-item mx-2 my-1">
                <div className="dropdown">
                  <button className="myBtn">User</button>
                  <div className="dropdown-content">
                    <Link to="/AddUser">Add User</Link>
                    <Link to="/UserList">User List</Link>
                  </div>
                </div>
              </li>
              <li class="nav-item mx-2 my-1">
                <div className="dropdown">
                  <button className="myBtn">College</button>
                  <div className="dropdown-content">
                    <Link to="/AddCollege">Add College</Link>
                    <Link to="/CollegeList">CollegeList</Link>
                  </div>
                </div>
              </li>
              <li class="nav-item mx-2 my-1">
                <div className="dropdown">
                  <button className="myBtn">Student</button>
                  <div className="dropdown-content">
                    <Link to="/AddStudent">Add Student</Link>
                    <Link to="/StudentList">Student List</Link>
                  </div>
                </div>
              </li>
              <li class="nav-item mx-2 my-1">
                <div className="dropdown">
                  <button className="myBtn">Role</button>
                  <div className="dropdown-content">
                    <Link to="/AddRole">Add Role</Link>
                    <Link to="/RoleList">Role List</Link>
                  </div>
                </div>
              </li>
            </ul>
            <div class="d-flex mx-3" role="search">
              <div className="dropdown">
                <div className="myBtn">
                  <button className="Avtar">
                    {this.props.Admin.firstName.charAt(0).toUpperCase()}
                  </button>
                </div>
                <div className="dropdown-content">
                  <Link to="/MyProfile">MyProfile</Link>
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
                    className="myBtn"
                  >
                    Log Out
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}
