import React from "react";
import BaseCtrl from "../BaseCtrl";

export default class AddRole extends BaseCtrl {
  constructor(props) {
    super(props);
    this.state = {
      discription: "",
      name: "",
      inputError: {
        discription: "",
        name: "",
      },
    };
    if (this.props.match.params.pid) {
      this.edit("Role");
    }
  }

  render() {
    return (
      <div className="bg-color">
        <div className="container w-50">
          <h1 className="text-center mb-3">
            {this.props.match.params.pid ? "UPDATE ROLE" : "ADD ROLE"}
          </h1>
          <table className="table table-striped-columns table-sm table-secondary align-middle">
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
                <th className="px-3">Discription: </th>
                <td>
                  <input
                    type="text"
                    className="form-control"
                    name="discription"
                    value={this.state.discription}
                    onChange={(ev) => this.changeState(ev)}
                  />
                </td>
                <td className="text-danger">
                  {this.state.inputError.discription}
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
                <td colSpan="3" className="text-center">
                  <button
                    className="btn btn-dark"
                    onClick={() => this.save("Role")}
                  >
                    {this.props.match.params.pid ? "Update Role" : "Add Role"}
                  </button>
                </td>
              </tr>
              <tr>
                <td colSpan="3" className="text-center">
                  <button
                    className="btn btn-dark"
                    onClick={() => this.reset("Role")}
                  >
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
