import React from "react";
import "./ErrorPage.css";
import { Link } from "react-router-dom";
// import img from "../Components/404-error-page-not-found.jpg";

function ErrorPage() {
  return (
    <div className="error">
      <h1> Page Doesn't Exist</h1>
      <Link to="/">
        <p>Back to home</p>
      </Link>

      {/* <img src={img} alt="404 Error message" /> */}
    </div>
  );
}

export default ErrorPage;
