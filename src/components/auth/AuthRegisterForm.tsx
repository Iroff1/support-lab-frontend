import InputText from '@components/common/InputText';
import SubmitButton from '@components/common/SubmitButton';
import styled from 'styled-components';
import InputPassword from '../../containers/common/InputPassword';
import InputWithCheck from '../common/InputWithCheck';
import React from 'react';
import { TChangeEventHandler, TMouseEventHandler } from '@models/input.model';
import { IRegisterForm } from '@models/account.model';
import InputForValidation from '@containers/common/InputForValidation';
import InputForAuthorization from '@containers/common/InputForAuthorization';
import checkValidation from '@utils/checkValidation';
import { regObj } from '@consts/reg';
import AuthHeaderLogo from './AuthHeaderLogo';
import AuthTitleBox from './AuthTitleBox';

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
  handleChange: TChangeEventHandler<HTMLInputElement>;
  handleToggle: TMouseEventHandler<HTMLInputElement>;
  handleAuthorization: TMouseEventHandler<HTMLButtonElement>;
  info: IRegisterForm;
  timer: number;
  disabled: boolean;
}

const AuthRegisterForm: React.FC<IAuthRegisterForm> = ({
  handleChange,
  handleToggle,
  timer,
  handleAuthorization,
  info,
  disabled,
}) => {
  return (
    <>
      <AuthHeaderLogo />
      <AuthTitleBox>회원가입</AuthTitleBox>
      <AuthRegisterFormBlock>
        {/* 입력 공간, 인풋 6개 */}
        <InputSection>
          <InputForValidation
            name="email"
            type="email"
            placeholder="이메일"
            onChange={handleChange}
            isValid={checkValidation(info.email, regObj.email)}
            cautionText={
              info.email.length === 0
                ? ''
                : checkValidation(info.email, regObj.email)
                ? '사용가능합니다.'
                : '올바른 이메일을 입력해 주세요.'
            }
          />

          <InputPassword
            name="password"
            placeholder="비밀번호"
            onChange={handleChange}
            isValid={checkValidation(info.password, regObj.password)}
            cautionText={
              info.password.length === 0
                ? ''
                : checkValidation(info.password, regObj.password)
                ? ''
                : '8~16자의 영문 대/소문자, 숫자, 특수문자를 사용해 주세요.'
            }
          />
          <InputPassword
            name="passwordConfirm"
            placeholder="비밀번호 확인"
            onChange={handleChange}
            isValid={info.password === info.passwordConfirm}
            cautionText={
              info.passwordConfirm.length === 0
                ? ''
                : info.password === info.passwordConfirm
                ? ''
                : '비밀번호가 일치하지 않습니다.'
            }
            disabled={
              info.password.length === 0
                ? true
                : info.password.length !== 0 &&
                  checkValidation(info.password, regObj.password) === false
            }
          />

          <InputText
            name="username"
            type="text"
            placeholder="이름"
            value={info.username}
            onChange={(e) => {
              handleChange && handleChange(e, regObj.korOrEng);
            }}
          />

          <InputForAuthorization
            name="contact"
            type="tel"
            placeholder="휴대폰번호"
            useFor="auth"
            value={info.contact}
            onChange={(e) => {
              handleChange && handleChange(e, regObj.onlyNum, 11);
            }}
            onClick={handleAuthorization}
            cautionText={`남은 시간 ${Math.floor(timer / 60)}분 ${(
              (timer % 60) +
              ''
            ).padStart(2, '0')}초
문자가 오지 않으면 스팸함을 확인해 주세요.`}
          />
          <InputForValidation
            name="contactAuth"
            type="text"
            placeholder="인증번호"
            cautionText="인증되었습니다."
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
