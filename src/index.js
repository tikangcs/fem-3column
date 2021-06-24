import React from "react";
import ReactDOM from "react-dom";

const HelloWorld = () => {
  return (
    <div>
      <div>
        Sedans Choose a sedan for its affordability and excellent fuel economy.
        Ideal for cruising in the city or on your next road trip.
      </div>
      <div>
        SUVs Take an SUV for its spacious interior, power, and versatility.
        Perfect for your next family vacation and off-road adventures.
      </div>
      <div>
        Luxury Cruise in the best car brands without the bloated prices. Enjoy
        the enhanced comfort of a luxury rental and arrive in style.
      </div>
    </div>
  );
};

ReactDOM.render(<HelloWorld />, document.getElementById("root"));
