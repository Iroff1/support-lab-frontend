import InputText from '@components/common/InputText';
import SubmitButton from '@components/common/SubmitButton';
import styled from 'styled-components';
import InputPassword from '../../containers/common/InputPassword';
import React from 'react';
import {
  TChangeEventHandler,
  TFormEventHandler,
  TMouseEventHandler,
} from '@models/input.model';
import { IRegister, IRegisterState } from '@models/auth.model';
import { IAuthChecker } from '@models/common.model';
import InputForValidation from '@containers/common/InputForValidation';
import { regInput } from '@consts/reg';
import AuthHeaderLogo from './AuthHeaderLogo';
import AuthTitleBox from './AuthTitleBox';
import InputForAuth from '../../containers/common/InputForAuth';

const AuthRegisterFormBlock = styled.form`
  width: 100%;
`;

const InputSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 30px;
`;

const SubmitSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 36px;
`;

interface IAuthRegisterForm {
  registerState: IRegisterState;
  checkList: IAuthChecker<IRegister>;
  confirmAuth: boolean;
  isReady: boolean;

  handleChange: TChangeEventHandler<HTMLInputElement>;
  handleAuthStart: () => Promise<void>;
  handleAuthConfirm: TMouseEventHandler<HTMLButtonElement>;
  handleSubmit: TFormEventHandler;
  // handleValidCheck: (key: keyof IRegister) => void;
  handleCheckEmail: () => Promise<void>;
}

const AuthRegisterForm: React.FC<IAuthRegisterForm> = ({
  checkList,
  registerState,
  confirmAuth,
  isReady,
  handleChange,
  handleAuthStart,
  handleAuthConfirm,
  handleSubmit,
  handleCheckEmail,
}) => {
  return (
    <>
      <AuthHeaderLogo />
      <AuthTitleBox>회원가입</AuthTitleBox>
      <AuthRegisterFormBlock
        onSubmit={(e) => {
          isReady && handleSubmit(e);
        }}
      >
        {/* 입력 공간, 인풋 6개 */}
        <InputSection>
          <InputForValidation
            name="email"
            type="email"
            placeholder="이메일"
            value={registerState.email}
            onChange={handleChange}
            onClick={async () => {
              await handleCheckEmail();
            }}
            isValid={checkList['email'] && !registerState.emailDuplication}
            cautionText={
              registerState.email.length === 0
                ? ''
                : registerState.emailDuplication
                ? '중복된 이메일입니다.'
                : checkList.email === true
                ? '사용가능합니다.'
                : '올바른 이메일을 입력해 주세요.'
            }
          />

          <InputPassword
            name="password"
            placeholder="비밀번호"
            onChange={handleChange}
            value={registerState.password}
            isValid={checkList.password}
            cautionText={
              '8~16자의 영문 대/소문자, 숫자, 특수문자를 사용해 주세요.'
            }
          />
          <InputPassword
            name="passwordConfirm"
            placeholder="비밀번호 확인"
            onChange={(e) => {
              handleChange && handleChange(e);
            }}
            value={registerState.passwordConfirm}
            isValid={registerState.password === registerState.passwordConfirm}
            cautionText={'비밀번호가 일치하지 않습니다.'}
            disabled={
              registerState.password.length === 0
                ? true
                : registerState.password.length !== 0 &&
                  checkList.password === false
            }
          />

          <InputText
            name="name"
            type="text"
            placeholder="이름"
            value={registerState.name}
            onChange={(e) => {
              handleChange && handleChange(e, regInput.korOrEng, 10);
            }}
          />

          <InputForAuth
            phone={registerState.phone}
            authConfirm={registerState.authConfirm}
            checkList={checkList}
            confirmAuth={confirmAuth}
            handleChange={handleChange}
            handleAuthStart={handleAuthStart}
            handleAuthConfirm={handleAuthConfirm}
          />
        </InputSection>

        {/* 제출 공간 */}
        <SubmitSection>
          {/* 버튼 공간 */}
          <SubmitButton disabled={!isReady}>가입하기</SubmitButton>
        </SubmitSection>
      </AuthRegisterFormBlock>
    </>
  );
};

export default AuthRegisterForm;
