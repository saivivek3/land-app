import PropTypes from 'prop-types'; // To use prop types for type-checking (optional)
import likeImg from '@/pages/Property_Description/Components/images/like.svg';

function LikeComponent({ src, alt, className }) {
  return (
    <div
      className={`border border-gray-300 w-7 h-7 p-1 rounded-lg ${className}`}
    >
      <img src={likeImg} alt={likeImg} />
    </div>
  );
}

// Set default props for src, alt, and className if not provided
LikeComponent.defaultProps = {
  alt: 'Like', // default alt text
  className: '', // no extra classes by default
};

// Optional: Prop validation using PropTypes
LikeComponent.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  className: PropTypes.string,
};

export default LikeComponent;
