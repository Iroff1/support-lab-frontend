import palette from '@assets/colors/index';
import { IInput } from '@models/input.model';
import translateFontSize from '@utils/translateFontSize';
import React from 'react';
import styled, { css } from 'styled-components';
import Caution from './Caution';

export const InputTextBlock = styled.input<{
  $theme: 'default' | 'modify';
  $PR?: number;
}>`
  width: 100%;
  height: 100%;
  outline: 0px;
  border: 0px;
  border-radius: 10px;
  border: 1px solid ${palette.black.B50};
  padding: 14px 10px;
  ${css(translateFontSize('R_17'))};
  color: ${palette.black.B700};
  transition: 0.2s ease border;

  &::placeholder {
    ${css(translateFontSize('R_17'))};
    color: ${palette.black.B90};
  }
  &:focus {
    border: 1px solid ${palette.main.main};
  }
  ${({ $theme }) =>
    $theme === 'modify' &&
    css`
      height: 34px;
      padding: 4px 10px;
      border: 1px solid ${palette.black.B40};
      border-radius: 6px;

      &:focus {
        border-color: ${palette.black.black};
      }
    `}
  ${({ $PR }) =>
    $PR &&
    css`
      padding-right: ${$PR}px;
    `}
`;

const InputText: React.FC<IInput> = ({
  $theme = 'default',
  $PR,
  type = 'text',
  required = true,
  cautionText,
  isValid,
  ...props
}) => {
  return (
    <>
      <InputTextBlock
        {...props}
        type={type}
        required={required}
        $theme={$theme}
        $PR={$PR}
      />
      {cautionText ? (
        <Caution color={isValid ? 'green' : 'red'} $mt="4px">
          {cautionText}
        </Caution>
      ) : null}
    </>
  );
};
export default InputText;
