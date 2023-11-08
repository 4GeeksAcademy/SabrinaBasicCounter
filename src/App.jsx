import React, { useState, useEffect } from "react";
import SecondsCounter from "./SecondsCounter";
import "./App.css";

function App() {
  const [seconds, setSeconds] = useState(0);

  return (
    <div className="app-container">
      <h1>My Digital Clock</h1>
      <SecondsCounter seconds={seconds} />
    </div>
  );
}

export default App;
