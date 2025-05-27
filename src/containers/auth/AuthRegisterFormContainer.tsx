import { authGetCode } from '@api/auth';
import AuthRegisterForm from '@components/auth/AuthRegisterForm';
import { regValid } from '@consts/reg';
import useInit from '@hooks/useInit';
import useTimer from '@hooks/useTimer';
import { IAuthChecker, IRegister, IRegisterState } from '@models/auth.model';
import {
  TChangeEventHandler,
  TFormEventHandler,
  TMouseEventHandler,
} from '@models/input.model';
import checkValidation from '@utils/checkValidation';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const TIMER_INIT = -1;
const TIMER_LIMIT = 5;

const AuthRegisterFormContainer = () => {
  const navigate = useNavigate();
  const [registerForm, setRegisterForm] = useState<IRegisterState>({
    email: '',
    username: '',
    password: '',
    passwordConfirm: '',
    contact: '',
    authCode: '',
    authConfirm: '',
  });
  const [checkList, setCheckList] = useState<IAuthChecker<IRegister>>({
    email: false,
    password: false,
    username: false,
    contact: false,
  });

  const { timer, timerEvent, timerStart, timerReset } = useTimer(
    TIMER_INIT,
    TIMER_LIMIT,
  );
  const { isInit, initComponent } = useInit();

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
    setRegisterForm((prev) => ({ ...prev, [userInputKey]: userInputValue }));
  };

  /** InputForAuthorization 컴포넌트의 onClick에 할당할 인증용 핸들러 함수 */
  const handleAuthorization: TMouseEventHandler<HTMLButtonElement> = async (
    e,
  ) => {
    e.preventDefault();
    if (timerEvent.current) return; // 타이머 진행 중인 경우 미 실행
    if (!checkValidation(registerForm.contact, 'contact')) return; // 유효성 검증 실패 시 미 실행

    try {
      const res = await authGetCode(registerForm.contact);
      setRegisterForm((prev) => ({
        ...prev,
        authCode: res.data.authCode,
      }));
      timerStart(); // 타이머 시작
    } catch (e) {
      // test code
      // alert(e);
      setRegisterForm((prev) => ({
        ...prev,
        authCode: '111111',
      }));
    }
  };

  /** InputForValidation[name="authConfirm"] 컴포넌트의 onClick에 할당할 콜백 함수 */
  const handleAuthCheck: TMouseEventHandler<HTMLButtonElement> = (e) => {
    if (
      registerForm.authCode.length === 6 &&
      registerForm.authCode === registerForm.authConfirm
    ) {
      timerReset(); // 타이머 초기화

      // TODO)
      setRegisterForm((prev) => ({ ...prev }));
      // dispatch(toggleRegisterValid({ key: 'contact', value: true }));
    }
  };

  /** register 입력 폼 submit 이벤트 핸들러 */
  const handleSubmit: TFormEventHandler = (e) => {
    e.preventDefault();
    // dispatch(authRegisterUserThunk(registerForm));
  };

  // 타이머 만료 시

  // 컴포넌트 렌더링 시작 시
  useEffect(() => {
    initComponent();
    return () => {
      // 컴포넌트 렌더링 종료 시
      timerReset();
    };
  }, []);

  // 초기 렌더링 이후
  useEffect(() => {
    if (!isInit) return;
    // TODO) 타이머 만료 시 authCode, authConfirm 초기화
    if (timerEvent.current && timer < 0) {
      timerReset(); // 타이머 초기화
      setRegisterForm((prev) => ({ ...prev, authCode: '', authConfirm: '' }));
    }
  }, [isInit, timer]);

  // 입력 폼 유효성 추적
  useEffect(() => {
    checkValidation(registerForm.email, 'email')
      ? setCheckList((prev) => ({ ...prev, email: true }))
      : setCheckList((prev) => ({ ...prev, email: false }));
  }, [registerForm.email]);

  useEffect(() => {
    checkValidation(registerForm.username, 'username')
      ? setCheckList((prev) => ({ ...prev, username: true }))
      : setCheckList((prev) => ({ ...prev, username: false }));
  }, [registerForm.username]);

  useEffect(() => {
    checkValidation(registerForm.contact, 'contact')
      ? setCheckList((prev) => ({ ...prev, contact: true }))
      : setCheckList((prev) => ({ ...prev, contact: false }));
  }, [registerForm.contact]);

  useEffect(() => {
    checkValidation(registerForm.password, 'password')
      ? setCheckList((prev) => ({ ...prev, password: true }))
      : setCheckList((prev) => ({ ...prev, password: false }));
  }, [registerForm.password]);

  return (
    <AuthRegisterForm
      registerState={registerForm}
      checkList={checkList}
      timer={timer}
      disabled={Object.keys(checkList).every((key, index) => {
        checkList[key as keyof IAuthChecker<IRegister>];
      })}
      handleChange={handleChangeField}
      handleAuthorization={handleAuthorization}
      handleAuthCheck={handleAuthCheck}
      handleSubmit={handleSubmit}
    />
  );
};

export default React.memo(AuthRegisterFormContainer);
