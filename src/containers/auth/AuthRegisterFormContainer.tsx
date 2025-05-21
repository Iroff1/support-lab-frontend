import AuthRegisterForm from '@components/auth/AuthRegisterForm';
import { regObj } from '@consts/reg';
import useTimer from '@hooks/useTimer';
import {
  IAuthChecker,
  IRegister,
  IRegisterAgreement,
  IRegisterState,
} from '@models/auth.model';
import {
  TChangeEventHandler,
  TFormEventHandler,
  TMouseEventHandler,
} from '@models/input.model';
import {
  authActions,
  authGetCodeThunk,
  authRegisterUserThunk,
} from '@store/auth';
import { useAppDispatch, useAppSelector } from '@store/index';
import checkValidation from '@utils/checkValidation';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const TIMER_INIT = -1;
const TIMER_LIMIT = 5;

const AuthRegisterFormContainer = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { registerForm, auth, authError } = useAppSelector(({ auth }) => ({
    registerForm: auth.register,
    auth: auth.auth,
    authError: auth.authError,
  }));
  const { changeField, initializeState, toggleRegisterValid } = authActions;

  const { timer, timerEvent, timerStart, timerReset } = useTimer(
    TIMER_INIT,
    TIMER_LIMIT,
  );

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
      changeField({
        form: 'register',
        key: userInputKey,
        value: userInputValue,
      }),
    );
  };

  /** InputWithCheck 컴포넌트의 onClick에 할당할 콜백 함수 */
  const handleToggleField: TMouseEventHandler<HTMLInputElement> = (e) => {
    dispatch(
      changeField({
        form: 'register',
        key: e.currentTarget.name as keyof IRegisterAgreement,
        value: e.currentTarget.checked,
      }),
    );
  };

  /** isValid 갱신용 핸들러 */
  const handleValidation = (
    key: keyof IAuthChecker<IRegister>,
    value: boolean,
  ) => {
    dispatch(toggleRegisterValid({ key: key, value: value }));
  };

  /** InputForAuthorization 컴포넌트의 onClick에 할당할 인증용 핸들러 함수 */
  const handleAuthorization: TMouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    if (timerEvent.current) return; // 타이머 진행 중인 경우 미 실행
    if (!checkValidation(registerForm.contact, regObj.contact)) return; // 유효성 검증 실패 시 미 실행
    timerStart(); // 타이머 시작
    dispatch(authGetCodeThunk(registerForm.contact)); // 인증 번호 요청
  };

  /** InputForValidation[name="authConfirm"] 컴포넌트의 onClick에 할당할 콜백 함수 */
  const handleAuthCheck: TMouseEventHandler<HTMLButtonElement> = (e) => {
    if (
      registerForm.authCode.length === 6 &&
      registerForm.authCode === registerForm.authConfirm
    ) {
      timerReset(); // 타이머 초기화
      dispatch(toggleRegisterValid({ key: 'contact', value: true }));
    }
  };

  /** register 입력 폼 submit 이벤트 핸들러 */
  const handleSubmit: TFormEventHandler = (e) => {
    e.preventDefault();
    dispatch(authRegisterUserThunk(registerForm));
    alert('회원가입 되었습니다.');
    navigate('/auth');
  };

  // 타이머 만료 시
  if (timerEvent.current && timer < 0) {
    timerReset(); // 타이머 초기화
    // 인증 번호 초기화
    dispatch(changeField({ form: 'register', key: 'authCode', value: '' }));
    dispatch(
      changeField({
        form: 'register',
        key: 'authConfirm',
        value: '',
      }),
    );
  }

  // 컴포넌트 렌더링 시작 시
  useEffect(() => {
    dispatch(initializeState({ form: 'register' })); // register 상태 초기화
    return () => {
      // 컴포넌트 렌더링 종료 시
      timerReset();
    };
  }, []);

  useEffect(() => {
    if (authError) {
      alert('회원가입 실패');
    }
  }, []);

  return (
    <AuthRegisterForm
      registerState={registerForm}
      timer={timer}
      disabled={
        !(
          Object.values(registerForm.isValid).every(
            (value) => value === true,
          ) && registerForm.personalInfoAgreement
        )
      }
      handleChange={handleChangeField}
      handleToggle={handleToggleField}
      handleAuthorization={handleAuthorization}
      handleAuthCheck={handleAuthCheck}
      handleValidation={handleValidation}
      handleSubmit={handleSubmit}
    />
  );
};

export default React.memo(AuthRegisterFormContainer);
