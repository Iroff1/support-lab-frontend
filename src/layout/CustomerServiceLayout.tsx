import HeaderContainer from '@containers/common/HeaderContainer';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

const CustomerServiceLayoutBlock = styled.div`
  display: flex;
  padding-top: 104px;
  flex-direction: column;
  align-items: center;
`;

const CustomerServiceLayout = () => {
  return (
    <>
      <HeaderContainer />
      <CustomerServiceLayoutBlock>
        <Outlet />
      </CustomerServiceLayoutBlock>
    </>
  );
};
export default CustomerServiceLayout;
