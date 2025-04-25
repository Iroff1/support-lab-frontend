import palette from '@colors/index';
import Button from '@components/common/Button';
import tranlateFontSize from '@hooks/tranlateFontSize';
import styled, { css } from 'styled-components';

const MainCoverBoxBlock = styled.div`
  width: 100%;
  height: calc(100vh - 64px);
  background-color: ${palette.main.main};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: white;
  gap: 20px;

  h2 {
    &:nth-child(1) {
      ${css(tranlateFontSize('B_48'))}
    }
    &:nth-child(2) {
      ${css(tranlateFontSize('R_48'))}
    }
  }
  p {
    ${css(tranlateFontSize('R_22'))}
  }
`;

const ConsultButton = styled(Button)`
  border: 0;
  width: 169px;
  height: 48px;
  background-color: ${palette.system.blue};
  color: ${palette.black.white};
  ${css(tranlateFontSize('B_20'))}
`;

const MainCoverBox = () => {
  return (
    <MainCoverBoxBlock>
      <h2>창업 지원사업 한 번도 못 받아보셨나요?</h2>
      <h2>컨설팅비 수백만 원 내는 건 돈 버리는 겁니다.</h2>
      <p>타자 느리고 문서 작업 잘 못해도 괜찮습니다.</p>
      <ConsultButton>무료 상담</ConsultButton>
    </MainCoverBoxBlock>
  );
};
export default MainCoverBox;
