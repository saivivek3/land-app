import cn from '@/lib/cn';

function Button({
  className,
  iconUrl,
  children,
  onClick,
  childrenClassName,
  ...props
}) {
  return (
    <button
      {...props}
      onClick={onClick}
      className={cn(
        'w-full mt-6 p-2 bg-buttonPrimary border border-bPrimary  text-base font-semibold shadow-sm rounded-lg text-white hover:bg-transparent/50 ',
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
}

export default Button;
