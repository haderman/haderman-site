import * as React from "react";
import PropTypes from "prop-types";

import "./buildings.css";

const elements = [{
  id: 0,
  type: "build",
  floors: 2
}, {
  id: 1,
  type: "build",
  floors: 1
}, {
  id: 2,
  type: "build",
  floors: 4
}, {
  id: 3,
  type: "build",
  floors: 2
}, {
  id: 4,
  type: "build",
  floors: 1
}, {
  id: 5,
  type: "build",
  floors: 5
}]


function Buildings() {

  return (
    <div id="buildings" className="flex inline align-end">
      {elements.map(item  => {
        const { floors, id } = item

        if (floors === 1) {
          return (
            <Build key={id}>
              <Roof />
              <FloorConteiner>
                <Floor>
                  <Door />
                  <Window shape="rectangle" />
                </Floor>
              </FloorConteiner>
            </Build>
          )
        }

        return (
          <Build key={id}>
            <Roof />
            <FloorConteiner>
              {Array(floors).fill(undefined).map((_, index) =>
                index === floors - 1 ? (
                  <Floor key={index}>
                    <Door />
                  </Floor>
                ) : (
                  <Floor key={index}>
                    <Window shape="square" />
                    <Window shape="square" />
                    <Window shape="square" />
                  </Floor>
                )
              )}
            </FloorConteiner>
          </Build>
        )
      })}
    </div>
  )
  return (
    <div id="buildings" className="flex inline align-end">
      <Build>
        <Roof />
        <FloorConteiner>
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
        </FloorConteiner>
      </Build>
      <Build>
        <Roof />
        <FloorConteiner>
          <Floor>
            <Door />
            <Window shape="rectangle" />
          </Floor>
        </FloorConteiner>
      </Build>
      <Build>
        <Roof />
        <FloorConteiner>
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
        </FloorConteiner>
      </Build>
      <Build>
        <Roof />
        <FloorConteiner>
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
            <Window shape="square" />
            <Window shape="square" />
            <Window shape="square" />
          </Floor>
          <Floor>
            <Door />
          </Floor>
        </FloorConteiner>
      </Build>
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

function FloorConteiner({ children }) {
  return (
    <div className="floor-container">
      {children}
    </div>
  )
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
