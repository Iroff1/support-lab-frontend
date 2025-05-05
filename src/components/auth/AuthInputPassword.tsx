import AuthInput from '@components/common/AuthInput';
import React, { useState } from 'react';
import styled from 'styled-components';

const pw_hide = require('@images/auth/login_pw_hide.png');
const pw_show = require('@images/auth/login_pw_show.png');

const AuthInputPasswordBlock = styled.div`
  position: relative;
  width: 100%;
`;

const AuthInputPw = styled(AuthInput)`
  padding-right: 44px;
`;

const ToggleVisible = styled.div<{ isVisible: boolean }>`
  width: 24px;
  height: 24px;
  background: url(${(props) => (props.isVisible ? pw_show : pw_hide)})
    center/cover no-repeat;
  position: absolute;
  top: 14px;
  right: 10px;
  cursor: pointer;
  border-radius: 50%;
  transition: 0.2s ease background-color;
  &:hover {
    background-color: #00000025;
  }
`;

interface IAuthInputPassword {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const AuthInputPassword: React.FC<IAuthInputPassword> = ({ onChange }) => {
  const [isVisible, setIsVisible] = useState(false);
  const handleIsVisible = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsVisible((value) => !value);
  };

  return (
    <AuthInputPasswordBlock>
      <AuthInputPw
        type={isVisible ? 'text' : 'password'}
        placeholder="비밀번호"
        autoComplete="off"
        onChange={onChange}
        required
      />
      <ToggleVisible onClick={handleIsVisible} isVisible={isVisible} />
    </AuthInputPasswordBlock>
  );
};

export default AuthInputPassword;
