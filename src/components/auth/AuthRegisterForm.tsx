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
  info: IRegisterForm;
  disabled: boolean;
}

const AuthRegisterForm: React.FC<IAuthRegisterForm> = ({
  handleChange,
  handleToggle,
  info,
  disabled,
}) => {
  return (
    <AuthRegisterFormBlock>
      {/* 입력 공간, 인풋 6개 */}
      <InputSection>
        <InputForValidation
          name="email"
          type="email"
          placeholder="이메일"
          onChange={handleChange}
          reg={regObj.email}
          cautionText="사용 가능합니다."
        />

        <InputPassword
          name="password"
          onChange={handleChange}
          reg={regObj.password}
        />
        <InputPassword
          name="passwordConfirm"
          onChange={handleChange}
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
          onChange={handleChange}
        />

        <InputForAuthorization
          name="contact"
          type="tel"
          placeholder="휴대폰번호"
          useFor="auth"
          value={info.contact}
          onChange={handleChange}
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
  );
};

export default React.memo(AuthRegisterForm);
