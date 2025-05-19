import { IInputWithConfirm, TMouseEventHandler } from '@models/input.model';
import React, { useRef, useState } from 'react';
import InputWithConfirm from './InputWithConfirm';
import translateContact from '@utils/translateContact';

const InputForAuthorization: React.FC<IInputWithConfirm> = ({
  cautionText,
  value,
  onClick,
  onChange,
  ...props
}) => {
  const ref = useRef<HTMLInputElement>(null);
  const [newCautionText, setNewCautionText] = useState<string>('');
  const [isValid, setIsValid] = useState(false);

  return (
    <InputWithConfirm
      {...props}
      ref={ref}
      isValid={isValid}
      cautionText={cautionText}
      onClick={onClick}
      onChange={onChange}
      useFor="auth"
      value={value && translateContact(value)}
    />
  );
};

export default InputForAuthorization;
