import { IInputWithConfirm, TMouseEventHandler } from '@models/input.model';
import React, { useState } from 'react';
import InputWithConfirm from './InputWithConfirm';

const InputForValidation: React.FC<IInputWithConfirm> = ({
  cautionText,
  isValid,
  ...props
}) => {
  const [text, setText] = useState<string>('');
  const [valid, setValid] = useState<boolean>(false);

  const handleValidation: TMouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    setText(cautionText ? cautionText : isValid + '');
    setValid(isValid ? true : false);
  };

  return (
    <InputWithConfirm
      {...props}
      isValid={valid}
      cautionText={text}
      onClick={handleValidation}
      useFor="validation"
    />
  );
};
export default InputForValidation;
