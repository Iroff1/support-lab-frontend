import InputText from '@components/common/InputText';
import SubmitButton from '@components/common/SubmitButton';
import styled from 'styled-components';
import InputPassword from '../common/InputPassword';
import InputWithCheck from '../common/InputWithCheck';
import InputWithConfirm from '../common/InputWithConfirm';
import checkEmailValidation from '@utils/checkEmailValidation';
import React, { useState } from 'react';

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

interface IAuthRegisterForm {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleToggle: (e: React.MouseEvent<HTMLInputElement>) => void;
}

const AuthRegisterForm: React.FC<IAuthRegisterForm> = ({
  handleChange,
  handleToggle,
}) => {
  return (
    <>
      {/* 입력 공간, 인풋 6개 */}
      <RegisterForm>
        <InputWithConfirm
          name="email"
          type="email"
          placeholder="이메일"
          handler={checkEmailValidation}
          onChange={handleChange}
        />
        <InputPassword name="password" onChange={handleChange} />
        <InputPassword name="passwordConfirm" onChange={handleChange} />
        <InputText
          name="username"
          type="text"
          placeholder="이름"
          onChange={handleChange}
        />
        <InputWithConfirm
          name="contact"
          type="tel"
          placeholder="휴대폰번호"
          useFor="auth"
          onChange={handleChange}
        />
        <InputWithConfirm
          name="contactAuth"
          type="text"
          placeholder="인증번호"
        />
      </RegisterForm>

      {/* 제출 공간 */}
      <RegisterSubmit>
        {/* 옵션 공간 */}
        <RegisterOption>
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
        </RegisterOption>

        {/* 버튼 공간 */}
        <SubmitButton>가입하기</SubmitButton>
      </RegisterSubmit>
    </>
  );
};

export default React.memo(AuthRegisterForm);
