import AuthChangePasswordContainer from '@containers/auth/AuthChangePasswordContainer';
import AuthFindPasswordContainer from '@containers/auth/AuthFindPasswordContainer';
import { useState } from 'react';

const AuthFindPasswordPage = () => {
  const [passwordToken, setPasswordToken] = useState('');

  return (
    <>
      {passwordToken.length !== 0 ? (
        <AuthChangePasswordContainer passwordToken={passwordToken} />
      ) : (
        <AuthFindPasswordContainer handlePasswordToken={setPasswordToken} />
      )}
    </>
  );
};
export default AuthFindPasswordPage;
