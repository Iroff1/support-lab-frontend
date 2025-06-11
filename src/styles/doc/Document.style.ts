import palette from '@assets/colors';
import translateFontSize from '@utils/translateFontSize';
import styled, { css } from 'styled-components';

export const DocumentTextBlock = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;

  & > h4 {
    ${css(translateFontSize('M_17'))};
  }
  & > span {
    color: ${palette.black.B400};

    & > a,
    & > a:link,
    & > a:visited {
      color: ${palette.system.blue};
      text-decoration: underline;
      cursor: pointer;
    }
  }
  & > img {
    width: 100%;
    object-fit: contain;
  }
`;

export const DocumentInputBlock = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  & > p > span.caution {
    margin-left: 8px;
    color: ${palette.system.red};
  }
`;
