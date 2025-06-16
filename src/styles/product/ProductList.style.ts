import palette from '@assets/colors';
import translateFontSize from '@utils/translateFontSize';
import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  min-width: 320px;
  padding: 0 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProductListBlock = styled.div`
  max-width: 928px;
  width: 100%;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  & > h2 {
    width: 100%;
    ${css(translateFontSize('B_38'))};
    @media screen and (max-width: 1024px) {
      text-align: center;
    }
  }
`;

export const ListItemWrapper = styled.ul`
  margin-top: 40px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 40px;
`;

export const ListItem = styled.li`
  max-width: 444px;
  width: 100%;
  min-height: 612px;
  margin: 0 auto;
  /* margin-bottom: 40px; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-radius: 20px;
  border: 1px solid ${palette.black.B50};
  overflow: hidden;
  position: relative;
  padding-top: 82px;
  padding-left: 31px;
  padding-right: 31px;
  padding-bottom: 34px;

  & > .cardTag {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 46px;
    ${css(translateFontSize('SB_17'))};
    color: ${palette.black.white};
    background-color: ${palette.main.main};
    padding: 10px 32px;
    display: flex;
    align-items: center;
  }
  & > .buttonBox {
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 10px;
  }
`;

export const ListItemContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;

  & > div {
    width: 100%;
    &.title {
      & > p {
        ${css(translateFontSize('R_20'))};
      }
      & > h3 {
        ${css(translateFontSize('B_20'))};
      }
    }
    &.price {
      height: 30px;
      display: flex;
      align-items: center;
      font-size: 32px;
      font-weight: 300;
      & > span {
        ${css(translateFontSize('R_14'))};
        color: ${palette.black.B300};
      }
    }
    &.line {
      height: 1px;
      background-color: ${palette.black.B50};
    }
    &.contents {
      width: 100%;
      color: ${palette.black.B400};
      & > .contentItem {
        width: 100%;
        display: flex;
        /* align-items: center; */
        position: relative;
        gap: 4px;
        & > svg {
          width: 24px;
          height: 24px;
          aspect-ratio: 1/1;
        }
        & > .openEvent {
          min-width: 76px;
          max-height: 24px;
          border-radius: 20px;
          background-color: ${palette.main.B50};
          color: ${palette.main.B200};
          ${css(translateFontSize('SB_13'))};
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 2px 8px;
        }
      }
    }
    &.procedure {
      color: ${palette.black.B400};
      & > h4 {
        ${css(translateFontSize('SB_17'))}
      }
    }
  }
`;

export const ItemButton = styled.button<{ inverse?: boolean }>`
  max-width: 180px;
  width: 100%;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  background-color: ${palette.main.main};
  color: ${palette.black.white};
  border: 0;
  ${css(translateFontSize('SB_18'))};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.8);
  }

  ${({ inverse }) =>
    inverse &&
    css`
      background-color: transparent;
      color: ${palette.black.black};
      border: 2px solid ${palette.black.black};
    `}
`;
