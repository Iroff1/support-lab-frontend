import palette from '@colors/index';
import tranlateFontSize from '@hooks/tranlateFontSize';
import React from 'react';
import styled, { css } from 'styled-components';

const SubmitButtonBlock = styled.button`
  width: 100%;
  height: 48px;
  border-radius: 8px;
  padding: 12px 10px;
  border: 0;
  ${css(tranlateFontSize('SB_18'))};
  background-color: ${palette.main.B75};
  color: ${palette.black.white};
  transition: 0.2s ease background-color;
  cursor: pointer;

  &.on {
    background-color: ${palette.main.main};
  }
`;

interface ISubmitButton {
  children: string;
  ref?: React.RefObject<HTMLButtonElement | null>;
}

const SubmitButton: React.FC<ISubmitButton> = ({ children, ref }) => {
  return <SubmitButtonBlock ref={ref}>{children}</SubmitButtonBlock>;
};

export default SubmitButton;
