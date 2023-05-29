import React from 'react';
import PropTypes from 'prop-types';

function BackgroundImage({ imgPath }) {
  const bgStyle = {
    backgroundImage: `url(${imgPath})`,
  };

  return (
    <div
      className="bg-cover bg-center bg-no-repeat bg-fixed h-screen"
      style={bgStyle}
    />
  );
}

BackgroundImage.propTypes = {
  imgPath: PropTypes.string.isRequired,
};

export default BackgroundImage;
