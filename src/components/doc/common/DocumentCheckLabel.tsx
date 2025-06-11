import palette from '@assets/colors';
import { TMouseEventHandler } from '@models/input.model';
import { useState } from 'react';
import { css, styled } from 'styled-components';

interface IInputWithCheck {
  name: string;
  $placeholder: string;
  handleClick?: TMouseEventHandler<HTMLInputElement>;
}

const CheckLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 10px;

  & > input {
    display: none;
  }
`;

const CheckBox = styled.div<{ $checked: boolean }>`
  width: 18px;
  height: 18px;
  aspect-ratio: 1/1;
  border: 2px solid ${palette.black.B40};
  border-radius: 4px;
  position: relative;
  transition: 0.2s ease border, 0.2s ease background-color;
  display: flex;
  align-items: center;
  justify-content: center;

  & > svg {
    width: 12px;
    height: 12px;
    fill: ${palette.black.white};
    opacity: 0;
    transition: 0.2s ease opacity;
  }

  ${({ $checked }) =>
    $checked &&
    css`
      background-color: ${palette.main.main};
      border: 0px;
      & > svg {
        opacity: 1;
      }
    `}
`;

const DocumentRadioLabel: React.FC<IInputWithCheck> = ({
  name,
  $placeholder,
  handleClick,
}) => {
  const [checked, setChecked] = useState(false);
  return (
    <>
      <CheckLabel>
        <input
          type="radio"
          name={name}
          value={$placeholder}
          onClick={(e) => {
            handleClick && handleClick(e);
            setChecked((prev) => !prev);
          }}
        />
        <CheckBox $checked={checked}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
          </svg>
        </CheckBox>
        <div>{$placeholder}</div>
      </CheckLabel>
    </>
  );
};

export default DocumentRadioLabel;
