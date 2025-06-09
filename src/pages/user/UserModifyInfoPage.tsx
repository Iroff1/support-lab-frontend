import UserDeleteAccount from '@components/user/UserDeleteAccount';
import UserModifyInfoContainer from '@containers/user/UserModifyInfoContainer';
import { useAppSelector } from '@store/index';
import { useState } from 'react';

const UserModifyInfoPage = () => {
  const auth = useAppSelector(({ auth }) => auth.auth);
  const [toggle, setToggle] = useState(false);

  return (
    <>
      {!toggle ? (
        <UserModifyInfoContainer
          auth={auth || null}
          switchPage={() => {
            setToggle(true);
          }}
        />
      ) : (
        <UserDeleteAccount email={auth?.email || ''} />
      )}
    </>
  );
};

export default UserModifyInfoPage;
