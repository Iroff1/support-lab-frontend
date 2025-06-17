import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

const AuthLayoutBlock = styled.div`
  padding: 0 10px 40px 10px;
  margin: 0 auto;
  width: 100%;
  max-width: 380px;
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
