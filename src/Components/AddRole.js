import React from "react";
import BaseCtrl from "../BaseCtrl";

export default class AddRole extends BaseCtrl {
  constructor(props) {
    super(props);
    if (this.props.match.params.pid) {
      this.edit("Role");
    }
  }

  render() {
    return (
      <div className="container">
        <h1 className="text-center mb-3">
          {this.props.match.params.pid ? "Update Role" : "Add Role"}
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
              <td>Discription: </td>
              <td>
                <input
                  type="text"
                  className="form-control"
                  name="discription"
                  value={this.state.discription}
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
              <td colSpan="2">
                <button
                  className="myBtn"
                  onClick={(ev) => this.save("Role", ev)}
                >
                  {this.props.match.params.pid ? "Update Role" : "Add Role"}
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
