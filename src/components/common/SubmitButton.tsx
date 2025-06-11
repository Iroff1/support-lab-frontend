import palette from '@assets/colors/index';
import translateFontSize from '@utils/translateFontSize';
import React from 'react';
import styled, { css } from 'styled-components';

export const SubmitButtonBlock = styled.button<{
  $maxWidth?: string;
  $style?: 'inverse' | 'default' | 'negative';
}>`
  width: 100%;
  ${({ $maxWidth }) =>
    $maxWidth &&
    css`
      max-width: ${$maxWidth};
    `}
  height: 48px;
  border-radius: 8px;
  padding: 12px 10px;
  border: 0;
  ${css(translateFontSize('SB_18'))};
  color: ${palette.black.white};
  transition: 0.2s ease background-color, 0.2s ease box-shadow;
  background-color: ${palette.main.main};
  cursor: pointer;

  &:disabled {
    background-color: ${palette.main.B75};
    cursor: not-allowed;
  }

  ${({ $style }) =>
    $style === 'inverse'
      ? css`
          background-color: transparent;
          color: ${palette.main.main};
          border: 1px solid ${palette.main.main};
        `
      : $style === 'negative'
      ? css`
          background-color: ${palette.black.B50};
        `
      : null}

  &:hover {
    box-shadow: 0 0 8px 0 #00000040;
  }
`;

interface ISubmitButton {
  children: string;
  disabled?: boolean;
  $maxWidth?: string;
  $style?: 'inverse' | 'default' | 'negative';
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  ref?: React.RefObject<HTMLButtonElement | null>;
}

const SubmitButton: React.FC<ISubmitButton> = ({
  children,
  ref,
  disabled,
  $maxWidth,
  $style = 'default',
  onClick,
}) => {
  return (
    <SubmitButtonBlock
      ref={ref}
      disabled={disabled}
      onClick={(e) => {
        e.preventDefault();
        onClick && onClick(e);
      }}
      $style={$style}
      $maxWidth={$maxWidth}
    >
      {children}
    </SubmitButtonBlock>
  );
};

export default SubmitButton;
