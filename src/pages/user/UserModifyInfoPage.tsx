import UserConfirmPassword from '@components/user/UserConfirmPassword';
import UserDeleteAccount from '@components/user/UserDeleteAccount';
import UserModifyInfoContainer from '@containers/user/UserModifyInfoContainer';
import { useAppSelector } from '@store/index';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const UserModifyInfoPage = () => {
  const { auth, authError } = useAppSelector(({ auth }) => ({
    auth: auth.auth,
    authError: auth.authError,
  }));
  const [isConfirmPage, setIsConfirmPage] = useState(false);
  const [isDeletePage, setIsDeletePage] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (auth === null || authError !== null) {
      alert('잘못된 접근입니다.');
      navigate('/');
    }
  }, []);

  return (
    <>
      {!isConfirmPage ? (
        <UserConfirmPassword
          userEmail={auth ? auth.email : null}
          switchPage={() => {
            setIsConfirmPage(true);
          }}
        />
      ) : !isDeletePage ? (
        <UserModifyInfoContainer
          auth={auth || null}
          switchPage={() => {
            setIsDeletePage(true);
          }}
        />
      ) : (
        <UserDeleteAccount email={auth?.email || ''} />
      )}
    </>
  );
};

export default UserModifyInfoPage;
