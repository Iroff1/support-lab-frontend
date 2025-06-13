import palette from '@assets/colors';
import translateFontSize from '@utils/translateFontSize';
import styled, { css } from 'styled-components';
import Responsive from './Responsive.style';

const LOGO_HEADER = require('@assets/images/common/header_logo_pc.png');

export const HeaderBlock = styled.div`
  width: 100%;
  max-height: 64px;
  height: 64px;
  background-color: ${palette.black.white};
  border: 1px solid ${palette.black.B50};
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
  padding: 0 10px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  display: flex;
  align-items: center;
`;

export const HeaderResponsiveBox = styled(Responsive)`
  height: 40px;
  display: flex;
  justify-content: space-between;
`;

export const HeaderLogoBox = styled.div`
  min-width: 128px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: url(${LOGO_HEADER}) center/cover no-repeat;
  cursor: pointer;
`;

export const HeaderNavBox = styled.div`
  height: 100%;
  display: flex;
  /* align-items: center; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const HeaderNavBoxItem = styled.div`
  height: 100%;
  padding: 0 25px;
  white-space: nowrap;
  color: ${palette.black.B700};

  position: relative;
  transition: 0.2s ease padding;

  & > a,
  & > span {
    ${css(translateFontSize('R_18'))};
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.2s ease text-shadow;
    &:hover {
      text-shadow: 0 0 0.8px #333;
    }
  }
  & > span {
    cursor: default;
  }
  &:hover {
    & > .dropDown {
      max-height: 300px;
    }
  }

  @media screen and (max-width: 875px) {
    padding: 0 15px;
    & > a,
    & > span {
      ${css(translateFontSize('R_16'))};
    }
  }
`;

export const HeaderDropDown = styled.div`
  position: absolute;
  left: -5px;
  top: 52px;
  z-index: 105;
  width: 158px;
  height: fit-content;
  max-height: 0px;
  overflow: hidden;
  transition: 0.4s ease max-height;
  box-shadow: 0px 4px 10px 0px #00000040;

  & > ul {
    width: 100%;
    background-color: ${palette.black.white};
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 14px;
    padding: 15px 30px;

    & > li {
      width: 100%;
      height: 25px;

      & > a,
      & > span {
        height: 100%;
        display: flex;
        align-items: center;
        cursor: pointer;

        & > span {
          position: relative;
          ${css(translateFontSize('R_18'))};
        }
        & > span::before {
          position: absolute;
          bottom: 0;
          left: 0;
          content: '';
          height: 1px;
          width: 100%;
          transform: scaleX(0);
          background-color: #333;
          transition: 0.2s ease transform;
        }
        &:hover > span::before {
          transform: scaleX(1);
        }
      }
    }
  }
`;

export const HeaderAuthBox = styled(HeaderNavBoxItem)`
  width: 174px;
  & > .dropDown {
    width: 100%;
  }
`;

export const HeaderAuthBoxButton = styled.div`
  width: 117px;
  height: 40px;
  border-radius: 40px;
  border: 1px solid ${palette.black.B50};
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  cursor: pointer;
  ${css(translateFontSize('R_18'))};
  & > strong {
    width: 95px;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: center;
    ${css(translateFontSize('B_18'))};
  }
`;
