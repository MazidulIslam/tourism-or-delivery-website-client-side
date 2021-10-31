import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Gallery from "../Gallery/Gallery";

const Galleries = () => {
  const [images, setImages] = useState([]);
  useEffect(() => {
    const url = "https://explore-wonderland.herokuapp.com/gallery";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setImages(data));
  }, []);
  return (
    <>
      <div id="gallery" className="container row mx-auto pt-5">
        <div className="py-5">
          <h5 className="fw-bold text-warning">Galleries</h5>
          <h2 className="fw-bold">Our Gallery Reflect Us</h2>
          <hr className="w-25 mx-auto bg-warning " size="5" />
          <div className="row row-cols-1 row-cols-md-3 g-2 pt-5">
            {images.map((image) => (
              <Gallery key={image.id} image={image}></Gallery>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Galleries;
