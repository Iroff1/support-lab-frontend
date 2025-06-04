import palette from '@assets/colors';
import translateFontSize from '@utils/translateFontSize';
import styled, { css } from 'styled-components';

const ARROW = require('@assets/images/common/icon_arrow_below.png');

const CSQuestionsBlock = styled.div`
  width: 726px;
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
    max-height: 100px;

    & > div:nth-child(1) {
      & > div {
        transform: rotate(180deg);
      }
      & > span {
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
  align-items: center;
  margin-bottom: 10px;

  & > div {
    width: 27px;
    height: 27px;
    background: url(${ARROW}) center/cover no-repeat;
    transition: 0.2s ease transform;
  }
  & > span {
    ${css(translateFontSize('R_19'))};
    transition: 0.2s ease font-weight;
  }
`;

const QuestionContent = styled.div`
  padding-left: 27px;
`;

interface IQuestion {
  title: string;
  content: string;
}

const CSQuestions = () => {
  const questions: Array<IQuestion> = [
    {
      title: '지원 사업에 대해 하나도 모릅니다. 컨설팅 받는데 돈이 드나요?',
      content:
        '지원 사업 관련 질문하시는데 돈이 들지 않습니다. 편하게 카카오톡으로 연락 주세요. 다만 지원할 정부 지원 사업이 정해지고 사업계획서 관련 자세한 컨설팅이 받고 싶으시다면 유료로 진행하고 있습니다.',
    },
    {
      title: '지원 사업 관련 어떤 도움을 주시나요?',
      content: '본인의 사업 아이템에 맞게 사업계획서 작성을 도와드립니다.',
    },
    {
      title: '정부 지원 사업을 받으려면 어떻게 해야 하나요?',
      content:
        '아이템을 정하고 사업계획서를 제출하면 ‘1차(서류 평가) → 2차(발표 평가) → 최종 선정 후 지원금 사용’이 가능합니다.',
    },
    {
      title: '저도 지금 상황에서 창업 지원금을 받을 수 있나요?',
      content:
        '창업 기간, 아이템 분야, 대표자 나이, 사업장 소재지에 따라 가능 여부가 달라집니다.',
    },
    {
      title: '사업계획서 작성은 어떻게 해야 하나요?',
      content:
        '단순 사업 소개가 아닌, 심사위원을 설득하는 계획서가 되어야 합니다.',
    },
    {
      title: '창업 지원금을 자유롭게 사용할 수 있나요?',
      content:
        '바우처 형태로 지급되며 정해진 기준에 맞춰 주관 기관 승인 후 사용 가능합니다.',
    },
  ];

  return (
    <CSQuestionsBlock>
      {/* 헤더 */}
      <Header>
        <h1>자주하는 질문</h1>
      </Header>

      <Body>
        <QuestionList>
          {questions.map((item, index) => (
            <QuestionItem
              key={index}
              onClick={(e: React.MouseEvent<HTMLLIElement>) => {
                e.currentTarget.classList.toggle('on');
              }}
            >
              <QuestionWrapper>
                <QuestionTitle>
                  <div />
                  <span>{item.title}</span>
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
