import palette from '@colors/index';
import tranlateFontSize from '@hooks/tranlateFontSize';
import React from 'react';
import styled, { css } from 'styled-components';

const ButtonBlock = styled.button`
  width: 117px;
  height: 40px;
  border-radius: 40px;
  border: 1px solid ${palette.black.B50};
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  cursor: pointer;
  ${css(tranlateFontSize('B_14'))}
`;

interface IButtonProps {
  children?: React.ReactNode | string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  [key: string]: any; // 나머지 props은 string 키와 any 타입의 값으로 받을 수 있도록 허용 (선택 사항)
}

const Button: React.FC<IButtonProps> = ({ children, onClick, ...props }) => {
  return <ButtonBlock {...props}>{children}</ButtonBlock>;
};

export default Button;
