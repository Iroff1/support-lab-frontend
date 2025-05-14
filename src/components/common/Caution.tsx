import palette from '@assets/colors/index';
import translateFontSize from '@utils/translateFontSize';
import React from 'react';
import styled, { css } from 'styled-components';

interface ICaution {
  children: string;
  isCorrect?: boolean;
  marginTop?: string;
}

const CautionBlock = styled.p<ICaution>`
  width: 100%;
  color: ${({ isCorrect }) =>
    isCorrect ? palette.system.blue : palette.system.red};
  margin-top: ${({ marginTop }) => marginTop};
  ${css(translateFontSize('R_17'))};
`;
const Caution: React.FC<ICaution> = ({
  children,
  isCorrect = true,
  marginTop,
}) => {
  return (
    <CautionBlock isCorrect={isCorrect} marginTop={marginTop}>
      {children}
    </CautionBlock>
  );
};
export default Caution;
