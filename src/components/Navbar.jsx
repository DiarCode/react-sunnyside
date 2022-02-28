import React, { useState } from 'react';
import { Link } from 'react-scroll';
import Logo from '../assets/logo.svg';
import Burger from '../assets/icon-hamburger.svg';
import '../style/navbar.css';
import BurgerMenu from './BurgerMenu';

const Navbar = () => {
    const [burgerVisib, setBurgerVisib] = useState(false);

    function showBurgerMenu() {
        if (burgerVisib === true) setBurgerVisib(false);
        else setBurgerVisib(true);
    }


  return (
      <div className="navbar">
          <Link className="navbar-logo" to="home" smooth={true} durations={1000}>
              <img src={Logo} alt="sunnyside"/>
          </Link>
          <div className="navbar-burger">
            <button className="burger-btn" onClick={showBurgerMenu}>
                  <img src={Burger} alt="burger"/>
            </button>
          </div>
          <div className="navbar-links">
              <Link className="links-about links" to="about" smooth={true} durations={1000}>About</Link>
              <Link className="links-services links" to="services" smooth={true} durations={1000}>Services</Link>
              <Link className="links-projects links" to="projects" smooth={true} durations={1000}>Projects</Link>
              <Link className="links-contact links" to="contact" smooth={true} durations={1000}>Contact</Link>
          </div>
          <BurgerMenu visib={burgerVisib} setVisib={setBurgerVisib}/>
      </div>
      
  );
};

export default Navbar;
