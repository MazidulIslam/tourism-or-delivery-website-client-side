import React from "react";
import "./Gallery.css";

const Gallery = ({ image }) => {
  const { img } = image;
  return (
    <div>
      <div className="col">
        <div className="card h-100">
          <img src={img} className="card-img-top" alt="..." />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
