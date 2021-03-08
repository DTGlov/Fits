import React, { useState } from 'react';
import Dropdown from '../Dropdown/dropdown';
import Navbar from '../Navbar/navbar';

const Header = ({currentUser}) => {
       const [isOpen, setIsOpen] = useState(false)
    
    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return ( 
        <div className="header">
            <Navbar toggle={ toggle} currentUser={currentUser}  />
            <Dropdown isOpen={isOpen} currentUser={ currentUser}/>
      </div>
     );
}
 
export default Header;