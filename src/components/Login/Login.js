import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  return (
    <div className="container">
      <div className="row w-50 mx-auto text-start mt-4">
        <div className="col">
          <div className="login">
            <header className="text-center mb-5">
              <h2>Please Login</h2>
            </header>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" required />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" required />
              </Form.Group>
              <Button className="login-btn" type="submit">
                Login
              </Button>
              <div className="text-center my-2">
                <span>New to Tech Geeks? </span>
                <Link to="/signup">Create New Account</Link>
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

export default Login;
