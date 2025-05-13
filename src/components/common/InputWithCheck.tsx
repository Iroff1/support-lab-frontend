import palette from '@assets/colors/index';
import translateFontSize from '@utils/translateFontSize';
import React, { useRef } from 'react';
import styled, { css } from 'styled-components';
import InputText from './InputText';

interface ICheckItem {
  type: string;
  name: string;
  useFor?: 'validation' | 'auth';
  placeholder: string;
  handler?: (userInput: string) => boolean;
}

const InputWithCheckBlock = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 10px;
`;

const InputCheckButton = styled.button`
  width: 100px;
  height: 52px;
  border-radius: 10px;
  background-color: ${palette.main.B50};
  color: ${palette.main.B200};
  ${css(translateFontSize('SB_17'))};
  border: 0px;
  transition: 0.2s ease color, 0.2s ease background-color;
  cursor: pointer;

  &:hover {
    color: ${palette.main.B50};
    background-color: ${palette.main.B200};
  }
`;

const InputWithCheck: React.FC<ICheckItem> = ({
  type,
  name,
  useFor = 'validation',
  placeholder,
  handler,
}) => {
  const userInput = useRef<HTMLInputElement>(null);

  const handleCheck = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // console.log(e);

    if (useFor === 'validation') {
      // 유효성 검사 용도일 경우
      const inputValue = userInput.current?.value;
      if (inputValue && handler) handler(inputValue);
    } else {
      // 본인인증 요청인 경우
    }
  };

  return (
    <>
      <InputWithCheckBlock>
        <InputText
          name={name}
          type={type}
          placeholder={placeholder}
          ref={userInput}
        />
        <InputCheckButton onClick={handleCheck}>
          {useFor === 'validation' ? '확인' : '인증'}
        </InputCheckButton>
      </InputWithCheckBlock>
    </>
  );
};
export default InputWithCheck;
