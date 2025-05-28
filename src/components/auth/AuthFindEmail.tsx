import InputText from '@components/common/InputText';
import styled from 'styled-components';
import SubmitButton from '@components/common/SubmitButton';
import React from 'react';
import AuthTitleBox from './AuthTitleBox';
import AuthHeaderLogo from './AuthHeaderLogo';
import { IFindEmailFormState } from '@containers/auth/AuthFindEmailContainer';
import { TChangeEventHandler } from '@models/input.model';
import { regInput } from '@consts/reg';
import translateContact from '@utils/translateContact';
import { Link } from 'react-router-dom';
import palette from '@assets/colors';

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

const FindPassword = styled.div`
  color: ${palette.black.B200};
  & > a {
    color: ${palette.main.main};
  }
`;

interface IAuthFindForm {
  findForm: IFindEmailFormState;
  checkResult: boolean;
  handleChangeField: TChangeEventHandler<HTMLInputElement>;
  handleFindEmail: () => void;
}

const AuthFindEmail: React.FC<IAuthFindForm> = ({
  findForm,
  checkResult,
  handleChangeField,
  handleFindEmail,
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
        <InputText
          name="contact"
          type="text"
          placeholder="휴대폰번호"
          value={translateContact(findForm.contact)}
          onChange={(e) => {
            handleChangeField(e, regInput.onlyNum, 11);
          }}
        />
      </FindForm>

      <FindSubmit>
        <SubmitButton disabled={!checkResult} onClick={handleFindEmail}>
          아이디 찾기
        </SubmitButton>
      </FindSubmit>

      <FindPassword>
        비밀번호가 기억나지 않는다면?{' '}
        <Link to={'/auth/find/password'}>비밀번호 찾기</Link>
      </FindPassword>
    </>
  );
};

export default AuthFindEmail;
