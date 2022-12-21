import React, { Component } from "react";

export default class MyProfile extends Component {
  render(props) {
    return (
      <div className="container w-50">
        <h1 className="text-center mb-4">My Profile</h1>
        <table className="table table-striped table-secondary">
          <tbody>
            <tr>
              <th className="px-3">Id Number:</th>
              <td>{this.props.Admin.id}</td>
            </tr>
            <tr>
              <th className="px-3">First Name: </th>
              <td> {this.props.Admin.firstName}</td>
            </tr>
            <tr>
              <th className="px-3">Last Name: </th>
              <td> {this.props.Admin.lastName}</td>
            </tr>
            <tr>
              <th className="px-3">Login Id: </th>
              <td> {this.props.Admin.loginId}</td>
            </tr>
            <tr>
              <th className="px-3">Date of Registration: </th>
              <td>
                {new Date(this.props.Admin.createdDatetime).toDateString()}
              </td>
            </tr>
            <tr>
              <th className="px-3">Role Name: </th>
              <td>{this.props.Admin.roleName}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
