import palette from '@assets/colors/index';
import translateFontSize from '@utils/translateFontSize';
import React from 'react';
import styled, { css } from 'styled-components';
import InputText from './InputText';

interface ICheckItem {
  type: string;
  name: string;
  forAuth?: boolean;
  placeholder: string;
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
    <InputWithCheckBlock>
      <InputText name={name} type={type} placeholder={placeholder} />
      <InputCheckButton onClick={handleCheck}>
        {forAuth ? '인증' : '확인'}
      </InputCheckButton>
    </InputWithCheckBlock>
  );
};
export default InputWithCheck;
