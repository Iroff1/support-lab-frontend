import { Outlet } from 'react-router';
import styled from 'styled-components';
import { useState } from 'react';
import Header from '@components/common/Header';
import Footer from '@components/common/Footer';
import Modal from '@components/common/Modal';

const MainBlock = styled.div`
  width: 100%;
  min-height: calc(100% - 64px);
`;

const MainLayout = () => {
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

export default MainLayout;
