import React, { useState, useEffect } from 'react';

function CountdownTimer({ initialMinutes, initialSeconds, onComplete }) {
  const [minutes, setMinutes] = useState(initialMinutes);
  const [seconds, setSeconds] = useState(initialSeconds);

  useEffect(() => {
    let intervalId;
    if (minutes === 0 && seconds === 0) {
      onComplete();
    } else {
      intervalId = setInterval(() => {
        if (seconds === 0) {
          setMinutes(minutes - 1);
          setSeconds(59);
        } else {
          setSeconds(seconds - 1);
        }
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [minutes, seconds, onComplete]);

  console.log(minutes);
  return (
    <span className="countdown font-mono text-2xl">
      <span style={{ '--value': minutes }}></span>m
      <span style={{ '--value': seconds }}></span>s
    </span>
  );
}

export default CountdownTimer;
