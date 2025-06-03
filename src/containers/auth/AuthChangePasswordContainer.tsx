import { authUpdatePassword } from '@api/auth';
import AuthChangePassword from '@components/auth/AuthChangePassword';
import useCheckList from '@hooks/useCheckList';
import { IChangePassword } from '@models/auth.model';
import checkValidation from '@utils/checkValidation';
import handleChangeField from '@utils/handleChangeField';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface IProp {
  email: string;
}

const AuthChangePasswordContainer: React.FC<IProp> = ({ email }) => {
  const navigate = useNavigate();
  const [formState, setFormState] = useState<IChangePassword>({
    password: '',
    passwordConfirm: '',
  });
  const { checkList, modifyCheckList } = useCheckList<IChangePassword>({
    password: false,
    passwordConfirm: false,
  });

  const handleSubmit = async () => {
    try {
      const res = await authUpdatePassword(email, formState.password);
      if (res.status === 200) {
        alert('비밀번호 재 설정 완료');
        navigate('/');
      }
    } catch (e) {
      console.error(e);
      alert(email + ' : ' + formState.password);
      navigate('/');
    }
  };

  useEffect(() => {
    modifyCheckList(
      'password',
      checkValidation(formState.password, 'password'),
    );
    modifyCheckList(
      'passwordConfirm',
      formState.password === formState.passwordConfirm,
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
