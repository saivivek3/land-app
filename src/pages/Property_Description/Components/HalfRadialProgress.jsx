const HalfRadialProgress = ({ progress, size, strokeWidth }) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = Math.PI * radius;
  const offset = circumference * (1 - progress / 100);

  return (
    <svg width={size} height={size / 2}>
      {/* Background Semi-Circle */}
      <path
        d={`M ${strokeWidth / 2} ${size / 2} 
            A ${radius} ${radius} 0 0 1 ${size - strokeWidth / 2} ${size / 2}`}
        fill="none"
        stroke="#ddd"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      {/* Progress Semi-Circle */}
      <path
        d={`M ${strokeWidth / 2} ${size / 2} 
            A ${radius} ${radius} 0 0 1 ${size - strokeWidth / 2} ${size / 2}`}
        fill="none"
        stroke="blue"
        strokeWidth={strokeWidth}
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        strokeLinecap="round"
      />
      {/* Progress Text */}
      <text
        x="50%"
        y="100%"
        textAnchor="middle"
        dy="-10"
        fontSize="20"
        fill="blue"
        fontWeight="bold"
      >
        {progress}%
      </text>
    </svg>
  );
};

export default HalfRadialProgress;
