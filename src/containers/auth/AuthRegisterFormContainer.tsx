import AuthRegisterForm from '@components/auth/AuthRegisterForm';
import { accountActions } from '@store/account';
import { useAppDispatch } from '@store/index';
import React from 'react';

const AuthRegisterFormContainer = () => {
  const dispatch = useAppDispatch();
  const { changeField, toggleField } = accountActions;

  const handleChangeField = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(
      changeField({
        form: 'register',
        key: e.target.name,
        value: e.target.value,
      }),
    );
  };

  const handleToggleField = (e: React.MouseEvent<HTMLInputElement>) => {
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
