import React from 'react';

interface GirlCharacterProps extends React.SVGProps<SVGSVGElement> {
    holdingBouquet?: boolean;
    wearingFormalDress?: boolean;
}

export const GirlCharacter: React.FC<GirlCharacterProps> = ({ holdingBouquet = false, wearingFormalDress = false, ...props }) => {
  const skinColor = "#FDF5E6"; // A very light, white skin tone
  return (
    <svg viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg" {...props}>
      {/* Head */}
      <circle cx="50" cy="35" r="25" fill={skinColor} stroke="#D2691E" strokeWidth="2" />
      
      {/* Hair */}
      <path d="M 25 20 C 20 5, 80 5, 75 20 V 50 Q 50 65, 25 50 Z" fill="#8B4513" stroke="#654321" strokeWidth="1.5" />
      <path d="M 75 20 C 80 25, 80 45, 75 50" fill="#8B4513" stroke="#654321" strokeWidth="1.5" />
      
      {/* Eyes (surprised/happy) */}
      <path d="M 38 35 Q 42 30, 46 35" fill="none" stroke="#654321" strokeWidth="2" strokeLinecap="round" />
      <path d="M 54 35 Q 58 30, 62 35" fill="none" stroke="#654321" strokeWidth="2" strokeLinecap="round" />

      {/* Mouth (happy) */}
      <path d="M 45 48 Q 50 55, 55 48" fill="none" stroke="#D2691E" strokeWidth="2" strokeLinecap="round" />
      
      {/* Blush */}
      <ellipse cx="35" cy="43" rx="5" ry="3" fill="#FFB6C1" opacity="0.7" />
      <ellipse cx="65" cy="43" rx="5" ry="3" fill="#FFB6C1" opacity="0.7" />

      {/* Body (Dress) */}
      {wearingFormalDress ? (
          <path d="M 30 60 L 50 58 L 70 60 L 85 115 L 15 115 Z" fill="#FFFFFF" stroke="#D3D3D3" strokeWidth="2" />
      ) : (
          <path d="M 30 60 L 50 58 L 70 60 L 80 110 L 20 110 Z" fill="#FFC0CB" stroke="#DB7093" strokeWidth="2" />
      )}
      
      {holdingBouquet ? (
          <>
            {/* Bouquet */}
            <g transform="translate(0, 5)">
                <path d="M 45 80 L 40 95" stroke="#228B22" strokeWidth="2.5" strokeLinecap="round"/>
                <path d="M 50 80 L 50 95" stroke="#228B22" strokeWidth="2.5" strokeLinecap="round"/>
                <path d="M 55 80 L 60 95" stroke="#228B22" strokeWidth="2.5" strokeLinecap="round"/>
                
                <circle cx="40" cy="75" r="8" fill="#FFC0CB" stroke="#DB7093" strokeWidth="1.5" />
                <circle cx="60" cy="75" r="8" fill="#FFC0CB" stroke="#DB7093" strokeWidth="1.5" />
                <circle cx="50" cy="68" r="9" fill="#FF69B4" stroke="#C71585" strokeWidth="1.5" />
                <circle cx="50" cy="82" r="7" fill="#FFF0F5" stroke="#DB7093" strokeWidth="1.5" />

                <circle cx="40" cy="75" r="3" fill="#FFD700" />
                <circle cx="60" cy="75" r="3" fill="#FFD700" />
                <circle cx="50" cy="68" r="4" fill="#FFD700" />
            </g>
            {/* Arms holding bouquet */}
            <path d="M 30 65 Q 40 85, 45 80" fill="none" stroke={skinColor} strokeWidth="6" strokeLinecap="round" />
            <path d="M 70 65 Q 60 85, 55 80" fill="none" stroke={skinColor} strokeWidth="6" strokeLinecap="round" />
          </>
      ) : (
          <>
            {/* Default Arms */}
            <path d="M 30 65 Q 15 75, 25 85" fill="none" stroke={skinColor} strokeWidth="6" strokeLinecap="round" />
            <path d="M 70 65 Q 85 75, 75 85" fill="none" stroke={skinColor} strokeWidth="6" strokeLinecap="round" />
          </>
      )}
    </svg>
  );
};