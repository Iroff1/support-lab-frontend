import InputText from '@components/common/InputText';
import { IInput, TChangeEventHandler } from '@models/input.model';
import React, { useState } from 'react';
import styled from 'styled-components';

const pw_hide = require('@assets/images/common/icon_hide.png');
const pw_show = require('@assets/images/common/icon_show.png');

const InputPasswordBlock = styled.div`
  width: 100%;
`;

const InputWrapper = styled.div`
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

const InputPassword: React.FC<IInput> = ({
  onChange,
  cautionText,
  isValid,
  value,
  ...props
}) => {
  const [isVisible, setIsVisible] = useState(false);

  /** 패스워드 인풋 <-> 텍스트 인풋 토글 이벤트 핸들러 함수 */
  const handleIsVisible = () => {
    setIsVisible((value) => !value);
  };

  const handleChange: TChangeEventHandler<HTMLInputElement> = (e) => {
    onChange && onChange(e);
  };

  return (
    <InputPasswordBlock>
      <InputWrapper>
        <InputPw
          {...props}
          type={isVisible ? 'text' : 'password'}
          autoComplete="off"
          onChange={handleChange}
          isValid={isValid}
          cautionText={
            !value ? '' : value.length === 0 ? '' : isValid ? '' : cautionText
          }
          required
        />
        <ToggleVisible onClick={handleIsVisible} isVisible={isVisible} />
      </InputWrapper>
    </InputPasswordBlock>
  );
};

export default InputPassword;
