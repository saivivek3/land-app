import PropTypes from 'prop-types'; // Optional, for prop validation
import Share from '@/pages/Property_Description/Components/images/share.svg';

function ShareComponent({ src, alt, className }) {
  return (
    <div className={className}>
      <img src={Share} alt={Share} />
    </div>
  );
}

// Set default props for src, alt, and className if not provided
ShareComponent.defaultProps = {
  alt: 'Share', // Default alt text
  className: '', // No extra classes by default
};

// Optional: Prop validation using PropTypes
ShareComponent.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  className: PropTypes.string,
};

export default ShareComponent;
