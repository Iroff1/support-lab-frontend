import translateFontSize from '@utils/translateFontSize';
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
    ${css(translateFontSize('B_48'))}
    margin-bottom: 20px;
  }
  h2 {
    ${css(translateFontSize('B_29'))}
    margin-bottom: 10px;
  }
  p {
    ${css(translateFontSize('R_17'))}
  }
`;

const MainMessageBox: React.FC<{
  children?: React.ReactNode | string;
}> = ({ children }) => {
  return <MainMessageBoxBlock>{children}</MainMessageBoxBlock>;
};

export default MainMessageBox;
