import palette from '@colors/index';
import tranlateFontSize from '@hooks/tranlateFontSize';
import styled, { css } from 'styled-components';

const MainMeritBoxBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
`;

const BoxItem = styled.div`
  width: 50%;
  height: 511px;
  background-color: #bdbdbd;
  color: ${palette.black.white};
  display: flex;
  justify-content: center;
  align-items: center;

  &:nth-child(2) {
    background-color: ${palette.main.B200};
  }
  &:nth-child(3) {
    background-color: ${palette.main.main};
  }
  &:nth-child(6) {
    background-color: ${palette.main.B400};
  }

  & > div {
    width: 496px;
    h2 {
      ${css(tranlateFontSize('B_29'))}
    }
    p {
      margin-top: 20px;
      ${css(tranlateFontSize('R_17'))}
    }
  }
`;

const MainMeritBox = () => {
  return (
    <MainMeritBoxBlock>
      <BoxItem></BoxItem>
      <BoxItem>
        <div className="message">
          <h2>예비창업패키지 1억원 선정</h2>
          <p>
            여러분과 같은 입장에서 지원사업을 준비해 예비창업패키지 1억원
            선정되어 본 경험이 있습니다. 제가 사용하고 싶어서 만든 솔루션이라
            믿고 사용하셔도 됩니다. 정말 편합니다.
          </p>
        </div>
      </BoxItem>
      <BoxItem>
        <div>
          <h2>매년 창업자 수백명 상담</h2>
          <p>
            매년 수백 명의 창업자 상담을 진행하며 어떤 걸 힘들어 하고 도움
            받기를 원 하는지 누구보다 잘 알고 있습니다. 여러분의 힘든 부분을
            하나씩 해결해드리겠습니다.
          </p>
        </div>
      </BoxItem>
      <BoxItem></BoxItem>
      <BoxItem></BoxItem>
      <BoxItem>
        <div>
          <h2>멘토링을 통한 책임감 있는 솔루션</h2>
          <p>
            단순 초안 작성 솔루션만 제공하지 않습니다. 창업에 필요한 에이전시
            추천, 경쟁력 강화 등 전반적인 부분에 대해서 멘토링을 제공하고
            있습니다.
          </p>
        </div>
      </BoxItem>
    </MainMeritBoxBlock>
  );
};
export default MainMeritBox;
