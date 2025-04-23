import Responsive from '@components/common/Responsive';
import styled from 'styled-components';

const MainContentsBlock = styled(Responsive)`
  padding: 0;
`;

const MainContents = () => {
  return <MainContentsBlock>Main Page</MainContentsBlock>;
};

export default MainContents;
