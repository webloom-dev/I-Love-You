import React from 'react';
import { BoyCharacter } from './icons/BoyCharacter';

interface IntroSceneProps {
  onStart: () => void;
}

const IntroScene: React.FC<IntroSceneProps> = ({ onStart }) => {
  return (
    <div className="flex flex-col items-center justify-center text-center p-6 bg-white/70 rounded-3xl shadow-lg animate-fade-in">
      <h1 className="text-3xl font-bold text-rose-500 mb-4">رحلة حب</h1>
      <div className="relative mb-6">
        <BoyCharacter className="h-48 w-48"/>
        <div className="absolute -top-4 -left-16 bg-white border-2 border-amber-300 rounded-full px-4 py-2 shadow-md rotate-12 animate-pulse">
            <p className="text-lg italic">كيف أخبرها...؟</p>
        </div>
      </div>
      <p className="mb-8 text-lg">ساعده ليجمع شجاعته بجمع الذكريات الثمينة.</p>
      <button
        onClick={onStart}
        className="px-8 py-3 bg-rose-400 text-white font-bold rounded-full shadow-lg hover:bg-rose-500 transition-transform transform hover:scale-105"
      >
        ابدأ الرحلة
      </button>
    </div>
  );
};

export default IntroScene;