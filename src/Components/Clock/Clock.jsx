import React, { useEffect, useState } from "react";
import "./clock.css";

const Clock = ({setStage}) => {

  const TimeInMinutes = 20;

  const initialTime = TimeInMinutes * 60;
  const [timeLeft, setTimeLeft] = useState(initialTime);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 0) {
          clearInterval(timer);
          setStage(4)
          return 0;
        } else {
          return prevTime - 1;
        }
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [setStage]);

  const minutesCalc = Math.floor(timeLeft / 60);
  const secondsCalc = timeLeft % 60;

  return (
    <div className="clockContainer">
      
      <p className="clockText">{`Time Left : ${minutesCalc.toString().padStart(2, '0')}:${secondsCalc.toString().padStart(2, '0')}`}</p>
      
    </div>
  );
};

export default Clock;
