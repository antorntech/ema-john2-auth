import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./SignUp.css";

const SignUp = () => {
  return (
    <div className="container">
      <div className="row w-50 mx-auto text-start mt-4">
        <div className="col">
          <div className="login">
            <header className="text-center mb-5">
              <h2>Please Sign Up</h2>
            </header>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" placeholder="Confirm Password" />
              </Form.Group>
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
