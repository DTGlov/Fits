import React from 'react';
import './hero.css'
import hero from '../../assets/shop.jpeg'
import {Link} from 'react-router-dom'

const Hero = () => {
    return (
      <div className="gradient">
        <div
          className="h-screen from-transparent"
          style={{
            backgroundImage: `url(${hero})`,
          }}
        >
          <h1 className="text">Fits</h1>
            <Link to="/shop" className="link"> SHOP NOW</Link>
        </div>
      </div>
    );
}
 
export default Hero;