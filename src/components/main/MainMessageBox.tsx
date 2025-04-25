import tranlateFontSize from '@hooks/tranlateFontSize';
import React from 'react';
import styled, { css } from 'styled-components';

const MainMessageBoxBlock = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  h1 {
    ${css(tranlateFontSize('B_48'))}
  }
  h2 {
    ${css(tranlateFontSize('B_29'))}
  }
  p {
    ${css(tranlateFontSize('R_17'))}
    margin-top: 10px;
  }
`;

const MainMessageBox: React.FC<{
  children?: React.ReactNode | string;
}> = ({ children }) => {
  return <MainMessageBoxBlock>{children}</MainMessageBoxBlock>;
};

export default MainMessageBox;
