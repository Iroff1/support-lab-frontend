import { Outlet } from 'react-router';
import styled from 'styled-components';
import Footer from '@components/common/Footer';
import HeaderContainer from '@containers/common/HeaderContainer';

const MainBlock = styled.div`
  width: 100%;
  min-height: calc(100% - 64px);
`;

const MainLayout = () => {
  return (
    <>
      <HeaderContainer />
      <MainBlock>
        <Outlet />
      </MainBlock>
      <Footer />
    </>
  );
};

export default MainLayout;
