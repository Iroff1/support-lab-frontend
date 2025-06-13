import palette from '@assets/colors';
import translateFontSize from '@utils/translateFontSize';
import styled, { css } from 'styled-components';

export const ICON_ARROW_RIGHT = require('@assets/images/common/icon_arrow_right.svg');

export const UserModifyInfoBlock = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 500px;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  width: 100%;
  font-weight: bold;
  color: #1c1c1c;
  margin-bottom: 48px;
  ${css(translateFontSize('B_38'))};
`;

export const ModifyForm = styled.div`
  width: 100%;
  overflow: hidden;
  border-top: 2px solid ${palette.black.B70};
`;

/** 테이블 행 */
export const FormRow = styled.form`
  display: flex;
  border-bottom: 1px solid ${palette.black.B50};
  &:last-child {
    border-bottom: none;
  }
`;

/** 테이블 좌측 열 */
export const FormLeft = styled.div`
  width: 140px;
  background-color: ${palette.black.B20};
  padding-top: 14px;
  padding-right: 19px;
  ${css(translateFontSize('SB_17'))};
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  border-right: 1px solid ${palette.black.B50};

  & > span {
    color: ${palette.black.black};
    ${css(translateFontSize('SB_17'))};
  }
`;

/** 테이블 우측 열 */
export const FormRight = styled.div`
  flex: 1;
  padding-top: 13px;
  padding-left: 11px;
  padding-bottom: 12px;
  display: flex;
  align-items: center;

  // 세로 정렬
  &.column {
    flex-direction: column;
    gap: 12px;
    align-items: stretch;
  }

  &.space-between {
    justify-content: space-between;
  }
`;

export const InputGroup = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const Blank = styled.div`
  min-width: 53px;
  height: 100%;
`;

export const ActionButton = styled.button`
  min-width: 53px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${palette.black.B40};
  border-radius: 6px;
  background-color: ${palette.black.white};
  color: ${palette.black.black};
  ${css(translateFontSize('R_17'))};
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #f5f5f5;
  }
`;

export const AccountDeletionButton = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  background: none;
  border: none;
  color: ${palette.black.B90};
  cursor: pointer;
  transition: color 0.2s;

  &:hover {
    color: #1c1c1c;
  }
  & > img {
    width: 16px;
    height: 16px;
    aspect-ratio: 1/1;
  }
`;

export const BottomSection = styled.div`
  margin-top: 12px;
  display: flex;
  justify-content: flex-end;
`;
