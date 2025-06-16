import palette from '@assets/colors';
import { csQuestionsArr } from '@consts/csQuestionsList';
import translateFontSize from '@utils/translateFontSize';
import styled, { css } from 'styled-components';

const ARROW = require('@assets/images/common/icon_arrow_below.png');

const CSQuestionsBlock = styled.div`
  max-width: 726px;
  width: 100%;
  margin: 0 auto;
  padding: 40px 20px 0 20px;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  width: 100%;
  margin-bottom: 40px;
  h1 {
    text-align: center;
    ${css(translateFontSize('B_38'))};
  }
`;

const Body = styled.div`
  width: 100%;
`;

const QuestionList = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const QuestionItem = styled.li`
  width: 100%;
  padding: 20px 0px;
  box-sizing: content-box;

  &:nth-child(1) {
    border-top: 1px solid ${palette.black.B50};
  }
  border-bottom: 1px solid ${palette.black.B50};

  &.on > div {
    max-height: 200px;
    & > div:nth-child(1) {
      & > .direction {
        transform: rotate(180deg);
      }
      & > p {
        height: fit-content;
        white-space: normal;
        ${css(translateFontSize('B_19'))};
      }
    }
  }
`;

const QuestionWrapper = styled.div`
  width: 100%;
  max-height: 27px;
  overflow: hidden;
  transition: 0.4s ease max-height;
`;

const QuestionTitle = styled.div`
  display: flex;
  margin-bottom: 10px;

  & > .direction {
    min-width: 27px;
    max-height: 27px;
    background: url(${ARROW}) center/cover no-repeat;
    transition: 0.2s ease transform;
  }
  & > p {
    height: 27px;
    overflow: hidden;
    ${css(translateFontSize('R_19'))};
    transition: 0.2s ease font-weight;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

const QuestionContent = styled.div`
  padding-left: 27px;
`;

const CSQuestions = () => {
  return (
    <CSQuestionsBlock>
      {/* 헤더 */}
      <Header>
        <h1>자주하는 질문</h1>
      </Header>

      <Body>
        <QuestionList>
          {csQuestionsArr.map((item, index) => (
            <QuestionItem
              key={index}
              onClick={(e: React.MouseEvent<HTMLLIElement>) => {
                e.currentTarget.classList.toggle('on');
              }}
            >
              <QuestionWrapper>
                <QuestionTitle>
                  <div className="direction" />
                  <p>{item.title}</p>
                </QuestionTitle>

                <QuestionContent>{item.content}</QuestionContent>
              </QuestionWrapper>
            </QuestionItem>
          ))}
        </QuestionList>
      </Body>
    </CSQuestionsBlock>
  );
};
export default CSQuestions;
