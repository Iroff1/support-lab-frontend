import AuthLoginForm from '@components/auth/AuthLoginForm';
import useInit from '@hooks/useInit';
import { ILogin } from '@models/auth.model';
import {
  TChangeEventHandler,
  TFormEventHandler,
  TMouseEventHandler,
} from '@models/input.model';
import {
  authActions,
  authDecryptTokenThunk,
  authLoginUserThunk,
} from '@store/auth';
import { useAppDispatch, useAppSelector } from '@store/index';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthLoginFormContainer = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { token, auth, authError } = useAppSelector(({ auth }) => auth);
  const [loginForm, setLoginForm] = useState<ILogin>({
    email: '',
    password: '',
  });
  const [isMaintain, setIsMaintain] = useState(false);
  const { isInit, startInit } = useInit();

  /** 로그인 폼 입력 핸들러 함수 */
  const handleChange: TChangeEventHandler<HTMLInputElement> = (e) => {
    setLoginForm({
      ...loginForm,
      [e.target.name]: e.target.value,
    });
  };

  /** 로그인 유지 상태 토글 핸들러 함수 */
  const handleToggle: TMouseEventHandler<HTMLInputElement> = (e) => {
    setIsMaintain((prev) => !prev);
  };

  /** 로그인 폼 상태 데이터 요청 핸들러 함수 */
  const handleSubmit: TFormEventHandler = (e) => {
    e.preventDefault();
    // TODO) POST /auth/login 요청 추가
    dispatch(authLoginUserThunk(loginForm));
  };

  useEffect(() => {
    startInit();
    dispatch(authActions.initializeState());
    // if (auth) navigate('/');
    if (token && token.length > 0) navigate('/');
  }, []);

  useEffect(() => {
    if (!isInit) return;
  }, [isInit]);

  useEffect(() => {
    if (!isInit) return;
    if (token && token.length > 0) {
      // TODO) isMaintain true일 경우, 로컬스토리지에 로그인 정보 저장
      if (isMaintain) localStorage.setItem('token', JSON.stringify(token));
      else sessionStorage.setItem('token', JSON.stringify(token));
      dispatch(authDecryptTokenThunk(token));
      navigate('/');
    }
    if (authError) alert('일치하는 계정이 없습니다!');
  }, [isInit, token]);

  return (
    <AuthLoginForm
      loginForm={loginForm}
      isMaintain={isMaintain}
      loginError={authError}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      handleToggle={handleToggle}
    />
  );
};

export default React.memo(AuthLoginFormContainer);
