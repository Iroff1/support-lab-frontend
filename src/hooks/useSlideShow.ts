import { useRef, useState } from 'react';

/** 슬라이드 쇼 이벤트를 위한 훅 */
function useSlideShow(limit: number) {
  const [index, setIndex] = useState(0);
  const slideEvent = useRef<NodeJS.Timeout>(null);

  const start = () => {
    slideEvent.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % limit);
    }, 2000);
  };

  const stop = () => {
    slideEvent.current && clearInterval(slideEvent.current);
    slideEvent.current = null;
  };

  const goLeft = () => {
    setIndex((prev) => (prev < 1 ? limit - 1 : prev - 1));
  };
  const goRight = () => {
    setIndex((prev) => (prev + 1) % limit);
  };

  return {
    index,
    slideEvent,
    start,
    stop,
    goLeft,
    goRight,
  };
}

export default useSlideShow;
