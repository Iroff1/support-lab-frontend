import styled from 'styled-components';

const CsQuestionsBlock = styled.div`
  width: 726px;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div``;
const Body = styled.div``;
const QuestionList = styled.ul``;
const QuestionItem = styled.li``;

interface IQuestion {
  title: string;
  content: string;
}

const CsQuestions = () => {
  const questions: Array<IQuestion> = [
    {
      title: '지원 사업에 대해 하나도 모릅니다. 컨설팅 받는데 돈이 드나요?',
      content:
        '지원 사업 관련 질문하시는데 돈이 들지 않습니다. 편하게 카카오톡으로 연락 주세요. 다만 지원할 정부 지원 사업이 정해지고 사업계획서 관련 자세한 컨설팅이 받고 싶으시다면 유료로 진행하고 있습니다.',
    },
    {
      title: '지원 사업 관련 어떤 도움을 주시나요?',
      content: '',
    },
    {
      title: '정부 지원 사업을 받으려면 어떻게 해야 하나요?',
      content: '',
    },
    {
      title: '저도 지금 상황에서 창업 지원금을 받을 수 있나요?',
      content: '',
    },
    {
      title: '사업계획서 작성은 어떻게 해야 하나요?',
      content: '',
    },
    {
      title: '창업 지원금을 자유롭게 사용할 수 있나요?',
      content: '',
    },
  ];

  return (
    <CsQuestionsBlock>
      {/* 헤더 */}
      <Header>
        <h1>자주하는 질문</h1>
      </Header>

      <Body>
        <QuestionList>
          {questions.map((item, index) => (
            <QuestionItem key={index}>
              <div />
              <p>{item.title}</p>
              <p>{item.content}</p>
            </QuestionItem>
          ))}
        </QuestionList>
      </Body>
    </CsQuestionsBlock>
  );
};
export default CsQuestions;
