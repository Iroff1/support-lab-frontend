import { useState } from 'react';

const useInit = () => {
  const [isInit, setIsInit] = useState(false);

  const initComponent = () => {
    setIsInit(true);
  };

  return { isInit, initComponent };
};

export default useInit;
