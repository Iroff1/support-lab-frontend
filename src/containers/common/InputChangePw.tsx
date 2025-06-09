import React from 'react';
import InputPassword from './InputPassword';
import { INewPassword } from '@models/auth.model';
import { IAuthChecker } from '@models/common.model';
import { TChangeEventHandler } from '@models/input.model';

interface IInputChangePw {
  $theme: 'default' | 'modify';
  handleChange: TChangeEventHandler<HTMLInputElement>;
  formState: INewPassword;
  checkList: IAuthChecker<INewPassword>;
}

const InputChangePw: React.FC<IInputChangePw> = (props) => {
  return (
    <>
      <InputPassword<INewPassword>
        $theme={props.$theme}
        name="newPassword"
        placeholder="비밀번호"
        onChange={props.handleChange}
        value={props.formState.newPassword}
        $isValid={props.checkList.newPassword}
        $cautionText={
          '8~16자의 영문 대/소문자, 숫자, 특수문자를 사용해 주세요.'
        }
      />
      <InputPassword<INewPassword>
        $theme={props.$theme}
        name="newPasswordConfirm"
        placeholder="비밀번호 확인"
        onChange={(e) => {
          props.handleChange && props.handleChange(e);
        }}
        value={props.formState.newPasswordConfirm}
        $isValid={
          props.formState.newPassword === props.formState.newPasswordConfirm
        }
        $cautionText={'비밀번호가 일치하지 않습니다.'}
        disabled={
          props.formState.newPassword.length === 0
            ? true
            : props.formState.newPassword.length !== 0 &&
              props.checkList.newPassword === false
        }
      />
    </>
  );
};

export default InputChangePw;
