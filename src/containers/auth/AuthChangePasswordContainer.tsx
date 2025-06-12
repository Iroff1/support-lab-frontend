import { usersModifyPassword, usersModifyPasswordReq } from '@api/user';
import AuthChangePassword from '@components/auth/AuthChangePassword';
import useCheckList from '@hooks/useCheckList';
import { INewPassword } from '@models/auth.model';
import checkValidation from '@utils/checkValidation';
import handleChangeField from '@utils/handleChangeField';
import translateAxiosError from '@utils/translateAxiosError';
import { StatusCodes } from 'http-status-codes';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthChangePasswordContainer: React.FC<{ passwordToken: string }> = ({
  passwordToken,
}) => {
  const navigate = useNavigate();
  const [formState, setFormState] = useState<INewPassword>({
    newPassword: '',
    newPasswordConfirm: '',
  });
  const { checkList, checkResult, modifyCheckList } =
    useCheckList<INewPassword>({
      newPassword: false,
      newPasswordConfirm: false,
    });

  const handleSubmit = async () => {
    try {
      const res = await usersModifyPassword(
        passwordToken,
        formState.newPassword,
      );
      if (res.data.code === StatusCodes.OK + '') {
        alert('비밀번호가 변경되었습니다.');
        navigate('/');
      } else throw res;
    } catch (e) {
      // translateAxiosError(e);
      alert('비밀번호 변경에 실패했습니다.');
      console.error(e);
    }
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
      checkResult={checkResult}
      handleChange={(e) => {
        handleChangeField(e, setFormState);
      }}
      handleSubmit={handleSubmit}
    />
  );
};

export default AuthChangePasswordContainer;
