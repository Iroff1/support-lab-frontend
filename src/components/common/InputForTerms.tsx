import palette from '@assets/colors';
import useScroll from '@hooks/useScroll';
import { ITermsOfUse } from '@models/auth.model';
import { TMouseEventHandler } from '@models/input.model';
import translateFontSize from '@utils/translateFontSize';
import { useEffect, useRef } from 'react';
import styled, { css } from 'styled-components';

const ICON_ARROW_RIGHT = require('@assets/images/common/icon_arrow_right.svg');

const InputForTermsBlock = styled.div`
  width: 100%;
`;

const Wrapper = styled.label`
  width: 100%;
  height: 100%;
  display: flex;
  gap: 7px;
  position: relative;
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

  & > h4 {
    display: flex;
    align-items: center;
    gap: 4px;
    color: #000;
    ${css(translateFontSize('M_20'))};

    & > span {
      color: #000;
      ${css(translateFontSize('M_20'))};

      &.direct {
        display: flex;
        align-items: center;
        color: ${palette.black.B70};
        ${css(translateFontSize('R_17'))};
        fill: white;
        cursor: pointer;
        margin-left: 6px; /* gap 이랑 더해서 10px */

        & > img {
          width: 16px;
          height: 16px;
          aspect-ratio: 1/1;
        }
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
  position: absolute;
  top: 3px;
  left: -28px;

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
  margin-top: 10px;
  gap: 10px;

  & > p {
    color: ${palette.black.B100};
    ${css(translateFontSize('R_14'))};
  }
`;

const WrapBox = styled.div<{ h: number }>`
  height: 96px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 15px;
  padding-right: 45px;
  color: ${palette.black.B100};
  border-radius: 10px;
  border: 1px solid ${palette.black.B50};
  position: relative;

  & > p {
    height: 100%;
    ${css(translateFontSize('R_14'))};
    overflow-y: scroll;
    &::-webkit-scrollbar {
      display: none;
    }
    white-space: pre-wrap;
  }

  &::after {
    content: '';
    position: absolute;
    top: ${({ h }) => h + 6}px;
    right: 6px;
    width: 8px;
    height: 36px;
    border-radius: 10px;
    background-color: ${palette.black.B80};
  }
`;

interface IInputForterms {
  name: keyof ITermsOfUse | 'checkAll';
  isRequired?: '필수' | '선택';
  isWrapped?: boolean;
  isChecked?: boolean;
  onClick?: TMouseEventHandler<HTMLInputElement>;
  header: string;
  contents: string;
  // children: React.ReactNode | string;
}

const InputForTerms: React.FC<IInputForterms> = ({
  name,
  isRequired,
  onClick,
  header,
  contents,
  isWrapped,
  isChecked,
}) => {
  const { state, handleScrollY } = useScroll();
  const ref = useRef<HTMLParagraphElement | null>(null);

  const scrollEvent = () => {
    const { clientHeight, scrollHeight, scrollTop } = ref.current!;
    const percent = scrollTop / (scrollHeight - clientHeight);
    handleScrollY(48 * percent);
  };

  useEffect(() => {
    // 스크롤 이벤트 추가
    if (ref.current) {
      ref.current.addEventListener('scroll', scrollEvent);
    }

    return () => {
      // 스크롤 이벤트 제거
      if (ref.current) {
        ref.current.removeEventListener('scroll', scrollEvent);
      }
    };
  }, []);

  return (
    <InputForTermsBlock>
      <Wrapper>
        <input
          type="checkbox"
          name={name}
          required={isRequired === '필수'}
          onClick={onClick}
          checked={isChecked}
        />
        <CheckBox className="checkBox">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
          </svg>
        </CheckBox>
        <h4>
          {isRequired === '필수' ? (
            <span style={{ color: palette.system.blue }}>[필수] </span>
          ) : isRequired === '선택' ? (
            <span style={{ color: palette.black.B100 }}>[선택] </span>
          ) : (
            ''
          )}
          {header}
          {isRequired ? (
            <span className="direct">
              전체
              <img src={ICON_ARROW_RIGHT} alt="→" />
            </span>
          ) : null}
        </h4>
      </Wrapper>
      <Contents>
        {isWrapped ? (
          <WrapBox h={state.y}>
            <p ref={ref}>{contents}</p>
          </WrapBox>
        ) : (
          <p>{contents}</p>
        )}
      </Contents>
    </InputForTermsBlock>
  );
};
export default InputForTerms;
