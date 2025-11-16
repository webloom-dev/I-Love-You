import React, { useState, useEffect } from 'react';
import { CollectibleItem } from '../types';
import { FlowerIcon } from './icons/FlowerIcon';
import { PhotoIcon } from './icons/PhotoIcon';
import { HeartIcon } from './icons/HeartIcon';

interface GameSceneProps {
  stage: number;
  totalStages: number;
  item: CollectibleItem;
  onStageComplete: () => void;
}

const itemComponents: Record<CollectibleItem, React.ReactNode> = {
  flower: <FlowerIcon className="w-24 h-24" />,
  photo: <PhotoIcon className="w-24 h-24" />,
  heart: <HeartIcon className="w-24 h-24" />,
};

const stageTitles: Record<CollectibleItem, string> = {
    flower: "الفصل الأول: الوردة الأولى",
    photo: "الفصل الثاني: ذكريات مشتركة",
    heart: "الفصل الثالث: قلبٌ مِلؤُه الحب",
};

const itemDescriptions: Record<CollectibleItem, string> = {
  flower: "لقد وجدتِ أول وردة أهداكِ إياها...",
  photo: "لقد جمعتِ ذكرياتكما الغالية...",
  heart: "لقد احتضنتِ الحب الذي كبر كل يوم...",
};


const GameScene: React.FC<GameSceneProps> = ({ stage, totalStages, item, onStageComplete }) => {
  const [isCollected, setIsCollected] = useState(false);
  const [showScene, setShowScene] = useState(true);

  useEffect(() => {
    // Reset for new stage
    setShowScene(false);
    setIsCollected(false);
    // Fade in new stage
    const timer = setTimeout(() => {
      setShowScene(true);
    }, 100); 
    return () => clearTimeout(timer);
  }, [stage]);

  const handleItemClick = () => {
    if (isCollected) return;
    setIsCollected(true);
    onStageComplete();
  };

  return (
    <div className={`flex flex-col items-center justify-center text-center p-6 bg-white/70 rounded-3xl shadow-lg w-full max-w-md h-[500px] relative transition-opacity duration-500 ${showScene ? 'opacity-100' : 'opacity-0'}`}>
       <h2 className="text-2xl font-bold text-rose-500 mb-4 absolute top-6">{stageTitles[item]}</h2>
        
       <div className="absolute top-20 w-full px-6 text-center h-12">
        {isCollected && (
          <p className="px-4 py-2 bg-rose-100 border border-rose-300 rounded-full shadow-md text-amber-900 text-lg italic animate-fade-in">
            {itemDescriptions[item]}
          </p>
        )}
      </div>

       <div className="w-full h-full flex items-center justify-center">
        {!isCollected && (
             <div className="animate-fade-in">
               <button
                 onClick={handleItemClick}
                 className="rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-xl cursor-pointer"
                 aria-label="اجمع الذكرى"
               >
                 <div className="filter grayscale hover:grayscale-0">
                    {itemComponents[item]}
                 </div>
               </button>
             </div>
        )}
        {isCollected && (
             <div className="animate-ping-once">
                <div className="filter grayscale-0 scale-125">
                    {itemComponents[item]}
                </div>
             </div>
        )}
       </div>
       
       <div className="absolute bottom-6 w-full px-6">
         {isCollected && stage === totalStages ? (
             <p className="text-lg mb-2">لقد وجدتهم جميعاً! هو مستعد الآن!</p>
         ) : (
            <p className="text-lg mb-2">{`الفصل ${stage} من ${totalStages}`}</p>
         )}
       </div>
    </div>
  );
};

export default GameScene;