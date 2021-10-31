import React from "react";
import { Link } from "react-router-dom";
import notFound from "./not-found.jpg";
const NotFound = () => {
  return (
    <div className="not-found">
      <img style={{ width: "100%", height: "70vh" }} src={notFound} alt="" />
      <Link to="/">
        <button className="btn btn-success m-3">Go Back</button>
      </Link>
    </div>
  );
};

export default NotFound;
