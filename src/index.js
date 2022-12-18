import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Footer from "./Components/Footer";
import Login from "./Components/Login";

ReactDOM.render(
  <React.StrictMode>
      <Login />
      <Footer />
  </React.StrictMode>,
  document.getElementById("root")
);
