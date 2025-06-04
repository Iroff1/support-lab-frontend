import React from 'react';
import Header from '@components/common/Header';
import { authActions } from '@store/auth';
import { useAppDispatch, useAppSelector } from '@store/index';
import { useNavigate } from 'react-router-dom';

const HeaderContainer = () => {
  const navigate = useNavigate();
  const auth = useAppSelector(({ auth }) => auth.auth);
  const dispatch = useAppDispatch();

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

  return (
    <Header
      auth={auth}
      handleLogin={handleLogin}
      handleLogout={handleLogout}
      handleGoHome={handleGoHome}
    />
  );
};
export default React.memo(HeaderContainer);
