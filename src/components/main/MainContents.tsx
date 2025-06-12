import styled, { css } from 'styled-components';
import MainBoxForCover from './MainBoxForCover';
import Floating from '@components/common/Floating';
import MainBoxForBriefing from './MainBoxForBriefing';
import MainBoxForAnalyze from './MainBoxForAnalyze';
import MainBoxForExample from './MainBoxForExample';
import MainBoxForCurriculum from './MainBoxForCurriculum';
import translateFontSize from '@utils/translateFontSize';
import MainBoxForMerit from './MainBoxForMerit';
import MainBoxForRecommand from './MainBoxForRecommand';
import MainBoxForLastCover from './MainBoxForLastCover';
import MainBoxForSolution from './MainBoxForSolution';
import palette from '@assets/colors';
import Responsive from '@styles/common/Responsive.style';

const MainContentsBlock = styled(Responsive)`
  width: 100%;
  padding: 0;
`;

/** 최대 너비가 지정된 컨텐츠를 감싸는 블럭 */
const ContentsWrapper1 = styled.div`
  width: 100%;

  background: linear-gradient(
    180deg,
    #fff 45.98%,
    #c6dfff 54.33%,
    #90c4ff 62%,
    #2647c8 69%,
    #191970 76.88%
  );

  padding-top: 100px;
  padding-bottom: 161px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  gap: 100px;

  & > .max1032 {
    width: 100%;
    max-width: 1032px;
    display: flex;
    flex-direction: column;
    gap: 100px;
    margin: 0 auto;
    margin-bottom: 179.53px;
  }
`;

/** ContentsWrapper1 이후로 출력될 컨텐츠를 감싸는 블럭 */
const ContentsWrapper2 = styled.div`
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
    color: ${palette.black.white};
  }
`;

/** 메인 페이지의 모든 컨텐츠 내용을 담는 컴포넌트 */
const MainContents = () => {
  return (
    <>
      <MainContentsBlock>
        <MainBoxForCover />

        <ContentsWrapper1>
          {/* max width 1032px */}
          <div className="max1032">
            <MainBoxForBriefing />
            <MainBoxForAnalyze />
          </div>
          {/* max width 1176px */}
          <MainBoxForExample />
        </ContentsWrapper1>

        <ContentsWrapper2>
          <h2>지원사업연구소가 자신 있는 이유입니다.</h2>
          <MainBoxForMerit />
          <MainBoxForRecommand />
          <MainBoxForCurriculum />
          <MainBoxForSolution />
          <MainBoxForLastCover />
        </ContentsWrapper2>
      </MainContentsBlock>

      <Floating />
    </>
  );
};

export default MainContents;
