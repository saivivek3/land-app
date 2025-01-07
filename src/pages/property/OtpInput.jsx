import { useState, useRef } from 'react';

const OTPInput = () => {
  const [otp, setOtp] = useState(new Array(4).fill(''));
  const inputRefs = useRef([]);

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return;

    const newOtp = [...otp];
    newOtp[index] = element.value;
    setOtp(newOtp);

    // Move to next input if value is entered
    if (element.value && index < 5) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handlePaste = e => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text').slice(0, 6).split('');
    const newOtp = [...otp];

    pastedData.forEach((value, index) => {
      if (index < 6 && !isNaN(value)) {
        newOtp[index] = value;
      }
    });

    setOtp(newOtp);
    if (pastedData.length > 0) {
      inputRefs.current[Math.min(pastedData.length, 5)].focus();
    }
  };

  return (
    <>
      <label htmlFor="otp" className=" mb-4 block text-xs text-[#242426]">
        Confirmation
      </label>
      <div className="flex gap-2  mb-4">
        {otp.map((digit, index) => (
          <input
            key={index}
            ref={ref => (inputRefs.current[index] = ref)}
            type="text"
            name="otp"
            maxLength={1}
            value={digit}
            onChange={e => handleChange(e.target, index)}
            onKeyDown={e => handleKeyDown(e, index)}
            onPaste={handlePaste}
            className="w-7 h-4 bg-transparent border-x-0 border-t-0 text-secondary text-xl font-semibold transition-colors border border-b-[1px] border-b-[#cbcbcb] outline-none text-center "
          />
        ))}
      </div>
    </>
  );
};

export default OTPInput;
