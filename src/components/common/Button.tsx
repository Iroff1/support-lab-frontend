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

const Button: React.FC<any> = ({ children, ...props }) => {
  return <ButtonBlock {...props}>{children}</ButtonBlock>;
};

export default Button;
