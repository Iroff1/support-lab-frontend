import React from 'react';
import AuthTitleBox from './AuthTitleBox';
import SubmitButton from '@components/common/SubmitButton';
import InputPassword from '@containers/common/InputPassword';
import AuthHeaderLogo from './AuthHeaderLogo';
import { IAuthChecker, IChangePassword } from '@models/auth.model';
import { TChangeEventHandler, TMouseEventHandler } from '@models/input.model';
import { styled } from 'styled-components';

const ChangeForm = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-bottom: 36px;
`;

const ChangeSubmit = styled.div`
  width: 100%;
`;

interface IAuthChangePassword {
  formState: IChangePassword;
  checkList: IAuthChecker<IChangePassword>;

  handleChange: TChangeEventHandler<HTMLInputElement>;
  handleSubmit: () => Promise<void>;
}

const AuthChangePassword: React.FC<IAuthChangePassword> = ({
  formState,
  checkList,
  handleChange,
  handleSubmit,
}) => {
  return (
    <>
      <AuthHeaderLogo />
      <AuthTitleBox>비밀번호 재설정</AuthTitleBox>

      <ChangeForm>
        <InputPassword
          name="password"
          placeholder="비밀번호"
          onChange={handleChange}
          value={formState.password}
          isValid={checkList.password}
          cautionText={
            '8~16자의 영문 대/소문자, 숫자, 특수문자를 사용해 주세요.'
          }
        />
        <InputPassword
          name="passwordConfirm"
          placeholder="비밀번호 확인"
          onChange={(e) => {
            handleChange && handleChange(e);
          }}
          value={formState.passwordConfirm}
          isValid={formState.password === formState.passwordConfirm}
          cautionText={'비밀번호가 일치하지 않습니다.'}
          disabled={
            formState.password.length === 0
              ? true
              : formState.password.length !== 0 && checkList.password === false
          }
        />
      </ChangeForm>

      <ChangeSubmit>
        <SubmitButton
          disabled={
            !Object.keys(checkList).every(
              (val) => checkList[val as keyof IChangePassword],
            )
          }
          onClick={handleSubmit}
        >
          비밀번호 재설정
        </SubmitButton>
      </ChangeSubmit>
    </>
  );
};

export default AuthChangePassword;
