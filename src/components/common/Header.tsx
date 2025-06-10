import styled, { css } from 'styled-components';
import Responsive from './Responsive';
import { Link } from 'react-router';
import palette from '@assets/colors/index';
import translateFontSize from '@utils/translateFontSize';
import React from 'react';
import Blank from './Blank';
import ConsultButton from './ConsultButton';
import { ILocalAuth } from '@models/auth.model';

const LOGO_HEADER = require('@assets/images/common/header_logo_pc.png');

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
  min-width: 128px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: url(${LOGO_HEADER}) center/cover no-repeat;
  cursor: pointer;
`;

const HeaderNavBox = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

const CategoryBox = styled.div`
  height: 100%;
  padding: 0 25px;
  white-space: nowrap;
  color: ${palette.black.B700};
  ${css(translateFontSize('R_18'))};
  position: relative;

  & > a,
  & > span {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.2s ease text-shadow;
    &:hover {
      text-shadow: 0 0 0.8px #333;
    }
  }
  & > span {
    cursor: default;
  }
  & > button {
    margin: 0 auto;
  }

  & > .dropDown {
    position: absolute;
    left: -5px;
    top: 52px;
    z-index: 1;

    width: 158px;
    max-height: 0px;
    overflow: hidden;
    transition: 0.4s ease max-height;
    box-shadow: 0px 4px 10px 0px #00000040;

    & > ul {
      width: 100%;
      background-color: ${palette.black.white};
      margin: 0;
      display: flex;
      flex-direction: column;
      gap: 14px;
      padding: 15px 30px;

      & > li {
        width: 100%;
        height: 25px;

        & > a,
        & > span {
          height: 100%;
          display: flex;
          align-items: center;
          cursor: pointer;

          & > span {
            position: relative;
            ${css(translateFontSize('R_18'))};
          }
          & > span::before {
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
          &:hover > span::before {
            transform: scaleX(1);
          }
        }
      }
    }
  }

  &:hover {
    & > .dropDown {
      max-height: 300px;
    }
  }
`;

const AuthBox = styled(CategoryBox)`
  width: 174px;
  & > .dropDown {
    width: 100%;
  }
`;

const AuthButton = styled.div`
  width: 117px;
  height: 40px;
  border-radius: 40px;
  border: 1px solid ${palette.black.B50};
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  cursor: pointer;
  ${css(translateFontSize('R_18'))};
  & > strong {
    ${css(translateFontSize('B_18'))};
  }
`;

interface IHeader {
  auth: ILocalAuth | null;
  handleLogin: () => void;
  handleLogout: () => void;
  handleGoHome: () => void;
}

const Header: React.FC<IHeader> = ({
  auth,
  handleLogin,
  handleLogout,
  handleGoHome,
}) => {
  return (
    <HeaderBlock>
      <HeaderResponsiveBox>
        <HeaderLogoBox onClick={handleGoHome} />

        <HeaderNavBox>
          <CategoryBox>
            <Link to={'/documents'}>사업 계획서 작성</Link>
          </CategoryBox>
          <CategoryBox>
            <Link to={'/products'}>요금제</Link>
          </CategoryBox>
          <CategoryBox>
            <span>고객센터</span>
            <Blank width="100%" height="12px" />
            <div className="dropDown">
              <ul>
                <li>
                  <Link to={'/customerService/supportBusinesses'}>
                    <span>지원사업 정보</span>
                  </Link>
                </li>
                <li>
                  <Link to={'/customerService/questions'}>
                    <span>자주하는 질문</span>
                  </Link>
                </li>
                <li>
                  <Link to={'/customerService/inquire'}>
                    <span>문의하기</span>
                  </Link>
                </li>
              </ul>
            </div>
          </CategoryBox>

          <CategoryBox>
            <ConsultButton>무료 상담</ConsultButton>
          </CategoryBox>
        </HeaderNavBox>

        <AuthBox>
          <AuthButton onClick={handleLogin}>
            {auth ? (
              <>
                <strong>{auth.name}</strong> 님
              </>
            ) : (
              '로그인'
            )}
          </AuthButton>
          <Blank width="100%" height="12px" />

          {auth ? (
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
                  <Link to={'/user/modifyInfo'}>
                    <span>개인정보 수정</span>
                  </Link>
                </li>
                <li>
                  <Link to={'/'}>
                    <span>문의 내역</span>
                  </Link>
                </li>
                <li>
                  <span onClick={handleLogout}>
                    <span>로그아웃</span>
                  </span>
                </li>
              </ul>
            </div>
          ) : null}
        </AuthBox>
      </HeaderResponsiveBox>
    </HeaderBlock>
  );
};

export default Header;
