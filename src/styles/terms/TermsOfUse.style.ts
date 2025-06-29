import palette from '@assets/colors';
import translateFontSize from '@utils/translateFontSize';
import styled, { css } from 'styled-components';

export const TermsOfUseBlock = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  background-color: ${palette.black.white};
  padding: 40px 20px 94px 20px;
`;

export const ContentsBlock = styled.div`
  width: 100%;
  height: 100%;
  max-width: 726px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 44px;

  & > h2 {
    font-size: 24px;
    font-weight: 700;
    ${css(translateFontSize('B_29'))};
  }
  & > p {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    white-space: pre-wrap;
    color: ${palette.black.B400};
  }
`;

export const TermSRetentionBlock = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  border: 1px solid #00000020;

  & > .row {
    width: 100%;
    border-top: 1px solid #00000020;
    display: flex;
    &:first-child {
      border-top: none;
      & > div {
        word-break: keep-all;
      }
    }

    & > div {
      padding: 20px;
      color: #00000080;
      display: flex;
      align-items: center;

      &:nth-child(1) {
        flex: 6;
      }
      &:nth-child(2) {
        border-left: 1px solid #00000020;
        flex: 2;
        min-width: 81px;
      }
      &:nth-child(3) {
        border-left: 1px solid #00000020;
        flex: 5;
      }
    }
  }
`;
