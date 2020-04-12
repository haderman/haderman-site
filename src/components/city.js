import React from "react";
import PropTypes from "prop-types";

import Stars from "./stars";
import "../styles/city.css";

function City() {
  return (
    <section className="relative full-viewport city-container flex column align-stretch justify-end">
      <Stars sizes={["small", "medium"]} />
      <Buildings />
    </section>
  );
}

function Buildings() {
  return (
    <div className="flex inline align-baseline">
      <Build size="small">
        <Roof />
        <Floor />
        <Ground />
      </Build>
      <Build size="large">
        <Roof />
        <Floor />
        <Ground />
      </Build>
      <Build size="medium">
        <Roof />
        <Floor />
        <Ground />
      </Build>
    </div>
  );
}

Build.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"])
};

Build.defaultProps = {
  size: "small"
};

function Build({ children, size }) {
  return (
    <div className={"relative flex column justify-end build " + size}>
      {children}
    </div>
  );
}


Roof.propTypes = {
  primaryColor: PropTypes.string.isRequired,
  secondaryColor: PropTypes.string.isRequired
};

function Roof() {
  return (
    <div className="roof"></div>
  );
}

function Floor() {
  return (
    <div className="full-width red"></div>
  );
}

function Ground() {
  return (
    <div></div>
  )
}

export default City;
