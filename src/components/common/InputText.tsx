import palette from '@assets/colors/index';
import translateFontSize from '@utils/translateFontSize';
import React from 'react';
import styled, { css } from 'styled-components';

const AuthInputBlock = styled.input`
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

export interface IInput {
  type?: string;
  name: string;
  placeholder?: string;
  autoComplete?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

const InputText: React.FC<IInput> = ({
  type = 'text',
  required = true,
  ...props
}) => {
  return <AuthInputBlock type={type} required={required} {...props} />;
};
export default InputText;
