import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

const AuthLayoutBlock = styled.div`
  width: 360px;
  position: fixed;
  top: 80px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AuthLayout = () => {
  return (
    <AuthLayoutBlock>
      <Outlet />
    </AuthLayoutBlock>
  );
};
export default AuthLayout;
