import HeaderContainer from '@containers/common/HeaderContainer';
import translateFontSize from '@utils/translateFontSize';
import { css, styled } from 'styled-components';

const Wrapper = styled.div`
  width: 100vw;
  height: calc(100vh - 64px);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Caution = styled.p`
  ${css(translateFontSize('B_38'))};
`;

const NotPublished = () => {
  return (
    <>
      <HeaderContainer />
      <Wrapper>
        <Caution>Coming Soon</Caution>
      </Wrapper>
    </>
  );
};

export default NotPublished;
