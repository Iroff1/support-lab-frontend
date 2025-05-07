import styled, { css } from 'styled-components';
import Responsive from './Responsive';
import tranlateFontSize from '@utils/tranlateFontSize';
import palette from '@colors/index';

const [ICON_BLOG, ICON_INSTA, ICON_YOUTUBE] = [
  require('@assets/images/common/icon_blog.png'),
  require('@assets/images/common/icon_blog.png'),
  require('@assets/images/common/icon_blog.png'),
];

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
    color: ${palette.black.B80};
    margin: 0 auto;
    text-align: center;
    ${css(tranlateFontSize('R_13'))}
  }
`;

const CopyrightBlock = styled.div`
  margin: 20px 0;
  & > p {
    color: ${palette.black.B80};
    margin: 0 auto;
    text-align: center;
    ${css(tranlateFontSize('R_13'))}
  }
`;

const SocialDirectBlock = styled.div`
  display: flex;
  gap: 20px;
  & > div {
    width: 32px;
    height: 32px;
    padding: 2px;
    border-radius: 50%;
    fill: white;
    background-color: ${palette.black.B80};
    display: flex;
    justify-content: center;
    align-items: center;
    & > img {
      width: 28px;
      height: 28px;
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
            <img src={ICON_BLOG} alt="" />
          </div>
          <div>
            <img src={ICON_INSTA} alt="" />
          </div>
          <div>
            <img src={ICON_YOUTUBE} alt="" />
          </div>
        </SocialDirectBlock>
      </FooterResponsiveBlock>
    </FooterBlock>
  );
};
export default Footer;
