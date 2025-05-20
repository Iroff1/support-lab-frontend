import AuthRegisterForm from '@components/auth/AuthRegisterForm';
import { regObj } from '@consts/reg';
import { IRegisterAuth, IRegisterState } from '@models/account.model';
import { TChangeEventHandler, TMouseEventHandler } from '@models/input.model';
import { useAppDispatch, useAppSelector } from '@store/index';
import { registerActions, requestRegisterAuth } from '@store/register';
import checkValidation from '@utils/checkValidation';
import React, { useEffect, useRef, useState } from 'react';

const TEMP = 5;

const AuthRegisterFormContainer = () => {
  const dispatch = useAppDispatch();
  const registerState = useAppSelector(({ register }) => register);
  const { changeField, initialize } = registerActions;

  const [timer, setTimer] = useState(-1);
  const timerEvent = useRef<NodeJS.Timeout>(null);

  /** onChange에 할당할 콜백 함수 */
  const handleChangeField: TChangeEventHandler<HTMLInputElement> = (
    e,
    reg,
    max,
  ) => {
    const userInputKey = e.target.name as keyof IRegisterState;
    const userInputValue = !reg
      ? e.target.value
      : max
      ? e.target.value.replace(reg, '').slice(0, max)
      : e.target.value.replace(reg, '');

    // state에 적용
    dispatch(
      changeField({
        key: userInputKey,
        value: userInputValue,
      }),
    );
  };

  /** InputForValidation 컴포넌트의 onClick에 할당할 콜백 함수 */
  // const handleValidation = (
  //   key: keyof IRegisterState,
  //   value: string | boolean,
  // ) => {
  //   dispatch(
  //     changeField({
  //       key: key,
  //       value: value,
  //     }),
  //   );
  // };

  /** InputWithCheck 컴포넌트의 onClick에 할당할 콜백 함수 */
  const handleToggleField: TMouseEventHandler<HTMLInputElement> = (e) => {
    // state에 적용
    dispatch(
      changeField({
        key: e.currentTarget.name as keyof IRegisterState,
        value: e.currentTarget.checked,
      }),
    );
  };

  /** InputForAuthorization 컴포넌트의 onClick에 할당할 인증용 핸들러 함수 */
  const handleAuthorization: TMouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    // 타이머 진행 중인 경우 미 실행
    if (timerEvent.current) return;

    // 유효성 검증 실패 시 미 실행
    const validationResult = checkValidation(
      registerState.contact,
      regObj.contact,
    );
    if (!validationResult) return;

    // 타이머 이벤트 할당
    if (timer <= 0) setTimer(TEMP);
    timerEvent.current = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    // TODO) 비동기 요청 보내기
    dispatch(requestRegisterAuth(registerState.contact));
  };

  // 타이머 종료 시
  if (timerEvent.current && timer < 0) {
    // 타이머 이벤트 해체
    clearInterval(timerEvent.current);
    timerEvent.current = null;
    // 인증 번호 초기화
    dispatch(changeField({ key: 'authCode', value: '' }));
    dispatch(changeField({ key: 'authConfirm', value: '' }));
  }

  // 컴포넌트 렌더링 시작 시
  useEffect(() => {
    dispatch(initialize(null)); // register 상태 초기화
    return () => {
      // 컴포넌트 렌더링 종료 시
      timerEvent.current && clearInterval(timerEvent.current); // 타이머 이벤트 해제
    };
  }, []);

  return (
    <AuthRegisterForm
      registerState={registerState}
      timer={timer}
      disabled={true}
      handleChange={handleChangeField}
      handleToggle={handleToggleField}
      handleAuthorization={handleAuthorization}
    />
  );
};

export default React.memo(AuthRegisterFormContainer);
