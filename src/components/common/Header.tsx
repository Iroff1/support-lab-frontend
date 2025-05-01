import styled, { css } from 'styled-components';
import Responsive from './Responsive';
import { Link, useNavigate } from 'react-router';
import Button from './Button';
import palette from '@colors/index';
import tranlateFontSize from '@hooks/tranlateFontSize';
import React from 'react';

const LOGO_HEADER = require('@images/common/header_logo_pc.png');

const HeaderBlock = styled.div`
  width: 100%;
  height: 64px;
  background-color: ${palette.black.white};
  border: 1px solid ${palette.black.B50};
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
  padding: 0 10px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  display: flex;
  align-items: center;
`;

const HeaderResponsiveBox = styled(Responsive)`
  height: 40px;
  display: flex;
  justify-content: space-between;
`;

const HeaderLogoBox = styled.div`
  width: 128px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: url(${LOGO_HEADER}) center/cover no-repeat;
  img {
    width: 100%;
  }
`;

const HeaderNavBox = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

const CategoryBox = styled.div`
  width: 140px;
  height: 100%;
  text-wrap: nowrap;
  color: ${palette.black.B700};
  ${css(tranlateFontSize('R_18'))};

  & > a {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.2s ease text-shadow;
    &:hover {
      text-shadow: 0 0 0.8px #333;
    }
  }
  & > button {
    margin: 0 auto;
  }

  & > .blank {
    width: 100%;
    height: 12px;
    background-color: transparent;
  }

  & > .dropDown {
    width: 100%;
    height: 0px;
    overflow: hidden;
    transition: 0.2s ease height;

    & > ul {
      width: 100%;
      background-color: ${palette.black.white};
      margin: 0;
      display: flex;
      flex-direction: column;
      padding: 15px 0px;
      box-sizing: content-box;
      & > li {
        width: 100%;
        height: 32px;
        & > a {
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;

          &:hover > span::before {
            transform: scaleX(1);
          }
          & > span {
            position: relative;
            &::before {
              position: absolute;
              bottom: 0;
              left: 0;
              content: '';
              height: 1px;
              width: 100%;
              transform: scaleX(0);
              background-color: #333;
              transition: 0.2s ease transform;
            }
          }
        }
      }
    }
  }

  &:hover {
    & > .dropDown {
      height: 126px;
    }
  }
`;

const ConsultButton = styled(Button)`
  background-color: ${palette.system.blue};
  color: ${palette.black.white};
  border: none;
`;

const AuthBox = styled(CategoryBox)`
  width: 174px;

  &:hover > .dropDown {
    height: 156px;
  }
`;

const AuthButton = styled(Button)``;

interface IHeaderProps {
  showModal?: () => void;
}

const Header: React.FC<IHeaderProps> = ({ showModal }) => {
  const navigate = useNavigate();

  return (
    <HeaderBlock>
      <HeaderResponsiveBox>
        <HeaderLogoBox></HeaderLogoBox>

        <HeaderNavBox>
          <CategoryBox>
            <Link to={'/'}>사업 계획서 작성</Link>
          </CategoryBox>
          <CategoryBox>
            <Link to={'/'}>요금제</Link>
          </CategoryBox>
          <CategoryBox>
            <Link to={'/'}>고객센터</Link>
            <div className="blank" />
            <div className="dropDown">
              <ul>
                <li>
                  <Link to={'/'}>
                    <span>지원사업 정보</span>
                  </Link>
                </li>
                <li>
                  <Link to={'/'}>
                    <span>자주하는 질문</span>
                  </Link>
                </li>
                <li>
                  <Link to={'/'}>
                    <span>문의하기</span>
                  </Link>
                </li>
              </ul>
            </div>
          </CategoryBox>
          <CategoryBox>
            <ConsultButton onClick={showModal}>무료 상담</ConsultButton>
          </CategoryBox>
        </HeaderNavBox>

        <AuthBox>
          <AuthButton onClick={() => navigate('/auth')}>로그인</AuthButton>
          <div className="blank" />
          <div className="dropDown">
            <ul>
              <li>
                <Link to={'/'}>
                  <span>사업계획서 관리</span>
                </Link>
              </li>
              <li>
                <Link to={'/'}>
                  <span>구매내역</span>
                </Link>
              </li>
              <li>
                <Link to={'/'}>
                  <span>개인정보 수정</span>
                </Link>
              </li>
              <li>
                <Link to={'/'}>
                  <span>로그아웃</span>
                </Link>
              </li>
            </ul>
          </div>
        </AuthBox>
      </HeaderResponsiveBox>
    </HeaderBlock>
  );
};

export default Header;
