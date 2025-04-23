import styled from 'styled-components';
import Responsive from './Responsive';
import { Link } from 'react-router';
import Button from './Button';

const HeaderBlock = styled.div`
  width: 100%;
  height: 64px;
  background-color: white;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
  padding: 12px 10px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
`;

const HeaderResponsiveBlock = styled(Responsive)`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > div:nth-child(1) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  & > div:nth-child(2) {
    height: 100%;
    display: flex;
    align-items: center;
    & > ul {
      height: 100%;
      display: flex;
      & > li {
        width: 140px;
        height: 100%;
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        text-wrap: nowrap;
        font-weight: 600;
        transition: 0.2s ease background-color;
        &:hover {
          background-color: #eee;
        }
      }
    }
  }
  & > div:nth-child(3) {
  }
`;

const ConsultButton = styled(Button)`
  background-color: dodgerblue;
  font-size: 1.25rem;
  color: white;
  border: none;
`;

const Header = () => {
  return (
    <HeaderBlock>
      <HeaderResponsiveBlock>
        <div>logo</div>
        <div>
          <ul>
            <li>
              <Link to={'/'}>사업 계획서 작성</Link>
            </li>
            <li>
              <Link to={'/'}>요금제</Link>
            </li>
            <li>
              <Link to={'/'}>고객센터</Link>
            </li>
            <li>
              <ConsultButton>무료 상담</ConsultButton>
            </li>
          </ul>
        </div>
        <Button>
          <strong>로그인</strong>
        </Button>
      </HeaderResponsiveBlock>
    </HeaderBlock>
  );
};

export default Header;
