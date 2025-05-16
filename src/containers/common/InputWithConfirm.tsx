import palette from '@assets/colors/index';
import translateFontSize from '@utils/translateFontSize';
import React, { useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import InputText from '../../components/common/InputText';
import { IInputWithConfirm, TMouseEventHandler } from '@models/input.model';

const InputWithConfirmBlock = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 10px;
`;

const InputConfirmButton = styled.button`
  width: 100px;
  height: 52px;
  display: flex;
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
`;

const InputWithConfirm: React.FC<IInputWithConfirm> = ({
  ref,
  type,
  name,
  useFor = 'validation',
  placeholder,
  onChange,
  onClick,
  cautionText,
  isValid,
  value,
}) => {
  return (
    <InputWithConfirmBlock>
      <InputText
        name={name}
        type={type}
        placeholder={placeholder}
        ref={ref}
        onChange={onChange}
        cautionText={cautionText}
        isValid={isValid}
        value={value}
      />
      <InputConfirmButton onClick={onClick}>
        {useFor === 'validation' ? '확인' : '인증'}
      </InputConfirmButton>
    </InputWithConfirmBlock>
  );
};
export default InputWithConfirm;
