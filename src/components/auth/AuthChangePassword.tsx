import React from 'react';
import AuthTitleBox from './AuthTitleBox';
import SubmitButton from '@components/common/SubmitButton';
import AuthHeaderLogo from './AuthHeaderLogo';
import { IAuthChecker, INewPassword } from '@models/auth.model';
import { TChangeEventHandler, TMouseEventHandler } from '@models/input.model';
import { styled } from 'styled-components';
import InputChangePw from '@containers/common/InputChangePw';

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
  formState: INewPassword;
  checkList: IAuthChecker<INewPassword>;

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
        <InputChangePw
          $theme="default"
          handleChange={handleChange}
          formState={formState}
          checkList={checkList}
        />
      </ChangeForm>

      <ChangeSubmit>
        <SubmitButton
          disabled={
            !Object.keys(checkList).every(
              (val) => checkList[val as keyof INewPassword],
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
