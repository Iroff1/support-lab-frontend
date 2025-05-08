import InputText from '@components/common/InputText';
import styled from 'styled-components';
import InputWithCheck from '../common/InputWithCheck';
import SubmitButton from '@components/common/SubmitButton';
import React from 'react';

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
      {/* 입력 공간 3개 */}
      <FindForm>
        {isPasswordForm ? (
          <InputWithCheck type="email" placeholder="이메일" />
        ) : null}
        <InputText type="text" placeholder="이름" />
        <InputWithCheck type="tel" placeholder="휴대폰번호" forAuth />
        <InputWithCheck type="text" placeholder="인증번호" />
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
