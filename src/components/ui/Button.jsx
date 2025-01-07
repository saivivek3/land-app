import cn from '@/lib/cn';

function Button({ className, iconUrl, children, ...props }) {
  return (
    <button
      {...props}
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
