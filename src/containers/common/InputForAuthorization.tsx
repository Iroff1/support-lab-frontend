import { IInputWithConfirm, TMouseEventHandler } from '@models/input.model';
import React, { useRef, useState } from 'react';
import InputWithConfirm from './InputWithConfirm';
import translateContact from '@utils/translateContact';

interface IInputForAuthorization extends IInputWithConfirm {}

const InputForAuthorization: React.FC<IInputForAuthorization> = ({
  value,
  onClick,
  isValid,
  cautionText,
  ...props
}) => {
  const [isInit, setIsInit] = useState(false);

  const handleRequest: TMouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    onClick && onClick(e);
    !isInit && setIsInit(true);
  };

  return (
    <InputWithConfirm
      {...props}
      isValid={isValid}
      onClick={handleRequest}
      cautionText={isInit ? cautionText : ''}
      value={value && translateContact(value)}
      useFor="auth"
    />
  );
};

export default InputForAuthorization;
