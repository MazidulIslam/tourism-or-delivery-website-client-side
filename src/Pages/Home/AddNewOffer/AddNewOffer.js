import axios from "axios";
import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import "./AddNewOffer.css";

const AddNewOffer = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    axios
      .post("https://explore-wonderland.herokuapp.com/offers", data)
      .then((res) => {
        if (res.data.insertedId) {
          handleShow();
          // alert("added successfully");
          reset();
        }
      });
  };
  return (
    <div className="addOffer w-50 mx-auto m-5">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-warning p-5 rounded"
      >
        <h2 className="mb-5">Add an Offer</h2>
        <input
          placeholder="Enter Place Name"
          {...register("name", { required: true, maxLength: 100 })}
        />
        {}
        <br />
        <textarea
          placeholder="write description"
          {...register("description", { required: true, maxLength: 1000 })}
        />
        {}
        <br />
        <input
          placeholder="Offer Percentage"
          type="number"
          {...register("off", { required: true })}
        />
        {}
        <br />
        <input
          placeholder="Package Price"
          type="number"
          {...register("price", { required: true })}
        />
        {}
        <br />
        <p className="d-flex">
          <strong className="pe-2">Example Url : </strong>{" "}
          https://tinyurl.com/56926mxe
        </p>
        <input
          placeholder="Enter Image Url"
          type="url"
          {...register("image")}
        />
        {}
        <br />
        <input type="submit" className="btn btn-success" />
      </form>
      {/* Submit Alert modal  */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="text-success">Added Offer</Modal.Title>
        </Modal.Header>
        <Modal.Body>Nice! Successfully Added New Offer</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddNewOffer;
