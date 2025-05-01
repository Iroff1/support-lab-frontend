import React from 'react';
import styled, { css } from 'styled-components';

interface IBlank {
  width?: string;
  height?: string;
}

const BlankBlock = styled.div<IBlank>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  background-color: tranparent;
`;

const Blank: React.FC<IBlank> = ({ width = '100%', height = '20px' }) => {
  return <BlankBlock width={width} height={height} />;
};

export default Blank;
