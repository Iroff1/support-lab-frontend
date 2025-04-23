import React from 'react';
import styled from 'styled-components';

const ButtonBlock = styled.button`
  width: 120px;
  height: 40px;
  border-radius: 40px;
  border: 2px solid #aaa;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  font-size: 1.25rem;
  cursor: pointer;
`;

interface IButtonProps {
  children?: React.ReactNode | string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
  [key: string]: any; // 나머지 props은 string 키와 any 타입의 값으로 받을 수 있도록 허용 (선택 사항)
}

const Button: React.FC<IButtonProps> = ({ children, ...props }) => {
  return <ButtonBlock {...props}>{children}</ButtonBlock>;
};

export default Button;
