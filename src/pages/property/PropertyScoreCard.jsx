import React, { useEffect, useState } from 'react';

const PropertyScoreCard = ({
  score = 20,
  title = 'Property Score',
  subtitle = 'Higher your score better your visibility',
  size = 110,
  strokeWidth = 6,
  bgColor = '#9E77ED',
  progressColor = '#7F56D9',
  textColor = '#7F56D9',
}) => {
  const [offset, setOffset] = useState(0);

  const center = size / 2;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  useEffect(() => {
    const progress = 1 - score / 100;
    setOffset(circumference * progress);

    const progressElement = document.querySelector('.progress-ring-circle');
    progressElement.style.transition = 'stroke-dashoffset 0.8s ease-in-out';
  }, [score, circumference]);

  return (
    <div className="p-4 bg-white rounded-xl border my-3 min-w-32">
      <div className="flex flex-col items-center">
        <div className="relative" style={{ width: size, height: size }}>
          <svg className="transform -rotate-90" width={size} height={size}>
            <circle
              className="progress-ring-circle opacity-20"
              stroke={bgColor}
              strokeWidth={strokeWidth}
              fill="transparent"
              r={radius}
              cx={center}
              cy={center}
            />

            <circle
              className="progress-ring-circle"
              stroke={progressColor}
              strokeWidth={strokeWidth}
              strokeDasharray={circumference}
              strokeDashoffset={offset}
              strokeLinecap="round"
              fill="transparent"
              r={radius}
              cx={center}
              cy={center}
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span
              className="font-semibold text-2xl"
              style={{ color: textColor }}
            >
              {score}%
            </span>
          </div>
        </div>

        <h3 className="mt-4 text-base text-primary font-bold">{title}</h3>
        <p className="mt-1 text-xs text-[#717680] text-center">{subtitle}</p>
      </div>
    </div>
  );
};

export default PropertyScoreCard;
