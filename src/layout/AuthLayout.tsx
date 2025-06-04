import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

const AuthLayoutBlock = styled.div`
  padding: 80px 0;
  margin: 0 auto;
  /* width: 360px; */
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
