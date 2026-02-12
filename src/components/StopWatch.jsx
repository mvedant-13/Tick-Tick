import { useRef, useState } from "react"

export default function StopWatch() {
  const [time, setTime] = useState(0);
  const intervalId = useRef(null);
  const startBtn = useRef();
  const stopBtn = useRef();
  
  function startTimer() {
    intervalId.current = setInterval(() => {
      setTime(prevTime => prevTime + 1);
    }, 1000);

    startBtn.current.disabled = true;
    stopBtn.current.disabled = false;
  }

  function stopTimer() {
    clearInterval(intervalId.current);
    stopBtn.current.disabled = true;
    startBtn.current.disabled = false;
  }

  function resetBtn() {
    clearInterval(intervalId.current);
    setTime(0);
    startBtn.current.disabled = false;
    stopBtn.current.disabled = true;
  }

  return (
    <div className="stopwatch">
      <h1>Stop Watch</h1>
      <p>{time}</p>

      <button ref={startBtn} onClick={startTimer}>Start</button>
      <button ref={stopBtn} onClick={stopTimer}>Stop</button>
      <button onClick={resetBtn}>Reset</button>
    </div>
  )
}