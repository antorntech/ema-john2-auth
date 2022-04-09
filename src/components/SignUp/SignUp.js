import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./SignUp.css";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPassword = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleCreateUser = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setError("Your Password Not Match");
      return;
    }
  };

  return (
    <div className="container">
      <div className="row w-50 mx-auto text-start mt-4">
        <div className="col">
          <div className="login">
            <header className="text-center mb-5">
              <h2>Please Sign Up</h2>
            </header>
            <Form onSubmit={handleCreateUser}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  onBlur={handleEmail}
                  type="email"
                  placeholder="Enter email"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  onBlur={handlePassword}
                  type="password"
                  placeholder="Password"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  onBlur={handleConfirmPassword}
                  type="password"
                  placeholder="Confirm Password"
                  required
                />
              </Form.Group>
              <p style={{ color: "red" }}>{error}</p>
              <Button className="login-btn" type="submit">
                Sign Up
              </Button>
              <div className="text-center my-2">
                <span>Already have an account? </span>
                <Link to="/login">Login</Link>
              </div>
              <div className="d-flex align-items-center my-4">
                <div className="line"></div>
                <div className="mx-2">or</div>
                <div className="line"></div>
              </div>
            </Form>
            <Button
              //   onClick={signInWithGoogle}
              className="google-btn mt-3"
              type="submit"
            >
              Continue With Google
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
