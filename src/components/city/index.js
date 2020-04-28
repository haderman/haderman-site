import * as React from "react";

import "./city.css";
import Buildings from "./buildings";
import Street from "./street";
import Grass from "./grass";

function City() {
  return (
    <section id="city" className="relative full-viewport city-container flex column align-center justify-end">
      <Buildings />
      <Street />
      <Grass />
    </section>
  );
}

export default City;
