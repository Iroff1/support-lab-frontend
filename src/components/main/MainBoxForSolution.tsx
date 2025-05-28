import palette from '@assets/colors/index';
import translateFontSize from '@utils/translateFontSize';
import styled, { css } from 'styled-components';

const ICON_SOLUTION = [
  require('@assets/images/main/icon_solution_1.png'),
  require('@assets/images/main/icon_solution_2.png'),
  require('@assets/images/main/icon_solution_3.png'),
];

const MainBoxForSolutionBlock = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  color: ${palette.black.B700};
`;
const SolutionBoxHeader = styled.div`
  h2 {
    ${css(translateFontSize('B_29'))}
  }
`;

const SolutionBoxBody = styled.div`
  max-width: 950px;
  height: 385px;
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
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  border-radius: 10px;
  border: 1px solid ${palette.black.B50};
  padding: 20px;
`;

const SolutionItemContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;

  img {
    width: 48px;
    height: 48px;
  }

  h3 {
    ${css(translateFontSize('B_21'))};
  }

  ul {
    display: flex;
    flex-direction: column;
    align-items: end;
    ${css(translateFontSize('R_17'))};
    gap: 10px;

    & > li {
      width: 90%;
      list-style: outside;

      & > span {
        color: ${palette.system.blue};
      }
    }
  }
`;

const SolutionButton = styled.button`
  width: 100%;
  height: 48px;
  border-radius: 30px;
  padding: 10px 50px;
  border: 2px solid ${palette.black.B700};
  color: ${palette.black.B700};
  background-color: ${palette.black.white};
  ${css(translateFontSize('sb_18'))};
  transition: 0.2s ease color, 0.2s ease background-color;
  cursor: pointer;

  &:hover {
    background-color: ${palette.black.B700};
    color: ${palette.black.white};
  }
`;

//** 서비스에서 제공하는 솔루션에 관한 내용을 담은 컴포넌트 */
const MainBoxForSolution = () => {
  return (
    <MainBoxForSolutionBlock>
      <SolutionBoxHeader>
        <h2>받으실 사업계획서 솔루션을 선택해주세요.</h2>
      </SolutionBoxHeader>

      <SolutionBoxBody>
        <SolutionItem>
          <SolutionItemContent>
            <img src={ICON_SOLUTION[0]} alt="solution_1" />
            <h3>작성 솔루션</h3>
            <ul>
              <li>
                전문가와의 멘토링을 통한 아이템 구체화 및 궁금증 해소 가능
              </li>
              <li>합격 사례를 학습한 AI를 통한 사업계획서 초안 작성 가능</li>
              <li>
                <span>오픈 이벤트: 전화 상담 30분 추가</span>
              </li>
            </ul>
          </SolutionItemContent>

          <SolutionButton>자세히 보기</SolutionButton>
        </SolutionItem>
        <SolutionItem>
          <SolutionItemContent>
            <img src={ICON_SOLUTION[1]} alt="solution_2" />
            <h3>사업계획서 첨삭 코멘트</h3>
            <ul>
              <li>사업계획서 세부 항목별 디테일한 첨삭 코멘트</li>
              <li>확신 없던 사업계획서를 전문가 시점에서 검증 가능</li>
              <li>
                <span>오픈 이벤트: 전화 상담 15분 추가</span>
              </li>
            </ul>
          </SolutionItemContent>
          <SolutionButton>자세히 보기</SolutionButton>
        </SolutionItem>
        <SolutionItem>
          <SolutionItemContent>
            <img src={ICON_SOLUTION[2]} alt="solution_3" />
            <h3>PPT형식 사업계획서 제작</h3>
            <ul>
              <li>PPT 기획부터 디자인까지 IR 전문가가 제작</li>
              <li>심사위원 입맛에 딱 맞는 PPT 자료 제작 가능</li>
            </ul>
          </SolutionItemContent>
          <SolutionButton>자세히 보기</SolutionButton>
        </SolutionItem>
      </SolutionBoxBody>
    </MainBoxForSolutionBlock>
  );
};
export default MainBoxForSolution;
