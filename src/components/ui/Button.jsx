import cn from '@/lib/cn';
import React from 'react';

function Button({ className, iconUrl, children, onClick, ...props }) {
  return (
    <button
      {...props}
      onClick={onClick}
      className={cn(
        'w-full mt-6 p-2 bg-buttonPrimary border border-bPrimary  text-sm font-semibold shadow-sm rounded-lg text-white hover:bg-buttonPrimary/50 ',
        className,
      )}
    >
      <div className="flex justify-center items-center gap-2">
        {iconUrl && <img src={iconUrl} alt={iconUrl} />}
        {children}
      </div>
    </button>
  );
}

export default Button;
