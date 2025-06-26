import * as S from '@styles/main/MainBoxForMerit.style';
import IMAGE_MERIT_1 from '@assets/images/main/image_merit_1.png';
import IMAGE_MERIT_2 from '@assets/images/main/image_merit_2.jpg';
import IMAGE_MERIT_3 from '@assets/images/main/image_merit_3.gif';
import IMAGE_MERIT_4 from '@assets/images/main/image_merit_4.jpg';

/** 서비스가 가지는 메리트에 관한 내용을 담은 컴포넌트 */
const MainBoxForMerit = () => {
  return (
    <S.MainBoxForMeritBlock>
      <S.BoxLayer>
        <S.BoxUnified>
          <S.BoxImage>
            <img src={IMAGE_MERIT_1} alt="merit1" />
          </S.BoxImage>
          <S.BoxPost>
            <h2>예비창업패키지 1억원 선정</h2>
            <p>
              여러분과 같은 입장에서 지원사업을 준비해 예비창업패키지 1억원
              선정되어 본 경험이 있습니다. 제가 사용하고 싶어서 만든 솔루션이라
              믿고 사용하셔도 됩니다. 정말 편합니다.
            </p>
          </S.BoxPost>
        </S.BoxUnified>
      </S.BoxLayer>

      <S.BoxLayer>
        <S.BoxUnified className="reverse">
          <S.BoxImage>
            <img src={IMAGE_MERIT_2} alt="merit2" />
          </S.BoxImage>
          <S.BoxPost>
            <h2>2025년 재도전성공패키지 최종 선정</h2>
            <p>
              플랜킷의 우수한 기술력과 사업성을 인정받아 2025년
              재도전성공패키지에 최종 선정되었습니다. 플랜킷에서 지향하는
              사업계획서 작성 방법과 IR 피칭 방식이 최종 선정되는데 문제없음을
              입증했습니다.
            </p>
          </S.BoxPost>
        </S.BoxUnified>
      </S.BoxLayer>

      <S.BoxLayer>
        <S.BoxUnified>
          <S.BoxImage>
            <img src={IMAGE_MERIT_3} alt="merit3" />
          </S.BoxImage>
          <S.BoxPost>
            <h2>매년 창업자 수백명 상담</h2>
            <p>
              매년 수백 명의 창업자 상담을 진행하며 어떤 걸 힘들어 하고 도움
              받기를 원 하는지 누구보다 잘 알고 있습니다. 여러분의 힘든 부분을
              하나씩 해결해드리겠습니다.
            </p>
          </S.BoxPost>
        </S.BoxUnified>
      </S.BoxLayer>

      <S.BoxLayer>
        <S.BoxSeperated>
          <S.BoxImage className="wrap">
            <img src={IMAGE_MERIT_4} alt="merit4" />
          </S.BoxImage>
        </S.BoxSeperated>
        <S.BoxSeperated>
          <S.BoxPost>
            <h2>멘토링을 통한 책임감 있는 솔루션</h2>
            <p>
              단순 초안 작성 솔루션만 제공하지 않습니다. 창업에 필요한 에이전시
              추천, 경쟁력 강화 등 전반적인 부분에 대해서 멘토링을 제공하고
              있습니다.
            </p>
          </S.BoxPost>
        </S.BoxSeperated>
      </S.BoxLayer>
    </S.MainBoxForMeritBlock>
  );
};
export default MainBoxForMerit;
