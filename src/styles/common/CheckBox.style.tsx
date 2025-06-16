import palette from '@assets/colors';
import styled, { css } from 'styled-components';

export const IconChecked = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
      <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
    </svg>
  );
};

export const CheckBox = styled.div<{ $checked: boolean }>`
  min-width: 18px;
  max-height: 18px;
  aspect-ratio: 1/1;
  background-color: ${palette.black.white};
  border: 2px solid ${palette.black.B40};
  border-radius: 4px;
  fill: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  top: 2.5px;
  transition: 0.2s ease border, 0.2s ease background-color, 0.2s ease fill;
  cursor: pointer;

  & > img,
  & > svg {
    fill: ${palette.black.white};
    width: 80%;
    height: 80%;
  }

  ${({ $checked }) =>
    $checked
      ? css`
          background-color: ${palette.main.main};
          fill: ${palette.black.white};
          border: 0px;
          & + p {
            color: ${palette.black.B700};
          }
        `
      : null}
`;
