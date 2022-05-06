import React from "react";
import ReactIsCapsLockActive from "@matsun/reactiscapslockactive";
function Caplocks() {
  return (
    <ReactIsCapsLockActive>
      <h1>Active or inactive</h1>
      {(active) => <span>Caps lock is {active ? "active" : "inactive"}</span>}
    </ReactIsCapsLockActive>
  );
}

export default Caplocks;
