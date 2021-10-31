import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Footer = () => {
  return (
    <div className="bg-dark">
      <div className="App text-white container">
        <div className="row pt-5">
          <div className="col-md-4 col-sm-12">
            <h3>Explore Wonderland</h3>
            <p className="text-start px-5 pt-3">
              Tourism is the activities of people traveling to and staying in
              places outside their usual environment for leisure, business or
              other purposes for not more than one consecutive year.
            </p>
          </div>
          <div className="col-md-4 col-sm-12">
            <h3>Our Services</h3>
            <ul className="nav flex-column">
              <li className="nav-item">
                <Nav.Link
                  as={HashLink}
                  className="nav-link text-white"
                  to="/home#services"
                >
                  Special Activities
                </Nav.Link>
              </li>
              <li className="nav-item">
                <Nav.Link
                  as={HashLink}
                  className="nav-link text-white"
                  to="/home#services"
                >
                  Travel Arrangement
                </Nav.Link>
              </li>
              <li className="nav-item">
                <Nav.Link
                  as={HashLink}
                  className="nav-link text-white"
                  to="/home#services"
                >
                  Your Private Guide
                </Nav.Link>
              </li>
              <li className="nav-item">
                <Nav.Link
                  as={HashLink}
                  className="nav-link text-white"
                  to="/home#services"
                >
                  Location Manager
                </Nav.Link>
              </li>
            </ul>
          </div>
          <div className="col-md-4 col-sm-12">
            <h3>Footer Menu</h3>
            <ul className="nav flex-column">
              <li className="nav-item">
                <Nav.Link
                  className="nav-link active text-white"
                  aria-current="page"
                  as={HashLink}
                  to="/home#home"
                >
                  Home
                </Nav.Link>
              </li>
              <li className="nav-item">
                <Nav.Link
                  as={HashLink}
                  className="nav-link text-white"
                  to="/home#offers"
                >
                  Offers
                </Nav.Link>
              </li>
              <li className="nav-item">
                <Nav.Link
                  as={HashLink}
                  className="nav-link text-white"
                  to="/home#services"
                >
                  Our Services
                </Nav.Link>
              </li>
              <li className="nav-item">
                <Nav.Link
                  as={HashLink}
                  className="nav-link text-white"
                  to="/home#gallery"
                >
                  Gallery
                </Nav.Link>
              </li>
            </ul>
          </div>
        </div>
        <nav className="row bg-dark text-white p-3 mt-5">
          <div className="col-md-6 col-sm-12">
            <span>&copy;</span> Copyright 2021{" "}
            <strong>Explore Wonderland</strong>
          </div>
          <div className="col-md-6 col-sm-12">
            <p>
              Devoloped by <Link to="/home">Mazidul Islam</Link>
            </p>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Footer;
