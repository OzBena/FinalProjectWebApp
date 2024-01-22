import React, { useEffect, useState } from "react";
import "./clock.css";

const Clock = () => {
  const initialTime = 20 * 60;
  const [timeLeft, setTimeLeft] = useState(initialTime);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 0) {
          clearInterval(timer);
          return 0;
        } else {
          return prevTime - 1;
        }
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="clockContainer">
      
      <p className="clockText">{`Time Left : ${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`}</p>
      
    </div>
  );
};

export default Clock;
