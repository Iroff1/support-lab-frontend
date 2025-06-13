import palette from '@assets/colors';
import translateFontSize from '@utils/translateFontSize';
import styled, { css } from 'styled-components';

export const Wrapper = styled.div<{ $hide: boolean }>`
  position: fixed;
  top: 64px;
  left: ${({ $hide }) => ($hide ? -210 : 0)}px;
  z-index: 5;
  width: 210px;
  height: calc(100vh - 64px);
  padding: 10px;
  background-color: ${palette.black.B20};
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
  transition: 0.2s ease left;
`;

export const CategoryList = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ScrollBar = styled.div<{ $h: number }>`
  position: absolute;
  top: ${({ $h }) => $h + 30}px;
  right: 2px;
  width: 8px;
  height: 230px;
  background-color: ${palette.black.B40};
  border-radius: 10px;
`;

export const Subject = styled.div`
  & > h3 {
    ${css(translateFontSize('SB_18'))};
  }

  & > ul {
    margin-top: 14px;
    & > li {
      padding: 7px;
      border-radius: 6px;
      color: ${palette.black.B500};
      cursor: pointer;
      transition: 0.2s ease background-color;

      &:hover,
      &.on {
        background-color: ${palette.black.B40};
      }
    }
  }
`;

export const Opener = styled.div`
  width: 40px;
  height: 40px;
  position: absolute;
  top: 50%;
  right: -45px;
  transform: translateY(-50%);
  border-radius: 8px;
  transition: 0.2s ease background-color;
  cursor: pointer;

  & > svg {
    width: 100%;
    height: 100%;
    transition: 0.2s ease transform;
  }

  &:hover {
    background-color: #00000020;
  }

  &.on {
    & > svg {
      transform: rotate(180deg);
    }
  }
`;
