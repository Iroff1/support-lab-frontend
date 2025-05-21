import AuthLoginForm from '@components/auth/AuthLoginForm';
import useInit from '@hooks/useInit';
import { ILogin } from '@models/auth.model';
import {
  TChangeEventHandler,
  TFormEventHandler,
  TMouseEventHandler,
} from '@models/input.model';
import { authActions } from '@store/auth';
import { useAppDispatch, useAppSelector } from '@store/index';
import React, { useEffect, useState } from 'react';

const AuthLoginFormContainer = () => {
  const dispatch = useAppDispatch();
  const { loginForm } = useAppSelector(({ auth }) => ({
    loginForm: auth.login,
  }));
  const { changeField } = authActions;

  const [isMaintain, setIsMaintain] = useState(false);
  const { isInit, initComponent } = useInit();

  const handleChange: TChangeEventHandler<HTMLInputElement> = (e) => {
    dispatch(
      changeField({
        form: 'login',
        key: e.target.name as keyof ILogin,
        value: e.target.value,
      }),
    );
  };

  const handleToggle: TMouseEventHandler<HTMLInputElement> = (e) => {
    setIsMaintain((prev) => !prev);
  };

  const handleSubmit: TFormEventHandler = (e) => {
    // console.log(e);
    e.preventDefault();

    // TODO) POST /auth/login 요청 추가
    // dispatch(authLoginUser(loginForm));

    // TODO) isMaintain true일 경우, 로컬스토리지에 로그인 정보 저장
  };

  useEffect(() => {
    initComponent();
  }, []);
  useEffect(() => {
    if (!isInit) return;
  }, []);

  return (
    <AuthLoginForm
      loginState={loginForm}
      isMaintain={isMaintain}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      handleToggle={handleToggle}
    />
  );
};

export default React.memo(AuthLoginFormContainer);
