import InputText from '@components/common/InputText';
import SubmitButton from '@components/common/SubmitButton';
import styled from 'styled-components';
import InputPassword from '../../containers/common/InputPassword';
import InputWithCheck from '../common/InputWithCheck';
import InputWithConfirm from '../../containers/common/InputWithConfirm';
import React from 'react';
import { TChangeEventHandler, TMouseEventHandler } from '@models/input.model';
import { IRegister } from '@models/account.model';
import checkEmailValidation from '@utils/checkEmailValidation';
import checkPasswordValidation from '@utils/checkPasswordValidation';

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
  info: IRegister;
}

const AuthRegisterForm: React.FC<IAuthRegisterForm> = ({
  handleChange,
  handleToggle,
  info,
}) => {
  return (
    <AuthRegisterFormBlock>
      {/* 입력 공간, 인풋 6개 */}
      <InputSection>
        <InputWithConfirm
          name="email"
          type="email"
          placeholder="이메일"
          onChange={handleChange}
          validChecker={checkEmailValidation}
        />

        <InputPassword
          name="password"
          onChange={handleChange}
          validChecker={checkPasswordValidation}
        />
        <InputPassword
          name="passwordConfirm"
          onChange={handleChange}
          validChecker={(userInput: string) => {
            if (userInput === info.password) return '';
            return '비밀번호가 일치하지 않습니다.';
          }}
          disabled={
            info.password.length === 0
              ? true
              : info.password.length !== 0 &&
                checkPasswordValidation(info.password).length !== 0
          }
        />

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
        <SubmitButton>가입하기</SubmitButton>
      </SubmitSection>
    </AuthRegisterFormBlock>
  );
};

export default React.memo(AuthRegisterForm);
