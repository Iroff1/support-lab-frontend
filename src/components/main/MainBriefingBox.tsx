import tranlateFontSize from '@hooks/tranlateFontSize';
import styled, { css } from 'styled-components';
import MainMessageBox from './MainMessageBox';
import MainResultBox from './MainResultBox';
import MainAnalyzeBox from './MainAnalyzeBox';
import MainExampleBox from './MainExampleBox';

const MainBriefingBoxBlock = styled.div`
  width: 100%;
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

const MainBriefingBox = () => {
  return (
    <MainBriefingBoxBlock>
      <div className="wrapper">
        <MainMessageBox>
          <h2>처음부터 혼자 다 하려고 하지 마세요.</h2>
          <p>
            지원사업연구소가 6년간 쌓은
            <br />
            사업계획서 작성 노하우를 모두 전수해 드립니다.
          </p>
        </MainMessageBox>
        <MainMessageBox>
          <h1>도움받으면 뭐가 다를까요?</h1>
        </MainMessageBox>

        <MainResultBox />
        <MainAnalyzeBox />
        <MainExampleBox />
        <></>
      </div>
    </MainBriefingBoxBlock>
  );
};
export default MainBriefingBox;
