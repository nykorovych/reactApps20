import React, { useState, useRef } from 'react';
import './App.css';

export default function App() {
  const [title, setTitle] = useState('BEGIN !!!');
  const [timeLeft, setTimeLeft] = useState(100);
  const timerRef = useRef(null)
  const minutes = Math.floor(timeLeft / 60);
  const seconds = (timeLeft - minutes * 60).toString().padStart(2, 0);

  function startTimer() {
    if(timerRef.current !== null ) return
    timerRef.current = setInterval(() => {
      setTimeLeft(timeLeft => {
        if (timeLeft >= 1) {return timeLeft -1}
        return 0
      });
    }, 1000);
  }

  function stopTimer() {
    if(timerRef.current === null ) return
    clearInterval( timerRef.current)
    timerRef.current = null
  }
  function resetTimer () {
    clearInterval(timerRef.current)
  }

  return (
    <div className="app">
      <h2>{title}!</h2>

      <div className="timer">
        <span>{minutes}</span>
        <span>:</span>
        <span>{seconds}</span>
      </div>

      <div className="buttons">
        <button onClick={startTimer}>Start</button>
        <button onClick ={stopTimer}>Stop</button>
        <button onClick ={resetTimer}>Reset</button>
      </div>
    </div>
  );
}
