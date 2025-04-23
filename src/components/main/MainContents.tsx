import Responsive from '@components/common/Responsive';
import styled from 'styled-components';
import MainCoverBox from './MainCoverBox';

const MainContentsBlock = styled(Responsive)`
  padding: 0;
  margin-top: 64px;
`;

const MainContents = () => {
  return (
    <MainContentsBlock>
      <MainCoverBox />
    </MainContentsBlock>
  );
};

export default MainContents;
