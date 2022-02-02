import React from 'react';
import { Link } from 'react-scroll';
import '../style/burger.css'
import cl from './classes.module.css'

const BurgerMenu = ({visib, setVisib}) => {

    function showBurgerMenu() {
        if (visib) return ["burger burgerActive"];
        else return ["burger"];
    }

  return (
      <div className={showBurgerMenu().join(' ')}>
          <div className="burger-links">
              <Link className="burger-link" to="about" smooth={true} durations={1000}>About</Link>
              <Link className="burger-link" to="services" smooth={true} durations={1000}>Services</Link>
              <Link className="burger-link" to="projects" smooth={true} durations={1000}>Projects</Link>
              <Link className="burger-link" to="contact" smooth={true} durations={1000}>Contact</Link>
          </div>
      </div>
  );
};

export default BurgerMenu;
