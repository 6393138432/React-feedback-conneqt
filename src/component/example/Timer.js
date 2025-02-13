import React, { useState, useEffect } from 'react';

const Timer = () => {
  
  const [timeRemain, setTimeRemain] = useState(600);

  useEffect(() => {
    if (timeRemain === 0) return; 

    const interval = setInterval(() => {
      setTimeRemain((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timeRemain]);

  
  const minutes = Math.floor(timeRemain / 60);
  const seconds = timeRemain % 60;
  const formattedTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

  return (
    <div>
      <h1>Break Timer Here: </h1>
      <h2>{formattedTime}</h2>
    </div>
  );
};

export default Timer;