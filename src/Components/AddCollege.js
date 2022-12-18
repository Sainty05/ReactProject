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
      <div className="container">
        <h1 className="text-center mb-3">
          {this.props.match.params.pid ? "Update College" : "Add College"}
        </h1>
        <table className="table table-striped table-warning align-middle">
          <tbody>
            <tr>
              <td
                colSpan="2"
                className={`text-${this.state.txtClr} text-center`}
              >
                {this.state.message}
              </td>
            </tr>
            <tr>
              <td>Name: </td>
              <td>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  value={this.state.name}
                  onChange={(ev) => this.changeState(ev)}
                />
              </td>
            </tr>
            <tr>
              <td>Address: </td>
              <td>
                <input
                  type="text"
                  className="form-control"
                  name="address"
                  value={this.state.address}
                  onChange={(ev) => this.changeState(ev)}
                />
              </td>
            </tr>
            <tr>
              <td>City: </td>
              <td>
                <input
                  type="text"
                  className="form-control"
                  name="city"
                  value={this.state.city}
                  onChange={(ev) => this.changeState(ev)}
                />
              </td>
            </tr>
            <tr>
              <td>State: </td>
              <td>
                <input
                  type="email"
                  className="form-control"
                  name="state"
                  value={this.state.state}
                  onChange={(ev) => this.changeState(ev)}
                />
              </td>
            </tr>
            <tr>
              <td>Contact No: </td>
              <td>
                <input
                  type="text"
                  className="form-control"
                  name="phoneNo"
                  value={this.state.phoneNo}
                  onChange={(ev) => this.changeState(ev)}
                />
              </td>
            </tr>
            <tr>
              <td colSpan="2">
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
              <td colSpan="2">
                <button className="myBtn" onClick={(ev) => this.reset(ev)}>
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
