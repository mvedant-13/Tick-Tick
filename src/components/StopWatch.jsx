import { useEffect, useRef, useState } from "react"

export default function StopWatch() {
  const [time, setTime] = useState(0);
  const [totalTime, setTotalTime] = useState(0);
  const [title, setTitle] = useState("");

  const intervalId = useRef(null);
  const startBtn = useRef();
  const stopBtn = useRef();
  const history = useRef();

  useEffect(() => {
    for(let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const value = localStorage.getItem(key);
      history.current.innerHTML += `${key}: ${value} seconds<br>`;
    }
  }, [])
  
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
    startBtn.current.disabled = false;
    stopBtn.current.disabled = true;
    
    setTotalTime(totalTime + time);
    history.current.innerHTML += `${title}: ${time} seconds<br>`;
    localStorage.setItem(title, time);

    setTime(0);
    setTitle("");
  }

  function clearHistory() {
    localStorage.clear();
    history.current.innerHTML = "";
  }

  return (
    <div className="stopwatch">
      <nav>
        <a href="/">Dashboard</a>
      </nav>

      <h1>Stop Watch</h1>
      <input
        type="text"
        placeholder={title}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <p>{time}</p>

      <button ref={startBtn} onClick={startTimer}>Start</button>
      <button ref={stopBtn} onClick={stopTimer}>Stop</button>
      <button onClick={resetBtn}>Reset</button>

      <h2>Total Time: {totalTime}</h2>

      <h2>History</h2>
      <p ref={history}></p>

      <button onClick={clearHistory}>Clear History</button>
    </div>
  )
}