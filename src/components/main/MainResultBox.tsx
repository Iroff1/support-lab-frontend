import styled, { css } from 'styled-components';
import MainMessageBox from './MainMessageBox';
import tranlateFontSize from '@hooks/tranlateFontSize';

const RESULT_1 = require('@images/main/result_1.png');

const MainResultBoxBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const ImageBox = styled.div`
  width: 956px;
  height: 796.4px;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
  }
`;

const ImageFooter = styled.p`
  text-align: center;
  ${css(tranlateFontSize('R_12'))};
`;

const MainResultBox = () => {
  return (
    <MainResultBoxBlock>
      <MainMessageBox>
        <h2>
          2025년, 지원 사업에 대해 아무것도 모르고
          <br />
          연락하셨던 분들이 1차 서류에 합격하셨습니다.
        </h2>
        <p>
          누군가는 매년 5,000만 원 이상 받아 가고 있습니다.
          <br />
          눈앞의 기회를 놓쳐 손해 보지 마세요.
        </p>
      </MainMessageBox>

      <ImageBox>
        <img src={RESULT_1} alt="결과 예시 이미지" />
      </ImageBox>

      <ImageFooter>
        예비창업패키지, 초기창업패키지, 창업도약패키지, 재도전성공패키지,
        창업중심대학
        <br />
        청년창업사관학교, 신사업창업사관학교, 로컬크리에이터, 에코스타트업,
        여성창업
      </ImageFooter>
    </MainResultBoxBlock>
  );
};

export default MainResultBox;
