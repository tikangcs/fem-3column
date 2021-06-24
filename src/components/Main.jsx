import React from "react";
import Column from "./Column.jsx";

export default function Main() {
  return (
    <div className="container">
      <Column
        title="SEDANS"
        id="sedans"
        img="../images/icon-sedans.svg"
        alt="sedans-icon"
        description="Choose a sedan for its affordability and excellent fuel economy.
        Ideal for cruising in the city or on your next road trip."
      />
      <Column
        title="SUVS"
        id="suvs"
        img="../images/icon-suvs.svg"
        alt="suvs-icon"
        description="Take an SUV for its spacious interior, power, and versatility.
        Perfect for your next family vacation and off-road adventures."
      />
      <Column
        title="LUXURY"
        id="luxury"
        img="../images/icon-luxury.svg"
        alt="luxury-icon"
        description="Cruise in the best car brands without the bloated prices. Enjoy
        the enhanced comfort of a luxury rental and arrive in style."
      />
    </div>
  );
}
