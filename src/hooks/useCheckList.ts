import { IBooleanObj } from '@models/common.model';
import { useEffect, useState } from 'react';

const useCheckList = <T extends object>(init: IBooleanObj<T>) => {
  const [checkList, setCheckList] = useState<IBooleanObj<T>>(init);
  const [checkResult, setCheckResult] = useState(false);

  /** 특정 항목 체크 상태 변경 함수 */
  const modifyCheckList = (key: keyof T, result: boolean) => {
    if (checkList[key] === result) return;
    setCheckList((prev) => ({ ...prev, [key]: result }));
  };

  /** 모든 항목이 체크되었는지 확인하는 함수 */
  const checkAllItems = () => {
    return Object.keys(checkList).every(
      (key) => checkList[key as keyof IBooleanObj<T>],
    );
  };

  useEffect(() => {
    setCheckResult(checkAllItems());
    // console.log('checkList', checkList); // test code
  }, [checkList]);
  return { checkList, modifyCheckList, checkResult };
};
export default useCheckList;
