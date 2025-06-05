import {
  IInputWithConfirm,
  TChangeEventHandler,
  TMouseEventHandler,
} from '@models/input.model';
import React, { useState } from 'react';
import InputWithConfirm from './InputWithConfirm';

const InputForValidation: React.FC<IInputWithConfirm> = ({
  cautionText: prevCaution,
  isValid: prevIsValid = false,
  onClick,
  onChange,
  disabled,
  ...props
}) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick: TMouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    onClick && onClick(e);
    setIsClicked(true);
  };

  const handleChange: TChangeEventHandler<HTMLInputElement> = (e) => {
    onChange && onChange(e);
    setIsClicked(false);
  };

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
