import AuthInput from '@components/common/AuthInput';
import SubmitButton from '@components/common/SubmitButton';
import styled from 'styled-components';
import AuthInputPassword from './AuthInputPassword';
import AuthCheckItem from './AuthCheckItem';
import AuthInputWithCheck from './AuthInputWithCheck';

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
  return (
    <>
      {/* 입력 공간, 인풋 6개 */}
      <RegisterForm>
        <AuthInputWithCheck type="email" placeholder="이메일" />
        <AuthInputPassword />
        <AuthInputPassword />
        <AuthInput type="text" placeholder="이름" />
        <AuthInputWithCheck type="tel" placeholder="휴대폰번호" forAuth />
        <AuthInputWithCheck type="number" placeholder="인증번호" />
      </RegisterForm>

      {/* 제출 공간 */}
      <RegisterSubmit>
        {/* 옵션 공간 */}
        <RegisterOption>
          <AuthCheckItem>[필수] 개인정보 수집 및 이용 동의</AuthCheckItem>
          <AuthCheckItem>[선택] 마케팅 수신 동의</AuthCheckItem>
        </RegisterOption>

        {/* 버튼 공간 */}
        <SubmitButton>가입하기</SubmitButton>
      </RegisterSubmit>
    </>
  );
};
export default AuthRegisterForm;
