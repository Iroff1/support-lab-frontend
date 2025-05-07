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
  transition: 0.2s ease color, 0.2s ease background-color;
  cursor: pointer;

  &:hover {
    color: ${palette.main.B50};
    background-color: ${palette.main.B200};
  }
`;

const AuthInputWithCheck: React.FC<IAuthCheckItem> = ({
  type,
  forAuth = false,
  placeholder,
}) => {
  const handleCheck = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // console.log(e);

    if (forAuth) {
      // reg 확인 용도일 경우
    } else {
      // 본인인증 요청인 경우
    }
  };

  return (
    <AuthInputWithCheckBlock>
      <AuthInput type={type} placeholder={placeholder} />
      <AuthInputCheckButton onClick={handleCheck}>
        {forAuth ? '인증' : '확인'}
      </AuthInputCheckButton>
    </AuthInputWithCheckBlock>
  );
};
export default AuthInputWithCheck;
