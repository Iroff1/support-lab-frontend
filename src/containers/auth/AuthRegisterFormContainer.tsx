import AuthRegisterForm from '@components/auth/AuthRegisterForm';
import { regObj } from '@consts/reg';
import { IAuthChecker, IRegisterForm } from '@models/account.model';
import {
  TAsyncReq,
  TChangeEventHandler,
  TMouseEventHandler,
} from '@models/input.model';
import { useAppDispatch, useAppSelector } from '@store/index';
import { registerActions } from '@store/register';
import React, { useEffect, useRef, useState } from 'react';

const AUTHORIZATION_TIMER = 5;

const AuthRegisterFormContainer = () => {
  const dispatch = useAppDispatch();
  const { changeField } = registerActions;
  const registerInfo = useAppSelector(({ register }) => register);
  const [timer, setTimer] = useState(AUTHORIZATION_TIMER);
  const timerEvent = useRef<NodeJS.Timeout>(null);

  const handleChangeField: TChangeEventHandler<HTMLInputElement> = (
    e,
    reg,
    max,
  ) => {
    const userInputKey = e.target.name as keyof IRegisterForm;
    const userInputValue = !reg
      ? e.target.value
      : max
      ? e.target.value.replace(reg, '').slice(0, max)
      : e.target.value.replace(reg, '');

    // console.log(userInputKey, userInputValue, reg, reg?.test(e.target.value));

    dispatch(
      changeField({
        key: userInputKey,
        value: userInputValue,
      }),
    );
  };

  const handleToggleField: TMouseEventHandler<HTMLInputElement> = (e) => {
    dispatch(
      changeField({
        key: e.currentTarget.name,
        value: e.currentTarget.checked,
      }),
    );
  };

  /** 사용자 인증용 핸들러 함수 */
  const handleAuthorization: TMouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    const reg = regObj.contact;
    const phoneNumValidation = reg.test(registerInfo.contact);

    if (timerEvent.current) {
      console.log('인증이 진행 중입니다.');
      return;
    }
    if (!phoneNumValidation) {
      console.log('맞지 않은 양식입니다.');
      return;
    }

    timerEvent.current = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);
    console.log(
      '유효성 결과 ' + registerInfo.contact + ': ' + phoneNumValidation,
    );
  };

  if (timerEvent.current && timer <= 0) {
    clearInterval(timerEvent.current);
    timerEvent.current = null;
    setTimer(AUTHORIZATION_TIMER);
  }

  useEffect(() => {
    return () => {
      timerEvent.current && clearInterval(timerEvent.current);
    };
  }, []);

  return (
    <AuthRegisterForm
      info={registerInfo}
      handleChange={handleChangeField}
      handleToggle={handleToggleField}
      timer={timer}
      handleAuthorization={handleAuthorization}
      disabled={true}
    />
  );
};

export default React.memo(AuthRegisterFormContainer);
