import palette from '@assets/colors';
import translateFontSize from '@utils/translateFontSize';
import styled, { css } from 'styled-components';

export const DocumentUploadButtonBlock = styled.label`
  width: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 8px 14px;
  border-radius: 4px;
  border: 1px solid ${palette.black.B50};
  color: ${palette.system.blue};
  ${css(translateFontSize('SB_15'))};
  cursor: pointer;

  & > svg {
    fill: ${palette.system.blue};
  }
  & > input[type='file'] {
    display: none;
  }
`;

const DocumentUploadButton = () => {
  return (
    <DocumentUploadButtonBlock>
      <input type="file" />
      <svg
        width="20"
        height="21"
        viewBox="0 0 20 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4.9987 17.1667C4.54036 17.1667 4.14814 17.0036 3.82203 16.6775C3.49592 16.3514 3.33259 15.9589 3.33203 15.5V13.8333C3.33203 13.5972 3.41203 13.3995 3.57203 13.24C3.73203 13.0806 3.92981 13.0006 4.16536 13C4.40092 12.9995 4.59898 13.0795 4.75953 13.24C4.92009 13.4006 4.99981 13.5983 4.9987 13.8333V15.5H14.9987V13.8333C14.9987 13.5972 15.0787 13.3995 15.2387 13.24C15.3987 13.0806 15.5965 13.0006 15.832 13C16.0676 12.9995 16.2656 13.0795 16.4262 13.24C16.5868 13.4006 16.6665 13.5983 16.6654 13.8333V15.5C16.6654 15.9583 16.5023 16.3508 16.1762 16.6775C15.8501 17.0042 15.4576 17.1672 14.9987 17.1667H4.9987ZM9.16536 7.04168L7.60286 8.60418C7.4362 8.77085 7.23842 8.85085 7.00953 8.84418C6.78064 8.83751 6.58259 8.75057 6.41536 8.58335C6.26259 8.41668 6.18259 8.22224 6.17536 8.00001C6.16814 7.77779 6.24814 7.58335 6.41536 7.41668L9.41536 4.41668C9.4987 4.33335 9.58898 4.27446 9.6862 4.24001C9.78342 4.20557 9.88759 4.18807 9.9987 4.18751C10.1098 4.18696 10.214 4.20446 10.3112 4.24001C10.4084 4.27557 10.4987 4.33446 10.582 4.41668L13.582 7.41668C13.7487 7.58335 13.8287 7.77779 13.822 8.00001C13.8154 8.22224 13.7354 8.41668 13.582 8.58335C13.4154 8.75001 13.2176 8.83696 12.9887 8.84418C12.7598 8.8514 12.5618 8.7714 12.3945 8.60418L10.832 7.04168V13C10.832 13.2361 10.752 13.4342 10.592 13.5942C10.432 13.7542 10.2343 13.8339 9.9987 13.8333C9.76314 13.8328 9.56536 13.7528 9.40536 13.5933C9.24536 13.4339 9.16536 13.2361 9.16536 13V7.04168Z"
          fill="#0091EA"
        />
      </svg>
      <span>파일 추가</span>
    </DocumentUploadButtonBlock>
  );
};

export default DocumentUploadButton;
