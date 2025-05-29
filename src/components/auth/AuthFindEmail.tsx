import InputText from '@components/common/InputText';
import styled from 'styled-components';
import SubmitButton from '@components/common/SubmitButton';
import React from 'react';
import AuthTitleBox from './AuthTitleBox';
import AuthHeaderLogo from './AuthHeaderLogo';
import { IFindEmailFormState } from '@containers/auth/AuthFindEmailContainer';
import { TChangeEventHandler } from '@models/input.model';
import { regInput } from '@consts/reg';
import { Link } from 'react-router-dom';
import palette from '@assets/colors';
import InputForAuth from '@containers/common/InputForAuth';
import { IAuthChecker } from '@models/auth.model';

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

export const FindAnother = styled.div`
  color: ${palette.black.B200};
  & > a {
    color: ${palette.main.main};
  }
`;

interface IAuthFindForm {
  findForm: IFindEmailFormState;
  checkList: IAuthChecker<IFindEmailFormState>;
  checkResult: boolean;
  confirmAuth: boolean;
  handleChangeField: TChangeEventHandler<HTMLInputElement>;
  handleFindEmail: () => Promise<void>;
  handleAuthStart: () => Promise<void>;
  handleAuthConfirm: () => void;
}

const AuthFindEmail: React.FC<IAuthFindForm> = ({
  findForm,
  checkResult,
  checkList,
  confirmAuth,
  handleChangeField,
  handleFindEmail,
  handleAuthStart,
  handleAuthConfirm,
}) => {
  return (
    <>
      <AuthHeaderLogo />
      <AuthTitleBox>아이디 찾기</AuthTitleBox>

      <FindForm>
        {/* 아이디 찾기 : username, contact */}
        <InputText
          name="username"
          type="text"
          placeholder="이름"
          onChange={(e) => {
            handleChangeField(e, regInput.korOrEng);
          }}
        />
        <InputForAuth
          contact={findForm.contact}
          authConfirm={findForm.authConfirm}
          authCode={findForm.authCode}
          checkList={checkList}
          confirmAuth={confirmAuth}
          handleChange={handleChangeField}
          handleAuthStart={handleAuthStart}
          handleAuthConfirm={handleAuthConfirm}
        />
      </FindForm>

      <FindSubmit>
        <SubmitButton disabled={!checkResult} onClick={handleFindEmail}>
          아이디 찾기
        </SubmitButton>
      </FindSubmit>

      <FindAnother>
        비밀번호가 기억나지 않는다면?{' '}
        <Link to={'/auth/find/password'}>비밀번호 찾기</Link>
      </FindAnother>
    </>
  );
};

export default AuthFindEmail;
