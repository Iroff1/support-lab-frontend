import styled, { css } from 'styled-components';
import translateFontSize from '@utils/translateFontSize';
import palette from '@assets/colors/index';
import { Link } from 'react-router-dom';
import Responsive from '@styles/common/Responsive.style';

const [ICON_BLOG, ICON_INSTA, ICON_YOUTUBE] = [
  require('@assets/images/common/icon_blog.png'),
  require('@assets/images/common/icon_insta.png'),
  require('@assets/images/common/icon_youtube.png'),
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
  gap: 10px;
`;
const CompanyInfoBlock = styled.div`
  & > p {
    color: ${palette.black.B80};
    margin: 0 auto;
    text-align: center;
    ${css(translateFontSize('R_13'))};

    & > a {
      ${css(translateFontSize('R_13'))};
      cursor: pointer;
      transition: 0.2s ease color;
      &:hover {
        color: ${palette.black.B400};
      }
    }
  }
`;

const CopyrightBlock = styled.div`
  & > p {
    color: ${palette.black.B80};
    margin: 0 auto;
    text-align: center;
    ${css(translateFontSize('R_13'))}
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
    cursor: pointer;
    transition: 0.2s ease background-color;
    &:hover {
      background-color: ${palette.black.B400};
    }

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
            상호: 지원사업연구소 | 사업자등록번호: 680-09-02976 | 대표: 김민상 |
            통신판매번호: 제 2025-경기김포-33호
            <br />
            주소: 경기도 김포시 양촌읍 양곡로 495, 6층 | 고객센터:
            0507-1402-3531 | 이메일: official@iroff.kr
            <br />
            <Link to={'/terms/businessPlan'} target="_blank">
              이용약관
            </Link>{' '}
            |{' '}
            <Link to={'/terms/personalInfo'} target="_blank">
              개인정보 수집 및 이용
            </Link>{' '}
            |{' '}
            <Link to={'/terms/marketing'} target="_blank">
              이벤트·혜택 정보 수신
            </Link>{' '}
            | <Link to={'/customerService/inquire'}>고객센터</Link>
          </p>
        </CompanyInfoBlock>

        <CopyrightBlock>
          <p>Copyright © 2025 IROFFICE. All Rights Reserved.</p>
        </CopyrightBlock>

        <SocialDirectBlock>
          <div>
            <img src={ICON_BLOG} alt="Blog" />
          </div>
          <div>
            <img src={ICON_INSTA} alt="Insta" />
          </div>
          <div>
            <img src={ICON_YOUTUBE} alt="Youtube" />
          </div>
        </SocialDirectBlock>
      </FooterResponsiveBlock>
    </FooterBlock>
  );
};
export default Footer;
