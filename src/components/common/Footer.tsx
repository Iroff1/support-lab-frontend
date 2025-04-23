import React from 'react';
import styled from 'styled-components';
import Responsive from './Responsive';

const FooterBlock = styled.div`
  width: 100%;
  height: 200px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
  background-color: white;
`;
const FooterResponsiveBlock = styled(Responsive)`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const CompanyInfoBlock = styled.div`
  & > p {
    color: #949494;
    margin: 0 auto;
    text-align: center;
  }
`;

const CopyrightBlock = styled.div`
  margin: 20px 0;
  & > p {
    color: #949494;
    margin: 0 auto;
    text-align: center;
  }
`;

const SocialDirectBlock = styled.div`
  display: flex;
  & > div {
    width: 32px;
    height: 32px;
    padding: 2px;
    border-radius: 50%;
    fill: white;
    background-color: #949494;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 20px;
    & > svg {
      width: 70%;
      height: 70%;
    }
  }
`;

const Footer = () => {
  return (
    <FooterBlock>
      <FooterResponsiveBlock>
        <CompanyInfoBlock>
          <p>
            사업자등록번호: 680-09-02976 | 대표: 김민상 | 통신판매업신고번호: 제
            2025-경기김포-33호 | 주소: 경기도 김포시 양촌읍 양곡로 495, 6층
            605-EC38호
          </p>
          <p>
            고객센터: 0507-1402-3531 | 이메일: official@iroff.kr |
            개인정보처리방침 | 이용약관 | 고객센터
          </p>
        </CompanyInfoBlock>

        <CopyrightBlock>
          <p>Copyright © 2025 IROFFICE. All Rights Reserved.</p>
        </CopyrightBlock>

        <SocialDirectBlock>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path d="M0 64C0 46.3 14.3 32 32 32c229.8 0 416 186.2 416 416c0 17.7-14.3 32-32 32s-32-14.3-32-32C384 253.6 226.4 96 32 96C14.3 96 0 81.7 0 64zM0 416a64 64 0 1 1 128 0A64 64 0 1 1 0 416zM32 160c159.1 0 288 128.9 288 288c0 17.7-14.3 32-32 32s-32-14.3-32-32c0-123.7-100.3-224-224-224c-17.7 0-32-14.3-32-32s14.3-32 32-32z" />
            </svg>
          </div>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
            </svg>
          </div>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
              <path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z" />
            </svg>
          </div>
        </SocialDirectBlock>
      </FooterResponsiveBlock>
    </FooterBlock>
  );
};
export default Footer;
