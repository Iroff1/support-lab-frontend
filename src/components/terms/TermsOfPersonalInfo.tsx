import palette from '@assets/colors';
import { termsForPage, TTypeOfTerms } from '@consts/termsForPage';
import translateFontSize from '@utils/translateFontSize';
import styled, { css } from 'styled-components';

const TermsOfUseBlock = styled.div<{ isPopup: boolean }>`
  width: 100%;
  height: 100%;
  display: flex;
  background-color: ${palette.black.white};
  ${({ isPopup }) =>
    isPopup &&
    css`
      padding-top: 64px;
    `}
`;

const ContentsBlock = styled.div`
  width: 100%;
  height: 100%;
  max-width: 726px;
  margin: 0 auto;
  margin-top: 40px;
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

interface ITermsOfPersonalInfo {
  type: TTypeOfTerms;
  isPopup?: boolean;
}

const TermsOfUse: React.FC<ITermsOfPersonalInfo> = ({
  type,
  isPopup = false,
}) => {
  return (
    <TermsOfUseBlock isPopup={isPopup}>
      <ContentsBlock>
        <h2>{termsForPage[type].title}</h2>
        <p>{termsForPage[type].content}</p>
      </ContentsBlock>
    </TermsOfUseBlock>
  );
};

export default TermsOfUse;
