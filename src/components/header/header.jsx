import React, { useState } from 'react';
import Dropdown from '../Dropdown/dropdown';
import Navbar from '../Navbar/navbar';

const Header = () => {
       const [isOpen, setIsOpen] = useState(false)
    
    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return ( 
        <div className="header">
            <Navbar toggle={ toggle}  />
            <Dropdown isOpen={ isOpen}/>
      </div>
     );
}
 
export default Header;