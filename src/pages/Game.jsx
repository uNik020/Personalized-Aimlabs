import React, { useState, useEffect, useCallback, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Target from '../components/Target.jsx';
import Aurora from '../blocks/Backgrounds/Aurora/Aurora.jsx';


const Game = () => {
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [targets, setTargets] = useState([]);
  const [activeTargets, setActiveTargets] = useState(0);
  const navigate = useNavigate();
  const timerRef = useRef(null); 
  const finalScoreRef = useRef(0); // ✅ Store the final score

  // Start timer independently
  useEffect(() => {
    timerRef.current = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timerRef.current);
          navigate('/results', { state: { score: finalScoreRef.current } }); // ✅ Use the latest score
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timerRef.current);
  }, [navigate]);

  // Target management system
  const spawnTarget = useCallback(() => {
    if (activeTargets >= 3) return;

    const containerWidth = 500;
    const containerHeight = 200;

    const newTarget = {
      id: Date.now(),
      position: {
        x: Math.random() * (containerWidth - 50),
        y: Math.random() * (containerHeight - 50),
      }
    };

    setTargets(prev => [...prev, newTarget]);
    setActiveTargets(prev => prev + 1);

    setTimeout(() => {
      setTargets(prev => prev.filter(t => t.id !== newTarget.id));
      setActiveTargets(prev => prev - 1);
    }, 2000);
  }, [activeTargets]);

  // Click handler
  const handleTargetHit = useCallback((id) => {
    setTargets(prev => prev.filter(t => t.id !== id));
    setActiveTargets(prev => prev - 1);
    setScore(prev => {
      const newScore = prev + 100;
      finalScoreRef.current = newScore; // ✅ Update the latest score
      return newScore;
    });

    setTimeout(() => {
      spawnTarget();
    }, 100);
  }, [spawnTarget]);

  // Spawn initial targets at intervals
  useEffect(() => {
    const spawnInterval = setInterval(() => {
      spawnTarget();
    }, 1000);

    return () => clearInterval(spawnInterval);
  }, [spawnTarget]);
  
  return (
    <>
      <div className="absolute inset-0 -z-10">
        <Aurora colorStops={["#3A29FF", "#FF94B4", "#FF3232"]} speed={0.5} />
      </div>
      <div className="flex items-center justify-center h-screen relative overflow-hidden">
        <div className="absolute top-4 left-4 text-white text-xl">
          Time: {timeLeft}s
        </div>
        <div className="absolute top-4 right-4 text-white text-xl">
          Score: {score}
        </div>

        <div className="w-[500px] h-[300px] bg-amber-100 cursor-crosshair relative flex items-center justify-center rounded-2xl">
          {targets.map((target) => (
            <Target
              key={target.id}
              position={target.position}
              onHit={() => handleTargetHit(target.id)}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Game;
