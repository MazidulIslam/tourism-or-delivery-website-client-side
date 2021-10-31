import React from "react";
import { Button, Card, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import "./offer.css";

const Offer = ({ offer }) => {
  const { isLoading } = useAuth();
  if (isLoading) {
    return <Spinner animation="grow" variant="danger" />;
  }
  const { _id, name, price, image, off } = offer;
  const discountedAmount = (price * off) / 100;
  const discountedPrice = price - discountedAmount;
  return (
    <div>
      <Card className="border border-warning shadow shadow-lg">
        <Card.Img variant="top" src={image} className="img-height" />
        <Card.Body>
          <Card.Title className="fs-3">{name}</Card.Title>
          {/* <Card.Text>{description.slice(0, 200)}</Card.Text> */}
          <Card.Text className="text-danger fs-2 fw-bolder">
            {off}% off
          </Card.Text>
          <Card.Text>Package Price: {price}</Card.Text>
          <Card.Text className="fs-5">
            After Discount: {discountedPrice}
          </Card.Text>

          <Link as={Link} to={`/offer/${_id}`}>
            <Button variant="outline-warning">Book Now</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Offer;
