import InputText from '@components/common/InputText';
import { IInput } from '@models/input.model';
import React, { useState } from 'react';
import styled from 'styled-components';

const pw_hide = require('@assets/images/common/icon_hide.png');
const pw_show = require('@assets/images/common/icon_show.png');

const InputPasswordBlock = styled.div`
  position: relative;
  width: 100%;
`;

const InputPw = styled(InputText)`
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

const InputPassword: React.FC<IInput> = ({ name, onChange, caution }) => {
  const [isVisible, setIsVisible] = useState(false);
  const handleIsVisible = () => {
    setIsVisible((value) => !value);
  };

  return (
    <InputPasswordBlock>
      <InputPw
        name={name}
        type={isVisible ? 'text' : 'password'}
        placeholder={name === 'password' ? '비밀번호' : '비밀번호 확인'}
        autoComplete="off"
        onChange={onChange}
        caution={caution}
        required
      />
      <ToggleVisible onClick={handleIsVisible} isVisible={isVisible} />
    </InputPasswordBlock>
  );
};

export default InputPassword;
