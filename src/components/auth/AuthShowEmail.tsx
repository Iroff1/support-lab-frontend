import palette from '@assets/colors';
import SubmitButton, {
  SubmitButtonBlock,
} from '@components/common/SubmitButton';
import translateFontSize from '@utils/translateFontSize';
import styled, { css } from 'styled-components';

const AuthShowEmailBlock = styled.div`
  min-width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;

  & > div:nth-child(1) {
    width: 100%;
    color: ${palette.black.black};
    text-align: center;
    ${css(translateFontSize('B_38'))};
  }
  & > div:nth-child(2) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    & > div:nth-child(2) {
      ${css(translateFontSize('SB_22'))};
    }
  }
  & > div:nth-child(3) {
    width: 100%;
    display: flex;
    gap: 20px;
    & > button {
      flex: 1;
    }
  }
`;

const NavigateButton = styled(SubmitButtonBlock)`
  background-color: transparent;
  color: ${palette.main.main};
  border: 1px solid ${palette.main.main};
`;

interface IAuthShowEmail {
  email: string;
  handleLogin: () => void;
  handleFindPw: () => void;
}

const AuthShowEmail: React.FC<IAuthShowEmail> = ({
  email,
  handleFindPw,
  handleLogin,
}) => {
  return (
    <AuthShowEmailBlock>
      <div>아이디 찾기</div>
      <div>
        <div>입력하신 정보와 일치하는 아이디입니다.</div>
        <div>
          {email.split('@')[0]}@{email.split('@')[1]}
        </div>
      </div>
      <div>
        <SubmitButton onClick={handleLogin}>로그인</SubmitButton>
        <NavigateButton onClick={handleFindPw}>비밀번호 찾기</NavigateButton>
      </div>
    </AuthShowEmailBlock>
  );
};
export default AuthShowEmail;
