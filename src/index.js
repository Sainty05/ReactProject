import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Footer from "./Components/Footer";
import Login from "./Components/Login";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Login />
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
