import palette from '@assets/colors/index';
import InputText from '@components/common/InputText';
import translateFontSize from '@utils/translateFontSize';
import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import InputPassword from '../../containers/common/InputPassword';
import InputWithCheck from '../common/InputWithCheck';
import SubmitButton from '@components/common/SubmitButton';
import Caution from '@components/common/Caution';
import AuthHeaderLogo from './AuthHeaderLogo';
import { ILogin } from '@models/auth.model';
import {
  TChangeEventHandler,
  TFormEventHandler,
  TMouseEventHandler,
} from '@models/input.model';
import { SerializedError } from '@reduxjs/toolkit';

const LoginBody = styled.div`
  width: 100%;
`;

const LoginForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const InputSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 12px;
`;

const LoginFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  margin-top: 28px;

  & > a {
    ${css(translateFontSize('R_17'))};
    color: ${palette.black.B80};
    text-align: center;
    transition: 0.2s ease color;
    &:hover {
      color: ${palette.black.black};
    }
  }

  & > div {
    width: 4.25px;
    height: 14px;
    position: relative;
    &::before {
      content: '';
      width: 1px;
      height: 14px;
      position: absolute;
      background-color: ${palette.black.B40};
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
`;

interface IAuthLoginForm {
  loginForm: ILogin;
  isMaintain: boolean;
  loginError: SerializedError | null;

  handleChange: TChangeEventHandler<HTMLInputElement>;
  handleSubmit: TFormEventHandler;
  handleToggle: TMouseEventHandler<HTMLInputElement>;
}

const AuthLoginForm: React.FC<IAuthLoginForm> = ({
  loginForm,
  loginError,
  handleChange,
  handleSubmit,
  handleToggle,
}) => {
  return (
    <>
      <AuthHeaderLogo />
      <LoginBody>
        <LoginForm onSubmit={handleSubmit}>
          <InputSection>
            <InputText<ILogin>
              name="email"
              type="email"
              placeholder="이메일"
              onChange={(e) => {
                handleChange && handleChange(e);
              }}
            />
            <InputPassword<ILogin>
              name="password"
              placeholder="비밀번호"
              onChange={(e) => {
                handleChange && handleChange(e);
              }}
            />
            <InputWithCheck name="loginMaintain" handleClick={handleToggle}>
              로그인 상태 유지
            </InputWithCheck>
          </InputSection>
          {/* TODO) 경고 컴포넌트 추가 바람 */}
          {loginError && (
            <Caution color="red">
              아이디 또는 비밀번호가 일치하지 않습니다.
            </Caution>
          )}

          <SubmitButton
            disabled={
              loginForm.email.length === 0 || loginForm.password.length === 0
            }
          >
            로그인
          </SubmitButton>
        </LoginForm>
      </LoginBody>

      <LoginFooter>
        <Link to={'termsOfUse'}>회원가입</Link>
        <div />
        <Link to={'find/password'}>비밀번호 찾기</Link>
        <div />
        <Link to={'find/email'}>아이디 찾기</Link>
      </LoginFooter>
    </>
  );
};

export default AuthLoginForm;
