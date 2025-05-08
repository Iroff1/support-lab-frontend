import palette from '@assets/colors/index';
import InputText from '@components/common/InputText';
import translateFontSize from '@utils/translateFontSize';
import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled, { css } from 'styled-components';
import InputPassword from '../common/InputPassword';
import AuthCheckItem from './AuthCheckItem';
import SubmitButton from '@components/common/SubmitButton';
import Caution from '@components/common/Caution';

const LOGO = require('@assets/images/auth/login_logo_pc.png');

const LoginHeader = styled.div`
  width: 174px;
  height: 140px;
  background: url(${LOGO}) center/contain no-repeat;
  cursor: pointer;
`;

const LoginBody = styled.div`
  width: 100%;
  margin-top: 40px;
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
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 28px;

  & > a {
    flex: 1;
    ${css(translateFontSize('R_17'))};
    color: ${palette.black.B80};
    text-align: center;
    transition: 0.2s ease color;
    &:hover {
      color: ${palette.black.black};
    }
  }

  & > a:nth-child(2) {
    position: relative;
    &::before,
    &::after {
      content: '';
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: 1px;
      height: 14px;
      background-color: ${palette.black.B40};
    }

    &::before {
      left: 0px;
    }
    &::after {
      right: 0px;
    }
  }
`;

const AuthLoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  const submitBtn = useRef<HTMLButtonElement>(null);
  const navigate = useNavigate();

  const handleLogo = () => {
    navigate('/');
  };
  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // console.log(e);
    e.preventDefault();

    // TODO) POST /auth/user 요청 추가
    if (!email.length) {
      setLoginError('이메일을 작성해주세요.');
    } else if (!password.length) {
      setLoginError('비밀번호를 작성해주세요.');
    } else {
      setLoginError('');
    }
  };

  useEffect(() => {
    if (email.length && password.length) {
      submitBtn.current?.classList.add('on');
    } else {
      submitBtn.current?.classList.remove('on');
    }
  }, [email, password]);

  return (
    <>
      <LoginHeader onClick={handleLogo} />

      <LoginBody>
        <LoginForm onSubmit={handleSubmit}>
          <InputSection>
            <InputText
              name="email"
              type="email"
              placeholder="이메일"
              onChange={handleEmail}
            />
            <InputPassword name="password" onChange={handlePassword} />
            <AuthCheckItem>로그인 상태 유지</AuthCheckItem>
          </InputSection>

          {loginError.length ? <Caution>{loginError}</Caution> : null}
          <SubmitButton ref={submitBtn}>로그인</SubmitButton>
        </LoginForm>
      </LoginBody>

      <LoginFooter>
        <Link to={'register'}>회원가입</Link>
        <Link to={'find/password'}>비밀번호 찾기</Link>
        <Link to={'find/email'}>아이디 찾기</Link>
      </LoginFooter>
    </>
  );
};

export default AuthLoginForm;
