import TermsOfUseBlock from '@components/terms/TermsOfUse';
import { TTypeOfTerms } from '@models/terms.model';
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
      <TermsOfUseBlock type={typeOfTerms ? typeOfTerms : 'termsOfService'} />
    </>
  );
};

export default TermsOfUsePage;
