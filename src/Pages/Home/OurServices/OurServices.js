import React from "react";

const OurServices = () => {
  return (
    <>
      <div id="services" className="container row mx-auto pt-5">
        <div className="py-5">
          <h5 className="fw-bold text-warning">Our Services</h5>
          <h2 className="fw-bold">Why you Choose Us</h2>
          <hr className="w-25 mx-auto bg-warning " size="5" />
          <div className="row row-cols-1 row-cols-md-4 g-4 pt-5">
            <div className="col">
              <div className="card h-100 border border-success">
                <i className="far fa-gem mt-3 fs-1 text-warning"></i>
                <div className="card-body">
                  <h5 className="card-title">Special Activities</h5>
                  <p className="card-text">
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100 border border-success">
                <i className="far fa-edit mt-3 fs-1 text-warning"></i>
                <div className="card-body">
                  <h5 className="card-title">Travel Arragement</h5>
                  <p className="card-text">
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100 border border-success">
                <i className="far fa-star mt-3 fs-1 text-warning"></i>
                <div className="card-body">
                  <h5 className="card-title">Your Private Guide</h5>
                  <p className="card-text">
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100 border border-success">
                <i className="fas fa-map-marker-alt mt-3 fs-1 text-warning"></i>
                <div className="card-body">
                  <h5 className="card-title">Location Manager</h5>
                  <p className="card-text">
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurServices;
