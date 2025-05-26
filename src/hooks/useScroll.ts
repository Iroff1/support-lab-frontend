import { useState } from 'react';

const useScroll = () => {
  const [state, setState] = useState({ x: 0, y: 0 });

  const handleScroll = (x: number, y: number) => {
    setState({ x, y });
  };

  const handleScrollX = (x: number) => {
    setState((prev) => ({ ...prev, x }));
  };

  const handleScrollY = (y: number) => {
    setState((prev) => ({ ...prev, y }));
  };

  return { state, handleScroll, handleScrollX, handleScrollY };
};

export default useScroll;
