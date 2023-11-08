import React, { useState, useEffect } from "react";

function SecondsCounter() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    // Get the time when the component is mounted
    const startTime = Date.now();

    const interval = setInterval(() => {
      // Calculate the elapsed seconds
      const currentTime = Date.now();
      const elapsedSeconds = Math.floor((currentTime - startTime) / 1000);
      setSeconds(elapsedSeconds);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <div>{seconds} seconds since onLoad</div>;
}

export default SecondsCounter;
