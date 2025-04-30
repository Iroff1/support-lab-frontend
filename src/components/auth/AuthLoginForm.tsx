import palette from '@colors/index';
import tranlateFontSize from '@hooks/tranlateFontSize';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

const loginLogo = require('@images/login_logo_pc.png');

const AuthLoginFormBlock = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginFormWrapper = styled.div`
  width: 360px;
  height: 446px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LoginHeader = styled.div`
  width: 174px;
  height: 140px;
  background: url(${loginLogo}) center/cover no-repeat;
`;

const LoginBody = styled.div`
  width: 100%;
`;

const LoginForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  & > input {
    width: 100%;
    height: 52px;
    outline: 0;
    border-radius: 10px;
    padding: 14px 10px;
    border: 1px solid ${palette.black.B40};
  }
  & > button {
    width: 100%;
    height: 48px;
    gap: 10px;
    border-radius: 8px;
    padding: 12px 10px;
    border: 0;
    ${css(tranlateFontSize('SB_18'))};
    background-color: ${palette.main.B75};
    color: ${palette.black.white};
  }
`;

const AuthLoginForm = () => {
  return (
    <AuthLoginFormBlock>
      <LoginFormWrapper>
        <LoginHeader />
        <LoginBody>
          <LoginForm>
            <input type="email" placeholder="이메일" />
            <input type="password" placeholder="비밀번호" />
            <label>
              <input type="checkbox" />
              <span>로그인 상태 유지</span>
            </label>
            <button>로그인</button>
          </LoginForm>
          <div>
            <Link to={'/'}>회원가입</Link>
            <Link to={'/'}>비밀번호 찾기</Link>
            <Link to={'/'}>야이디 찾기</Link>
          </div>
        </LoginBody>
      </LoginFormWrapper>
    </AuthLoginFormBlock>
  );
};

export default AuthLoginForm;
