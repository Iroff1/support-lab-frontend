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
  const [toggleModal, setToggleModal] = useState(false);

  const showModal = () => {
    console.log('hi');
    setToggleModal(true);
  };
  const hideModal = () => {
    setToggleModal(false);
  };

  return (
    <>
      <Header showModal={showModal} />
      <MainBlock>
        <Outlet />
      </MainBlock>
      <Footer />

      {toggleModal && <Modal hideModal={hideModal} />}
    </>
  );
};

export default MainLayout;
