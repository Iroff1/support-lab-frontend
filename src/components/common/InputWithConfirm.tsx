import palette from '@assets/colors/index';
import translateFontSize from '@utils/translateFontSize';
import React, { useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import InputText from './InputText';
import { IInputWithConfirm } from '@models/input.model';
import Caution from './Caution';

const InputWithConfirmBlock = styled.div`
  width: 100%;
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 10px;
`;

const InputConfirmButton = styled.button`
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

const InputWithConfirm: React.FC<IInputWithConfirm> = ({
  type,
  name,
  useFor = 'validation',
  placeholder,
  onChange,
  handler,
}) => {
  const [confirmResult, setConfirmResult] = useState<boolean | null>(null);
  const userInput = useRef<HTMLInputElement>(null);

  const handleCheck = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (useFor === 'validation') {
      // 유효성 검사 용도일 경우
      const inputValue = userInput.current?.value;
      if (inputValue && handler) {
        setConfirmResult(handler(inputValue));
      }
    } else {
      // 본인인증 요청인 경우
    }
  };

  return (
    <InputWithConfirmBlock>
      <Wrapper>
        <InputText
          name={name}
          type={type}
          placeholder={placeholder}
          ref={userInput}
          onChange={onChange}
        />
        <InputConfirmButton onClick={handleCheck}>
          {useFor === 'validation' ? '확인' : '인증'}
        </InputConfirmButton>
      </Wrapper>
      {confirmResult !== null ? (
        <Caution isCorrect={confirmResult} marginTop="4px">
          {confirmResult + ''}
        </Caution>
      ) : null}
    </InputWithConfirmBlock>
  );
};
export default InputWithConfirm;
