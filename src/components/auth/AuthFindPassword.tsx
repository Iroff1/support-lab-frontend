import InputText from '@components/common/InputText';
import styled from 'styled-components';
import InputWithConfirm from '../../containers/common/InputWithConfirm';
import SubmitButton from '@components/common/SubmitButton';
import React from 'react';
import AuthTitleBox from './AuthTitleBox';
import AuthHeaderLogo from './AuthHeaderLogo';
import { IFindPasswordFormState } from '@containers/auth/AuthFindPasswordContainer';
import { TChangeEventHandler } from '@models/input.model';

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

interface IAuthFindPassword {
  findForm: IFindPasswordFormState;
  checkResult: boolean;
  handleChangeField: TChangeEventHandler<HTMLInputElement>;
  handleFindPassword: () => void;
}

const AuthFindPassword: React.FC<IAuthFindPassword> = () => {
  return (
    <>
      <AuthHeaderLogo />
      <AuthTitleBox>'비밀번호 찾기'</AuthTitleBox>

      <FindForm>
        {/* 비밀번호 찾기: email, username, contact, */}
        <InputWithConfirm name="" type="text" placeholder="이메일(아이디)" />
        <InputText name="username" type="text" placeholder="이름" />
        <InputWithConfirm
          name="contact"
          type="tel"
          placeholder="휴대폰번호"
          useFor="auth"
        />
        <InputWithConfirm
          name="authConfirm"
          type="text"
          placeholder="인증번호"
        />
      </FindForm>

      <FindSubmit>
        <SubmitButton disabled={true}>'비밀번호 찾기'</SubmitButton>
      </FindSubmit>
    </>
  );
};

export default AuthFindPassword;
