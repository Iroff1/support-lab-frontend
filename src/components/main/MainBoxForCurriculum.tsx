import styled, { css } from 'styled-components';
import MessageBox from '../common/MessageBox';
import translateFontSize from '@utils/translateFontSize';
import palette from '@assets/colors/index';
import ICON_RIGHT_ARROW from '@assets/images/common/icon_arrow_right.svg';
import ICON_CURRICULAM_1 from '@assets/images/main/icon_curriculam_1.svg';
import ICON_CURRICULAM_2 from '@assets/images/main/icon_curriculam_2.svg';
import ICON_CURRICULAM_3 from '@assets/images/main/icon_curriculam_3.svg';
import ICON_CURRICULAM_4 from '@assets/images/main/icon_curriculam_4.svg';

const MainBoxForCurriculumBlock = styled.div`
  width: 100%;
  max-width: 1032px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const CurriculumList = styled.div`
  width: 100%;
  max-width: 952px;
  height: 195px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow-x: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const CurriculumItem = styled.div`
  min-width: 220px;
  height: 195px;
  padding: 20px;
  padding-right: 0px;
  border-radius: 10px;
  background-color: #ffffff20;
  border: 1px solid ${palette.black.B50};
  color: ${palette.black.B700};
  fill: ${palette.black.B700};

  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 20px;

  img {
    min-width: 48px;
    max-height: 48px;
    aspect-ratio: 1/1;
  }

  div {
    & > p:nth-child(1) {
      ${css(translateFontSize('B_21'))}
    }
    & > p:nth-child(2) {
      margin-top: 10px;
      ${css(translateFontSize('R_17'))}
    }
  }
`;

const RightArrow = () => {
  return (
    <img
      style={{ width: '24px', height: '24px' }}
      src={ICON_RIGHT_ARROW}
      alt="rightArrow"
    />
  );
};

/** 서비스 이용 과정에 관한 내용을 담은 컴포넌트 */
const MainBoxForCurriculum = () => {
  return (
    <MainBoxForCurriculumBlock>
      <MessageBox>
        <h2>이렇게 작성합니다.</h2>
      </MessageBox>

      <CurriculumList>
        <CurriculumItem>
          <img src={ICON_CURRICULAM_1} alt="icon1" />
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
          <img src={ICON_CURRICULAM_2} alt="icon2" />
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
          <img src={ICON_CURRICULAM_3} alt="icon3" />
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
          <img src={ICON_CURRICULAM_4} alt="icon4" />
          <div>
            <p>사업계획서 초안 받기</p>
            <p>
              아이디어 전달 후 10분 내<br />
              결과물을 드립니다.
            </p>
          </div>
        </CurriculumItem>
      </CurriculumList>
    </MainBoxForCurriculumBlock>
  );
};

export default MainBoxForCurriculum;
