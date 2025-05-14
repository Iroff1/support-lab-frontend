import AuthRegisterForm from '@components/auth/AuthRegisterForm';
import { TChangeEventHandler, TMouseEventHandler } from '@models/input.model';
import { accountActions } from '@store/account';
import { useAppDispatch } from '@store/index';
import React from 'react';

const AuthRegisterFormContainer = () => {
  const dispatch = useAppDispatch();
  const { changeField, toggleField } = accountActions;

  const handleChangeField: TChangeEventHandler<HTMLInputElement> = (e) => {
    dispatch(
      changeField({
        form: 'register',
        key: e.target.name,
        value: e.target.value,
      }),
    );
  };

  const handleToggleField: TMouseEventHandler<HTMLInputElement> = (e) => {
    const temp = e.target as HTMLInputElement;
    dispatch(
      toggleField({
        form: 'register',
        key: temp.name,
      }),
    );
  };

  return (
    <AuthRegisterForm
      handleChange={handleChangeField}
      handleToggle={handleToggleField}
    />
  );
};

export default React.memo(AuthRegisterFormContainer);
