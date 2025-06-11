import Blank from '@components/common/Blank';
import InputText from '@components/common/InputText';
import { IDocumentFormItem } from '@models/document.model';
import { DocumentTextBlock } from '@styles/doc/Document.style';
import DocumentProgress from './DocumentProgress';
import SubmitButton from '@components/common/SubmitButton';
import FlexBox from '@components/common/FlexBox';
import DocumentUploadButton from './DocumentUploadButton';
import DocumentGuideButton from './DocumentGuideButton';
import DocumentAttachmentItem from './DocumentAttachmentItem';

const DocumentFormTemplate: React.FC<IDocumentFormItem> = (props) => {
  return (
    <>
      <div className="gap20">
        <DocumentProgress level={props.index - 1} />
        <h2>{props.title}</h2>
        <InputText
          name={props.name}
          placeholder={props.placeholder}
          onChange={() => {}}
        />
        <DocumentTextBlock>
          <span>
            타이핑이 어려우신 경우 음성으로 녹음하거나 자필로 작성해서 이미지를
            업로드해 주세요. 지원되는 파일(audio, drawing, image, video)을 최대
            10개까지 업로드하세요. 파일당 최대 크기는 100MB입니다.
          </span>
        </DocumentTextBlock>
        <DocumentAttachmentItem />
        <DocumentUploadButton />
        <DocumentTextBlock>
          <h4>작성 가이드</h4>
          <span>
            아이템의 정체성을 함축적으로 나타낼 수 있는 이름을 작성해 주세요.
            타겟 고객에게 매력적이고 기억하기 쉬운 이름인지 검토하고, 도메인
            확보 가능성, 상표 등록 가능성 같은 법적 요소도 고려하세요.
          </span>
          <DocumentGuideButton />
        </DocumentTextBlock>
      </div>
      <Blank height={'32px'} />
      <FlexBox>
        <SubmitButton $style="negative" $maxWidth="160px">
          ← 이전
        </SubmitButton>
        <SubmitButton $maxWidth="160px">다음 →</SubmitButton>
      </FlexBox>
    </>
  );
};

export default DocumentFormTemplate;
