import { Link } from 'react-router';
import React from 'react';
import Blank from './Blank';
import ConsultButton from './ConsultButton';
import { ILocalAuth } from '@models/auth.model';
import {
  HeaderNavBoxItem,
  HeaderBlock,
  HeaderLogoBox,
  HeaderNavBox,
  HeaderResponsiveBox,
  HeaderAuthBox,
  HeaderAuthBoxButton,
  HeaderDropDown,
} from '@styles/common/Header.style';
import { CustomerServiceList, UserServiceList } from '@consts/csList';

interface IHeaderProps {
  auth: ILocalAuth | null;
  handleLogin: () => void;
  handleLogout: () => void;
  handleGoHome: () => void;
}

const Header: React.FC<IHeaderProps> = ({
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
          <HeaderNavBoxItem>
            <Link to={'/documents'}>사업계획서 작성</Link>
          </HeaderNavBoxItem>
          <HeaderNavBoxItem>
            <Link to={'/products'}>요금제</Link>
          </HeaderNavBoxItem>
          <HeaderNavBoxItem>
            <span>고객센터</span>
            <Blank width="100%" height="12px" />
            <HeaderDropDown className="dropDown">
              <ul>
                {CustomerServiceList.map((item, index) => (
                  <li key={index}>
                    <Link to={item.path}>
                      <span>{item.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </HeaderDropDown>
          </HeaderNavBoxItem>

          <HeaderNavBoxItem>
            <ConsultButton>무료 상담</ConsultButton>
          </HeaderNavBoxItem>
        </HeaderNavBox>

        <HeaderAuthBox>
          <HeaderAuthBoxButton onClick={handleLogin}>
            {auth ? (
              <>
                <strong>{auth.name}</strong> 님
              </>
            ) : (
              '로그인'
            )}
          </HeaderAuthBoxButton>
          <Blank width="100%" height="12px" />

          {auth ? (
            <HeaderDropDown className="dropDown">
              <ul>
                {UserServiceList.map((item, index) => (
                  <li key={index}>
                    <Link to={item.path}>
                      <span>{item.title}</span>
                    </Link>
                  </li>
                ))}
                <li>
                  <span onClick={handleLogout}>
                    <span>로그아웃</span>
                  </span>
                </li>
              </ul>
            </HeaderDropDown>
          ) : null}
        </HeaderAuthBox>
      </HeaderResponsiveBox>
    </HeaderBlock>
  );
};

export default Header;
