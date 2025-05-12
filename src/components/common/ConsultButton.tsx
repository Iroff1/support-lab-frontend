import palette from '@assets/colors/index';
import translateFontSize from '@utils/translateFontSize';
import React from 'react';
import styled, { css } from 'styled-components';

const ConsultButtonBlock = styled.div<IButtonProps>`
  width: ${(props) => (props.location === 'header' ? '117px' : '169px')};
  height: ${(props) => (props.location === 'header' ? '40px' : '48px')};
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${palette.black.white};
  background-color: ${palette.system.blue};
  cursor: pointer;
  ${(props) =>
    props.location === 'header'
      ? css(translateFontSize('B_18'))
      : css(translateFontSize('B_20'))};
`;

interface IButtonProps {
  location?: 'header' | 'body';
  children?: React.ReactNode | string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  [key: string]: any; // 나머지 props은 string 키와 any 타입의 값으로 받을 수 있도록 허용 (선택 사항)
}

const ConsultButton: React.FC<IButtonProps> = ({
  location = 'header',
  children,
  onClick,
  ...props
}) => {
  return (
    <ConsultButtonBlock location={location} onClick={onClick} {...props}>
      {children}
    </ConsultButtonBlock>
  );
};

export default ConsultButton;
