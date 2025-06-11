import translateFontSize from '@utils/translateFontSize';
import palette from '@assets/colors';
import styled, { css } from 'styled-components';

const DocumentGuideButtonBlock = styled.div`
  width: fit-content;
  padding: 6px;
  border-radius: 4px;
  ${css(translateFontSize('SB_13'))};
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 4px;
  color: ${palette.black.B80};
  border: 1px solid ${palette.black.B50};
  transition: 0.2s ease color, 0.2s ease border;

  & > svg {
    fill: ${palette.black.B80};
    transition: 0.2s ease fill;
  }

  &:hover {
    color: ${palette.main.main};
    border-color: ${palette.main.main};
    & > svg {
      fill: ${palette.main.main};
    }
  }
`;

const DocumentGuideButton = () => {
  return (
    <DocumentGuideButtonBlock>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
      >
        <path
          d="M2.0013 10.6667C1.64575 10.6667 1.33464 10.5333 1.06797 10.2667C0.801302 10 0.667969 9.68889 0.667969 9.33333V8C0.667969 7.92222 0.67908 7.83889 0.701302 7.75C0.723524 7.66111 0.745747 7.57778 0.767969 7.5L2.76797 2.8C2.86797 2.57778 3.03464 2.38889 3.26797 2.23333C3.5013 2.07778 3.74575 2 4.0013 2H11.3346V10.6667L7.33464 14.6333C7.16797 14.8 6.97064 14.8973 6.74264 14.9253C6.51464 14.9533 6.2953 14.9116 6.08464 14.8C5.87397 14.6884 5.71841 14.5329 5.61797 14.3333C5.51752 14.1338 5.4953 13.9282 5.5513 13.7167L6.3013 10.6667H2.0013ZM10.0013 10.1V3.33333H4.0013L2.0013 8V9.33333H8.0013L7.1013 13L10.0013 10.1ZM13.3346 2C13.7013 2 14.0153 2.13067 14.2766 2.392C14.538 2.65333 14.6684 2.96711 14.668 3.33333V9.33333C14.668 9.7 14.5375 10.014 14.2766 10.2753C14.0157 10.5367 13.7017 10.6671 13.3346 10.6667H11.3346V9.33333H13.3346V3.33333H11.3346V2H13.3346Z"
          fill="#949494"
        />
      </svg>
      <span>가이드를 봐도 잘 모르겠어요</span>
    </DocumentGuideButtonBlock>
  );
};

export default DocumentGuideButton;
