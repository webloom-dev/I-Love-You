import React from 'react';

interface BoyCharacterProps extends React.SVGProps<SVGSVGElement> {
  kneeling?: boolean;
  holdingRing?: boolean;
  wearingSuit?: boolean;
}

export const BoyCharacter: React.FC<BoyCharacterProps> = ({ kneeling = false, holdingRing = false, wearingSuit = false, ...props }) => {
  return (
    <svg viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g transform={kneeling ? "translate(0, 20)" : ""}>
        {/* Head */}
        <circle cx="50" cy="30" r="25" fill="#FFDAB9" stroke="#A0522D" strokeWidth="2" />
        
        {/* Hair */}
        <path d="M 30 10 C 35 0, 65 0, 70 10 L 75 30 L 25 30 Z" fill="#5D4037" stroke="#3E2723" strokeWidth="1.5" />
        <path d="M 72 25 Q 78 35, 70 40" fill="none" stroke="#5D4037" strokeWidth="2" />
        <path d="M 28 25 Q 22 35, 30 40" fill="none" stroke="#5D4037" strokeWidth="2" />
        
        {/* Eyes */}
        <circle cx="40" cy="30" r="2.5" fill="#3E2723" />
        <circle cx="60" cy="30" r="2.5" fill="#3E2723" />

        {/* Mouth */}
        <path d="M 45 42 Q 50 48, 55 42" fill="none" stroke="#3E2723" strokeWidth="1.5" strokeLinecap="round" />
        
        {/* Blush */}
        <ellipse cx="35" cy="38" rx="5" ry="3" fill="#FFC0CB" opacity="0.6" />
        <ellipse cx="65" cy="38" rx="5" ry="3" fill="#FFC0CB" opacity="0.6" />

        {/* Body */}
        {kneeling ? (
            <>
              <path d="M 50 55 V 80" stroke="#4682B4" strokeWidth="15" strokeLinecap="round" />
              <path d="M 50 80 L 30 100" stroke="#1E90FF" strokeWidth="15" strokeLinecap="round" />
              <path d="M 38 65 L 25 80" stroke="#FFDAB9" strokeWidth="6" strokeLinecap="round" />
              <path d="M 62 65 L 80 75" stroke="#FFDAB9" strokeWidth="6" strokeLinecap="round" />
              {holdingRing && (
                 <>
                    <rect x="78" y="68" width="10" height="8" fill="#A52A2A" rx="1" stroke="#611a1a" strokeWidth="0.5"/>
                    <rect x="78" y="66" width="10" height="2" fill="#800000" rx="1" stroke="#611a1a" strokeWidth="0.5"/>
                    <circle cx="83" cy="66" r="2" fill="none" stroke="#FFD700" strokeWidth="1" />
                    <circle cx="83" cy="65.5" r="0.75" fill="#B0E0E6" />
                </>
              )}
            </>
        ) : (
            <>
              {wearingSuit ? (
                <>
                    {/* Suit Jacket */}
                    <path d="M 37.5 55 L 35 100 L 65 100 L 62.5 55 L 50 70 Z" fill="#333" stroke="#111" strokeWidth="1.5"/>
                    {/* White Shirt */}
                    <path d="M 50 55 L 45 65 L 55 65 Z" fill="#FFF" />
                    {/* Bowtie */}
                    <path d="M 50 64 L 46 60 L 46 68 Z" fill="#c00" />
                    <path d="M 50 64 L 54 60 L 54 68 Z" fill="#c00" />
                    <circle cx="50" cy="64" r="2.5" fill="#c00" />
                    {/* Suit Pants */}
                    <path d="M 50 90 L 40 115" stroke="#333" strokeWidth="10" strokeLinecap="round" />
                    <path d="M 50 90 L 60 115" stroke="#333" strokeWidth="10" strokeLinecap="round" />
                </>
              ) : (
                <>
                    {/* Casual Shirt */}
                    <path d="M 50 55 V 90" stroke="#4682B4" strokeWidth="25" strokeLinecap="round" />
                    {/* Casual Pants */}
                    <path d="M 50 90 L 40 115" stroke="#1E90FF" strokeWidth="10" strokeLinecap="round" />
                    <path d="M 50 90 L 60 115" stroke="#1E90FF" strokeWidth="10" strokeLinecap="round" />
                </>
              )}
               {/* Arms (same for both outfits) */}
              <path d="M 38 65 L 20 80" stroke="#FFDAB9" strokeWidth="6" strokeLinecap="round" />
              <path d="M 62 65 L 80 80" stroke="#FFDAB9" strokeWidth="6" strokeLinecap="round" />
            </>
        )}
      </g>
    </svg>
  );
};