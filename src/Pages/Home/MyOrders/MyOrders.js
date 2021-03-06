import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import useAuth from "../../../hooks/useAuth";

const MyOrders = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    const url = `https://explore-wonderland.herokuapp.com/orders/`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const myOrders = data.filter((order) => order.email === user?.email);
        setOrders(myOrders);
      });
  }, []);

  return (
    <div className="row">
      <h2 className="mt-5 fs-1 fw-bolder">My Orders</h2>
      <h5 className="text-success">
        You have{" "}
        <strong className="fw-bold text-danger">{orders.length}</strong> orders
      </h5>
      <div className="col-md-12 col-sm-12 m-3">
        {orders.map((order) => (
          <div
            className="rounded shadow d-flex w-75 bg-warning mx-auto p-3 m-3 row"
            key={order._id}
            order={order}
          >
            {/* <h5>
              <strong>Order Id:</strong> {order._id}
              <strong>Place Name:</strong> {order.place}
            </h5> */}
            <div className="col-md-6 col-sm-12 d-flex flex-column align-items-start mx-auto">
              <h5>
                <strong>Order Id:</strong> {order._id}
              </h5>
              <h5>
                <strong>Place Name:</strong> {order.place}
              </h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyOrders;
