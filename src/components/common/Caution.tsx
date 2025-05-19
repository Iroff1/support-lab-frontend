import palette from '@assets/colors/index';
import translateFontSize from '@utils/translateFontSize';
import React from 'react';
import styled, { css } from 'styled-components';

interface ICaution {
  children: string | React.ReactNode;
  isCorrect?: boolean;
  mt?: string;
}

const CautionBlock = styled.p<ICaution>`
  width: 100%;
  color: ${({ isCorrect }) =>
    isCorrect ? palette.system.green : palette.system.red};
  margin-top: ${({ mt }) => mt};
  ${css(translateFontSize('R_17'))};
`;
const Caution: React.FC<ICaution> = ({ children, isCorrect = true, mt }) => {
  return (
    <CautionBlock isCorrect={isCorrect} mt={mt}>
      {children}
    </CautionBlock>
  );
};
export default Caution;
