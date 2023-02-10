import React, { Component } from "react";

export default class Home extends Component {
  render() {
    return (
      <>
        {!sessionStorage.token ? (
          <div className="appLogin"></div>
        ) : (
          <div className="appHome"></div>
        )}
      </>
    );
  }
}
