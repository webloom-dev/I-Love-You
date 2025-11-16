
import React from 'react';

export const PhotoIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g transform="rotate(5 50 50)">
        {/* Polaroid Frame */}
        <rect x="10" y="10" width="80" height="85" fill="#FFF8DC" stroke="#D2B48C" strokeWidth="2" rx="5" />
        {/* Image Area */}
        <rect x="18" y="18" width="64" height="54" fill="#87CEEB" stroke="#D2B48C" strokeWidth="1" />
        {/* Scenery */}
        <circle cx="60" cy="30" r="10" fill="#FFD700" />
        <path d="M 20 70 L 40 50 L 55 65 L 70 55 L 80 70 Z" fill="#3CB371" />
        {/* Heart */}
         <path d="M 50 82 L 55 78 A 5 5 0 0 1 62 82 L 50 90 L 38 82 A 5 5 0 0 1 45 78 Z" fill="#FF4500" />
      </g>
    </svg>
  );
};
