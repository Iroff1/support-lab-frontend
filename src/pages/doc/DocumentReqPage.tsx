import DocumentFormTemplate from '@components/doc/common/DocumentFormTemplate';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const DocumentReqPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id === undefined) navigate('1');
    else if (+id < 1 && Number.isInteger(+id)) navigate('../5');
    else if (+id > 10 && Number.isInteger(+id)) navigate('../optional/1');
  }, [id]);

  return (
    <>
      <DocumentFormTemplate
        index={Number(id) || 1}
        name="name"
        isRequired={true}
        placeholder="이름"
        title="이름"
        description="이름"
        attachment={[]}
      />
    </>
  );
};

export default DocumentReqPage;
