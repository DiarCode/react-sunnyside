import React from 'react';
import { useState } from 'react';
import '../style/images.css';
import PhotoMilk from '../assets/image-gallery-milkbottles.jpg';
import PhotoOrange from '../assets/image-gallery-orange.jpg';
import PhotoCone from '../assets/image-gallery-cone.jpg';
import PhotoSugar from '../assets/image-gallery-sugarcubes.jpg';
import Image from './Image';


const Images = () => {
    const [image, setImage] = useState([
        {photo:PhotoMilk},
        {photo:PhotoOrange},
        {photo:PhotoCone},
        {photo:PhotoSugar},
    ])

  return (
      <div className="images" id="projects">
          {image.map(image => <Image image={image} /> )}
      </div>
  );
};

export default Images;
