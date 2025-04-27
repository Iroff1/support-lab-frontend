import Responsive from '@components/common/Responsive';
import styled from 'styled-components';
import MainCoverBox from './MainCoverBox';
import MainBriefingBox from './MainBriefingBox';
import Floating from '@components/common/Floating';

const MainContentsBlock = styled(Responsive)`
  padding: 0;
  margin-top: 64px;
`;

const MainContents = () => {
  return (
    <>
      <MainContentsBlock>
        <MainCoverBox />
        <MainBriefingBox />
      </MainContentsBlock>
      <Floating />
    </>
  );
};

export default MainContents;
