import AuthRegisterForm from '@components/auth/AuthRegisterForm';
import { IRegister } from '@models/account.model';
import { TChangeEventHandler, TMouseEventHandler } from '@models/input.model';
import { useAppDispatch, useAppSelector } from '@store/index';
import { registerActions } from '@store/register';
import React from 'react';

const AuthRegisterFormContainer = () => {
  const dispatch = useAppDispatch();
  const { changeField } = registerActions;
  const registerInfo = useAppSelector(({ register }) => register);

  const handleChangeField: TChangeEventHandler<HTMLInputElement> = (e) => {
    const userInputKey = e.target.name as keyof IRegister;
    const userInputValue = e.target.value;

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
    />
  );
};

export default React.memo(AuthRegisterFormContainer);
