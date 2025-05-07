import palette from '@assets/colors/index';
import tranlateFontSize from '@utils/tranlateFontSize';
import React from 'react';
import styled, { css, keyframes } from 'styled-components';

const MODAL_EXIT = require('@assets/images/common/modal_exit.png');

const ModalBlock = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 200;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #00000025;
`;

const KFadeIn = keyframes`
  0%{
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
`;

const ModalPop = styled.div`
  width: 428px;
  height: 236px;
  border-radius: 20px;
  padding: 30px;
  background-color: ${palette.black.white};
  border: 1px solid ${palette.black.B70};
  color: ${palette.black.B700};
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  animation: ${KFadeIn} 0.2s ease-in-out forwards;
`;

const ModalHeader = styled.h1`
  ${css(tranlateFontSize('B_29'))}
`;

const ModalBody = styled.div`
  display: flex;
  justify-content: space-between;

  & > div {
    & > p:nth-child(1) {
      ${css(tranlateFontSize('R_19'))}
    }
    & > p:nth-child(2) {
      ${css(tranlateFontSize('B_19'))}
    }
  }
`;

const ModalExit = styled.div`
  width: 28px;
  height: 28px;
  position: absolute;
  top: 15px;
  right: 15px;
  cursor: pointer;
  transition: 0.2s ease background-color;
  border-radius: 8px;

  img {
    width: 100%;
    height: 100%;
  }
  &:hover {
    background-color: #00000025;
  }
`;

interface IModalProps {
  hideModal: () => void;
}

const Modal: React.FC<IModalProps> = ({ hideModal }) => {
  return (
    <ModalBlock>
      <ModalPop>
        <ModalExit onClick={hideModal}>
          <img src={MODAL_EXIT} alt="exit" />
        </ModalExit>
        <ModalHeader>
          IROFF 고객센터에서
          <br />
          무료로 상담받을 수 있어요
        </ModalHeader>
        <ModalBody>
          <div>
            <p>전화번호</p>
            <p>0507-1402-3531</p>
          </div>
          <div>
            <p>상담시간</p>
            <p>평일 10:00~18:00</p>
          </div>
        </ModalBody>
      </ModalPop>
    </ModalBlock>
  );
};
export default Modal;
