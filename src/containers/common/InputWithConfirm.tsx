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

const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 10px;
`;

const InputConfirmButton = styled.button`
  width: 100px;
  height: 52px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: ${palette.main.B50};
  color: ${palette.main.B200};
  ${css(translateFontSize('SB_17'))};
  border: 0px;
  transition: 0.2s ease color, 0.2s ease background-color;
  cursor: pointer;

  &:hover {
    color: ${palette.main.B50};
    background-color: ${palette.main.B200};
  }

  &:disabled {
    color: ${palette.main.B75};
    background-color: ${palette.main.B50};
    cursor: not-allowed;
  }
`;

const InputWithConfirm: React.FC<IInputWithConfirm> = ({
  onClick,
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
    onClick && onClick(e);
    !isInit && initComponent();
  };
  const handleChange: TChangeEventHandler<HTMLInputElement> = (e) => {
    onChange && onChange(e);
    isInit && resetComponent();
  };
  return (
    <InputWithConfirmBlock>
      <InputWrapper>
        <InputText
          {...props}
          onChange={handleChange}
          isValid={isValid}
          disabled={disabled}
        />
        <InputConfirmButton onClick={handleClick} disabled={disabled}>
          {useFor === 'validation' ? '확인' : '인증'}
        </InputConfirmButton>
      </InputWrapper>
      {isInit && cautionText ? (
        <Caution color={isValid ? 'green' : 'red'} mt="4px">
          {cautionText}
        </Caution>
      ) : null}
    </InputWithConfirmBlock>
  );
};
export default InputWithConfirm;
