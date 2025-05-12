import palette from '@assets/colors/index';
import translateFontSize from '@utils/translateFontSize';
import styled, { css } from 'styled-components';

const MainMeritBoxBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const BoxLayer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;

  &:nth-child(2n) {
    flex-direction: row-reverse;
  }

  &:nth-child(1) {
    background-color: ${palette.main.B100};
  }
  &:nth-child(2) {
    background-color: ${palette.main.B200};
  }
  &:nth-child(3) {
    background-color: ${palette.main.main};
  }
  &:nth-child(4) {
    background-color: ${palette.main.B400};
  }
`;

const BoxItem = styled.div`
  width: 50%;
  height: 511px;
  color: ${palette.black.white};
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
  }

  & > div {
    width: 496px;
    padding: 0 20px;

    h2 {
      ${css(translateFontSize('B_29'))}
    }
    p {
      margin-top: 20px;
      ${css(translateFontSize('R_17'))}
    }
  }
`;

const MainMeritBox = () => {
  return (
    <MainMeritBoxBlock>
      <BoxLayer>
        <BoxItem>
          <img src="/" alt="merit1" />
        </BoxItem>

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
      </BoxLayer>

      <BoxLayer>
        <BoxItem>
          <img src="/" alt="merit2" />
        </BoxItem>

        <BoxItem>
          <div>
            <h2>2025년 재도전성공패키지 최종 선정</h2>
            <p>
              지원사업연구소의 우수한 기술력과 사업성을 인정받아 2025년
              재도전성공패키지에 최종 선정되었습니다. 지원사업연구소에서
              지향하는 사업계획서 작성 방법과 IR 피칭 방식이 최종 선정되는데
              문제없음을 입증했습니다.
            </p>
          </div>
        </BoxItem>
      </BoxLayer>

      <BoxLayer>
        <BoxItem>
          <img src="/" alt="merit3" />
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
      </BoxLayer>

      <BoxLayer>
        <BoxItem>
          <img src="/" alt="merit4" />
        </BoxItem>

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
      </BoxLayer>
    </MainMeritBoxBlock>
  );
};
export default MainMeritBox;
