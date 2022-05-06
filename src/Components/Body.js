import React from "react";
import "./Body.css";
import Form from "../Components/Form";

function Body() {
  return (
    <div className="body">
      <div className="body_main">
        <p>
          Strong proficiency in JavaScript, including DOM manipulation and the
          JavaScript object model Thorough understanding of React.js and its
          core principles Experience with popular React.js workflows (such as
          Flux or Redux) Familiarity with newer specifications of EcmaScript
          Experience with data structure libraries (e.g., Immutable.js)
          Knowledge of isomorphic React is a plus Familiarity with RESTful APIs
          Knowledge of modern authorization mechanisms, such as JSON Web Token
          Familiarity with modern front-end build pipelines and tools Experience
          with common front-end development tools such as Babel, Webpack, NPM,
          etc. Ability to understand business requirements and translate them
          into technical requirements A knack for benchmarking and optimization
          Familiarity with code versioning tools
        </p>
      </div>
      <div className="body_form">
        <Form />
      </div>
    </div>
  );
}

export default Body;
