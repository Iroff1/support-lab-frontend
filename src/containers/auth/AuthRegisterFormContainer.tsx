import { authGetCode } from '@api/auth';
import AuthRegisterForm from '@components/auth/AuthRegisterForm';
import useCheckList from '@hooks/useCheckList';
import useInit from '@hooks/useInit';
import useTimer from '@hooks/useTimer';
import { IAuthChecker, IRegister, IRegisterState } from '@models/auth.model';
import {
  TChangeEventHandler,
  TFormEventHandler,
  TMouseEventHandler,
} from '@models/input.model';
import { useAppDispatch, useAppSelector } from '@store/index';
import { termsActions } from '@store/terms';
import checkValidation from '@utils/checkValidation';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const TIMER_INIT = -1;
const TIMER_LIMIT = 5;
// const TIMER_LIMIT = 300;

const AuthRegisterFormContainer = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { a, b } = useAppSelector(({ terms }) => ({
    a: terms.termsOfUse,
    b: terms.personalInfo,
  }));
  const [registerForm, setRegisterForm] = useState<IRegisterState>({
    email: '',
    username: '',
    password: '',
    passwordConfirm: '',
    contact: '',
    authCode: '',
    authConfirm: '',
  });
  const { checkList, handleCheckList } = useCheckList<IRegister>({
    email: false,
    password: false,
    username: false,
    contact: false,
  });
  const [confirmAuth, setConfirmAuth] = useState(false);

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

  /** checkList 속성 토글 핸들링 함수 */
  const handleValidCheck = (key: keyof IRegister) => {
    const result = checkValidation(registerForm[key], key);
    handleCheckList(key, result);
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
      timerStart(); // 타이머 시작

      setRegisterForm((prev) => ({
        ...prev,
        authCode: '111111',
      }));
    }
  };

  /** InputForValidation[name="authConfirm"] 컴포넌트의 onClick에 할당할 콜백 함수 */
  const handleAuthConfirm: TMouseEventHandler<HTMLButtonElement> = () => {
    if (
      registerForm.authCode.length === 6 &&
      registerForm.authCode === registerForm.authConfirm
    ) {
      timerReset(); // 타이머 초기화

      // TODO)
      setConfirmAuth(true);
      handleCheckList('contact', true);
      // dispatch(toggleRegisterValid({ key: 'contact', value: true }));
    }
  };

  /** register 입력 폼 submit 이벤트 핸들러 */
  const handleSubmit: TFormEventHandler = (e) => {
    e.preventDefault();
    // TODO) 비동기 요청 (PUT auth/register)

    // console.log(registerForm); // test code
    // console.log(checkList); // test code
    alert('회원가입 완료!');
    navigate('/');
  };

  // 컴포넌트 렌더링 시작 시
  useEffect(() => {
    initComponent();
  }, []);

  useEffect(() => {
    if (!(a && b)) navigate('../termsOfUse'); // 새로 고침 후 약관 상태 초기화 시 다시 약관페이지로
  }, [a, b]);

  // 초기 렌더링 이후
  useEffect(() => {
    if (!isInit) return;
    if (timerEvent.current && timer < 0) {
      timerReset(); // 타이머 초기화
      setRegisterForm((prev) => ({ ...prev, authCode: '', authConfirm: '' }));
    }
    return () => {
      // 컴포넌트 렌더링 종료 시
      timerReset();
      dispatch(termsActions.initialState());
    };
  }, [isInit]);

  // 입력 폼 유효성 추적
  useEffect(() => {
    handleValidCheck('password');
  }, [registerForm.password]);
  useEffect(() => {
    handleValidCheck('username');
  }, [registerForm.username]);

  return (
    <AuthRegisterForm
      registerState={registerForm}
      checkList={checkList}
      timer={timer}
      confirmAuth={confirmAuth}
      isReady={
        // 모든 정규표현식 통과 + 본인인증 완료
        Object.keys(checkList).every(
          (key) => checkList[key as keyof IAuthChecker<IRegister>],
        ) && confirmAuth
      }
      handleChange={handleChangeField}
      handleAuthorization={handleAuthorization}
      handleAuthConfirm={handleAuthConfirm}
      handleSubmit={handleSubmit}
      handleValidCheck={handleValidCheck}
    />
  );
};

export default React.memo(AuthRegisterFormContainer);
