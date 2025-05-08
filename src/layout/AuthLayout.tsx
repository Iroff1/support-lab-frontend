import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

const AuthLayoutBlock = styled.div`
  padding-top: 80px;
  margin: 0 auto;
  width: 360px;
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
