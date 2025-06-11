import palette from '@assets/colors';
import SubmitButton from '@components/common/SubmitButton';
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
    text-align: center;
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

interface IAuthShowEmail {
  email: string;
  handleLeftBtn: () => void;
  handleRightBtn: () => void;
}

const AuthShowEmail: React.FC<IAuthShowEmail> = ({
  email,
  handleLeftBtn,
  handleRightBtn,
}) => {
  return (
    <AuthShowEmailBlock>
      <div>아이디 찾기</div>
      {email.length !== 0 ? (
        <div>
          <div>입력하신 정보와 일치하는 아이디입니다.</div>
          <div>
            {email.split('@')[0].slice(0, 3) +
              '*'.repeat(email.split('@')[0].length - 3)}
            @{email.split('@')[1]}
          </div>
        </div>
      ) : (
        <div style={{ color: palette.system.red }}>
          입력하신 정보와 일치하는 아이디가 없습니다.
          <br />
          서비스를 이용하시려면 회원가입을 진행해 주세요.
        </div>
      )}

      <div>
        <SubmitButton onClick={handleLeftBtn}>
          {email.length !== 0 ? '로그인' : '회원가입'}
        </SubmitButton>
        <SubmitButton $style="inverse" onClick={handleRightBtn}>
          {email.length !== 0 ? '비밀번호 찾기' : '메인으로'}
        </SubmitButton>
      </div>
    </AuthShowEmailBlock>
  );
};
export default AuthShowEmail;
