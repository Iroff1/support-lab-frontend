import {
  IInputWithConfirm,
  TChangeEventHandler,
  TMouseEventHandler,
} from '@models/input.model';
import React, { useRef, useState } from 'react';
import InputWithConfirm from './InputWithConfirm';
import translateContact from '@utils/translateContact';
import { regObj } from '@consts/reg';

const InputForAuthorization: React.FC<IInputWithConfirm> = (props) => {
  const ref = useRef<HTMLInputElement>(null);
  const [cautionText, setCautionText] = useState<string>('');
  const [isValid, setIsValid] = useState(false);
  const { authChecker, onChange, value } = props;

  /** 사용자 인증용 핸들러 함수 */
  const handleAuthorization: TMouseEventHandler<HTMLButtonElement> = (e) => {
    const reg = regObj.contact;
    const phoneNumValidation = reg.test(value!);

    if (phoneNumValidation) {
      // 휴대폰 번호 유효성 검증 성공
    } else {
      // 실패
    }
  };

  const handleChange: TChangeEventHandler<HTMLInputElement> = (e) => {
    const reg = /[^0-9]/g;
    onChange && onChange(e, reg);
  };

  return (
    <InputWithConfirm
      {...props}
      ref={ref}
      isValid={isValid}
      cautionText={cautionText}
      onClick={handleAuthorization}
      onChange={handleChange}
      useFor="auth"
      value={value && translateContact(value)}
    />
  );
};

export default InputForAuthorization;
