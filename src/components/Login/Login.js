import React, { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Button, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Login.css";
import auth from "../../firebase.init";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const [signInWithEmailAndPassword, user] =
    useSignInWithEmailAndPassword(auth);

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  if (user) {
    navigate(from, { replace: true });
  }

  const handleSignIn = (event) => {
    signInWithEmailAndPassword(email, password).then((result) => {
      const user = result.user;
      console.log(user);
    });
    event.preventDefault();
  };

  return (
    <div className="container">
      <div className="row w-50 mx-auto text-start mt-4">
        <div className="col">
          <div className="login">
            <header className="text-center mb-5">
              <h2>Please Login</h2>
            </header>
            <Form onSubmit={handleSignIn}>
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
