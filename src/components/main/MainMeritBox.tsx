import palette from '@colors/index';
import styled from 'styled-components';

const MainMeritBoxBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
`;

const BoxItem = styled.div`
  width: 50%;
  height: 511px;
  background-color: #bdbdbd;
  color: ${palette.black.white};
  display: flex;
  justify-content: center;
  align-items: center;

  &:nth-child(2) {
    background-color: ${palette.main.B200};
  }
  &:nth-child(3) {
    background-color: ${palette.main.main};
  }
  &:nth-child(6) {
    background-color: ${palette.main.B400};
  }
`;

const MainMeritBox = () => {
  return (
    <MainMeritBoxBlock>
      <BoxItem></BoxItem>
      <BoxItem></BoxItem>
      <BoxItem></BoxItem>
      <BoxItem></BoxItem>
      <BoxItem></BoxItem>
      <BoxItem></BoxItem>
    </MainMeritBoxBlock>
  );
};
export default MainMeritBox;
