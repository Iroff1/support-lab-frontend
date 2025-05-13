import palette from '@assets/colors/index';
import { IInputWithCheck } from '@models/input.model';
import React from 'react';
import styled from 'styled-components';

const RIGHT_ARROW = require('@assets/images/common/icon_arrow_right.png');

const InputWithCheckBlock = styled.label`
  height: 26px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  gap: 8px;

  &:hover {
    & > div {
      border: 2px solid #444444;
    }
    & > span {
      color: ${palette.black.B700};
    }
  }

  & > input[type='checkbox'] {
    display: none;

    &:checked + div {
      background-color: ${palette.main.main};
      fill: ${palette.black.white};
      border: 0px;
      & + span {
        color: ${palette.black.B700};
      }
    }
  }

  & > span {
    color: ${palette.black.B100};
    transition: 0.2s ease color;
  }
`;

const CheckBox = styled.div`
  width: 18px;
  height: 18px;
  background-color: ${palette.black.white};
  border: 2px solid #dedede;
  border-radius: 4px;
  transition: 0.2s ease border, 0.2s ease background-color, 0.2s ease fill;
  fill: transparent;
  display: flex;
  justify-content: center;
  align-items: center;

  & > svg {
    fill: ${palette.black.white};
    width: 80%;
    height: 80%;
  }
`;

const DirectSection = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  cursor: pointer;

  & > img {
    width: 16px;
    height: 16px;
    transtion: 0.2s ease filter;
  }
`;

const InputWithCheck: React.FC<IInputWithCheck> = ({
  name,
  useFor = 'option',
  children,
  onClick,
  required,
}) => {
  return (
    <InputWithCheckBlock>
      <Wrapper>
        <input type="checkbox" name={name} required={required} />
        <CheckBox>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
          </svg>
        </CheckBox>
        <span>{children}</span>
      </Wrapper>

      {useFor === 'auth' ? (
        <DirectSection onClick={onClick}>
          <img src={RIGHT_ARROW} />
        </DirectSection>
      ) : null}
    </InputWithCheckBlock>
  );
};
export default InputWithCheck;
