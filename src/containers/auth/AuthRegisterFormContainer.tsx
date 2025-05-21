import AuthRegisterForm from '@components/auth/AuthRegisterForm';
import { regObj } from '@consts/reg';
import { IAuthChecker, IRegister, IRegisterState } from '@models/account.model';
import { TChangeEventHandler, TMouseEventHandler } from '@models/input.model';
import { useAppDispatch, useAppSelector } from '@store/index';
import { registerActions, requestRegisterAuth } from '@store/register';
import checkValidation from '@utils/checkValidation';
import React, { useEffect, useRef, useState } from 'react';

const TIMER_INIT = -1;
const TIMER_LIMIT = 5;

const AuthRegisterFormContainer = () => {
  const dispatch = useAppDispatch();
  const registerState = useAppSelector(({ register }) => register);

  const [timer, setTimer] = useState(TIMER_INIT); // 인증 용 타이머
  const timerEvent = useRef<NodeJS.Timeout>(null);

  /** 각 입력 컴포넌트의 onChange에 할당할 콜백 함수 */
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
      registerActions.changeField({
        key: userInputKey,
        value: userInputValue,
      }),
    );
  };

  /** InputWithCheck 컴포넌트의 onClick에 할당할 콜백 함수 */
  const handleToggleField: TMouseEventHandler<HTMLInputElement> = (e) => {
    const key = e.currentTarget.name as keyof IRegister;
    const value = e.currentTarget.checked;

    // state에 적용
    dispatch(
      registerActions.changeField({
        key: key,
        value: value,
      }),
    );
  };

  const handleValidation = (
    key: keyof IAuthChecker<IRegister>,
    value: boolean,
  ) => {
    dispatch(registerActions.toggleField({ key: key, value: value }));
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
    if (timer <= 0) setTimer(TIMER_LIMIT);
    timerEvent.current = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    // TODO) 비동기 요청 보내기
    dispatch(requestRegisterAuth(registerState.contact));
  };

  /** InputForValidation[name="authConfirm"] 컴포넌트의 onClick에 할당할 콜백 함수 */
  const handleAuthCheck: TMouseEventHandler<HTMLButtonElement> = (e) => {
    /** 성공 시
     * 1. 타이머 종료 -> clearInterval, 타이머 시간 = -1
     * 2. 전화번호 기입란 잠금
     */
    if (
      registerState.authCode.length === 6 &&
      registerState.authCode === registerState.authConfirm
    ) {
      timerEvent.current && clearInterval(timerEvent.current);
      timerEvent.current = null;
      setTimer(TIMER_INIT);
      dispatch(registerActions.toggleField({ key: 'contact', value: true }));
    }
  };

  // 타이머 종료 시
  if (timerEvent.current && timer < 0) {
    // 타이머 이벤트 해체
    clearInterval(timerEvent.current);
    timerEvent.current = null;
    // 인증 번호 초기화
    dispatch(registerActions.changeField({ key: 'authCode', value: '' }));
    dispatch(registerActions.changeField({ key: 'authConfirm', value: '' }));
  }

  // 컴포넌트 렌더링 시작 시
  useEffect(() => {
    dispatch(registerActions.initialize(null)); // register 상태 초기화
    return () => {
      // 컴포넌트 렌더링 종료 시
      timerEvent.current && clearInterval(timerEvent.current); // 타이머 이벤트 해제
    };
  }, []);

  return (
    <AuthRegisterForm
      registerState={registerState}
      timer={timer}
      disabled={
        !(
          Object.values(registerState.isValid).every(
            (value) => value === true,
          ) && registerState.personalInfoAgreement
        )
      }
      handleChange={handleChangeField}
      handleToggle={handleToggleField}
      handleAuthorization={handleAuthorization}
      handleAuthCheck={handleAuthCheck}
      handleValidation={handleValidation}
    />
  );
};

export default React.memo(AuthRegisterFormContainer);
