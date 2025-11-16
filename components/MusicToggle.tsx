import React from 'react';
import { SpeakerOnIcon } from './icons/SpeakerOnIcon';
import { SpeakerOffIcon } from './icons/SpeakerOffIcon';

interface MusicToggleProps {
  isPlaying: boolean;
  onToggle: () => void;
}

const MusicToggle: React.FC<MusicToggleProps> = ({ isPlaying, onToggle }) => {
  return (
    <button
      onClick={onToggle}
      className="absolute top-4 left-4 z-10 p-2 bg-white/70 rounded-full shadow-md hover:bg-rose-100 transition"
      aria-label={isPlaying ? 'كتم الموسيقى' : 'تشغيل الموسيقى'}
    >
      {isPlaying ? (
        <SpeakerOnIcon className="w-6 h-6 text-rose-500" />
      ) : (
        <SpeakerOffIcon className="w-6 h-6 text-gray-500" />
      )}
    </button>
  );
};

export default MusicToggle;