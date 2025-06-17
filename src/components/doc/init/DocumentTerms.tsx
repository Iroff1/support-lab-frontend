import Blank from '@components/common/Blank';
import InputWithCheck from '@components/common/InputWithCheck';
import { DocumentTextBlock } from '@styles/doc/Document.style';
import { useState } from 'react';
import DocumentMoveButton from '../common/DocumentMoveButton';

const DocumentTerms = () => {
  const [agree, setAgree] = useState(false);

  return (
    <>
      <h2>이용약관 및 개인정보 수집∙이용 동의</h2>
      <DocumentTextBlock>
        <span>
          플랜킷의 AI 기반 사업계획서 작성 솔루션을 시작하시기 전에 꼭 확인해
          주세요. 본 서비스는 회원님이 입력한 기업 및 개인 정보를 바탕으로
          맞춤형 초안 문서를 제공합니다. 회원 가입 시 이미 아래 항목에 모두
          동의하신 것으로 간주되며, 자세한 내용은
          <a href="/" target="_blank">
            이용약관
          </a>
          과{' '}
          <a href="/" target="_blank">
            개인정보 수집 및 이용 동의
          </a>
          를 통해 언제든지 확인하실 수 있습니다.
        </span>
      </DocumentTextBlock>
      <DocumentTextBlock>
        <h4>입력하신 데이터는 이렇게 활용됩니다.</h4>
        <span>
          수집 항목: 기업명, 사업개요, 텍스트/이미지/음성 자료 등<br />
          수집 목적: AI 기반 문서 초안 생성, 서비스 품질 향상, 고객 응대
          <br />
          모든 데이터는 안전하게 보호되며 제3자에게 제공되지 않습니다.
        </span>
      </DocumentTextBlock>
      <DocumentTextBlock>
        <h4>안내드립니다.</h4>
        <span>
          이 서비스는 회원가입 시 동의한 약관 및 정책에 따라 운영됩니다. 내용을
          충분히 숙지하신 후 계속 진행해 주세요. 비회원으로 서비스를 이용할 경우
          입력한 데이터는 저장되지 않으며, 화면을 벗어나면 모든 입력 내용이
          삭제될 수 있습니다. 정확한 기록과 저장을 원하신다면, 회원가입 후
          서비스를 이용해 주세요.
        </span>
      </DocumentTextBlock>

      <Blank width="100%" height="20px" />
      <InputWithCheck
        name="agree"
        handleClick={() => setAgree((prev) => !prev)}
        $checked={agree}
      >
        안내 사항을 모두 확인하였으며, 서비스를 계속 이용하겠습니다.
      </InputWithCheck>

      <Blank width="100%" height="32px" />
      <DocumentMoveButton disabled={!agree}>다음</DocumentMoveButton>
    </>
  );
};

export default DocumentTerms;
