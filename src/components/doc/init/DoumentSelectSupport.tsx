import Blank from '@components/common/Blank';
import SubmitButton from '@components/common/SubmitButton';
import DocumentRadioLabel from '../common/DocumentRadioLabel';
import { useState } from 'react';
import DocumentMoveButton from '../common/DocumentMoveButton';

const supportList = [
  '예비창업패키지',
  '초기창업패키지',
  '창업도약패키지',
  '재도전성공패키지',
  '청년창업사관학교',
  '창업중심대학 예비단계',
  '창업중심대학 초기단계',
  '창업중심대학 도약단계',
];

const DoumentSelectSupport = () => {
  const [selected, setSelected] = useState('');

  const handleClick = (e: React.MouseEvent<HTMLInputElement>) => {
    setSelected(e.currentTarget.value);
  };

  return (
    <>
      <h2>신청하고 싶은 지원 사업을 선택해주세요. (단일 선택)</h2>
      {supportList.map((item) => (
        <DocumentRadioLabel
          name="support"
          $placeholder={item}
          $checked={selected === item}
          handleClick={handleClick}
        />
      ))}
      <Blank height="32px" />
      <DocumentMoveButton disabled={selected.length === 0}>
        다음
      </DocumentMoveButton>
    </>
  );
};

export default DoumentSelectSupport;
