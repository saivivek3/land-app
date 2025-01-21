// import React, { Children } from "react";
import PropTypes from 'prop-types';
import Button from './ui/Button';
// Adjust the import path as needed

const Box = ({
  img,
  title,
  content,
  buttonText,
  buttonClass,
  onButtonClick,
  className,
  bg,
  // children,
  border,
}) => {
  return (
    <div
      className={`${border} p-4 flex flex-col ${bg} justify-center items-center gap-1 rounded-md`}
    >
      {/* {children} */}
      {img && <img src={img} alt={title} className="" />}
      {title && <h2 className="font-bold">{title}</h2>}
      {content && <p className="font-bold">{content}</p>}
      {buttonText && (
        <Button className={buttonClass} onClick={onButtonClick}>
          {buttonText}
        </Button>
      )}
    </div>
  );
};

Box.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  buttonClass: PropTypes.string,
  onButtonClick: PropTypes.func,
  className: PropTypes.string,
  bg: PropTypes.string,
  border: PropTypes.string,
};

Box.defaultProps = {
  buttonClass: 'bg-black text-white rounded-md',
  onButtonClick: () => {},
  className: '', // Default value for className
  bg: 'white', // Default value for bg
};

export default Box;
