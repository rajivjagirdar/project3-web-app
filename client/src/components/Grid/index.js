import React from "react";
import "./style.css"

export function Container({ children }) {
  return <div className="container">{children}</div>;
}

export function Row({ fluid, children }) {
  return <div className={`row${fluid ? "-fluid" : ""}`}>{children}</div>;
}

export function Col({ size, children }) {
  return (
    <div
      className={size
        .split("")
        .map(size => "col-" + size)
        .join("")
      }
    >
      {children}
    </div>
  );


}
