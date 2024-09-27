import React, { useState } from 'react';

const LazyImage = ({ src, placeholder }) => {
  const [imgSrc, setImgSrc] = useState(placeholder);
  const [error, setError] = useState(false);

  const handleLoad = () => {
    setImgSrc(src);
  };

  return (
    <img 
      className='image'
      src={imgSrc}
      onLoad={handleLoad}
      onError={() => {
        setError(true);
        setImgSrc(placeholder); 
      }}
      alt="rasim"
      style={{ width: '250px', height: '200px' }} 
    />
  );
};

export default LazyImage;
