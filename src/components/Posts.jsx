import React from 'react';
import PhotoEgg from '../assets/image-transform.jpg';
import PhotoGlass from '../assets/image-stand-out.jpg';
import '../style/posts.css';


const Posts = () => {
  return (
    <div className="posts" id="about">
        <div className="posts-item">
              <div className="item-text">
                  <div className="text-title">Transform your brand</div>
                  <div className="text-info">We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.</div>
                  <div className="text-learn-yellow text-learn">Learn more</div>
              </div>
              <div className="item-photo">
                  <img src={PhotoEgg} alt="Transform"/>
              </div>
        </div>
        <div className="posts-item">
            <div className="item-photo">
                <img src={PhotoGlass} alt="Transform"/>
            </div>
            <div className="item-text">
                <div className="text-title">Stand out to the right audience</div>
                <div className="text-info">  Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places.</div>
                <div className="text-learn-red text-learn">Learn more</div>
            </div>  
        </div>
        <div className="post-item-fruits" id="services">
            <div className="item-fruits cherry">
                <div className="fruits-text">
                    <div className="fruits-title">Graphic design</div>
                    <div className="fruits-info">  Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.</div>
                </div>
            </div>
            <div className="item-fruits orange">
                <div className="fruits-text">
                    <div className="fruits-title">Photography</div>
                    <div className="fruits-info">Increase your credibility by getting the most stunning, high-quality photos that improve your business image.</div>
                </div>
            </div>
        </div>
      </div>
  );
};

export default Posts;
