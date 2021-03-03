import React, { useState } from "react";
import { Link } from "react-router-dom";
import shoes from "../../assets/shoes.jpeg";
import "./sign-up.css";

const SignUp = () => {
  const [email, setAddress] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const isInvalid = password === "" || email === "";

  const handleLogin = (e) => {
    e.preventDefault();

    // try {

    // } catch (error) {

    // }
  };

  return (
    <div
      className="h-screen"
      style={{
        backgroundImage: `url(${shoes})`,
      }}
    >
      <div className="container">
        <div className="container-items">
          <div className="items">
            <h1 className="title">Create an Account</h1>

            {error && <p className="error">{error}</p>}

            <form onSubmit={handleLogin} method="POST">
              <input
                aria-label="Enter your Email Address"
                type="text"
                placeholder="Email"
                className="input"
                onChange={({ target }) => setAddress(target.value)}
              />
              <input
                aria-label="Enter your Password"
                type="password"
                placeholder="Password"
                className="input"
                onChange={({ target }) => setPassword(target.value)}
              />
              <button
                disabled={isInvalid}
                className={isInvalid ? "opacity-50 validate" : "validate"}
              >
                Sign Up
              </button>
            </form>
            <div className="account-section">
              <p>
                Already have an Account?
                <Link to="/signin" className="signup">
                  Sign in
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
