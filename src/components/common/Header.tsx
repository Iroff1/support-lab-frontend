import styled, { css } from 'styled-components';
import Responsive from './Responsive';
import { Link } from 'react-router';
import Button from './Button';
import palette from '@colors/index';
import tranlateFontSize from '@hooks/tranlateFontSize';

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

const HeaderResponsiveBlock = styled(Responsive)`
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeaderLogoBox = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  img {
    width: 128px;
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
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  text-wrap: nowrap;
  color: ${palette.black.B700};
  ${css(tranlateFontSize('B_18'))};
  transition: 0.2s ease color, 0.2s ease height;

  :hover {
    color: white;
  }
`;

const ConsultButton = styled(Button)`
  ${css(tranlateFontSize('B_18'))};
  background-color: ${palette.system.blue};
  color: ${palette.black.white};
  border: none;
`;

const AuthButton = styled(Button)`
  ${css(tranlateFontSize('B_18'))};
`;

const Header = () => {
  return (
    <HeaderBlock>
      <HeaderResponsiveBlock>
        <HeaderLogoBox>
          <img src={require('@images/header_logo_pc.png')} alt="" />
        </HeaderLogoBox>

        <HeaderNavBox>
          <CategoryBox>
            <Link to={'/'}>사업 계획서 작성</Link>
          </CategoryBox>
          <CategoryBox>
            <Link to={'/'}>요금제</Link>
          </CategoryBox>
          <CategoryBox>
            <Link to={'/'}>고객센터</Link>
          </CategoryBox>
          <CategoryBox>
            <ConsultButton>무료 상담</ConsultButton>
          </CategoryBox>
        </HeaderNavBox>

        <AuthButton>로그인</AuthButton>
      </HeaderResponsiveBlock>
    </HeaderBlock>
  );
};

export default Header;
