import AuthChangePasswordContainer from '@containers/auth/AuthChangePasswordContainer';
import AuthFindPasswordContainer from '@containers/auth/AuthFindPasswordContainer';
import { useEffect, useState } from 'react';

const AuthFindPasswordPage = () => {
  const [email, setEmail] = useState('');
  const [toggle, setToggle] = useState(false);

  const handleEmail = (email: string) => {
    setEmail(email);
  };

  useEffect(() => {
    if (email.length > 0) {
      setToggle(true);
    }
  }, [email]);

  return (
    <>
      {toggle ? (
        <AuthChangePasswordContainer email={email} />
      ) : (
        <AuthFindPasswordContainer handleEmail={handleEmail} />
      )}
    </>
  );
};
export default AuthFindPasswordPage;
