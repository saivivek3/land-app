import React from 'react';
import PropTypes from 'prop-types';
// import Land from "../Components/images/big-land-land.jpg";
const LandCard = ({ imageUrl, altText, className }) => {
  return (
    <div className={`land-card ${className}`}>
      <img src={imageUrl} alt={imageUrl} className="land-card-img" />
    </div>
  );
};

LandCard.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  altText: PropTypes.string,
  className: PropTypes.string,
};

LandCard.defaultProps = {
  altText: 'Land Image',
  className: '',
};

export default LandCard;
