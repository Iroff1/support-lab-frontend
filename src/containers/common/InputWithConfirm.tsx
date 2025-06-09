import palette from '@assets/colors/index';
import translateFontSize from '@utils/translateFontSize';
import React, { useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import InputText from '../../components/common/InputText';
import {
  IInputWithConfirm,
  TChangeEventHandler,
  TMouseEventHandler,
} from '@models/input.model';
import Caution from '@components/common/Caution';
import useInit from '@hooks/useInit';

const InputWithConfirmBlock = styled.div`
  width: 100%;
`;

const InputWrapper = styled.div<{ $theme: 'default' | 'modify' }>`
  width: 100%;
  height: ${({ $theme }) => ($theme === 'modify' ? '34px' : '52px')};
  display: flex;
  justify-content: space-between;
  gap: 10px;
`;

const InputConfirmButton = styled.button<{ $theme: 'default' | 'modify' }>`
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  ${({ $theme }) =>
    $theme === 'default'
      ? css`
          width: 100px;
          border-radius: 10px;
          background-color: ${palette.main.B50};
          color: ${palette.main.B200};
          ${css(translateFontSize('SB_17'))};
          border: 0px;
          transition: 0.2s ease color, 0.2s ease background-color;

          &:hover {
            color: ${palette.main.B50};
            background-color: ${palette.main.B200};
          }

          &:disabled {
            color: ${palette.main.B75};
            background-color: ${palette.main.B50};
            cursor: not-allowed;
          }
        `
      : css`
          min-width: 53px;
          border: 1px solid ${palette.black.B40};
          border-radius: 6px;
          background-color: ${palette.black.white};
          color: ${palette.black.black};
          ${css(translateFontSize('R_17'))};
          transition: background-color 0.2s;

          &:hover {
            background-color: #f5f5f5;
          }
        `}
`;

const InputWithConfirm: React.FC<IInputWithConfirm> = ({
  $theme = 'default',
  handleConfirm,
  onChange,
  useFor = 'validation',
  isValid,
  disabled = false,
  cautionText,
  ...props
}) => {
  const {
    isInit,
    startInit: initComponent,
    resetInit: resetComponent,
  } = useInit();
  const handleClick: TMouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    handleConfirm && handleConfirm(e);
    !isInit && initComponent();
  };
  const handleChange: TChangeEventHandler<HTMLInputElement> = (e) => {
    onChange && onChange(e);
    isInit && resetComponent();
  };
  return (
    <InputWithConfirmBlock>
      <InputWrapper $theme={$theme}>
        <InputText
          {...props}
          onChange={handleChange}
          isValid={isValid}
          disabled={disabled}
          $theme={$theme}
        />
        <InputConfirmButton
          onClick={handleClick}
          disabled={disabled}
          $theme={$theme}
        >
          {useFor === 'modify' ? '변경' : useFor === 'auth' ? '인증' : '확인'}
        </InputConfirmButton>
      </InputWrapper>
      {isInit && cautionText ? (
        <Caution color={isValid ? 'green' : 'red'} $mt="4px">
          {cautionText}
        </Caution>
      ) : null}
    </InputWithConfirmBlock>
  );
};
export default InputWithConfirm;
