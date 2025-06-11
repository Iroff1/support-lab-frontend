import { Outlet } from 'react-router';
import styled, { css } from 'styled-components';
import HeaderContainer from '@containers/common/HeaderContainer';
import SideBar from '@components/common/SideBar';
import translateFontSize from '@utils/translateFontSize';

const MainBlock = styled.div`
  width: 100%;
  min-height: calc(100% - 264px); // header 64px footer 200px
  margin-top: 64px;
`;

const Wrapper460 = styled.div`
  width: 460px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding-top: 40px;

  h2 {
    ${css(translateFontSize('SB_22'))};
  }

  & > div.gap20 {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`;

const DocLayout = () => {
  return (
    <>
      <HeaderContainer />
      <SideBar />
      <MainBlock>
        <Wrapper460>
          <Outlet />
        </Wrapper460>
      </MainBlock>
    </>
  );
};

export default DocLayout;
