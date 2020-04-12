import React from "react";

import Stars from "./stars";
import Planet from "./planet";

function Universe() {
  return (
    <section className="full-viewport universe-container flex justify-center align-center">
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
        posX="86%"
        posY="-8%"
      />
    </section>
  )
}

export default Universe;
