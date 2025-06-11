import palette from '@assets/colors';
import Blank from '@components/common/Blank';
import SubmitButton from '@components/common/SubmitButton';
import { DocumentTextBlock } from '@styles/doc/Document.style';
import { useNavigate } from 'react-router-dom';

const [exampleRecord, examplePicture] = [
  require('@assets/images/doc/image_example_record.png'),
  require('@assets/images/doc/image_example_picture.png'),
];

const DocumentAnnouncement = () => {
  return (
    <>
      <h2>아이템 질의응답 안내 사항</h2>
      <DocumentTextBlock>
        <span>
          아이템 질의응답은 총 30문항이며 자유롭게 답변해 주시면 됩니다. 각
          항목에 대해 구체적으로 답변할수록 원하는 결과물을 받을 수 있습니다.
          만약 답변이 어려운 경우 공란으로 제출해 주세요. 
          <br />※ 답변하지 않은 부분은 아이템 관련 일반적인 내용으로 작성합니다.
          <br />
          <br />
          <span style={{ color: palette.system.red }}>필수항목: 1~10번</span>
          <br />
          <span style={{ color: palette.system.blue }}>선택항목: 11~30번</span>
          <br />
          <br />
          질의응답은 음성, 이미지, 타이핑 3가지 방식으로 진행할 수 있습니다.
          대표님의 상황에 맞게 답변을 해주세요.
        </span>
      </DocumentTextBlock>
      <DocumentTextBlock>
        <h4>음성</h4>
        <span>소음이 없는 조용한 공간에서 녹음해 주세요.</span>
        <img src={exampleRecord} alt="exampleRecord" />
      </DocumentTextBlock>
      <DocumentTextBlock>
        <h4>이미지</h4>
        <span>최대한 정자로 작성 후 수평이 되게 촬영해 주세요.</span>
        <img src={examplePicture} alt="examplePicture" />
      </DocumentTextBlock>
      <DocumentTextBlock>
        <h4>타이핑</h4>
        <span>
          입력칸에 생각을 자유롭게 작성해 주세요.
          <br />
          <br />
          <span style={{ color: palette.system.blue }}>
            작성 중 페이지를 이탈할 경우 ‘프로필 - 사업계획서 작성 내역’에서
            이어서 작성할 수 있습니다.
          </span>
        </span>
      </DocumentTextBlock>
      <Blank height="32px" />
      <SubmitButton onClick={() => {}}>다음</SubmitButton>
      <Blank height="20px" />
    </>
  );
};

export default DocumentAnnouncement;
