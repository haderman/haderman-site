import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

Stars.propTypes = {
  sizes: PropTypes.arrayOf(
    PropTypes.oneOf(["small", "medium", "large"])
  )
};

Stars.defaultProps = {
  sizes: ["small", "medium", "large"]
};

function Stars({ sizes }) {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    setStars(
      Array
        .from(new Array(100))
        .map(() => ({
          posX: random(1, 100),
          posY: random(1, 100),
          size: sizes[random(0, sizes.length)]
        }))
        .filter(star => star.size !== "large" || star.posY < 70)
    );
  }, []);

  return (
    <div className="sky">
      {stars.map((starPoprs, i) =>
        <Star key={i} {...starPoprs} />
      )}
    </div>
  );
}

function random(from, to) {
  return Math.floor((Math.random() * to) + from);
}

Star.propTypes = {
  posX: PropTypes.number,
  posY: PropTypes.number,
  size: PropTypes.oneOf(["small", "medium", "large"])
};

Star.defaultProps = {
  posX: 0,
  posY: 0,
  size: "medium"
};

function Star({ posX, posY, size }) {
  return (
    <div
      className={"star " + size}
      style={{
        top: posY + "%",
        left: posX + "%"
      }}
    ></div>
  )
}

export default Stars;
