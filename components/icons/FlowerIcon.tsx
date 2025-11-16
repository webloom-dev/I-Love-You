
import React from 'react';

export const FlowerIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g transform="rotate(-10 50 50)">
        {/* Stem */}
        <path d="M 50 95 C 60 70, 40 60, 50 40" stroke="#228B22" strokeWidth="4" fill="none" strokeLinecap="round" />
        {/* Leaf */}
        <path d="M 52 75 Q 65 70, 60 60" fill="#32CD32" stroke="#228B22" strokeWidth="2" />
        {/* Petals */}
        <circle cx="50" cy="30" r="12" fill="#FF69B4" stroke="#C71585" strokeWidth="2" />
        <circle cx="35" cy="40" r="12" fill="#FF69B4" stroke="#C71585" strokeWidth="2" />
        <circle cx="65" cy="40" r="12" fill="#FF69B4" stroke="#C71585" strokeWidth="2" />
        <circle cx="35" cy="20" r="12" fill="#FF69B4" stroke="#C71585" strokeWidth="2" />
        <circle cx="65" cy="20" r="12" fill="#FF69B4" stroke="#C71585" strokeWidth="2" />
        {/* Center */}
        <circle cx="50" cy="30" r="8" fill="#FFD700" stroke="#DAA520" strokeWidth="1.5" />
      </g>
    </svg>
  );
};
