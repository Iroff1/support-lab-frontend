import Header from '@components/common/Header';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

const CSLayoutBlock = styled.div`
  display: flex;
  padding-top: 104px;
  flex-direction: column;
  align-items: center;
`;

const CsLayout = () => {
  return (
    <>
      <Header />
      <CSLayoutBlock>
        <Outlet />
      </CSLayoutBlock>
    </>
  );
};
export default CsLayout;
