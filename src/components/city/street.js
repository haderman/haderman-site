import * as React from "react";

import "./street.css";

function Street() {
  return (
    <div id="street">
      <Platform />
      <Asphalt />
      <Platform />
    </div>
  );
}

function Platform() {
  return <div className="platform"></div>;
}

function Asphalt() {
  return <div className="asphalt"></div>;
}

export default Street;
