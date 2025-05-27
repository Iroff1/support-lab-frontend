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
import { IAuthChecker, IRegister, IRegisterState } from '@models/auth.model';
import InputForValidation from '@containers/common/InputForValidation';
import InputForAuthorization from '@containers/common/InputForAuthorization';
import { regInput } from '@consts/reg';
import AuthHeaderLogo from './AuthHeaderLogo';
import AuthTitleBox from './AuthTitleBox';
import palette from '@assets/colors';

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
  timer: number;
  confirmAuth: boolean;
  isReady: boolean;

  handleChange: TChangeEventHandler<HTMLInputElement>;
  handleAuthorization: TMouseEventHandler<HTMLButtonElement>;
  handleAuthConfirm: TMouseEventHandler<HTMLButtonElement>;
  handleSubmit: TFormEventHandler;
  handleValidCheck: (key: keyof IRegister) => void;
}

const AuthRegisterForm: React.FC<IAuthRegisterForm> = ({
  timer,
  checkList,
  registerState,
  confirmAuth,
  isReady,
  handleChange,
  handleAuthorization,
  handleAuthConfirm,
  handleSubmit,
  handleValidCheck,
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
            onClick={(e) => {
              handleValidCheck!('email');
            }}
            isValid={checkList['email']}
            cautionText={
              registerState.email.length === 0
                ? ''
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
            name="username"
            type="text"
            placeholder="이름"
            value={registerState.username}
            onChange={(e) => {
              handleChange && handleChange(e, regInput.korOrEng, 10);
            }}
          />

          <InputForAuthorization
            name="contact"
            type="tel"
            placeholder="휴대폰번호"
            useFor="auth"
            value={registerState.contact}
            disabled={timer >= 0 || checkList.contact}
            onChange={(e) => {
              handleChange && handleChange(e, regInput.onlyNum, 11);
            }}
            isValid={checkList.contact && timer >= 0 && confirmAuth}
            onClick={(e) => {
              e.preventDefault();
              checkList.contact || handleAuthorization(e);
            }}
            cautionText={
              checkList.contact ? (
                ''
              ) : timer >= 0 ? (
                <span style={{ color: palette.system.blue }}>
                  남은 시간 {Math.floor(timer / 60)}분
                  {String(timer % 60).padStart(2, '0')}초<br />
                  문자가 오지 않으면 스팸함을 확인해 주세요.
                </span>
              ) : confirmAuth === true ? (
                ''
              ) : (
                <span>
                  인증 시간이 만료되었습니다.
                  <br />
                  다시 인증해 주세요.
                </span>
              )
            }
          />

          <InputForValidation
            name="authConfirm"
            type="text"
            placeholder="인증번호"
            value={registerState.authConfirm}
            onClick={handleAuthConfirm}
            onChange={(e) => {
              handleChange && handleChange(e, regInput.onlyNum, 6);
            }}
            isValid={registerState.authCode.length === 6 && confirmAuth}
            cautionText={
              registerState.authCode.length < 6
                ? ''
                : registerState.authCode === registerState.authConfirm
                ? '인증되었습니다.'
                : '인증번호가 일치하지 않습니다.'
            }
            disabled={timer < 0}
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

export default React.memo(AuthRegisterForm);
