import tranlateFontSize from '@utils/tranlateFontSize';
import styled, { css } from 'styled-components';

const CHECK_ICON = require('@assets/images/common/icon_check.png');

const MainRecommendBoxBlock = styled.div`
  width: 453;
  height: 285;
  gap: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const RecommendBoxHeader = styled.div`
  text-align: center;
  h2 {
    ${css(tranlateFontSize('B_29'))}
  }
  p {
    ${css(tranlateFontSize('R_17'))}
  }
`;

const RecommendBoxBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  & > p {
    ${css(tranlateFontSize('B_19'))}
    display: flex;
    gap: 6px;
    align-items: center;

    & > img {
      width: 32px;
      height: 32px;
    }
  }
`;

const MainRecommendBox = () => {
  return (
    <MainRecommendBoxBlock>
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
    </MainRecommendBoxBlock>
  );
};
export default MainRecommendBox;
