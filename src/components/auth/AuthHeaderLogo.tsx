import { LOGO_ENG } from '@assets/images/logo';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const AuthHeaderLogoBlock = styled.div`
  height: 300px;
  aspect-ratio: 1/1;
  background: url(${LOGO_ENG.col}) center/cover no-repeat;
  cursor: pointer;
  /* margin-bottom: 40px; */
`;

const AuthHeaderLogo = () => {
  const navigate = useNavigate();

  const handleLogo = () => {
    navigate('/');
  };

  return <AuthHeaderLogoBlock onClick={handleLogo} />;
};

export default AuthHeaderLogo;
