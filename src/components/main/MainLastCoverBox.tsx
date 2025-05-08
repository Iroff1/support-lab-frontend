import styled, { css } from 'styled-components';
import { ConsultButton } from './MainCoverBox';
import translateFontSize from '@utils/translateFontSize';

const MainLastCoverBoxBlock = styled.div`
  width: 100%;
  height: calc(100vh - 64px);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  background-color: lightgray;
`;

const CoverContentBox = styled.div`
  width: 702px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  text-align: center;
  background-color: #33333320;
  border-radius: 15px;
  padding: 25px 0;

  & > div {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    h2 {
      ${css(translateFontSize('B_48'))}
    }
    p {
      ${css(translateFontSize('R_22'))}
    }
  }
`;

const MainLastCoverBox = () => {
  return (
    <MainLastCoverBoxBlock>
      <CoverContentBox>
        <div>
          <h2>
            어떤 걸 해야할지 모르겠나요?
            <br />
            사용 방법이 어려우신가요?
          </h2>
          <p>
            걱정하지 마세요.
            <br />
            <br />
            사업계획서 초안 솔루션을
            <br />
            사용하고 싶은 분은 바로 전화 주세요.
            <br />
            <br />
            지원사업 전문가가 무료 상담을 해드리고
            <br />
            솔루션 사용 방법을 상세하게 안내해드립니다.
          </p>
        </div>
        <ConsultButton>무료 상담</ConsultButton>
      </CoverContentBox>
    </MainLastCoverBoxBlock>
  );
};
export default MainLastCoverBox;
