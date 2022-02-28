import React from 'react';

const Image = ({image}) => {
  return (
      <div className="image">
          <img src={image.photo} alt="imagesList"/>
      </div>
  );
};

export default Image;
