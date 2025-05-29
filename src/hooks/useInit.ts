import { useState } from 'react';

const useInit = () => {
  const [isInit, setIsInit] = useState(false);

  const startInit = () => {
    setIsInit(true);
  };
  const resetInit = () => {
    setIsInit(false);
  };

  return { isInit, startInit, resetInit };
};

export default useInit;
