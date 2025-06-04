import palette from '@assets/colors/index';
import translateFontSize from '@utils/translateFontSize';
import React from 'react';
import styled, { css } from 'styled-components';

const SubmitButtonBlock = styled.button`
  width: 100%;
  height: 48px;
  border-radius: 8px;
  padding: 12px 10px;
  border: 0;
  ${css(translateFontSize('SB_18'))};
  color: ${palette.black.white};
  transition: 0.2s ease background-color;
  background-color: ${palette.main.main};
  cursor: pointer;

  &:disabled {
    background-color: ${palette.main.B75};
    cursor: not-allowed;
  }
`;

const SubmitButtonBlockInverse = styled(SubmitButtonBlock)`
  background-color: transparent;
  color: ${palette.main.main};
  border: 1px solid ${palette.main.main};
`;

interface ISubmitButton {
  children: string;
  disabled?: boolean;
  inverse?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  ref?: React.RefObject<HTMLButtonElement | null>;
}

const SubmitButton: React.FC<ISubmitButton> = ({
  children,
  ref,
  disabled,
  inverse = false,
  onClick,
}) => {
  return (
    <>
      {inverse ? (
        <SubmitButtonBlockInverse
          ref={ref}
          disabled={disabled}
          onClick={onClick}
        >
          {children}
        </SubmitButtonBlockInverse>
      ) : (
        <SubmitButtonBlock ref={ref} disabled={disabled} onClick={onClick}>
          {children}
        </SubmitButtonBlock>
      )}
    </>
  );
};

export default SubmitButton;
