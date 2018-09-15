import React from "react";

export const Btn = props => (
  <button {...props} style={{ backgroundColor : "#732c7b"}} className="btn text-light">
    {props.children}
  </button>
);