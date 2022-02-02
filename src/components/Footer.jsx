import React from 'react';
import '../style/footer.css';
import Logo from '../assets/logo.svg'
import PhotoFacebook from '../assets/icon-facebook.svg';
import PhotoInsta from '../assets/icon-instagram.svg';
import PhotoTwiiter from '../assets/icon-twitter.svg';
import PhotoPinterest from '../assets/icon-pinterest.svg';
import { Link } from 'react-scroll';

const Footer = () => {
  return (
      <footer className="footer" id="contact">
          <div className="footer-logo">
              <img src={Logo} alt="logo"/>
          </div>
          <div className="footer-links">
              <Link className="footer-about" to="about" smooth={true} durations={1000}>About</Link>
              <Link className="footer-services" to="services" smooth={true} durations={1000}>Services</Link>
              <Link className="footer-projects" to="projects" smooth={true} durations={1000}>Projects</Link>
          </div>
          <div className="footer-icons">
              <a href="https://www.facebook.com" className="icons-facebook">
                <img src={PhotoFacebook} alt="facebook"/>
              </a>
              <a href="https://www.instagram.com" className="iicons-instagram">
                <img src={PhotoInsta} alt="instagram" />
              </a>
              <a href="https://twitter.com" className="icons-twitter">
              <img src={PhotoTwiiter} alt="twitter" />
              </a>
              <a href="https://www.pinterest.pt" className="icons-printerests">
              <img src={PhotoPinterest} alt="printerests" />
              </a>
          </div>
      </footer>
  );
};

export default Footer;
