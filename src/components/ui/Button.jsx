import cn from '@/lib/cn';
import React from 'react';

const Button = React.forwardRef(
  (
    { className, iconUrl, children, onClick, childrenClassName, ...props },
    ref, // Forwarded ref
  ) => {
    return (
      <button
        {...props}
        ref={ref} // Forward the ref to the button element
        onClick={onClick}
        className={cn(
          'w-full mt-6 p-2 bg-buttonPrimary border border-bPrimary text-base font-semibold shadow-sm rounded-lg text-white hover:bg-buttonPrimary/50',
          className,
        )}
      >
        <div
          className={cn(
            'flex justify-center items-center gap-2',
            childrenClassName && childrenClassName,
          )}
        >
          {iconUrl && <img src={iconUrl} alt={iconUrl} />}
          {children}
        </div>
      </button>
    );
  },
);

Button.displayName = 'Button'; // Set display name for debugging

export default Button;
