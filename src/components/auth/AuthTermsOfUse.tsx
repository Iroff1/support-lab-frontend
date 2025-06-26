import InputForTerms from '@components/common/InputForTerms';
import { termsOfUses } from '@consts/termsForRegister';
import styled from 'styled-components';
import AuthHeaderLogo from './AuthHeaderLogo';
import AuthTitleBox from './AuthTitleBox';
import { ITerms } from '@models/auth.model';
import SubmitButton from '@components/common/SubmitButton';

const AuthTermsOfUseBlock = styled.div`
  width: 100%;
  min-height: 576px;

  display: flex;
  flex-direction: column;
  gap: 34px;

  margin-bottom: 30px;

  & > div {
    width: 100%;
  }
`;

interface IAuthTermsOfUse {
  toggleAll: boolean;
  termsToRegister: ITerms;
  handleToggleOne: (e: React.MouseEvent<HTMLInputElement>) => void;
  handleToggleAll: () => void;
  handleSubmit: () => void;
}

const AuthTermsOfUse: React.FC<IAuthTermsOfUse> = ({
  toggleAll,
  termsToRegister,
  handleSubmit,
  handleToggleAll,
  handleToggleOne,
}) => {
  return (
    <>
      <AuthHeaderLogo />
      <AuthTitleBox>회원가입</AuthTitleBox>
      <AuthTermsOfUseBlock>
        {/* 전체 동의 */}
        <InputForTerms
          name="checkAll"
          header="전체 동의"
          contents="이벤트・혜택 정보 수신 (선택) 동의를 포함합니다."
          isChecked={toggleAll}
          onClick={handleToggleAll}
        />

        {Object.keys(termsOfUses).map((key, index) => (
          <InputForTerms
            key={index}
            name={key as keyof ITerms}
            header={termsOfUses[key as keyof ITerms].header}
            isRequired={
              termsOfUses[key as keyof ITerms].isRequired ? '필수' : '선택'
            }
            isWrapped={true}
            contents={termsOfUses[key as keyof ITerms].contents}
            isChecked={termsToRegister[key as keyof ITerms]}
            onClick={handleToggleOne}
            path={termsOfUses[key as keyof ITerms].path}
          />
        ))}
      </AuthTermsOfUseBlock>
      <SubmitButton
        disabled={
          !termsToRegister.termsOfServiceAgreed ||
          !termsToRegister.privacyPolicyAgreed
        }
        onClick={handleSubmit}
      >
        확인
      </SubmitButton>
    </>
  );
};
export default AuthTermsOfUse;
