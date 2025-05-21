import { useRef, useState } from 'react';

function useTimer(init: number, limit: number) {
  const [timer, setTimer] = useState(init);
  const timerEvent = useRef<NodeJS.Timeout>(null);

  const timerStart = () => {
    if (timer <= 0) setTimer(limit);
    timerEvent.current = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);
  };

  const timerReset = () => {
    timerEvent.current && clearInterval(timerEvent.current);
    timerEvent.current = null;
    setTimer(init);
  };

  return { timer, timerEvent, timerStart, timerReset };
}

export default useTimer;
