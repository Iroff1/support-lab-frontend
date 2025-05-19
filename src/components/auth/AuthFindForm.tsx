import InputText from '@components/common/InputText';
import styled from 'styled-components';
import InputWithConfirm from '../../containers/common/InputWithConfirm';
import SubmitButton from '@components/common/SubmitButton';
import React from 'react';
import AuthTitleBox from './AuthTitleBox';
import AuthHeaderLogo from './AuthHeaderLogo';

interface IAuthFindForm {
  isPasswordForm?: boolean;
}

const FindForm = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 36px;
`;

const FindSubmit = styled.div`
  width: 100%;
`;

const AuthFindForm: React.FC<IAuthFindForm> = ({ isPasswordForm = false }) => {
  return (
    <>
      <AuthHeaderLogo />
      <AuthTitleBox>
        {isPasswordForm ? '비밀번호 찾기' : '아이디 찾기'}
      </AuthTitleBox>
      {/* 입력 공간 3개 */}
      <FindForm>
        {isPasswordForm ? (
          <InputWithConfirm name="email" type="email" placeholder="이메일" />
        ) : null}
        <InputText name="username" type="text" placeholder="이름" />
        <InputWithConfirm
          name="contact"
          type="tel"
          placeholder="휴대폰번호"
          useFor="auth"
        />
        <InputWithConfirm
          name="contactAuth"
          type="text"
          placeholder="인증번호"
        />
      </FindForm>

      <FindSubmit>
        <SubmitButton>
          {isPasswordForm ? '비밀번호 찾기' : '아이디 찾기'}
        </SubmitButton>
      </FindSubmit>
    </>
  );
};

export default AuthFindForm;
