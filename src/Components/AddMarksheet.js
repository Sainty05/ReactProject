import React from "react";
import BaseCtrl from "../BaseCtrl";

export default class AddMarksheet extends BaseCtrl {
  constructor(props) {
    super(props);
    if (this.props.match.params.pid) {
      this.edit("Marksheet");
    }
  }

  render() {
    return (
      <div className="container">
        <h1 className="text-center mb-3">
          {this.props.match.params.pid ? "Update Marksheet" : "Add Marksheet"}
        </h1>
        <table className="table table-warning table-striped align-middle">
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
              <td>Student ID: </td>
              <td>
                <input
                  type="text"
                  className="form-control"
                  name="studentId"
                  value={this.state.studentId}
                  onChange={(ev) => this.changeState(ev)}
                />
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
              <td>Chemistry: </td>
              <td>
                <input
                  type="text"
                  className="form-control"
                  name="chemistry"
                  value={this.state.chemistry}
                  onChange={(ev) => this.changeState(ev)}
                />
              </td>
            </tr>
            <tr>
              <td>Maths: </td>
              <td>
                <input
                  type="email"
                  className="form-control"
                  name="maths"
                  value={this.state.maths}
                  onChange={(ev) => this.changeState(ev)}
                />
              </td>
            </tr>
            <tr>
              <td>Physics: </td>
              <td>
                <input
                  type="text"
                  className="form-control"
                  name="physics"
                  value={this.state.physics}
                  onChange={(ev) => this.changeState(ev)}
                />
              </td>
            </tr>
            <tr>
              <td>Roll No: </td>
              <td>
                <input
                  type="number"
                  className="form-control"
                  name="rollNo"
                  value={this.state.rollNo}
                  onChange={(ev) => this.changeState(ev)}
                />
              </td>
            </tr>
            <tr>
              <td colSpan="2">
                <button
                  className="myBtn"
                  onClick={(ev) => this.save("Marksheet", ev)}
                >
                  {this.props.match.params.pid
                    ? "Update Marksheet"
                    : "Add Marksheet"}
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
    );
  }
}
