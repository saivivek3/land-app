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
      {content && <div className="font-bold">{content}</div>}
      {buttonText && (
        <Button className={buttonClass} onClick={onButtonClick}>
          {buttonText}
        </Button>
      )}
    </div>
  );
};

export default Box;
