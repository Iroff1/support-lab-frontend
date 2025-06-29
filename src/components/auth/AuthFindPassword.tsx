import InputText from '@components/common/InputText';
import styled from 'styled-components';
import SubmitButton from '@components/common/SubmitButton';
import React from 'react';
import AuthTitleBox from './AuthTitleBox';
import AuthHeaderLogo from './AuthHeaderLogo';
import { IFindPassword } from '@containers/auth/AuthFindPasswordContainer';
import { TChangeEventHandler } from '@models/input.model';
import InputForValidation from '@containers/common/InputForValidation';
import { regInput } from '@consts/reg';
import InputForAuth from '@containers/common/InputForAuth';
import { IBooleanObj } from '@models/common.model';
import { Link } from 'react-router-dom';
import { FindAnother } from './AuthFindEmail';

const FindForm = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 36px;
`;

const FindSubmit = styled.div`
  width: 100%;
  margin-bottom: 36px;
`;

interface IAuthFindPassword {
  findForm: IFindPassword;
  checkList: IBooleanObj<IFindPassword & { emailConfirm: boolean }>;
  checkResult: boolean;
  handleValidCheck: (key: keyof IFindPassword) => void;
  handleChangeField: TChangeEventHandler<HTMLInputElement>;
  handleCheckEmail: () => Promise<void>;
  handleAuthStart: () => Promise<void>;
  handleAuthConfirm: () => Promise<void>;
  handleFindPassword: () => void;
}

const AuthFindPassword: React.FC<IAuthFindPassword> = ({
  findForm,
  checkList,
  checkResult,
  handleChangeField,
  handleAuthStart,
  handleAuthConfirm,
  handleCheckEmail,
  handleFindPassword,
  handleValidCheck,
}) => {
  return (
    <>
      <AuthHeaderLogo />
      <AuthTitleBox>비밀번호 찾기</AuthTitleBox>

      <FindForm>
        {/* 비밀번호 찾기: email, name, phone, */}
        <InputForValidation<IFindPassword>
          name="email"
          type="email"
          placeholder="이메일(아이디)"
          value={findForm.email}
          onChange={handleChangeField}
          handleConfirm={async (e) => {
            handleValidCheck!('email');
            await handleCheckEmail().then();
          }}
          $isValid={checkList.email && checkList.emailConfirm}
          $cautionText={
            findForm.email.length === 0
              ? ''
              : !checkList.email
              ? '올바른 이메일을 입력해 주세요.'
              : checkList.emailConfirm
              ? '존재하는 이메일입니다.'
              : '존재하지 않는 이메일입니다.'
          }
        />

        <InputText<IFindPassword>
          name="name"
          type="text"
          placeholder="이름"
          value={findForm.name}
          onChange={(e) => {
            handleChangeField && handleChangeField(e, regInput.korOrEng, 10);
          }}
        />

        <InputForAuth
          phone={findForm.phone}
          authConfirmText={findForm.authConfirm}
          checkList={checkList}
          handleChange={handleChangeField}
          handleAuthStart={handleAuthStart}
          handleAuthConfirm={handleAuthConfirm}
        />
      </FindForm>

      <FindSubmit>
        <SubmitButton disabled={!checkResult} onClick={handleFindPassword}>
          비밀번호 찾기
        </SubmitButton>
      </FindSubmit>

      <FindAnother>
        아이디가 기억나지 않는다면?{' '}
        <Link to={'/auth/find/email'}>이메일 찾기</Link>
      </FindAnother>
    </>
  );
};

export default AuthFindPassword;
