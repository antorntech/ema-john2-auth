import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const Shipment = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  //   const navigate = useNavigate();

  const handleName = (event) => {
    setName(event.target.value);
  };

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleAddress = (event) => {
    setAddress(event.target.value);
  };

  const handlePhone = (event) => {
    setPhone(event.target.value);
  };

  return (
    <div className="container">
      <div className="row w-50 mx-auto text-start mt-4">
        <div className="col">
          <div className="login">
            <header className="text-center mb-5">
              <h2>Shipping Information</h2>
            </header>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Your Name</Form.Label>
                <Form.Control
                  onBlur={handleName}
                  type="text"
                  placeholder="name"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Your Email</Form.Label>
                <Form.Control
                  onBlur={handleEmail}
                  type="email"
                  placeholder="email"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicAddress">
                <Form.Label>Address</Form.Label>
                <Form.Control
                  onBlur={handleAddress}
                  type="text"
                  placeholder="address"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPhone">
                <Form.Label>Phone</Form.Label>
                <Form.Control
                  onBlur={handlePhone}
                  type="text"
                  placeholder="phone"
                  required
                />
              </Form.Group>
              <p style={{ color: "red" }}>{error}</p>
              <Button className="login-btn" type="submit">
                Add Shipping
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shipment;
<h1>This is Shipment.</h1>;
