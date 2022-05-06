import React from "react";
import "./Header.css";
import img from "../Components/download.jpg";
import {
  Header,
  Footer,
  Body,
  Qualification,
  Contact,
  ErrorPage,
  Location,
} from "./index";
import { Route, Link, BrowserRouter as Router, Routes } from "react-router-dom";

// import RouterAction from "./RouterAction";
// import { Link, Router } from "react-router-dom";

function header() {
  return (
    <div className="header">
      <div className="header_left">
        <div>
          <img src={img} alt="Sanket Shelke art" />
        </div>
        <div>
          <h1>Sanket Bhaurao Shelke</h1>
        </div>
        <div className="hrefs">
          <nav>
            <Link to="/">Home</Link>
            <Link to="/qualification">Qualification</Link>
            <Link to="/contact">Contact US</Link>
            <Link to="/location">Location</Link>
          </nav>

          {/* <Router>
            <nav>
              <Link to="/">Home</Link>
              <Link to="/qualification">Qualification</Link>
              <Link to="/contact">Contact US</Link>
            </nav>
          </Router> */}
        </div>
      </div>
      <div className="para">
        <p>
          Frontend devloper, 2.5 years of experience in Reactjs, Reduxjs,
          JavaScript, HTML, CSS.Strong proficiency in JavaScript, including DOM
          manipulation and the JavaScript object model.Familiarity with newer
          specifications of EcmaScript
        </p>
      </div>
    </div>
  );
}

export default header;
