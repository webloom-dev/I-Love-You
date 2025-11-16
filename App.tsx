import React, { useState, useEffect, useCallback, useRef } from 'react';
import { GameState, CollectibleItem } from './types';
import IntroScene from './components/IntroScene';
import GameScene from './components/GameScene';
import FinalScene from './components/FinalScene';
import MusicToggle from './components/MusicToggle';

const App: React.FC = () => {
  const [gameState, setGameState] = useState<GameState>(GameState.Intro);
  const [currentStage, setCurrentStage] = useState(1);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const stages: CollectibleItem[] = ['flower', 'photo', 'heart'];

  useEffect(() => {
    // Associate the ref with the audio element from the DOM
    const audioElement = document.getElementById('bg-music') as HTMLAudioElement;
    if (audioElement) {
      audioRef.current = audioElement;
      audioRef.current.volume = 0.3; // Set a pleasant volume
    }
  }, []);

  const handleStart = () => {
    setGameState(GameState.Game);
    if (audioRef.current) {
      audioRef.current.play().catch(error => console.error("Audio play failed:", error));
      setIsMusicPlaying(true);
    }
  };

  const handleStageComplete = useCallback(() => {
    if (currentStage < stages.length) {
      setTimeout(() => {
        setCurrentStage(prev => prev + 1);
      }, 2500); // Wait for the "memory collected" message to be read
    } else {
      setTimeout(() => {
        setGameState(GameState.Final);
      }, 2500);
    }
  }, [currentStage, stages.length]);

  const handleRestart = () => {
    setCurrentStage(1);
    setGameState(GameState.Intro);
  }

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isMusicPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(error => console.error("Audio play failed:", error));
      }
      setIsMusicPlaying(!isMusicPlaying);
    }
  };

  const renderScene = () => {
    switch (gameState) {
      case GameState.Intro:
        return <IntroScene onStart={handleStart} />;
      case GameState.Game:
        return (
          <GameScene
            stage={currentStage}
            totalStages={stages.length}
            item={stages[currentStage - 1]}
            onStageComplete={handleStageComplete}
          />
        );
      case GameState.Final:
        return <FinalScene onRestart={handleRestart} />;
      default:
        return <IntroScene onStart={handleStart} />;
    }
  };

  return (
    <main className="min-h-screen w-full flex items-center justify-center p-4 text-amber-900 overflow-hidden relative">
       <MusicToggle isPlaying={isMusicPlaying} onToggle={toggleMusic} />
      <div className="w-full max-w-md mx-auto">
        {renderScene()}
      </div>
    </main>
  );
};

export default App;