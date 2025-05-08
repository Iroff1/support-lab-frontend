import InputText from '@components/common/InputText';
import SubmitButton from '@components/common/SubmitButton';
import styled from 'styled-components';
import InputPassword from '../common/InputPassword';
import AuthCheckItem from './AuthCheckItem';
import InputWithCheck from '../common/InputWithCheck';

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
        <InputWithCheck type="email" placeholder="이메일" />
        <InputPassword />
        <InputPassword />
        <InputText type="text" placeholder="이름" />
        <InputWithCheck type="tel" placeholder="휴대폰번호" forAuth />
        <InputWithCheck type="text" placeholder="인증번호" />
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
