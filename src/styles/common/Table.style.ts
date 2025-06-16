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
`;
export const TableLeft = styled.div`
  min-width: 140px;
  border-bottom: 1px solid ${palette.black.B50};
  background-color: ${palette.black.B20};
  display: flex;
  justify-content: flex-end;
  padding-top: 14px;
  padding-right: 19px;
  ${css(translateFontSize('SB_17'))};
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
`;
