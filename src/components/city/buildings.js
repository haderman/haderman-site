import * as React from "react";
import PropTypes from "prop-types";

import "./buildings.css";

function Buildings() {
  return (
    <div id="buildings" className="flex inline align-end">
      <div className="inline palette-1">
        <Build>
          <Roof />
          <Floor>
            <Window shape="square" />
            <Window shape="square" />
            <Window shape="square" />
          </Floor>
          <Floor>
            <Window shape="square" />
            <Window shape="square" />
            <Window shape="square" />
          </Floor>
          <Floor>
            <Window shape="square" />
            <Window shape="square" />
            <Window shape="square" />
          </Floor>
          <Floor>
            <Door />
          </Floor>
        </Build>
      </div>
      <div className="inline palette-2">
        <Build>
          <Roof />
          <Floor>
            <Door />
            <Window shape="rectangle" />
          </Floor>
        </Build>
      </div>
    </div>
  );
}

Build.propTypes = {
  children: PropTypes.node
};

function Build(props) {
  return (
    <div className="relative flex column justify-end align-center build">
      {props.children}
    </div>
  );
}

function Roof() {
  return <div className="roof relative" />;
}

function Floor(props) {
  return (
    <div className="floor relative flex justify-space-around">
      {props.children}
    </div>
  );
}

Window.propTypes = {
  shape: PropTypes.oneOf(["square", "rectangle"])
};

function Window(props) {
  return (
    <span className={"window relative self-center " + props.shape}></span>
  );
}

function Door() {
  return <span className="door relative self-end"></span>;
}

export default Buildings;
