import InputText, { InputTextBlock } from '@components/common/InputText';
import { IInput, TChangeEventHandler } from '@models/input.model';
import React, { useState } from 'react';
import styled from 'styled-components';

const pw_hide = require('@assets/images/common/icon_hide.png');
const pw_show = require('@assets/images/common/icon_show.png');

const InputWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const ToggleVisible = styled.div<{
  $isVisible: boolean;
  $theme: 'default' | 'modify';
}>`
  width: 24px;
  height: 24px;
  position: absolute;
  top: ${({ $theme }) => ($theme === 'modify' ? '5px' : '12px')};
  right: 10px;
  cursor: pointer;
  border-radius: 50%;
  transition: 0.2s ease background-color;

  & > img {
    width: 100%;
    height: 100%;
    &:hover {
      background-color: #00000025;
    }
  }
`;

const InputPassword = <T extends object>({
  onChange,
  $cautionText: cautionText,
  $isValid: isValid,
  value,
  $theme = 'default',
  ...props
}: IInput<T>) => {
  const [isVisible, setIsVisible] = useState(false);

  /** 패스워드 인풋 <-> 텍스트 인풋 토글 이벤트 핸들러 함수 */
  const handleIsVisible = () => {
    setIsVisible((value) => !value);
  };

  const handleChange: TChangeEventHandler<HTMLInputElement> = (e) => {
    onChange && onChange(e);
  };

  return (
    <>
      <InputWrapper>
        <InputText
          {...props}
          type={isVisible ? 'text' : 'password'}
          autoComplete="off"
          onChange={handleChange}
          $isValid={isValid}
          $cautionText={
            !value ? '' : value.length === 0 ? '' : isValid ? '' : cautionText
          }
          $PR={44}
          required
          $theme={$theme}
        />
        <ToggleVisible
          onClick={handleIsVisible}
          $isVisible={isVisible}
          $theme={$theme}
        >
          <img src={isVisible ? pw_show : pw_hide} alt="●" />
        </ToggleVisible>
      </InputWrapper>
    </>
  );
};

export default InputPassword;
