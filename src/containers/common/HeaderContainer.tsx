import Header from '@components/common/Header';
import useInit from '@hooks/useInit';
import { authActions } from '@store/auth';
import { useAppDispatch, useAppSelector } from '@store/index';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const HeaderContainer = () => {
  const navigate = useNavigate();
  const { auth } = useAppSelector(({ auth }) => ({ auth: auth.auth }));
  const dispatch = useAppDispatch();
  const { isInit, startInit } = useInit();

  /** Navigation 기능 핸들러 함수 */
  const handleLogin = () => {
    if (!auth) navigate('/auth');
  };

  /** 로그아웃 핸들러 함수 */
  const handleLogout = () => {
    dispatch(authActions.initializeState());
    alert('로그아웃 되었습니다.');
    navigate('/');
  };

  /** 헤더 로고 클릭 시 핸들러 함수 */
  const handleGoHome = () => {
    navigate('/');
  };

  useEffect(() => {
    startInit();
  }, []);
  useEffect(() => {
    if (!isInit) return;
    const localAuth = localStorage.getItem('auth');
    if (localAuth) {
      dispatch(authActions.refreshAuth(JSON.parse(localAuth)));
    }
  }, []);

  return (
    <Header
      auth={auth}
      handleLogin={handleLogin}
      handleLogout={handleLogout}
      handleGoHome={handleGoHome}
    />
  );
};
export default HeaderContainer;
