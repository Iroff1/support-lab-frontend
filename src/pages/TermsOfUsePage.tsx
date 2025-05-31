import TermsOfUseBlock from '@components/terms/TermsOfPersonalInfo';
import { TTypeOfTerms } from '@consts/termsForPage';
import { useParams } from 'react-router-dom';

const TermsOfUsePage: React.FC = () => {
  const { typeOfTerms } = useParams<{ typeOfTerms: TTypeOfTerms }>();
  if (!typeOfTerms) return;

  return (
    <>
      <TermsOfUseBlock type={typeOfTerms} />
    </>
  );
};

export default TermsOfUsePage;
