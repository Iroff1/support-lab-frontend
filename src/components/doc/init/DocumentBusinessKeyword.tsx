import Blank from '@components/common/Blank';
import SubmitButton from '@components/common/SubmitButton';
import DocumentCheckLabel from '../common/DocumentCheckLabel';
import { useState } from 'react';

const keywords = [
  '정치적 요소',
  '기술적 요소',
  '환경적 요소',
  '법적 요소',
  '지식재산권 보유',
  '시제품 인증 보유',
  '해외 진출',
];

const DocumentBusinessKeyword = () => {
  const [selectedKeywords, setSelectedKeywords] = useState<string[]>([]);

  const handleClick = (e: React.MouseEvent<HTMLInputElement>) => {
    const { name } = e.currentTarget;
    setSelectedKeywords((prev) => {
      if (prev.includes(name))
        return prev.filter((keyword) => keyword !== name);
      else return [...prev, name];
    });
  };

  return (
    <>
      <h2>
        본인의 아이템이 해당하는 키워드를 선택해주세요.
        <br />
        (복수 선택 가능)
      </h2>

      {keywords.map((keyword) => (
        <DocumentCheckLabel
          key={keyword}
          name={keyword}
          $placeholder={keyword}
          handleClick={handleClick}
        />
      ))}

      <Blank height="32px" />
      <SubmitButton disabled={selectedKeywords.length === 0}>다음</SubmitButton>
    </>
  );
};

export default DocumentBusinessKeyword;
