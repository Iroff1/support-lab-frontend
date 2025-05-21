import InputText from '@components/common/InputText';
import SubmitButton from '@components/common/SubmitButton';
import styled from 'styled-components';
import InputPassword from '../../containers/common/InputPassword';
import InputWithCheck from '../common/InputWithCheck';
import React from 'react';
import {
  TChangeEventHandler,
  TFormEventHandler,
  TMouseEventHandler,
} from '@models/input.model';
import { IAuthChecker, IRegister, IRegisterState } from '@models/auth.model';
import InputForValidation from '@containers/common/InputForValidation';
import InputForAuthorization from '@containers/common/InputForAuthorization';
import checkValidation from '@utils/checkValidation';
import { regObj } from '@consts/reg';
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

const OptionSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const SubmitSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 36px;
`;

interface IAuthRegisterForm {
  registerState: IRegisterState;
  timer: number;
  disabled: boolean;

  handleChange: TChangeEventHandler<HTMLInputElement>;
  handleToggle: TMouseEventHandler<HTMLInputElement>;
  handleAuthorization: TMouseEventHandler<HTMLButtonElement>;
  handleAuthCheck: TMouseEventHandler<HTMLButtonElement>;
  handleValidation: (
    key: keyof IAuthChecker<IRegister>,
    value: boolean,
  ) => void;
  handleSubmit: TFormEventHandler;
}

const AuthRegisterForm: React.FC<IAuthRegisterForm> = ({
  timer,
  registerState,
  disabled,
  handleChange,
  handleToggle,
  handleAuthorization,
  handleAuthCheck,
  handleValidation,
  handleSubmit,
}) => {
  return (
    <>
      <AuthHeaderLogo />
      <AuthTitleBox>회원가입</AuthTitleBox>
      <AuthRegisterFormBlock onSubmit={handleSubmit}>
        {/* 입력 공간, 인풋 6개 */}
        <InputSection>
          <InputForValidation
            name="email"
            type="email"
            placeholder="이메일"
            value={registerState.email}
            onChange={handleChange}
            onClick={(e) => {
              handleValidation(
                'email',
                checkValidation(registerState.email, regObj.email),
              );
            }}
            isValid={checkValidation(registerState.email, regObj.email)}
            cautionText={
              registerState.email.length === 0
                ? ''
                : checkValidation(registerState.email, regObj.email)
                ? '사용가능합니다.'
                : '올바른 이메일을 입력해 주세요.'
            }
          />

          <InputPassword
            name="password"
            placeholder="비밀번호"
            onChange={handleChange}
            value={registerState.password}
            isValid={checkValidation(registerState.password, regObj.password)}
            cautionText={
              '8~16자의 영문 대/소문자, 숫자, 특수문자를 사용해 주세요.'
            }
          />
          <InputPassword
            name="passwordConfirm"
            placeholder="비밀번호 확인"
            onChange={(e) => {
              handleChange && handleChange(e);
              handleValidation(
                'password',
                registerState.password === e.target.value,
              );
            }}
            value={registerState.passwordConfirm}
            isValid={registerState.password === registerState.passwordConfirm}
            cautionText={'비밀번호가 일치하지 않습니다.'}
            disabled={
              registerState.password.length === 0
                ? true
                : registerState.password.length !== 0 &&
                  checkValidation(registerState.password, regObj.password) ===
                    false
            }
          />

          <InputText
            name="username"
            type="text"
            placeholder="이름"
            value={registerState.username}
            onChange={(e) => {
              handleChange && handleChange(e, regObj.korOrEng, 10);
              handleValidation(
                'username',
                checkValidation(e.target.value, regObj.username),
              );
            }}
          />

          <InputForAuthorization
            name="contact"
            type="tel"
            placeholder="휴대폰번호"
            useFor="auth"
            value={registerState.contact}
            disabled={timer >= 0 || registerState.isValid.contact}
            onChange={(e) => {
              handleChange && handleChange(e, regObj.onlyNum, 11);
            }}
            isValid={
              checkValidation(registerState.contact, regObj.contact) &&
              timer >= 0
            }
            onClick={handleAuthorization}
            cautionText={
              !checkValidation(registerState.contact, regObj.contact) ? (
                ''
              ) : timer >= 0 ? (
                <span style={{ color: palette.system.blue }}>
                  남은 시간 {Math.floor(timer / 60)}분
                  {String(timer % 60).padStart(2, '0')}초<br />
                  문자가 오지 않으면 스팸함을 확인해 주세요.
                </span>
              ) : registerState.isValid.contact ? (
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
            onClick={handleAuthCheck}
            onChange={(e) => {
              handleChange && handleChange(e, regObj.onlyNum, 6);
            }}
            isValid={
              registerState.authCode.length === 6 &&
              registerState.authCode === registerState.authConfirm
            }
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
          {/* 옵션 공간 */}
          <OptionSection>
            <InputWithCheck
              useFor="auth"
              name="personalInfoAgreement"
              required={true}
              onClick={handleToggle}
            >
              [필수] 개인정보 수집 및 이용 동의
            </InputWithCheck>
            <InputWithCheck
              useFor="auth"
              name="marketingAgreement"
              onClick={handleToggle}
            >
              [선택] 마케팅 수신 동의
            </InputWithCheck>
          </OptionSection>

          {/* 버튼 공간 */}
          <SubmitButton disabled={disabled}>가입하기</SubmitButton>
        </SubmitSection>
      </AuthRegisterFormBlock>
    </>
  );
};

export default React.memo(AuthRegisterForm);
