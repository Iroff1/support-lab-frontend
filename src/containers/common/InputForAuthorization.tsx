import { IInputWithConfirm, TMouseEventHandler } from '@models/input.model';
import React, { useRef, useState } from 'react';
import InputWithConfirm from './InputWithConfirm';
import translateContact from '@utils/translateContact';

interface IInputForAuthorization extends IInputWithConfirm {}

const InputForAuthorization: React.FC<IInputForAuthorization> = ({
  value,
  isValid,
  cautionText,
  onClick,
  ...props
}) => {
  const [isInit, setIsInit] = useState(false);

  const handleClick: TMouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();

    // 넘겨받은 클릭 이벤트
    onClick && onClick(e);

    !isInit && setIsInit(true);
  };

  return (
    <InputWithConfirm
      {...props}
      isValid={isValid}
      onClick={handleClick}
      cautionText={isInit ? cautionText : ''}
      value={value && translateContact(value)}
      useFor="auth"
    />
  );
};

export default InputForAuthorization;
