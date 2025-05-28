import styled, { css } from 'styled-components';
import translateFontSize from '@utils/translateFontSize';
import palette from '@assets/colors';
import ConsultButton from '@components/common/ConsultButton';

const IMAGE_LAST_COVER = require('@assets/images/main/image_cover_last.png');

const MainBoxForLastCoverBlock = styled.div`
  width: 100%;
  height: calc(100vh - 64px);
  display: flex;
  background: url(${IMAGE_LAST_COVER}) center/cover no-repeat;
`;

const CoverBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  gap: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #33333320;
`;

const CoverBoxContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  color: ${palette.black.B10};

  h2 {
    ${css(translateFontSize('B_48'))}
    text-wrap: wrap;
  }
  p {
    ${css(translateFontSize('R_22'))}
  }
`;

/** 메인 페이지 마지막 화면 커버용 컴포넌트 */
const MainBoxForLastCover = () => {
  return (
    <MainBoxForLastCoverBlock>
      <CoverBox>
        <CoverBoxContent>
          <h2>
            그.래.서!
            <br />
            무엇부터 시작해야 할지 막막하신가요?
          </h2>

          <p>
            지금 바로 전화주세요.
            <br />
            <br />
            지원사업 전문가가 당신의 상황에 꼭 맞는 해답을 제시해 드리고
            <br />
            솔루션 사용법도 처음부터 끝까지, 친절하게 알려드립니다.
          </p>
        </CoverBoxContent>

        <ConsultButton location="body">무료 상담</ConsultButton>
      </CoverBox>
    </MainBoxForLastCoverBlock>
  );
};
export default MainBoxForLastCover;
