import { termsForPage } from '@consts/termsForPage';
import { TTypeOfTerms } from '@models/terms.model';
import * as S from '@styles/terms/TermsOfUse.style';
import TermsRetention from './TermsRetention';

interface IProps {
  type: TTypeOfTerms;
}

const TermsOfUse: React.FC<IProps> = ({ type }) => {
  return (
    <S.TermsOfUseBlock>
      <S.ContentsBlock>
        <h2>{termsForPage[type].title}</h2>
        <p>{termsForPage[type].content}</p>
        {termsForPage[type].retention ? <TermsRetention /> : null}
        {termsForPage[type].subContent ? (
          <p>{termsForPage[type].subContent}</p>
        ) : null}
      </S.ContentsBlock>
    </S.TermsOfUseBlock>
  );
};

export default TermsOfUse;
