import Responsive from '@components/common/Responsive';
import styled, { css } from 'styled-components';
import MainCoverBox from './MainCoverBox';
import MainBriefingBox from './MainBriefingBox';
import Floating from '@components/common/Floating';
import MainResultBox from './MainResultBox';
import MainAnalyzeBox from './MainAnalyzeBox';
import MainExampleBox from './MainExampleBox';
import MainCurriculumBox from './MainCurriculumBox';
import translateFontSize from '@utils/translateFontSize';
import MainMeritBox from './MainMeritBox';
import MainRecommendBox from './MainRecommendBox';
import MainLastCoverBox from './MainLastCoverBox';
import MainSolutionBox from './MainSolutionBox';

const MainContentsBlock = styled(Responsive)`
  width: 100%;
  padding: 0;
  margin-top: 64px;

  .wrapper1 {
    width: 100%;
    background: linear-gradient(
      180deg,
      #fff 45.98%,
      #c6dfff 54.33%,
      #90c4ff 62%,
      #2647c8 69%,
      #191970 76.88%
    );

    & > div {
      display: flex;
      flex-direction: column;

      max-width: 1032px;
      width: 100%;
      padding-top: 100px;
      padding-bottom: 161px;
      margin: 0 auto;
      gap: 100px;
    }
  }

  .wrapper2 {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 100px;
    position: relative;

    & > h2 {
      width: 100%;
      height: 41px;
      position: absolute;
      top: -61px;
      text-align: center;
      ${css(translateFontSize('B_29'))};
    }
  }
`;

const MainContents = () => {
  return (
    <>
      <MainContentsBlock>
        <MainCoverBox />
        <div className="wrapper1">
          <div>
            <MainBriefingBox />
            <MainResultBox />
            <MainAnalyzeBox />
            <MainExampleBox />
            <MainCurriculumBox />
          </div>
        </div>

        <div className="wrapper2">
          <h2>지원사업연구소가 자신 있는 이유입니다.</h2>
          <MainMeritBox />
          <MainRecommendBox />
          <MainSolutionBox />
          <MainLastCoverBox />
        </div>
      </MainContentsBlock>

      <Floating />
    </>
  );
};

export default MainContents;
