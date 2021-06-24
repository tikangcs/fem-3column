import React from "react";

export default function Column({ title, id, img, alt, description }) {
  return (
    <div className="column" id={id}>
      <div className="column__content">
        <img src={img} alt={alt} />
        <h1>{title}</h1>
        <article>{description}</article>
        <button>Learn More</button>
      </div>
    </div>
  );
}
