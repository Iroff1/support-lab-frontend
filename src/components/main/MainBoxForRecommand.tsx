import translateFontSize from '@utils/translateFontSize';
import styled, { css } from 'styled-components';

const CHECK_ICON = require('@assets/images/common/icon_check.png');

const MainBoxForRecommendBlock = styled.div`
  width: 100%;
  max-width: 453px;
  gap: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const RecommendBoxHeader = styled.div`
  text-align: center;
  h2 {
    ${css(translateFontSize('B_29'))}
  }
  p {
    ${css(translateFontSize('R_17'))}
  }
`;

const RecommendBoxBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  & > p {
    ${css(translateFontSize('B_19'))}
    display: flex;
    gap: 6px;
    align-items: center;

    & > img {
      width: 32px;
      height: 32px;
    }
  }
`;

/** 서비스를 추천해줄 만한 사용자들에 대한 내용을 담은 컴포넌트 */
const MainBoxForRecommand = () => {
  return (
    <MainBoxForRecommendBlock>
      <RecommendBoxHeader>
        <h2>이런 분께 추천합니다.</h2>
        <p>하나라도 해당된다면 솔루션이 필요합니다.</p>
      </RecommendBoxHeader>
      <RecommendBoxBody>
        <p>
          <img src={CHECK_ICON} alt="check" />
          <span>사업계획서 작성해야 하는데 문서 작업이 어려운 분</span>
        </p>
        <p>
          <img src={CHECK_ICON} alt="check" />
          <span>창업 지원사업 한 번도 안 받아본 분</span>
        </p>
        <p>
          <img src={CHECK_ICON} alt="check" />
          <span>지원사업 서류평가에서 탈락해 본 경험이 있는 분</span>
        </p>
        <p>
          <img src={CHECK_ICON} alt="check" />
          <span>내가 쓴 사업계획서가 잘 쓴 사업계획서인지 모르겠는 분</span>
        </p>
        <p>
          <img src={CHECK_ICON} alt="check" />
          <span>창업 지원사업 꼭 받고 싶은 분</span>
        </p>
        <p>
          <img src={CHECK_ICON} alt="check" />
          <span>어떤 컨설팅 업체의 도움을 받아야 할지 모르겠는 분</span>
        </p>
      </RecommendBoxBody>
    </MainBoxForRecommendBlock>
  );
};
export default MainBoxForRecommand;
