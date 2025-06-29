import palette from '@assets/colors/index';
import ICON_RIGHT_ARROW from '@assets/images/common/icon_arrow_right.svg';
import { IInputWithCheck } from '@models/input.model';
import { CheckBox, IconChecked } from '@styles/common/CheckBox.style';
import { useState } from 'react';
import styled, { css } from 'styled-components';

const InputWithCheckBlock = styled.label`
  width: 100%;
  min-height: 26px;
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
const InputWrapper = styled.div<{ $fontSize: string; $checked: boolean }>`
  height: 100%;
  display: flex;
  /* align-items: center; */
  gap: 8px;

  & > p {
    color: ${palette.black.B100};
    transition: 0.2s ease color;
    font-size: ${({ $fontSize }) => $fontSize};
    & > span {
      font-size: ${({ $fontSize }) => $fontSize};
    }
  }

  &:hover {
    & > div {
      ${({ $checked }) =>
        !$checked &&
        css`
          border: 2px solid #444444;
        `};
    }
    & > p {
      color: ${palette.black.B700};
    }
  }

  ${({ $checked }) =>
    $checked &&
    css`
      & > p {
        color: ${palette.black.B700};
      }
    `};

  & > input[type='checkbox'] {
    display: none;
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
  $checked = false,
  $fontSize = '17px',
}: IInputWithCheck<T>) => {
  const [isPopup, setIsPopup] = useState(false);
  const handlePopup = () => {
    setIsPopup((prev) => !prev);
  };

  return (
    <>
      <InputWithCheckBlock>
        <InputWrapper $fontSize={$fontSize} $checked={$checked}>
          <input
            type="checkbox"
            name={name as string}
            required={required}
            onClick={handleClick}
            defaultChecked={$checked}
          />
          <CheckBox $checked={$checked}>
            <IconChecked />
          </CheckBox>
          <p>{children}</p>
        </InputWrapper>

        {useFor === 'auth' ? (
          <DirectSection onClick={handlePopup}>
            <img src={ICON_RIGHT_ARROW} />
          </DirectSection>
        ) : null}
      </InputWithCheckBlock>
    </>
  );
};
export default InputWithCheck;
