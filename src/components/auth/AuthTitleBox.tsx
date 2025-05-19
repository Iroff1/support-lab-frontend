import palette from '@assets/colors';
import translateFontSize from '@utils/translateFontSize';
import React from 'react';
import styled, { css } from 'styled-components';

const AuthTitleBoxBlock = styled.p`
  width: 100%;
  color: ${palette.black.B700};
  ${css(translateFontSize('SB_22'))};
  margin-bottom: 20px;
`;

const AuthTitleBox: React.FC<{ children: string | React.ReactNode }> = ({
  children,
}) => {
  return <AuthTitleBoxBlock>{children}</AuthTitleBoxBlock>;
};

export default AuthTitleBox;
