import React, { useState } from "react";
import "./Form.css";

function Form() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setName("");
    setEmail("");
    setPassword("");
    setComment("");
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <h2>Please let me know your feedback</h2>
        <label>Time: {new Date().toLocaleString() + ""}</label>
        <label>
          Name:
          <input
            placeholder="Full name (required for register)"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>

        <label>
          Email:
          <input
            placeholder="Email abc@gmail.com"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>

        <label id="pass">
          Password:
          <input
            id="password1"
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>

        <label>
          Comment:
          <textarea
            name="comment"
            placeholder="Hey Say Something..!!"
            id="comment_box"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          ></textarea>
        </label>
        <div className="button">
          <button type="submit">Submit the Form</button>
        </div>
      </form>
    </div>
  );
  // var input = document.getElementById("password1");
  // var text = document.getElementById("pass");
  // input.addEventListener("keyup", function (event) {
  //   if (event.getModifierState("CapsLock")) {
  //     text.style.display = "block";
  //   } else {
  //     text.style.display = "none";
  //   }
  // });
}

export default Form;
