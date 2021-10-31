import React from "react";
import { Button, Nav } from "react-bootstrap";
// import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "./Banner.css";
const Banner = () => {
  return (
    <div className="row background-img">
      <div className="col-md-12 col-sm-12 mt-5 pt-5">
        <h1 className="mt-5 pt-5">
          <strong>Are You Plannig Vacation?</strong>
        </h1>
        <Nav.Link as={HashLink} to="/home#offers">
          <Button className="btn btn-warning mt-3 text-white fs-4 rounded">
            See Our Offers
          </Button>
        </Nav.Link>
      </div>
    </div>
  );
};

export default Banner;
