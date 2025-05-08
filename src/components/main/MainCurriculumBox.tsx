import styled, { css } from 'styled-components';
import MainMessageBox from './MainMessageBox';
import tranlateFontSize from '@utils/tranlateFontSize';
import palette from '@assets/colors/index';

const RIGHT_ARROW = require('@assets/images/common/icon_arrow_right.png');
const CURRICULAM_1 = require('@assets/images/main/curriculam_1.png');
const CURRICULAM_2 = require('@assets/images/main/curriculam_2.png');
const CURRICULAM_3 = require('@assets/images/main/curriculam_3.png');
const CURRICULAM_4 = require('@assets/images/main/curriculam_4.png');

const MainCurriculumBoxBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const CurriculumList = styled.div`
  width: 952px;
  height: 195px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CurriculumItem = styled.div`
  width: 220px;
  height: 195px;
  padding: 20px;
  padding-right: 0px;
  border-radius: 10px;
  background-color: #ffffff20;
  box-shadow: 0px 4px 10px 0px #00000040;
  color: ${palette.black.B700};

  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 20px;

  img {
    width: 48px;
    heigth: 48px;
  }

  div {
    & > p:nth-child(1) {
      ${css(tranlateFontSize('B_21'))}
    }
    & > p:nth-child(2) {
      margin-top: 10px;
      ${css(tranlateFontSize('R_17'))}
    }
  }
`;

const RightArrow = () => {
  return (
    <img
      style={{ width: '24px', height: '24px' }}
      src={RIGHT_ARROW}
      alt="rightArrow"
    />
  );
};

const MainCurriculumBox = () => {
  return (
    <MainCurriculumBoxBlock>
      <MainMessageBox>
        <h2>이렇게 작성합니다.</h2>
      </MainMessageBox>

      <CurriculumList>
        <CurriculumItem>
          <img src={CURRICULAM_1} alt="icon1" />
          <div>
            <p>무료 전화 상담</p>
            <p>
              궁금한 것은 무엇이든
              <br />
              질문해주세요.
            </p>
          </div>
        </CurriculumItem>
        <RightArrow />
        <CurriculumItem>
          <img src={CURRICULAM_2} alt="icon2" />
          <div>
            <p>솔루션 결제</p>
            <p>
              상담 일정을 정하고 원하는
              <br />
              솔루션을 결제해주세요.
            </p>
          </div>
        </CurriculumItem>
        <RightArrow />
        <CurriculumItem>
          <img src={CURRICULAM_3} alt="icon3" />
          <div>
            <p>멘토링</p>
            <p>
              전문가 멘토링을 통해서
              <br />
              아이템 정보를 전달해주세요.
            </p>
          </div>
        </CurriculumItem>
        <RightArrow />
        <CurriculumItem>
          <img src={CURRICULAM_4} alt="icon4" />
          <div>
            <p>사업계획서 초안 받기</p>
            <p>
              아이디어 전달 후 10분 내<br />
              결과물을 드립니다.
            </p>
          </div>
        </CurriculumItem>
      </CurriculumList>
    </MainCurriculumBoxBlock>
  );
};

export default MainCurriculumBox;
