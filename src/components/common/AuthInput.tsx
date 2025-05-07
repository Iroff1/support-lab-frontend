import palette from '@assets/colors/index';
import tranlateFontSize from '@utils/tranlateFontSize';
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
  ${css(tranlateFontSize('R_17'))};
  color: ${palette.black.B700};
  transition: 0.2s ease border;

  &::placeholder {
    ${css(tranlateFontSize('R_17'))};
    color: ${palette.black.B90};
  }

  &:focus {
    border: 1px solid ${palette.main.main};
  }
`;

interface IAuthInput {
  type: string;
  placeholder?: string;
  autoComplete?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

const AuthInput: React.FC<IAuthInput> = ({ required = true, ...props }) => {
  return <AuthInputBlock required={required} {...props} />;
};
export default AuthInput;
