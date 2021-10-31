import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const ManageAllOrders = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    const url = `https://explore-wonderland.herokuapp.com/orders/`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

  const handleDelete = (id) => {
    const url = `https://explore-wonderland.herokuapp.com/orders/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          alert("deleted Successfully");
          const remain = orders.filter((order) => order._id !== id);
          setOrders(remain);
        }
      });
  };
  return (
    <div>
      <h2>Manage orders</h2>
      <div className="m-3">
        {orders.map((order) => (
          <div
            className="rounded shadow d-flex w-50 bg-warning p-3 m-3 mx-auto"
            key={order._id}
            order={order}
          >
            <h5>
              <strong>Order Id:</strong> {order._id}
              <strong>Place Name:</strong> {order.place}
            </h5>
            <button
              onClick={() => handleDelete(order._id)}
              className="btn btn-danger m-2"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageAllOrders;
