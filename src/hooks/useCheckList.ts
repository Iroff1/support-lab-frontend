import { IAuthChecker, IRegister } from '@models/auth.model';
import { useEffect, useState } from 'react';

const useCheckList = <T extends object>(init: IAuthChecker<T>) => {
  const [checkList, setCheckList] = useState<IAuthChecker<T>>(init);
  const [checkResult, setCheckResult] = useState(false);

  const modifyCheckList = (key: keyof T, result: boolean) => {
    if (checkList[key] === result) return;
    setCheckList((prev) => ({ ...prev, [key]: result }));
  };

  const confirmCheckList = () => {
    return Object.keys(checkList).every(
      (key) => checkList[key as keyof IAuthChecker<T>],
    );
  };

  useEffect(() => {
    setCheckResult(confirmCheckList());
    // console.log('checkList', checkList);
  }, [checkList]);
  return { checkList, modifyCheckList, checkResult };
};
export default useCheckList;
