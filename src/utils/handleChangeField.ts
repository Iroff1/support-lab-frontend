import { Dispatch, SetStateAction } from 'react';

/** 각 입력 컴포넌트의 onChange에 할당할 콜백 함수 */
const handleChangeField = <T extends object>(
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  setState: Dispatch<SetStateAction<T>>,
  reg?: RegExp,
  max?: number,
) => {
  const userInputKey = e.target.name as keyof T;
  const userInputValue = !reg
    ? e.target.value
    : max
    ? e.target.value.replace(reg, '').slice(0, max)
    : e.target.value.replace(reg, '');

  setState((prev) => ({ ...prev, [userInputKey]: userInputValue }));
};

export default handleChangeField;
