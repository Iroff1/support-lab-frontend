import AuthRegisterForm from '@components/auth/AuthRegisterForm';
import { accountActions } from '@store/account';
import { useAppDispatch } from '@store/index';

const AuthRegisterFormContainer = () => {
  const dispatch = useAppDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(
      accountActions.changeField({
        form: 'register',
        key: e.target.name,
        value: e.target.value,
      }),
    );
  };

  return <AuthRegisterForm handleChange={handleChange} />;
};

export default AuthRegisterFormContainer;
