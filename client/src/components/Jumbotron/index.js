import React from "react";

function Jumbotron({ children }) {
  return (
    <div
      style={{ height: 140, clear: "both", paddingTop: 20, textAlign: "left", backgroundColor: "white", }}
      className="jumbotron"
    >
      {children}
    </div>
  );
}

export default Jumbotron;
