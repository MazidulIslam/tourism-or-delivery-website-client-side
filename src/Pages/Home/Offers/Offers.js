import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Row } from "react-bootstrap";
import Offer from "../Offer/Offer";

const Offers = () => {
  const [offers, setOffers] = useState([]);
  useEffect(() => {
    const url = `https://explore-wonderland.herokuapp.com/offers`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setOffers(data));
  }, []);
  return (
    <>
      <div id="offers" className="container row mx-auto pt-5">
        <div className="my-5">
          <h5 className="fw-bold text-warning">Packages</h5>
          <h2 className="fw-bold ">Hot Offer Openings</h2>
          <hr className="w-25 mx-auto bg-warning mb-5" size="5" />
          <Row x s={1} md={3} className="g-4 ">
            {offers.map((offer) => (
              <Offer key={offer._id} offer={offer}></Offer>
            ))}
          </Row>
        </div>
      </div>
    </>
  );
};

export default Offers;
