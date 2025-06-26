import palette from '@assets/colors/index';
import translateFontSize from '@utils/translateFontSize';
import styled, { css } from 'styled-components';

export const MainBoxForMeritBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const BoxLayer = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  color: ${palette.black.white};

  /* &:nth-child(2n) {
    flex-direction: row-reverse;
  } */
  &:nth-child(1) {
    background-color: ${palette.main.B200};
  }
  &:nth-child(2) {
    background-color: ${palette.main.B100};
  }
  &:nth-child(3) {
    background-color: ${palette.main.B75};
    color: ${palette.black.black};
  }
  &:nth-child(4) {
    background-color: ${palette.main.B50};
    color: ${palette.black.black};
    flex-direction: row-reverse;
  }
`;

export const BoxUnified = styled.div`
  width: 100%;
  max-width: 917px;
  /* height: 511px; */
  margin: 0 auto;
  padding: 26.5px 0 24.5px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* flex-wrap: wrap; */

  &.reverse {
    flex-direction: row-reverse;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    &.reverse {
      flex-direction: column;
    }
  }
`;

export const BoxSeperated = styled.div`
  width: 50%;
  /* height: 511px; */
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
  }

  // 이미지 박스 옵션
`;

export const BoxPost = styled.div`
  max-width: 496px;
  width: 100%;
  /* height: 142px; */
  padding: 0 20px;

  h2 {
    ${css(translateFontSize('B_29'))}
  }
  p {
    margin-top: 20px;
    ${css(translateFontSize('R_17'))}
  }

  @media (max-width: 768px) {
    padding: 20px 20px;

    h2,
    p {
      word-break: keep-all;
      display: flex;
      justify-content: center;
    }
  }
`;

export const BoxImage = styled.div`
  /* width: 100%; */
  height: 460px;
  display: flex;
  align-items: center;
  & > img {
    height: 100%;
  }

  &.left {
    justify-content: end;
  }
  &.right {
    justify-content: start;
  }
  @media (max-width: 768px) {
    &.left,
    &.right {
      justify-content: center;
    }
  }

  &.wrap {
    height: 511px;
    /* height: 100%; */
    justify-content: start;
    overflow: hidden;
    padding-top: 0px;
    padding-bottom: 0px;
    & > img {
      height: 100%;
    }
  }
`;
