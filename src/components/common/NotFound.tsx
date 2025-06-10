import HeaderContainer from '@containers/common/HeaderContainer';
import translateFontSize from '@utils/translateFontSize';
import { css, styled } from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Caution = styled.p`
  ${css(translateFontSize('B_38'))};
`;

const NotFound = () => {
  return (
    <>
      <HeaderContainer />
      <Wrapper>
        <Caution>Page Not Found</Caution>
      </Wrapper>
    </>
  );
};

export default NotFound;
