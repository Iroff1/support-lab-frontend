import Responsive from '@components/common/Responsive';
import styled, { css } from 'styled-components';
import MainCoverBox from './MainCoverBox';
import Floating from '@components/common/Floating';
import MainBoxBriefing from './MainBoxBriefing';
import MainBoxAnalyze from './MainBoxAnalyze';
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

  & > .wrapper1 {
    width: 100%;

    background: linear-gradient(
      180deg,
      #fff 45.98%,
      #c6dfff 54.33%,
      #90c4ff 62%,
      #2647c8 69%,
      #191970 76.88%
    );
  }
  & > .wrapper1 > .responsive {
    width: 100%;
    max-width: 1032px;
    padding-top: 100px;
    padding-bottom: 161px;
    margin: 0 auto;
    margin-bottom: 79.53px;

    display: flex;
    flex-direction: column;
    gap: 100px;
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
          {/* max width 1032px */}
          <div className="responsive">
            <MainBoxBriefing />
            <MainBoxAnalyze />
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
