import palette from '@assets/colors';
import { TMouseEventHandler } from '@models/input.model';
import translateFontSize from '@utils/translateFontSize';
import styled, { css } from 'styled-components';

const InputForTermsBlock = styled.div`
  width: 100%;
`;

const Wrapper = styled.label`
  width: 100%;
  height: 100%;
  display: flex;
  gap: 7px;

  &:hover {
    & > .checkBox {
      border: 3px solid #444444;
    }
  }

  & > input[type='checkbox'] {
    display: none;

    &:checked + .checkBox {
      background-color: ${palette.main.main};
      fill: ${palette.black.white};
      border: 0px;
      & + span {
        color: ${palette.black.B700};
      }
    }
  }
`;

const CheckBox = styled.div`
  width: 24px;
  height: 24px;
  aspect-ratio: 1/1;
  background-color: ${palette.black.white};
  border: 3px solid ${palette.black.B50};
  border-radius: 4px;
  transition: 0.2s ease border, 0.2s ease background-color, 0.2s ease fill;
  fill: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  top: 3px;

  & > svg {
    fill: ${palette.black.white};
    width: 80%;
    height: 80%;
  }
`;

const Contents = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;

  & > h4,
  & > h4 > span {
    color: #000;
    ${css(translateFontSize('M_20'))};
  }

  & > p {
    color: ${palette.black.B100};
    ${css(translateFontSize('R_17'))};

    &.wrap {
      height: 96px;
      padding-top: 10px;
      padding-bottom: 10px;
      padding-left: 15px;
      padding-right: 45px;
      overflow-y: scroll;
      &::-webkit-scrollbar {
        display: none;
      }
      white-space: pre-wrap;
      border-radius: 10px;
      border: 1px solid ${palette.black.B50};
    }
  }
`;

interface IInputForterms {
  name: string;
  required?: boolean;
  onClick?: TMouseEventHandler<HTMLInputElement>;
  children: React.ReactNode | string;
}

const InputForTerms: React.FC<IInputForterms> = ({
  name,
  required = false,
  onClick,
  children,
}) => {
  return (
    <InputForTermsBlock>
      <Wrapper>
        <input
          type="checkbox"
          name={name}
          required={required}
          onClick={onClick}
        />
        <CheckBox className="checkBox">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
          </svg>
        </CheckBox>
        <Contents>{children}</Contents>
      </Wrapper>
    </InputForTermsBlock>
  );
};
export default InputForTerms;
