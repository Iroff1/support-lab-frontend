import Responsive from '@components/common/Responsive';
import styled from 'styled-components';
import MainCoverBox from './MainCoverBox';
import MainBriefingBox from './MainBriefingBox';

const MainContentsBlock = styled(Responsive)`
  padding: 0;
  margin-top: 64px;
`;

const MainContents = () => {
  return (
    <MainContentsBlock>
      <MainCoverBox />
      <MainBriefingBox />
    </MainContentsBlock>
  );
};

export default MainContents;
