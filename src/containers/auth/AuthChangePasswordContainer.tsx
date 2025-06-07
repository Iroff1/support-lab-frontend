import AuthChangePassword from '@components/auth/AuthChangePassword';
import useCheckList from '@hooks/useCheckList';
import { INewPassword } from '@models/auth.model';
import checkValidation from '@utils/checkValidation';
import handleChangeField from '@utils/handleChangeField';
import handleModifyPw from '@utils/handleModifyPw';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface IProp {
  email: string;
}

const AuthChangePasswordContainer: React.FC<IProp> = ({ email }) => {
  const navigate = useNavigate();
  const [formState, setFormState] = useState<INewPassword>({
    newPassword: '',
    newPasswordConfirm: '',
  });
  const { checkList, modifyCheckList } = useCheckList<INewPassword>({
    newPassword: false,
    newPasswordConfirm: false,
  });

  const handleSubmit = async () => {
    try {
      await handleModifyPw(email, formState.newPassword);
    } catch (e) {}
    navigate('/');
  };

  useEffect(() => {
    modifyCheckList(
      'newPassword',
      checkValidation(formState.newPassword, 'password'),
    );
    modifyCheckList(
      'newPasswordConfirm',
      formState.newPassword === formState.newPasswordConfirm,
    );
  }, [formState]);

  return (
    <AuthChangePassword
      formState={formState}
      checkList={checkList}
      handleChange={(e) => {
        handleChangeField(e, setFormState);
      }}
      handleSubmit={handleSubmit}
    />
  );
};

export default AuthChangePasswordContainer;
