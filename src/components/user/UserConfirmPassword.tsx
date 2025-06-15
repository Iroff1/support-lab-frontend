import SubmitButton from '@components/common/SubmitButton';
import InputPassword from '@containers/common/InputPassword';
import checkValidation from '@utils/checkValidation';
import { StatusCodes } from 'http-status-codes';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 0 20px;
`;

const UserConfirmPasswordBlock = styled.div`
  width: 100%;
  max-width: 400px;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

interface IProps {
  switchPage: () => void;
}

const UserConfirmPassword: React.FC<IProps> = ({ switchPage }) => {
  const [password, setPassword] = useState('');
  const [isValid, setIsValid] = useState(false);

  const handleConfirm = async () => {
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
        <InputPassword
          name="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <SubmitButton disabled={isValid} onClick={handleConfirm}>
          인증하기
        </SubmitButton>
      </UserConfirmPasswordBlock>
    </Wrapper>
  );
};

export default UserConfirmPassword;
