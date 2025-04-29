import palette from '@colors/index';
import tranlateFontSize from '@hooks/tranlateFontSize';
import styled, { css } from 'styled-components';

const MainSolutionBoxBlock = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  color: ${palette.black.B700};
`;
const SolutionBoxHeader = styled.div`
  h2 {
    ${css(tranlateFontSize('B_29'))}
  }
`;

const SolutionBoxBody = styled.div`
  max-width: 950px;
  width: 100%;
  display: flex;
  gap: 20px;
  overflow-x: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const SolutionItem = styled.div`
  min-width: 303px;
  height: 293px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  border-radius: 10px;
  border: 1px solid ${palette.black.B50};
  padding: 20px;

  & > div {
    width: 100%;
    height: 165px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    img {
      width: 48px;
      height: 48px;
    }
    h3 {
      ${css(tranlateFontSize('B_21'))};
    }
    p {
      ${css(tranlateFontSize('R_17'))};
    }
  }
`;

const SolutionButton = styled.button`
  width: 100%;
  height: 48px;
  gap: 10px;
  border-radius: 30px;
  padding: 10px 50px;
  border: 2px solid ${palette.black.B700};
  color: ${palette.black.B700};
  background-color: transparent;
  ${css(tranlateFontSize('sb_18'))};
`;

const MainSolutionBox = () => {
  return (
    <MainSolutionBoxBlock>
      <SolutionBoxHeader>
        <h2>받으실 사업계획서 솔루션을 선택해주세요.</h2>
      </SolutionBoxHeader>

      <SolutionBoxBody>
        <SolutionItem>
          <div>
            <img src={require('@images/solution_1.png')} alt="solution_1" />
            <h3>작성 솔루션</h3>
            <p>
              사업계획서 작성 솔루션 1회 및<br /> 전문가 전화 상담 30분
            </p>
          </div>
          <SolutionButton>자세히 보기</SolutionButton>
        </SolutionItem>
        <SolutionItem>
          <div>
            <img src={require('@images/solution_2.png')} alt="solution_2" />
            <h3>첨삭 솔루션</h3>
            <p>
              사업계획서 작성 전문가가 보완
              <br />
              도식화에 대한 코멘트 첨삭
            </p>
          </div>
          <SolutionButton>자세히 보기</SolutionButton>
        </SolutionItem>
        <SolutionItem>
          <div>
            <img src={require('@images/solution_3.png')} alt="solution_3" />
            <h3>디자인 솔루션</h3>
            <p>전문 IR 디자이너가 제작한 이미지 제공</p>
          </div>
          <SolutionButton>자세히 보기</SolutionButton>
        </SolutionItem>
      </SolutionBoxBody>
    </MainSolutionBoxBlock>
  );
};
export default MainSolutionBox;
