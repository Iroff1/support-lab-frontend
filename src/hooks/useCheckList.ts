import { IAuthChecker } from '@models/auth.model';
import { useEffect, useState } from 'react';

const useCheckList = <T>(init: IAuthChecker<T>) => {
  const [checkList, setCheckList] = useState<IAuthChecker<T>>(init);
  const [checkResult, setCheckResult] = useState(false);

  const handleCheckList = (key: keyof T, result: boolean) => {
    if (checkList[key] === result) return;
    setCheckList((prev) => ({ ...prev, [key]: result }));
  };

  const confirmCheckList = () => {
    // for (const key of Object.keys(checkList))
    //   if (!checkList[key as keyof T]) return false;
    // return true;
    return Object.keys(checkList).every(
      (key) => checkList[key as keyof IAuthChecker<T>],
    );
  };

  useEffect(() => {
    setCheckResult(confirmCheckList());
  }, [checkList]);
  return { checkList, handleCheckList, checkResult };
};
export default useCheckList;
