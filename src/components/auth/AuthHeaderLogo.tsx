import { Navigate, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const LOGO = require('@assets/images/auth/login_logo_pc.png');

const AuthHeaderLogoBlock = styled.div`
  width: 174px;
  height: 140px;
  background: url(${LOGO}) center/contain no-repeat;
  cursor: pointer;
  margin-bottom: 40px;
`;

const AuthHeaderLogo = () => {
  const navigate = useNavigate();

  const handleLogo = () => {
    navigate('/');
  };

  return <AuthHeaderLogoBlock onClick={handleLogo} />;
};

export default AuthHeaderLogo;
