import palette from '@assets/colors/index';
import React from 'react';
import styled from 'styled-components';

const AuthCheckItemBlock = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;

  &:hover {
    & > .checkbox {
      border: 2px solid #444444;
    }
    & > span {
      color: ${palette.black.B700};
    }
  }

  & > input[type='checkbox'] {
    display: none;

    &:checked + .checkbox {
      background-color: ${palette.main.main};
      fill: ${palette.black.white};
      border: 0px;
      & + span {
        color: ${palette.black.B700};
      }
    }
  }

  & > .checkbox {
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
  }

  & > span {
    color: ${palette.black.B100};
    transition: 0.2s ease color;
  }
`;

interface IAuthCheckItem {
  children: string | React.ReactNode;
}

const AuthCheckItem: React.FC<IAuthCheckItem> = ({ children }) => {
  return (
    <AuthCheckItemBlock>
      <input type="checkbox" />
      <div className="checkbox">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
        </svg>
      </div>
      <span>{children}</span>
    </AuthCheckItemBlock>
  );
};
export default AuthCheckItem;
