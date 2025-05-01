import palette from '@colors/index';
import AuthInput from '@components/common/AuthInput';
import tranlateFontSize from '@hooks/tranlateFontSize';
import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled, { css } from 'styled-components';
import AuthInputPassword from './AuthInputPassword';

const LOGO = require('@images/auth/login_logo_pc.png');

const AuthLoginFormBlock = styled.div`
  width: 360px;
  height: 446px;
  position: fixed;
  top: 80px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
`;

const LoginHeader = styled.div`
  width: 174px;
  height: 140px;
  background: url(${LOGO}) center/contain no-repeat;
  cursor: pointer;
`;

const LoginBody = styled.div`
  width: 100%;
`;

const LoginForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  & > button {
    width: 100%;
    height: 48px;
    margin-top: 20px;
    border-radius: 8px;
    padding: 12px 10px;
    border: 0;
    ${css(tranlateFontSize('SB_18'))};
    background-color: ${palette.main.B75};
    color: ${palette.black.white};
    transition: 0.2s ease background-color;

    &.on {
      background-color: ${palette.main.main};
    }
  }
`;

const InputSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 12px;

  & > label {
    display: flex;
    gap: 8px;

    &:hover {
      & > .checkbox {
        border: 2px solid #444444;
      }
      & > span {
        color: ${palette.black.B700};
      }
    }

    & > input[type='checkbox'] {
      display: none;

      &:checked + .checkbox {
        background-color: ${palette.main.main};
        fill: ${palette.black.white};
        border: 0px;
        & + span {
          color: ${palette.black.B700};
        }
      }
    }

    & > .checkbox {
      width: 18px;
      height: 18px;
      background-color: ${palette.black.white};
      border: 2px solid #dedede;
      border-radius: 4px;
      transition: 0.2s ease border, 0.2s ease background-color, 0.2s ease fill;
      fill: transparent;
      display: flex;
      justify-content: center;
      align-items: center;

      & > svg {
        fill: ${palette.black.white};
        width: 80%;
        height: 80%;
      }
    }

    & > span {
      color: ${palette.black.B100};
      transition: 0.2s ease color;
    }
  }
`;

const AuthOtherService = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 28px;

  & > a {
    flex: 1;
    ${css(tranlateFontSize('R_17'))};
    color: ${palette.black.B80};
    text-align: center;
    transition: 0.2s ease color;
    &:hover {
      color: ${palette.black.Black};
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

  const submitBtn = useRef<HTMLButtonElement>(null);
  const navigate = useNavigate();

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {};

  useEffect(() => {
    if (email.length && password.length) {
      submitBtn.current?.classList.add('on');
    } else {
      submitBtn.current?.classList.remove('on');
    }
  }, [email, password]);

  return (
    <AuthLoginFormBlock>
      <LoginHeader
        onClick={() => {
          navigate('/');
        }}
      />
      <LoginBody>
        <LoginForm>
          <InputSection>
            <AuthInput
              type="email"
              placeholder="이메일"
              onChange={handleEmail}
            />
            <AuthInputPassword onChange={handlePassword} />

            <label>
              <input type="checkbox" />
              <div className="checkbox">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                </svg>
              </div>
              <span>로그인 상태 유지</span>
            </label>
          </InputSection>
          <button ref={submitBtn}>로그인</button>
        </LoginForm>
        <AuthOtherService>
          <Link to={'/register'}>회원가입</Link>
          <Link to={'/'}>비밀번호 찾기</Link>
          <Link to={'/'}>아이디 찾기</Link>
        </AuthOtherService>
      </LoginBody>
    </AuthLoginFormBlock>
  );
};

export default AuthLoginForm;
