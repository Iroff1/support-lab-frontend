import { Outlet } from 'react-router';
import styled from 'styled-components';
import HeaderContainer from '@containers/common/HeaderContainer';

const MainBlock = styled.div`
  width: 100%;
  min-height: calc(100% - 264px); // header 64px footer 200px
  margin-top: 64px;
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
