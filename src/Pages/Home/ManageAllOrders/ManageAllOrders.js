import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Button, Modal } from "react-bootstrap";

const ManageAllOrders = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    const url = `https://explore-wonderland.herokuapp.com/orders/`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

  // React Bootstrap  Modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [anotherShow, setAnotherShow] = useState(false);
  const handleSuccessClose = () => setAnotherShow(false);
  const handleSuccessShow = () => setAnotherShow(true);

  // Handle Delete Order
  const handleDelete = (id) => {
    // alert("Are You sure you want to delete this?");
    // Instead alert I used modal on this
    const url = `https://explore-wonderland.herokuapp.com/orders/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          handleClose();
          handleSuccessShow();

          // alert("deleted Successfully");
          const remain = orders.filter((order) => order._id !== id);
          setOrders(remain);
        }
      });
  };

  return (
    <div>
      <h2>Manage orders</h2>
      <div className="m-3 row">
        {orders.map((order) => (
          <div key={order._id} order={order} className="col-sm-12 col-md-12">
            <div className="rounded shadow d-flex w-75 bg-warning mx-auto p-3 m-3 row">
              <div className="col-md-12 col-sm-12 d-flex flex-column align-items-start mx-auto">
                <h5>
                  <strong>Order Id:</strong> {order._id}
                </h5>
                <h5>
                  <strong>Place Name:</strong> {order.place}
                </h5>
              </div>
              <div className="col-sm-6 col-md-12 d-flex justify-content-center">
                {/* <button
                  onClick={() => handleDelete(order._id)}
                  className="btn btn-danger m-3"
                >
                  Delete
                </button> */}
                <Button variant="danger" onClick={handleShow}>
                  Delete
                </Button>
                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title className="text-danger">
                      Are you sure?
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body className="text-primary">
                    if you delete you will never get back your data!
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Close
                    </Button>
                    <Button
                      variant="danger"
                      onClick={() => handleDelete(order._id)}
                    >
                      Delete
                    </Button>
                  </Modal.Footer>
                </Modal>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* for successfull delete  */}
      <Modal show={anotherShow} onHide={handleSuccessClose}>
        <Modal.Header closeButton>
          <Modal.Title className="text-danger">Deleted</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-success">Deleted Successfully</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleSuccessClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      ;
    </div>
  );
};

export default ManageAllOrders;
