import { useState } from 'react';

const useInit = () => {
  const [isInit, setIsInit] = useState(false);

  const initComponent = () => {
    setIsInit(true);
  };
  const resetComponent = () => {
    setIsInit(false);
  };

  return { isInit, initComponent, resetComponent };
};

export default useInit;
