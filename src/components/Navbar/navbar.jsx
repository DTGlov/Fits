import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'
import Logo from '../../assets/fashion.svg'

const Navbar = ({toggle}) => {
    return (
      <nav className="nav">
        <div className="hidden md:block">
          <Link to="/">
            <img src={Logo} className="w-8 h-8" alt="" />
          </Link>
        </div>
        <div className="hamburger md:hidden" onClick={toggle}>
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>
        <div className="text-white hidden md:block">
          <Link className="p-4">About Us</Link>
          <Link to="/signin" className="p-4">Log in</Link>
          <Link className="p-4">Sign Up</Link>
        </div>
        <div className="cart">
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
        </div>
      </nav>
    );
}
 
export default Navbar;