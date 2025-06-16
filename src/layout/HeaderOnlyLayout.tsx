import { Outlet } from 'react-router';
import styled from 'styled-components';
import HeaderContainer from '@containers/common/HeaderContainer';

const MainBlock = styled.div`
  width: 100%;
  min-height: 100%;
  padding-top: 64px;
`;

const HeaderOnlyLayout = () => {
  return (
    <>
      <HeaderContainer />
      <MainBlock>
        <Outlet />
      </MainBlock>
    </>
  );
};

export default HeaderOnlyLayout;
