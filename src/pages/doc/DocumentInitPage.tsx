import NotFound from '@components/common/NotFound';
import DocumentFormTemplate from '@components/doc/common/DocumentFormTemplate';
import DocumentAnnouncement from '@components/doc/init/DocumentAnnouncement';
import DocumentBusinessKeyword from '@components/doc/init/DocumentBusinessKeyword';
import DocumentPersonalInfo from '@components/doc/init/DocumentPersonalInfo';
import DocumentTerms from '@components/doc/init/DocumentTerms';
import DoumentSelectSupport from '@components/doc/init/DoumentSelectSupport';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const DocumentInitPage = () => {
  const { id } = useParams();
  const naviagte = useNavigate();

  useEffect(() => {
    if (id === undefined) naviagte('1');
    else if (+id > 5 && Number.isInteger(+id)) naviagte('../required/1');
  }, [id]);

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
