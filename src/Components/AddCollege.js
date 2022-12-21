import React from "react";
import BaseCtrl from "../BaseCtrl";
import "../App.css";

export default class AddCollege extends BaseCtrl {
  constructor(props) {
    super(props);
    if (this.props.match.params.pid) {
      this.edit("College");
    }
  }

  render() {
    return (
      <div className="App">
      <div className="container w-50">
        <h1 className="text-center mb-3">
          {this.props.match.params.pid ? "Update College" : "Add College"}
        </h1>
        <table className="table table-striped-columns table-sm table-warning align-middle">
          <tbody>
            <tr>
              <td
                colSpan="3"
                className={`text-${this.state.txtClr} text-center txtHgt`}
              >
                {this.state.message}
              </td>
            </tr>
            <tr>
              <th className="px-3">Name: </th>
              <td>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  value={this.state.name}
                  onChange={(ev) => this.changeState(ev)}
                />
              </td>
              <td className="text-danger">{this.state.inputError.name}</td>
            </tr>
            <tr>
              <th className="px-3">Address: </th>
              <td>
                <input
                  type="text"
                  className="form-control"
                  name="address"
                  value={this.state.address}
                  onChange={(ev) => this.changeState(ev)}
                />
              </td>
              <td className="text-danger">{this.state.inputError.address}</td>
            </tr>
            <tr>
              <th className="px-3">City: </th>
              <td>
                <input
                  type="text"
                  className="form-control"
                  name="city"
                  value={this.state.city}
                  onChange={(ev) => this.changeState(ev)}
                />
              </td>
              <td className="text-danger">{this.state.inputError.city}</td>
            </tr>
            <tr>
              <th className="px-3">State: </th>
              <td>
                <input
                  type="email"
                  className="form-control"
                  name="state"
                  value={this.state.state}
                  onChange={(ev) => this.changeState(ev)}
                />
              </td>
              <td className="text-danger">{this.state.inputError.state}</td>
            </tr>
            <tr>
              <th className="px-3">Contact No: </th>
              <td>
                <input
                  type="text"
                  className="form-control"
                  name="phoneNo"
                  value={this.state.phoneNo}
                  onChange={(ev) => this.changeState(ev)}
                />
              </td>
              <td className="text-danger">{this.state.inputError.phoneNo}</td>
            </tr>
            <tr>
              <td colSpan="3" className="text-center">
                <button
                  className="myBtn"
                  onClick={(ev) => this.save("College", ev)}
                >
                  {this.props.match.params.pid
                    ? "Update College"
                    : "Add College"}
                </button>
              </td>
            </tr>
            <tr>
              <td colSpan="3" className="text-center">
                <button className="myBtn" onClick={(ev) => this.reset("College")}>
                  Reset
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      </div>
    );
  }
}
