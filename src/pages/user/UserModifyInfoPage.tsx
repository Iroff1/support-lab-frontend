import UserConfirmPassword from '@components/user/UserConfirmPassword';
import UserDeleteAccount from '@components/user/UserDeleteAccount';
import UserModifyInfoContainer from '@containers/user/UserModifyInfoContainer';
import { useAppSelector } from '@store/index';
import { useState } from 'react';

const UserModifyInfoPage = () => {
  const auth = useAppSelector(({ auth }) => auth.auth);
  const [isConfirmPage, setIsConfirmPage] = useState(false);
  const [isDeletePage, setIsDeletePage] = useState(false);

  return (
    <>
      {!isConfirmPage ? (
        <UserConfirmPassword
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
