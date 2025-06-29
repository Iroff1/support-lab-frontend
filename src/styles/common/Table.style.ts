import palette from '@assets/colors';
import translateFontSize from '@utils/translateFontSize';
import styled, { css } from 'styled-components';

export const Table = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-top: 2px solid ${palette.black.B70};
`;
export const TableRow = styled.div`
  width: 100%;
  min-height: 52px;
  display: flex;

  & > .col {
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  @media screen and (max-width: 424px) {
    flex-direction: column;
    & > div {
      border-left: 1px solid ${palette.black.B50};
      border-right: 1px solid ${palette.black.B50};
    }
  }
`;
export const TableLeft = styled.div`
  min-width: 140px;
  border-bottom: 1px solid ${palette.black.B50};
  background-color: ${palette.black.B20};
  display: flex;
  justify-content: flex-end;
  padding: 14px 19px 0 0;
  ${css(translateFontSize('SB_17'))};

  @media screen and (max-width: 424px) {
    justify-content: center;
    padding: 14px 0px 15px 0;
  }
`;
export const TableRight = styled.div`
  width: 100%;
  border-bottom: 1px solid ${palette.black.B50};
  border-left: 1px solid ${palette.black.B50};
  border-bottom: 1px solid ${palette.black.B50};
  padding: 12px 0 10px 14px;

  & > strong {
    ${css(translateFontSize('B_18'))};
  }

  @media screen and (max-width: 424px) {
    padding: 12px 14px 10px 14px;
  }
`;
