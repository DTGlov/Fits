import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import wardrobe from '../../assets/wardrobe.jpeg'
import './sign-in.css'


const SignIn = () => {
    const [email, setAddress] = useState('');
    const [password, setPassword] = useState('');

    const [error, setError] = useState('');
    const isInvalid = password === "" || email === ""

    const handleLogin = (e) => { 
        e.preventDefault();

        // try {
            
        // } catch (error) {
            
        // }
    }
     
    

    return (
        <div className="h-screen"
            style={{
            backgroundImage:`url(${wardrobe})`
        }}>
        <div className="container">
          <div className="container-items">
            <div className="items">
              <h1 className="title">Sign In</h1>

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
                  Log In
                </button>
              </form>
              <div className="account-section">
                <p>
                  Don't have an Account?
                  <Link to="/signup" className="signup">
                    Sign up
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
 
export default SignIn;