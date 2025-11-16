
import React from 'react';

export const HeartIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g transform="rotate(-3 50 50)">
        <path
          d="M 50 90 C 10 60, 40 20, 50 40 C 60 20, 90 60, 50 90 Z"
          fill="currentColor"
          stroke="#A52A2A"
          strokeWidth="3"
          strokeLinejoin="round"
          className="text-red-400"
        />
        {/* Shine */}
        <path d="M 45 45 C 50 35, 60 38, 58 48" fill="#FFF" opacity="0.5" />
      </g>
    </svg>
  );
};
