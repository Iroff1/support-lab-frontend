import styled, { css } from 'styled-components';
import MessageBox from '../common/MessageBox';
import translateFontSize from '@utils/translateFontSize';
import IMAGE_EXAMPLES from '@assets/images/main/image_examples.gif';

const MainBoxForBriefingBlock = styled.div`
  width: 100%;
  max-width: 1032px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin: 0 auto;

  & > .imageBox {
    width: 100%;
    max-width: 956px;
    height: 796.4px;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 100%;
    }
  }

  & > .imageFooter {
    text-align: center;
    ${css(translateFontSize('R_17'))};
  }
`;

/** 지원사업 연구소 서비스를 브리핑하는 내용을 담은 블럭 */
const MainBoxForBriefing = () => {
  return (
    <>
      <MessageBox>
        <h2>처음부터 혼자 다 하려고 하지 마세요.</h2>
        <p>6년간 쌓은 사업계획서 작성 노하우를 모두 전수해 드립니다.</p>
      </MessageBox>

      <MainBoxForBriefingBlock>
        <MessageBox>
          <h1>도움받으면 뭐가 다를까요?</h1>
          <h2>
            2025년, 지원 사업에 대해 아무것도 모르고
            <br />
            연락하셨던 분들이 1차 서류에 합격하셨습니다.
          </h2>
          <p>
            누군가는 매년 5,000만 원 이상 받아 가고 있습니다.
            <br />
            눈앞의 기회를 놓쳐 손해 보지 마세요.
          </p>
        </MessageBox>

        <div className="imageBox">
          <img src={IMAGE_EXAMPLES} alt="결과 예시 이미지" />
        </div>

        <div className="imageFooter">
          예비창업패키지, 초기창업패키지, 창업도약패키지, 재도전성공패키지,
          창업중심대학
          <br />
          청년창업사관학교, 신사업창업사관학교, 로컬크리에이터, 에코스타트업,
          여성창업
        </div>
      </MainBoxForBriefingBlock>
    </>
  );
};

export default MainBoxForBriefing;
