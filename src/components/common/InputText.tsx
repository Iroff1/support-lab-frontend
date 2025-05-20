import palette from '@assets/colors/index';
import { IInput } from '@models/input.model';
import translateFontSize from '@utils/translateFontSize';
import React from 'react';
import styled, { css } from 'styled-components';
import Caution from './Caution';

const InputTextBlock = styled.div`
  width: 100%;
`;

const InputOfUser = styled.input`
  width: 100%;
  height: 52px;
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
`;

const InputText: React.FC<IInput> = ({
  type = 'text',
  required = true,
  cautionText,
  isValid,
  reg,
  disabled,
  ...props
}) => {
  return (
    <InputTextBlock>
      <InputOfUser
        {...props}
        type={type}
        required={required}
        disabled={disabled}
      />
      {cautionText ? (
        <Caution color={isValid ? 'green' : 'red'} mt="4px">
          {cautionText}
        </Caution>
      ) : null}
    </InputTextBlock>
  );
};
export default InputText;
