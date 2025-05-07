import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

const CSLayoutBlock = styled.div`
  display: flex;
  margin-top: 80px;
  flex-direction: column;
  align-items: center;
`;

const CsLayout = () => {
  return (
    <CSLayoutBlock>
      <Outlet />
    </CSLayoutBlock>
  );
};
export default CsLayout;
