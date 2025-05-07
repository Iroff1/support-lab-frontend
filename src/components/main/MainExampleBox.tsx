import React from 'react';
import styled, { css } from 'styled-components';
import MainMessageBox from './MainMessageBox';
import palette from '@colors/index';
import tranlateFontSize from '@utils/tranlateFontSize';

const MainExampleBoxBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const ImageList = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;

  div {
    width: 465.0209655761719px;
    height: 687.5524291992188px;
    gap: 10px;
    padding: 10px;
    background-color: ${palette.black.white};
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    ${css(tranlateFontSize('B_30'))};
  }
`;

const MainExampleBox = () => {
  return (
    <MainExampleBoxBlock>
      <MainMessageBox>
        <h2>그래서 준비했습니다.</h2>
        <p>
          여러분의 아이템에 대한 생각을 말만 해주면
          <br />
          수십 개의 서류 통과된 사업계획서를 학습한 생성형 AI를 통해서
          <br />
          10분 이내로 사업계획서 초안을 작성해드립니다.
        </p>
      </MainMessageBox>

      <ImageList>
        <div>사업계획서 작성 서비스 페이지</div>
        <div>결과물 이미지</div>
      </ImageList>
    </MainExampleBoxBlock>
  );
};
export default MainExampleBox;
