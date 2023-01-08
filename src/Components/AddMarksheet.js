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
      <div className="bg-color">
        <div className="container w-50">
          <h1 className="text-center mb-3">
            {this.props.match.params.pid ? "Update Marksheet" : "Add Marksheet"}
          </h1>
          <table className="table table-secondary table-striped-columns table-sm align-middle">
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
                <th className="px-3" required>
                  Student ID:{" "}
                </th>
                <td>
                  <input
                    type="number"
                    className="form-control"
                    name="studentId"
                    value={this.state.studentId}
                    onChange={(ev) => this.changeState(ev)}
                  />
                </td>
                <td className="text-danger">
                  {this.state.inputError.studentId}
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
                <th className="px-3">Chemistry: </th>
                <td>
                  <input
                    type="number"
                    className="form-control"
                    name="chemistry"
                    value={this.state.chemistry}
                    onChange={(ev) => this.changeState(ev)}
                  />
                </td>
                <td className="text-danger">
                  {this.state.inputError.chemistry}
                </td>
              </tr>
              <tr>
                <th className="px-3">Maths: </th>
                <td>
                  <input
                    type="number"
                    className="form-control"
                    name="maths"
                    value={this.state.maths}
                    onChange={(ev) => this.changeState(ev)}
                  />
                </td>
                <td className="text-danger">{this.state.inputError.maths}</td>
              </tr>
              <tr>
                <th className="px-3">Physics: </th>
                <td>
                  <input
                    type="number"
                    className="form-control"
                    name="physics"
                    value={this.state.physics}
                    onChange={(ev) => this.changeState(ev)}
                  />
                </td>
                <td className="text-danger">{this.state.inputError.physics}</td>
              </tr>
              <tr>
                <th className="px-3">Roll No: </th>
                <td>
                  <input
                    type="number"
                    className="form-control"
                    name="rollNo"
                    value={this.state.rollNo}
                    onChange={(ev) => this.changeState(ev)}
                  />
                </td>
                <td className="text-danger">{this.state.inputError.rollNo}</td>
              </tr>
              <tr>
                <td colSpan="3" className="text-center">
                  <button
                    className="btn btn-dark"
                    onClick={() => this.save("Marksheet")}
                  >
                    {this.props.match.params.pid
                      ? "Update Marksheet"
                      : "Add Marksheet"}
                  </button>
                </td>
              </tr>
              <tr>
                <td colSpan="3" className="text-center">
                  <button
                    className="btn btn-dark"
                    onClick={() => this.reset("Marksheet")}
                  >
                    reset
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
