import tranlateFontSize from '@hooks/tranlateFontSize';
import styled, { css } from 'styled-components';
import MainMessageBox from './MainMessageBox';
import MainResultBox from './MainResultBox';

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
      <div className="wrapper"></div>
    </MainBriefingBoxBlock>
  );
};
export default MainBriefingBox;
