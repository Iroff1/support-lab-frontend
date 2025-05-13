import InputText from '@components/common/InputText';
import SubmitButton from '@components/common/SubmitButton';
import styled from 'styled-components';
import InputPassword from '../common/InputPassword';
import AuthCheckItem from './AuthCheckItem';
import InputWithCheck from '../common/InputWithCheck';
import checkEmailValidation from '@utils/checkEmailValidation';
import { useState } from 'react';

const RegisterForm = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 30px;
`;

const RegisterOption = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const RegisterSubmit = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 36px;
`;

const AuthRegisterForm = () => {
  const [emailCheck, setEmailCheck] = useState(false);
  const [passwordCheck, setPasswordCheck] = useState(false);
  const [authCheck, setAuthCheck] = useState(false);

  return (
    <>
      {/* 입력 공간, 인풋 6개 */}
      <RegisterForm>
        <InputWithCheck
          name="email"
          type="email"
          placeholder="이메일"
          handler={checkEmailValidation}
        />
        <InputPassword name="password" />
        <InputPassword name="passwordCheck" />
        <InputText name="username" type="text" placeholder="이름" />
        <InputWithCheck
          name="contact"
          type="tel"
          placeholder="휴대폰번호"
          useFor="auth"
        />
        <InputWithCheck name="contactAuth" type="text" placeholder="인증번호" />
      </RegisterForm>

      {/* 제출 공간 */}
      <RegisterSubmit>
        {/* 옵션 공간 */}
        <RegisterOption>
          <AuthCheckItem
            useFor="auth"
            name="personalInfoAgreement"
            required={true}
          >
            [필수] 개인정보 수집 및 이용 동의
          </AuthCheckItem>
          <AuthCheckItem useFor="auth" name="marketingAgreement">
            [선택] 마케팅 수신 동의
          </AuthCheckItem>
        </RegisterOption>

        {/* 버튼 공간 */}
        <SubmitButton>가입하기</SubmitButton>
      </RegisterSubmit>
    </>
  );
};
export default AuthRegisterForm;
