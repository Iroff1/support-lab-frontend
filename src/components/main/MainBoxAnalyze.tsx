import styled, { css } from 'styled-components';
import MainMessageBox from './MainMessageBox';
import translateFontSize from '@utils/translateFontSize';

const ICON_ANALYZE = [
  require('@assets/images/main/icon_analyze_1.svg'),
  require('@assets/images/main/icon_analyze_2.svg'),
  require('@assets/images/main/icon_analyze_3.svg'),
  require('@assets/images/main/icon_analyze_4.svg'),
];

const MainBoxAnalyzBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const AnalyzeCardList = styled.div`
  width: 100%;
  gap: 16px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 20px;
  gap: 20px;

  max-width: 468px;
  width: 100%;
  min-width: 320px;
  height: 229px;

  background-color: rgba(255, 255, 255, 0.2);
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  border-radius: 10px;

  img {
    width: 48px;
    aspect-ratio: 1/1;
  }
  h3 {
    ${css(translateFontSize('B_21'))}
  }
  p {
    ${css(translateFontSize('R_17'))}
  }
`;

const MainBoxAnalyze = () => {
  return (
    <MainBoxAnalyzBlock>
      <MainMessageBox>
        <h2>
          지금까지 여러분의 사업계획서가 <br />
          1차 서류 평가에서 탈락한 이유는 간단합니다.
        </h2>
      </MainMessageBox>

      <AnalyzeCardList>
        <Card>
          <img src={ICON_ANALYZE[0]} alt="카드1" />
          <h3>지원사업과 핀트가 다른 아이템</h3>
          <p>
            지원사업마다 선정하고자 하는 아이템 핀트가 다릅니다. 출제자의 의도를
            파악하지 못했기 때문에 다른 답을 작성하면 무조건 탈락합니다.
          </p>
        </Card>
        <Card>
          <img src={ICON_ANALYZE[1]} alt="카드2" />
          <h3>도식화되지 않은 사업계획서</h3>
          <p>
            보기 좋은 떡이 먹기도 좋듯이 사업계획서를 읽고 싶게 만들어야 합니다.
            글자로만 꽉 채운 사업계획서는 누구라도 보기 싫을 겁니다.
          </p>
        </Card>
        <Card>
          <img src={ICON_ANALYZE[2]} alt="카드3" />
          <h3>경쟁력 없는 사업계획서</h3>
          <p>
            지원사업 모집 마감 한 달 전 상담 문의가 폭발합니다. 하지만 준비된
            경쟁력이 없으면 빛 좋은 개살구에 불과합니다. 문서만 잘 쓴다고
            합격하는 것이 아닙니다.
          </p>
        </Card>
        <Card>
          <img src={ICON_ANALYZE[3]} alt="카드4" />
          <h3>잘못 만난 컨설팅 업체</h3>
          <p>
            대표님이 사업계획서를 모른다면 사기 업체를 구별할 수 없습니다. 이런
            업체는 선금만 200만원이 넘고 합격보수로 5~10%를 요구합니다. 잘못하면
            시간과 돈 모두 잃을 수 있습니다.
          </p>
        </Card>
      </AnalyzeCardList>
    </MainBoxAnalyzBlock>
  );
};
export default MainBoxAnalyze;
