import React, { useState, useEffect } from 'react';
import './comingSoon.css'; 

function ComingSoon() {
  const launchDate = new Date();
  launchDate.setMonth(launchDate.getMonth() + 3);

  const calculateTimeRemaining = () => {
    const now = new Date();
    const timeRemaining = launchDate.getTime() - now.getTime();

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  };

  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="coming-soon-container">
      <h1>Coming Soon</h1>
      <p>Our website is under construction. We'll be launching in:</p>
      <div className="countdown">
        <div className="time">{timeRemaining.days} days</div>
        <div className="time">{timeRemaining.hours} hours</div>
        <div className="time">{timeRemaining.minutes} minutes</div>
        <div className="time">{timeRemaining.seconds} seconds</div>
      </div>
    </div>
  );
}

export default ComingSoon;
