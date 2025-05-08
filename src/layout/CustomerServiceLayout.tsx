import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

const CustomerServiceLayoutBlock = styled.div`
  display: flex;
  padding-top: 80px;
  flex-direction: column;
  align-items: center;
`;

const CustomerServiceLayout = () => {
  return (
    <CustomerServiceLayoutBlock>
      <Outlet />
    </CustomerServiceLayoutBlock>
  );
};
export default CustomerServiceLayout;
