import React from 'react';
import "../style/home.css"
import ArowDown from '../assets/icon-arrow-down.svg';
import Navbar from './Navbar';

const Home = () => {
  return (
      <div className="home" id="home">
          <Navbar/>
          <div className="home-title">
            <div className="title-slogan">we are creatives</div>
            <div className="title-arrow">
              <img src={ArowDown} alt="Arow Down" />
            </div>
          </div>
      </div>
  );
};

export default Home;
