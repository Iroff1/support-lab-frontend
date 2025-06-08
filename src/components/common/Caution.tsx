import palette from '@assets/colors/index';
import translateFontSize from '@utils/translateFontSize';
import React from 'react';
import styled, { css } from 'styled-components';

type TCautionColor = 'red' | 'green' | 'blue';

interface ICaution {
  children: string | React.ReactNode;
  color?: TCautionColor;
  $mt?: string;
}

const CautionBlock = styled.p<ICaution>`
  width: 100%;
  color: ${({ color }) =>
    color === 'red'
      ? palette.system.red
      : color === 'green'
      ? palette.system.green
      : palette.system.blue};
  margin-top: ${({ $mt }) => $mt};
  ${css(translateFontSize('R_17'))};
`;
const Caution: React.FC<ICaution> = ({ children, color = 'blue', $mt }) => {
  return (
    <CautionBlock color={color} $mt={$mt}>
      {children}
    </CautionBlock>
  );
};
export default Caution;
