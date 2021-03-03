import React from 'react';
import './dropdown.css'
import {Link} from 'react-router-dom'


const Dropdown = ({isOpen}) => {
   

    return (
      <div className={isOpen?'dropdown':"hidden"} >
        <Link to="/" className="border">Home</Link>
        <Link className="border">About Us</Link>
        <Link className="border">Log in</Link>
       
      </div>
    );
}
 
export default Dropdown;