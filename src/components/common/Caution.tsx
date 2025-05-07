import palette from '@colors/index';
import tranlateFontSize from '@utils/tranlateFontSize';
import React from 'react';
import styled, { css } from 'styled-components';

interface ICaution {
  children: string;
  isCaution?: boolean;
  marginTop?: string;
}

const CautionBlock = styled.p<ICaution>`
  width: 100%;
  color: ${({ isCaution }) =>
    isCaution ? palette.system.red : palette.system.blue};
  margin-top: ${({ marginTop }) => marginTop};
  ${css(tranlateFontSize('R_17'))};
`;
const Caution: React.FC<ICaution> = ({
  children,
  isCaution = true,
  marginTop,
}) => {
  return (
    <CautionBlock isCaution={isCaution} marginTop={marginTop}>
      {children}
    </CautionBlock>
  );
};
export default Caution;
