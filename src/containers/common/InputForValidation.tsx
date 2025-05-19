import { IInputWithConfirm, TMouseEventHandler } from '@models/input.model';
import React, { useState } from 'react';
import InputWithConfirm from './InputWithConfirm';

const InputForValidation: React.FC<IInputWithConfirm> = ({
  cautionText,
  isValid,
  ...props
}) => {
  const [isInit, setIsInit] = useState(false);
  const [valid, setValid] = useState(false);
  const [result, setResult] = useState<string | React.ReactNode>('');

  const handleValidation: TMouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();

    isValid != null && setValid(isValid);
    cautionText && setResult(cautionText);
    !isInit && setIsInit(true);
  };

  return (
    <InputWithConfirm
      {...props}
      isValid={valid}
      cautionText={isInit ? result : ''}
      onClick={handleValidation}
      useFor="validation"
    />
  );
};
export default InputForValidation;
