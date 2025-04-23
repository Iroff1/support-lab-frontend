import Button from '@components/common/Button';
import styled from 'styled-components';

const MainCoverBoxBlock = styled.div`
  width: 100%;
  height: calc(100vh - 64px);
  background-color: #191970;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: white;

  h2 {
    font-size: 3rem;
    margin: 0;
    margin-bottom: 10px;
    &:nth-child(1) {
      font-weight: 700;
    }
    &:nth-child(2) {
      font-weight: 400;
    }
  }
  p {
    font-size: 1.4rem;
  }
`;

const ConsultButton = styled(Button)`
  border: 0;
  background-color: dodgerblue;
  color: white;
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
