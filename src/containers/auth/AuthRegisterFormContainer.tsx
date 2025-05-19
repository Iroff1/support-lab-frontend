import AuthRegisterForm from '@components/auth/AuthRegisterForm';
import { regObj } from '@consts/reg';
import { IRegisterForm } from '@models/account.model';
import { TChangeEventHandler, TMouseEventHandler } from '@models/input.model';
import { useAppDispatch, useAppSelector } from '@store/index';
import { registerActions, requestRegisterAuth } from '@store/register';
import checkValidation from '@utils/checkValidation';
import React, { useEffect, useRef, useState } from 'react';

const AuthRegisterFormContainer = () => {
  const dispatch = useAppDispatch();
  const registerInfo = useAppSelector(({ register }) => register);
  const { changeField, initialize } = registerActions;

  const [timer, setTimer] = useState(5);
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
        key: e.currentTarget.name as keyof IRegisterForm,
        value: e.currentTarget.checked,
      }),
    );
  };

  /** 사용자 인증용 핸들러 함수 */
  const handleAuthorization: TMouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    // 타이머 진행 중인 경우 미 실행
    if (timerEvent.current) return;

    // 유효성 검증 실패 시 미 실행
    const validationResult = checkValidation(
      registerInfo.contact,
      regObj.contact,
    );
    if (!validationResult) return;

    // 타이머 이벤트 할당
    if (timer <= 0) setTimer(5);
    timerEvent.current = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    // TODO) 비동기 요청 보내기
    dispatch(requestRegisterAuth(registerInfo.contact));
  };

  // 타이머 종료 시
  if (timerEvent.current && timer < 0) {
    // 타이머 이벤트 해체
    clearInterval(timerEvent.current);
    timerEvent.current = null;
    // 인증 번호 초기화
    dispatch(changeField({ key: 'authRes', value: '' }));
  }

  useEffect(() => {
    dispatch(initialize(null));
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
