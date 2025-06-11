import NotFound from '@components/common/NotFound';
import DocumentAnnouncement from '@components/doc/init/DocumentAnnouncement';
import DocumentBusinessKeyword from '@components/doc/init/DocumentBusinessKeyword';
import DocumentPersonalInfo from '@components/doc/init/DocumentPersonalInfo';
import DocumentTerms from '@components/doc/init/DocumentTerms';
import DoumentSelectSupport from '@components/doc/init/DoumentSelectSupport';
import { useParams } from 'react-router-dom';

const DocumentInitPage = () => {
  const { id } = useParams();

  return id === undefined || id === '1' ? (
    <DocumentTerms />
  ) : id === '2' ? (
    <DocumentPersonalInfo />
  ) : id === '3' ? (
    <DoumentSelectSupport />
  ) : id === '4' ? (
    <DocumentAnnouncement />
  ) : id === '5' ? (
    <DocumentBusinessKeyword />
  ) : (
    <NotFound />
  );
};

export default DocumentInitPage;
