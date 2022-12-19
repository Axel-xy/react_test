import React from "react";
import ReactDOM from "react-dom";

const name = "Axel";
const year = new Date().getFullYear();
const img200 = "https://picsum.photos/200";

const customStyle = {
  color: "red",
  fonSize: "20px",
  border: "1px solid black"
};
customStyle.color = "blue";

ReactDOM.render(
  <div>
    <h1 className="heading"> Created by {name} </h1>
    <ul>
      <li>Coffee</li>
      <li>Tea</li>
      <li>Milk</li>
    </ul>
    <img src={img200 + "?grayscale"} alt="test" />
    <p style={customStyle}>Copyright {year} </p>
  </div>,
  document.getElementById("root")
);
