import palette from '@assets/colors/index';
import ConsultButton from '@components/common/ConsultButton';
import translateFontSize from '@utils/translateFontSize';
import styled, { css } from 'styled-components';

const IMAGE_COVER_MAIN = require('@assets/images/main/image_cover_main.jpg');

const MainCoverBoxBlock = styled.div`
  width: 100%;
  height: calc(100vh - 64px);
  background: url(${IMAGE_COVER_MAIN}) center/cover no-repeat;

  & > .wrapper {
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;

    color: ${palette.black.white};
    background-color: #00000050;

    h2 {
      &:nth-child(1) {
        ${css(translateFontSize('B_48'))}
      }
      &:nth-child(2) {
        ${css(translateFontSize('R_48'))}
      }
    }
    p {
      ${css(translateFontSize('R_22'))}
    }
  }
`;

const MainCoverBox = () => {
  return (
    <MainCoverBoxBlock>
      <div className="wrapper">
        <h2>창업 지원사업 한 번도 못 받아보셨나요?</h2>
        <h2>컨설팅비 수백만 원 내는 건 돈 버리는 겁니다.</h2>
        <p>타자 느리고 문서 작업 잘 못해도 괜찮습니다.</p>
        <ConsultButton location="body">무료 상담</ConsultButton>
      </div>
    </MainCoverBoxBlock>
  );
};
export default MainCoverBox;
