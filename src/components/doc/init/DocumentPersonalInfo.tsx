import Blank from '@components/common/Blank';
import InputText from '@components/common/InputText';
import { IDocumentPersonalInfo } from '@models/document.model';
import { DocumentInputBlock } from '@styles/doc/Document.style';
import DocumentMoveButton from '../common/DocumentMoveButton';

const DocumentPersonalInfo = () => {
  return (
    <>
      <h2>개인정보를 입력해주세요. </h2>
      <DocumentInputBlock>
        <p>
          이름
          <span className="caution">필수 항목입니다.</span>
        </p>
        <InputText<IDocumentPersonalInfo> name="name" placeholder="홍길동" />
      </DocumentInputBlock>
      <DocumentInputBlock>
        <p>
          휴대폰 번호
          <span className="caution">필수 항목입니다.</span>
        </p>
        <InputText<IDocumentPersonalInfo>
          name="phone"
          placeholder="010-0000-0000"
        />
      </DocumentInputBlock>
      <DocumentInputBlock>
        <p>
          이메일
          <span className="caution">필수 항목입니다.</span>
        </p>
        <InputText<IDocumentPersonalInfo>
          name="email"
          placeholder="official@iroff.kr"
        />
      </DocumentInputBlock>
      <DocumentInputBlock>
        <p>
          회사명
          <span className="caution">필수 항목입니다.</span>
        </p>
        <InputText<IDocumentPersonalInfo>
          name="companyName"
          placeholder="지원사업연구소"
        />
      </DocumentInputBlock>
      <DocumentInputBlock>
        <p>
          직급
          <span className="caution">필수 항목입니다.</span>
        </p>
        <InputText<IDocumentPersonalInfo>
          name="companyPosition"
          placeholder="대표"
        />
      </DocumentInputBlock>
      <Blank height="32px" />
      <DocumentMoveButton>다음</DocumentMoveButton>
    </>
  );
};

export default DocumentPersonalInfo;
