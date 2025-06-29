import SubmitButton from '@components/common/SubmitButton';
import InputPassword from '@containers/common/InputPassword';
import * as T from '@styles/common/Table.style';
import checkValidation from '@utils/checkValidation';
import translateFontSize from '@utils/translateFontSize';
import { StatusCodes } from 'http-status-codes';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { css } from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  max-width: 500px;
  display: flex;
  justify-content: center;
  padding: 40px 20px 0 20px;
  margin: 0 auto;
`;

const UserConfirmPasswordBlock = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  & > h2 {
    ${css(translateFontSize('B_38'))}
    margin-bottom:40px;
  }
`;

const PasswordBox = styled.div`
  width: 100%;
  padding-right: 61px;
  @media screen and (max-width: 424px) {
    padding-right: 0;
  }
`;

const ButtonBox = styled.div`
  width: 100%;
  max-width: 420px;
  display: flex;
  gap: 20px;
  margin: 0 auto;
  margin-top: 44px;
`;

interface IProps {
  userEmail: string | null;
  switchPage: () => void;
}

const UserConfirmPassword: React.FC<IProps> = ({ userEmail, switchPage }) => {
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [isValid, setIsValid] = useState(false);

  const handleConfirm = async () => {
    if (!isValid) return;
    try {
      // const res = await usersConfirmPassword(password);
      //   if ((res.data.code = StatusCodes.OK))
      switchPage();
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    setIsValid(!checkValidation(password, 'password'));
  }, [password]);

  return (
    <Wrapper>
      <UserConfirmPasswordBlock>
        <h2>회원 정보 확인</h2>
        <T.Table>
          <T.TableRow>
            <T.TableLeft>이메일</T.TableLeft>
            <T.TableRight>{userEmail}</T.TableRight>
          </T.TableRow>
          <T.TableRow>
            <T.TableLeft>비밀번호</T.TableLeft>
            <T.TableRight>
              <PasswordBox>
                <InputPassword
                  name="password"
                  placeholder="비밀번호"
                  $theme="modify"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </PasswordBox>
            </T.TableRight>
          </T.TableRow>
        </T.Table>
        <ButtonBox>
          <SubmitButton
            $style="inverse"
            onClick={() => {
              navigate('/');
            }}
          >
            취소
          </SubmitButton>
          <SubmitButton disabled={isValid} onClick={handleConfirm}>
            확인
          </SubmitButton>
        </ButtonBox>
      </UserConfirmPasswordBlock>
    </Wrapper>
  );
};

export default UserConfirmPassword;
