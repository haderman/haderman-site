import React from "react";

import Stars from "./stars";
import Planet from "./planet";
import "../styles/universe.css";

function Universe() {
  return (
    <section className="relative full-viewport universe-container flex justify-center align-center">
      <Stars />
      <Planet
        color="A"
        pattern="A"
        size="medium"
        posX="10%"
        posY="10%"
      />
      <Planet
        color="B"
        pattern="B"
        size="small"
        posX="80%"
        posY="40%"
      />
      <Planet
        color="D"
        pattern="A"
        size="large"
        posX="80%"
        posY="0%"
      />
    </section>
  )
}

export default Universe;
