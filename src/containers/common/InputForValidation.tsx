import {
  IInputWithConfirm,
  TChangeEventHandler,
  TMouseEventHandler,
} from '@models/input.model';
import React, { use, useEffect, useState } from 'react';
import InputWithConfirm from './InputWithConfirm';

const InputForValidation: React.FC<IInputWithConfirm> = ({
  cautionText: prevCaution,
  isValid: prevIsValid = false,
  onClick,
  onChange,
  disabled,
  ...props
}) => {
  const [nextIsValid, setNextIsValid] = useState(false);
  const [nextCaution, setNextCaution] = useState<string | React.ReactNode>('');
  const [isClicked, setIsClicked] = useState(false);

  const handleClick: TMouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();

    // 넘겨받은 클릭 이벤트
    onClick && onClick(e);

    setIsClicked(true);
  };

  const handleChange: TChangeEventHandler<HTMLInputElement> = (e) => {
    onChange && onChange(e);
    setIsClicked(false);
  };

  // useEffect(() => {
  //   if (!isClicked) return;
  //   setIsDone(false);
  // }, [isClicked]);

  return (
    <InputWithConfirm
      {...props}
      isValid={prevIsValid}
      cautionText={isClicked && prevCaution}
      onClick={handleClick}
      onChange={handleChange}
      useFor="validation"
      disabled={
        typeof disabled === 'undefined'
          ? prevIsValid && isClicked
          : disabled
          ? true
          : disabled && prevIsValid && isClicked
      }
    />
  );
};
export default InputForValidation;
