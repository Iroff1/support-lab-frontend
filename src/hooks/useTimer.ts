import { TIMER_INIT, TIMER_LIMIT } from '@consts/timer';
import { useRef, useState } from 'react';

function useTimer() {
  const [timer, setTimer] = useState(TIMER_INIT);
  const timerEvent = useRef<NodeJS.Timeout>(null);

  const timerStart = () => {
    if (timerEvent.current) return;
    if (timer <= 0) setTimer(TIMER_LIMIT);
    timerEvent.current = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);
  };

  const timerReset = () => {
    timerEvent.current && clearInterval(timerEvent.current);
    timerEvent.current = null;
    setTimer(TIMER_INIT);
  };

  return { timer, timerEvent, timerStart, timerReset };
}

export default useTimer;
