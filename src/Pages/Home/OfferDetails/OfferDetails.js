import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router";
import { useForm } from "react-hook-form";
import axios from "axios";
import useAuth from "../../../hooks/useAuth";

const OfferDetails = () => {
  const { user } = useAuth();
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    axios.post("http://localhost:5000/orders", data).then((res) => {
      if (res.data.insertedId) {
        alert("Order Placed Successfully");
        reset();
      }
    });
  };
  const { offerId } = useParams();

  const [offer, setOffer] = useState([]);
  useEffect(() => {
    const url = `http://localhost:5000/offers/${offerId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setOffer(data);
      });
  }, [offerId]);

  const discountedAmount = (offer.price * offer.off) / 100;
  const discountedPrice = offer.price - discountedAmount;
  return (
    <div className="container">
      <h1 className="text-success fs-1 fw-bold p-5">{offer.name}</h1>
      <div className="row my-5">
        <div className="col-md-6 col-sm-12 ">
          <h2 className="text-success fs-2 fw-bolder">
            After <strong className="text-danger">{offer.off}%</strong> discount{" "}
            <strong className="text-danger">{discountedPrice} tk</strong> only
          </h2>
          <img
            className="img-fluid rounded"
            src={offer.image}
            alt={offer.name}
          />
          <div>
            <h4>{offer.name}</h4>
            <p>{offer.description}</p>
          </div>
        </div>
        <div className="col-md-6 col-sm-12">
          <div className="addOffer ">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="bg-warning px-5 pt-2 pb-5 rounded"
            >
              <h2 className="">Place An Order</h2>
              <input
                defaultValue={user?.displayName}
                {...register("name", {
                  required: true,
                  maxLength: 100,
                })}
              />
              {}
              <br />
              <input
                defaultValue={user?.email}
                {...register("email", {
                  required: true,
                })}
              />
              {}
              <br />
              <input
                placeholder="Your Address"
                {...register("address", {
                  required: true,
                })}
              />
              {}
              <br />
              <input
                placeholder="Your Phone Number"
                {...register("phone", {
                  required: true,
                })}
              />
              {}
              <br />
              <input
                placeholder="Paid Amout"
                type="number"
                {...register("amount", { required: true })}
              />
              {}
              <br />
              <input
                defaultValue={offer._id}
                {...register("orderid", {
                  required: true,
                })}
              />
              {}
              <br />
              <input
                defaultValue={offer.name}
                {...register("place", {
                  required: true,
                })}
              />
              {}
              <br />
              <input type="submit" className="btn btn-success" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferDetails;
