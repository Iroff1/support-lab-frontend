import palette from '@colors/index';
import styled from 'styled-components';

const ModalBlock = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #00000040;
`;

const ModalPop = styled.div`
  width: 428px;
  height: 236px;
  border-radius: 20px;
  padding: 30px;
  background-color: ${palette.black.white};
  border: 1px solid ${palette.black.B70};
`;

const Modal = () => {
  return (
    <ModalBlock>
      <ModalPop></ModalPop>
    </ModalBlock>
  );
};
export default Modal;
