import React, { useState } from 'react';
import { BoyCharacter } from './icons/BoyCharacter';
import { GirlCharacter } from './icons/GirlCharacter';
import { HeartIcon } from './icons/HeartIcon';

interface FinalSceneProps {
    onRestart: () => void;
}

const FinalScene: React.FC<FinalSceneProps> = ({ onRestart }) => {
    const [isAccepted, setIsAccepted] = useState(false);

    return (
        <div className="flex flex-col items-center justify-center text-center p-6 bg-gradient-to-br from-yellow-100 to-rose-200 rounded-3xl shadow-lg animate-fade-in">
            {!isAccepted ? (
                <>
                    <div className="flex items-end justify-center gap-4 mb-6">
                        <BoyCharacter className="h-32 w-32" kneeling={true} holdingRing={true} />
                        <GirlCharacter className="h-40 w-40" />
                    </div>
                    <div className="bg-white/80 p-6 rounded-2xl shadow-inner">
                        <p className="text-xl font-semibold italic text-amber-800 leading-relaxed">
                            ”أحبكِ من كل قلبي، وأريد أن أقضي بقية حياتي معكِ. هل تقبلين الزواج بي؟“
                        </p>
                    </div>
                    <button
                        onClick={() => setIsAccepted(true)}
                        className="mt-8 px-10 py-4 bg-rose-500 text-white text-2xl font-bold rounded-full shadow-lg hover:bg-rose-600 transition-transform transform hover:scale-110 animate-pulse"
                    >
                        !نعم
                    </button>
                </>
            ) : (
                <div className="flex flex-col items-center justify-center animate-fade-in">
                    <h2 className="text-4xl font-bold text-rose-600 mb-4">!لقد وافقت</h2>
                    <div className="relative flex items-end justify-center">
                         <HeartIcon className="absolute -top-8 -left-8 w-12 h-12 text-red-400 animate-bounce" style={{animationDelay: '200ms'}}/>
                         <HeartIcon className="absolute -top-12 right-0 w-16 h-16 text-red-500 animate-bounce" />
                         <BoyCharacter className="h-40 w-40" wearingSuit={true} />
                         <GirlCharacter className="h-40 w-40 -mr-4" holdingBouquet={true} wearingFormalDress={true} />
                    </div>
                    <p className="mt-6 text-lg">تبدأ الآن رحلة حب جديدة!</p>
                    <button
                        onClick={onRestart}
                        className="mt-8 px-6 py-2 bg-yellow-400 text-amber-900 font-bold rounded-full shadow-md hover:bg-yellow-500 transition-transform transform hover:scale-105"
                    >
                        العب مرة أخرى
                    </button>
                </div>
            )}
        </div>
    );
};

export default FinalScene;