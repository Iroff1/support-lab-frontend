import AuthRegisterForm from '@components/auth/AuthRegisterForm';
import { IRegisterForm } from '@models/account.model';
import {
  TAsyncReq,
  TChangeEventHandler,
  TMouseEventHandler,
} from '@models/input.model';
import { useAppDispatch, useAppSelector } from '@store/index';
import { registerActions } from '@store/register';
import React from 'react';

const AuthRegisterFormContainer = () => {
  const dispatch = useAppDispatch();
  const { changeField } = registerActions;
  const registerInfo = useAppSelector(({ register }) => register);

  const handleChangeField: TChangeEventHandler<HTMLInputElement> = (e, reg) => {
    const userInputKey = e.target.name as keyof IRegisterForm;
    const userInputValue = !reg
      ? e.target.value
      : e.target.value.replace(reg, '').length <= 11
      ? e.target.value.replace(reg, '')
      : e.target.value.replace(reg, '').slice(0, 11);

    dispatch(
      changeField({
        key: userInputKey,
        value: userInputValue,
      }),
    );
  };

  const handleToggleField: TMouseEventHandler<HTMLInputElement> = (e) => {
    dispatch(
      changeField({
        key: e.currentTarget.name,
        value: e.currentTarget.checked,
      }),
    );
  };

  return (
    <AuthRegisterForm
      handleChange={handleChangeField}
      handleToggle={handleToggleField}
      info={registerInfo}
      disabled={true}
    />
  );
};

export default React.memo(AuthRegisterFormContainer);
