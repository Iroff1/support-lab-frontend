import palette from '@colors/index';
import styled from 'styled-components';

const FloatingBlock = styled.div`
  position: fixed;
  bottom: 40px;
  right: 40px;
  display: flex;
  flex-direction: column;
  z-index: 101;
  gap: 20px;
`;

const ActionButton = styled.div`
  width: 60px;
  height: 60px;
  padding: 10px;
  border-radius: 24px;
  box-shadow: 0px 4px 10px 0px #00000040;
  img {
    width: 100%;
    heigth: 100%;
  }
`;

const Floating = () => {
  return (
    <FloatingBlock>
      <ActionButton style={{ backgroundColor: palette.main.main }}>
        <img src={require('@images/floating_call.png')} alt="" />
      </ActionButton>
      <ActionButton style={{ backgroundColor: '#FAE300' }}>
        <img src={require('@images/floating_kakao.png')} alt="" />
      </ActionButton>
      <ActionButton style={{ backgroundColor: palette.black.white }}>
        <img src={require('@images/floating_upper.png')} alt="" />
      </ActionButton>
    </FloatingBlock>
  );
};

export default Floating;
