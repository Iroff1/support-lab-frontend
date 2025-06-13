import DocumentFormTemplate from '@components/doc/common/DocumentFormTemplate';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const DocumentOptPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id === undefined) navigate('1');
    else if (+id < 1 && Number.isInteger(+id)) navigate('../required/1');
  }, [id]);

  return (
    <>
      <DocumentFormTemplate
        index={Number(id) + 9 || 1} // TODO) 숫자 9 말고 제대로 처리
        isRequired={false}
        name="name"
        placeholder="이름"
        title="이름"
        description="이름"
        attachment={[]}
      />
    </>
  );
};

export default DocumentOptPage;
