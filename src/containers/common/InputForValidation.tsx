import {
  IInputWithConfirm,
  TChangeEventHandler,
  TMouseEventHandler,
} from '@models/input.model';
import { useState } from 'react';
import InputWithConfirm from './InputWithConfirm';

const InputForValidation = <T extends object>({
  $cautionText: prevCaution,
  $isValid: prevIsValid = false,
  handleConfirm,
  onChange,
  disabled,
  ...props
}: IInputWithConfirm<T>) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick: TMouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    handleConfirm && handleConfirm(e);
    setIsClicked(true);
  };

  const handleChange: TChangeEventHandler<HTMLInputElement> = (e) => {
    onChange && onChange(e);
    setIsClicked(false);
  };

  return (
    <InputWithConfirm
      {...props}
      $isValid={prevIsValid}
      $cautionText={isClicked && prevCaution}
      handleConfirm={handleClick}
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
