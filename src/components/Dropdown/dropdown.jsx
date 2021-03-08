import React from 'react';
import './dropdown.css'
import { Link } from 'react-router-dom';
import {auth} from '../../firebase/firebase.utils'


const Dropdown = ({isOpen,currentUser}) => {
   

    return (
      <div className={isOpen ? "dropdown" : "hidden"}>
        <Link to="/" className="border">
          Home
        </Link>
        <Link to="/aboutus" className="border">
          About Us
        </Link>
        <Link className="border">
          {currentUser ? (
            <Link  onClick={() => auth.signOut()}>
              Sign Out
            </Link>
          ) : (
            <Link  to="/signin">Sign In</Link>
          )}
        </Link>
      </div>
    );
}
 
export default Dropdown;