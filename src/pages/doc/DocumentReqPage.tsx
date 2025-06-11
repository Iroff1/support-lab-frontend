import DocumentFormTemplate from '@components/doc/common/DocumentFormTemplate';
import { useParams } from 'react-router-dom';

const DocumentReqPage = () => {
  const { id } = useParams();

  return (
    <>
      <DocumentFormTemplate
        index={Number(id) || 1}
        name="name"
        placeholder="이름"
        title="이름"
        description="이름"
        attachment={[]}
      />
    </>
  );
};

export default DocumentReqPage;
