import React from "react";
import { Route, Routes, Link, Router } from "react-router-dom";
import { Header, Footer, Body, Qualification, Contact } from "./index";

function RouterAction() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/Qualification">Qualification</Link>
        <Link to="/Contact US">Contact US</Link>
      </nav>
      <Routes>
        <Route exact path="/" element={<Header />} />
        <Route exact path="./Qualification" element={<Qualification />} />
      </Routes>
    </div>
  );
}

export default RouterAction;
