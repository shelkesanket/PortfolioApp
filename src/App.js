import "./App.css";
import {
  Header,
  Footer,
  Body,
  Qualification,
  Contact,
  ErrorPage,
  Location,
} from "./Components/index";
import { Route, Link, BrowserRouter as Router, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      {/* <h1 style={{ color: "red" }}>HARE KRISHNA</h1> */}

      <Router>
        <Header />
        <Routes>
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/qualification" element={<Qualification />} />
          <Route path="/" element={<Body />} />
          <Route path="*" element={<ErrorPage />} />
          <Route path="/location" element={<Location />} />
        </Routes>
      </Router>

      {/* <Body /> */}
      <Footer />
      {/* <Body />
      <Footer /> */}
    </div>
  );
}

export default App;
