import palette from '@colors/index';
import AuthInput from '@components/common/AuthInput';
import tranlateFontSize from '@hooks/tranlateFontSize';
import React from 'react';
import styled, { css } from 'styled-components';

interface IAuthCheckItem {
  type: string;
  forAuth?: boolean;
  placeholder: string;
}

const AuthInputWithCheckBlock = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 10px;
`;

const AuthInputCheckButton = styled.button`
  width: 100px;
  height: 52px;
  border-radius: 10px;
  background-color: ${palette.main.B50};
  color: ${palette.main.B200};
  ${css(tranlateFontSize('SB_17'))};
  border: 0px;
`;

const AuthInputWithCheck: React.FC<IAuthCheckItem> = ({
  type,
  forAuth = false,
  placeholder,
}) => {
  return (
    <AuthInputWithCheckBlock>
      <AuthInput type={type} placeholder={placeholder} />
      <AuthInputCheckButton>{forAuth ? '인증' : '확인'}</AuthInputCheckButton>
    </AuthInputWithCheckBlock>
  );
};
export default AuthInputWithCheck;
