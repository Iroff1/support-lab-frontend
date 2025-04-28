import Responsive from '@components/common/Responsive';
import styled from 'styled-components';
import MainCoverBox from './MainCoverBox';
import MainBriefingBox from './MainBriefingBox';
import Floating from '@components/common/Floating';
import MainResultBox from './MainResultBox';
import MainAnalyzeBox from './MainAnalyzeBox';
import MainExampleBox from './MainExampleBox';
import MainCurriculamBox from './MainCurriculamBox';

const MainContentsBlock = styled(Responsive)`
  width: 100%;
  padding: 0;
  margin-top: 64px;
  background: linear-gradient(180deg, #ffffff 0%, #c2ddff 100%);

  .wrapper {
    display: flex;
    flex-direction: column;

    max-width: 1032px;
    width: 100%;
    padding-top: 100px;
    padding-bottom: 100px;
    margin: 0 auto;
    gap: 100px;
  }
`;

const MainContents = () => {
  return (
    <>
      <MainContentsBlock>
        <MainCoverBox />
        <div className="wrapper">
          <MainBriefingBox />
          <MainResultBox />
          <MainAnalyzeBox />
          <MainExampleBox />
          <MainCurriculamBox />
        </div>
      </MainContentsBlock>

      <Floating />
    </>
  );
};

export default MainContents;
