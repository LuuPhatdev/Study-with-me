import React, { FC, useEffect, useState } from 'react'

const Timer = () => {
  const [minutes, SetMinutes] = useState<number>(45);
  const [seconds, setSeconds] = useState<number>(0);

  const [breakTime, setBreakTime] = useState<boolean>(false);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  useEffect(() => {
    const interval = setInterval(() => {
      clearInterval(interval);
      if (isPaused) {
        if (seconds === 0) {
          if (minutes !== 0) {
            setSeconds(59);
            SetMinutes(minutes - 1);
          } else {
            let minutes = breakTime ? 45 : 5;
            let seconds = 59;

            setSeconds(seconds);
            SetMinutes(minutes);
            setBreakTime(!breakTime);
          }
        } else {
          setSeconds(seconds - 1);
        }
      }
    }, 1000);

    return()=>{
      clearInterval(interval);
    }
  }, [seconds, isPaused]);

  const timerMinutes = minutes < 10 ? "0" + minutes : minutes;
  const timerSeconds = seconds < 10 ? "0" + seconds : seconds;

  const restartTimerClickHandler = () => {
    setSeconds(0);
    SetMinutes(0);
  }

  const startTimerClickHandler = () => {
    setIsPaused((isPaused) => !isPaused);
  }

  return (
    <div>
      <h2 className='text-3xl'>{timerMinutes}:{timerSeconds}</h2>
      <button onClick={startTimerClickHandler}>{isPaused ? "Paused" : "Start"}</button>
      <button onClick={restartTimerClickHandler}>Restart</button>
    </div>
  )
}

export default Timer