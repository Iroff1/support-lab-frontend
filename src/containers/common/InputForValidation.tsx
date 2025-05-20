import { IInputWithConfirm, TMouseEventHandler } from '@models/input.model';
import React, { useState } from 'react';
import InputWithConfirm from './InputWithConfirm';

const InputForValidation: React.FC<IInputWithConfirm> = ({
  cautionText: prevCaution,
  isValid: prevIsValid = false,
  onClick,
  disabled,
  ...props
}) => {
  const [nextIsValid, setNextIsValid] = useState(false);
  const [nextCaution, setNextCaution] = useState<string | React.ReactNode>('');
  const [isDone, setIsDone] = useState(false);

  const handleClick: TMouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();

    // 넘겨받은 클릭 이벤트
    onClick && onClick(e);

    // 클릭 시에 속성으로 넘길 값들 갱신
    setNextIsValid(prevIsValid);
    setIsDone(prevIsValid);
    prevCaution && setNextCaution(prevCaution);
  };

  return (
    <InputWithConfirm
      {...props}
      isValid={nextIsValid}
      cautionText={nextCaution}
      onClick={handleClick}
      useFor="validation"
      disabled={disabled || isDone}
    />
  );
};
export default InputForValidation;
