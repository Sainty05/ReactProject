import React, { Component } from "react";

export default class MyProfile extends Component {
  render(props) {
    return (
      <div className="container mainBody">
        <h1 className="text-center mb-4">My Profile</h1>
        <table className="table table-striped table-secondary ">
          <tbody>
            <tr>
              <th>Id Number:</th>
              <td>{this.props.Admin.id}</td>
            </tr>
            <tr>
              <th>First Name: </th>
              <td> {this.props.Admin.firstName}</td>
            </tr>
            <tr>
              <th>Last Name: </th>
              <td> {this.props.Admin.lastName}</td>
            </tr>
            <tr>
              <th>Login Id: </th>
              <td> {this.props.Admin.loginId}</td>
            </tr>
            <tr>
              <th>Date of Registration: </th>
              <td>
                {new Date(this.props.Admin.createdDatetime).toDateString()}
              </td>
            </tr>
            <tr>
              <th>Role Name: </th>
              <td>{this.props.Admin.roleName}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
