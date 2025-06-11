import React from 'react';
import styled from 'styled-components';

const FlexBoxBlock = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 20px;
`;

interface IFlexBoxProps {
  children: React.ReactNode;
}

const FlexBox: React.FC<IFlexBoxProps> = ({ children }) => {
  return <FlexBoxBlock>{children}</FlexBoxBlock>;
};

export default FlexBox;
