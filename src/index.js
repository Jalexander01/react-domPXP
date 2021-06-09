import React from "react";
import ReactDOM from "react-dom";
import Heading from "./pages/heading/Heading.component.jsx";

ReactDOM.render(
  <div>
    <Heading />
    <ul>
      <li>Bacon</li>
      <li>Groceries</li>
      <li>Ham</li>
    </ul>
  </div>,
  document.getElementById("root")
);
