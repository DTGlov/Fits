import React, { useState } from "react";
import { Link } from "react-router-dom";
import shoes from "../../assets/shoes.jpeg";
import "./sign-up.css";
import {auth,createUserProfileDocument} from '../../firebase/firebase.utils'

const SignUp = () => {
  const [displayName,setDisplayName] = useState('')
  const [email, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [error, setError] = useState("");
  const isInvalid = password === "" || email === "" || displayName === ""  || confirmPassword === "";

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("passwords do not match")
      return
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password)
      await createUserProfileDocument(user, { displayName })
      setAddress('')
      setPassword('')
      setConfirmPassword('')
      setDisplayName('')
      
    } catch (error) {
      console.log(error)
      setError(error.message)
    }
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

            <form onSubmit={handleSignUp} method="POST">
              <input
                aria-label="Enter your Display Name"
                type="text"
                placeholder="Display Name"
                className="input"
                value={displayName}
                onChange={({ target }) => setDisplayName(target.value)}
              />
              <input
                aria-label="Enter your Email Address"
                type="text"
                placeholder="Email"
                className="input"
                value={email}
                onChange={({ target }) => setAddress(target.value)}
                required
              />

              <input
                aria-label="Enter your Password"
                type="password"
                placeholder="Password"
                className="input"
                onChange={({ target }) => setPassword(target.value)}
                value={password}
                required
              />
              <input
                aria-label="Enter your Password"
                type="password"
                placeholder="Confirm Password"
                className="input"
                value={confirmPassword}
                onChange={({ target }) => setConfirmPassword(target.value)}
                required
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
