import { Outlet } from 'react-router';
import Header from './Header';
import Footer from './Footer';
import styled from 'styled-components';

const MainBlock = styled.div`
  width: 100%;
  min-height: calc(100% - 64px);
`;

const Layout = () => {
  return (
    <>
      <Header />
      <MainBlock>
        <Outlet />
      </MainBlock>
      <Footer />
    </>
  );
};

export default Layout;
