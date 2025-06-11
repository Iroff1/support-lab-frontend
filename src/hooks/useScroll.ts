import { useState } from 'react';

const useScroll = (initialState: { x: number; y: number } = { x: 0, y: 0 }) => {
  const [scrollState, setScrollState] = useState(initialState);

  const handleScroll = (x: number | null, y: number | null) => {
    x && setScrollState((prev) => ({ ...prev, x }));
    y && setScrollState((prev) => ({ ...prev, y }));
  };

  const handleScrollRef = (
    ref: React.RefObject<HTMLDivElement | null>,
    scrollSize: number,
    addSize: number = 0,
    direction: 'x' | 'y' = 'y',
  ) => {
    if (!ref.current) return;
    const { clientHeight, scrollHeight, scrollTop } = ref.current;
    const percent = scrollTop / (scrollHeight - clientHeight);
    handleScroll(
      direction === 'x'
        ? percent * (clientHeight - (scrollSize + addSize))
        : null,
      direction === 'y'
        ? percent * (clientHeight - (scrollSize + addSize))
        : null,
    );
  };

  const handleScrollEvent = (
    e: React.UIEvent<HTMLDivElement>,
    scrollSize: number,
    addSize: number = 0,
    direction: 'x' | 'y' = 'y',
  ) => {
    if (!e.currentTarget) return;
    const { clientHeight, scrollHeight, scrollTop } = e.currentTarget;
    const percent = scrollTop / (scrollHeight - clientHeight);
    handleScroll(
      direction === 'x'
        ? percent * (clientHeight - (scrollSize + addSize))
        : null,
      direction === 'y'
        ? percent * (clientHeight - (scrollSize + addSize))
        : null,
    );
  };

  return {
    scrollState,
    handleScroll,
    handleScrollRef,
    handleScrollEvent,
  };
};

export default useScroll;
