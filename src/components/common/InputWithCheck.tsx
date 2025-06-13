import palette from '@assets/colors/index';
import { IInputWithCheck } from '@models/input.model';
import { useState } from 'react';
import styled from 'styled-components';

const RIGHT_ARROW = require('@assets/images/common/icon_arrow_right.svg');

const InputWithCheckBlock = styled.label`
  width: 100%;
  height: 26px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const PopupWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${palette.black.white};
  cursor: pointer;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
`;
const InputWrapper = styled.div`
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
  transition: 0.4s ease background-color;

  & > img {
    width: 16px;
    height: 16px;
    transition: 0.2s ease filter;
  }

  &:hover {
    background-color: ${palette.black.B40};
  }
`;

const InputWithCheck = <T extends object>({
  name,
  useFor = 'option',
  children,
  handleClick,
  required,
  popup,
  $checked = false,
}: IInputWithCheck<T>) => {
  const [isPopup, setIsPopup] = useState(false);

  const handlePopup = () => {
    setIsPopup((prev) => !prev);
  };

  return (
    <>
      <InputWithCheckBlock>
        <InputWrapper>
          <input
            type="checkbox"
            name={name as string}
            required={required}
            onClick={handleClick}
            defaultChecked={$checked}
          />
          <CheckBox>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
            </svg>
          </CheckBox>
          <span>{children}</span>
        </InputWrapper>

        {useFor === 'auth' ? (
          <DirectSection onClick={handlePopup}>
            <img src={RIGHT_ARROW} />
          </DirectSection>
        ) : null}
      </InputWithCheckBlock>
      {isPopup && <PopupWrapper onClick={handlePopup}>{popup}</PopupWrapper>}
    </>
  );
};
export default InputWithCheck;
