import TermsOfUseBlock from '@components/terms/TermsOfPersonalInfo';
import { TTypeOfTerms } from '@consts/termsForPage';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const TermsOfUsePage: React.FC = () => {
  const { typeOfTerms } = useParams<{ typeOfTerms: TTypeOfTerms }>();
  const navigate = useNavigate();
  useEffect(() => {
    if (!typeOfTerms) navigate('/');
  }, []);
  return (
    <>
      <TermsOfUseBlock type={typeOfTerms ? typeOfTerms : 'personalInfo'} />
    </>
  );
};

export default TermsOfUsePage;
