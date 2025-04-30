import { Outlet } from 'react-router';
import Header from './Header';
import Footer from './Footer';
import styled from 'styled-components';
import { useState } from 'react';
import Modal from './Modal';

const MainBlock = styled.div`
  width: 100%;
  min-height: calc(100% - 64px);
`;

const Layout = () => {
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

export default Layout;
