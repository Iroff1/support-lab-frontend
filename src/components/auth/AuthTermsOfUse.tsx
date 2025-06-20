import InputForTerms from '@components/common/InputForTerms';
import { termsOfUses } from '@consts/termsForRegister';
import styled from 'styled-components';
import AuthHeaderLogo from './AuthHeaderLogo';
import AuthTitleBox from './AuthTitleBox';
import { ITerms } from '@models/auth.model';
import SubmitButton from '@components/common/SubmitButton';
import TermsOfUse from '@components/terms/TermsOfPersonalInfo';

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
  termsOfUses: ITerms;
  handleToggleOne: (name: keyof ITerms) => void;
  handleToggleAll: () => void;
  handleSubmit: () => void;
}

const AuthTermsOfUse: React.FC<IAuthTermsOfUse> = (props) => {
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
          isChecked={props.toggleAll}
          onClick={props.handleToggleAll}
        />

        {/* [필수] 이용약관 */}
        <InputForTerms
          name="termsOfServiceAgreed"
          header="이용약관"
          isRequired="필수"
          isWrapped={true}
          contents={termsOfUses.termsOfUse}
          isChecked={props.termsOfUses.termsOfServiceAgreed}
          onClick={(e) => {
            props.handleToggleOne(e.currentTarget.name as keyof ITerms);
          }}
          popup={<TermsOfUse type="businessPlan" isPopup={true} />}
        />

        {/* [필수] 개인정보 수집 및 이용 */}
        <InputForTerms
          name="privacyPolicyAgreed"
          header="개인 정보 수집 및 이용"
          isRequired="필수"
          isWrapped={true}
          contents={termsOfUses.personalInfo}
          isChecked={props.termsOfUses.privacyPolicyAgreed}
          onClick={(e) => {
            props.handleToggleOne(e.currentTarget.name as keyof ITerms);
          }}
          popup={<TermsOfUse type="personalInfo" isPopup={true} />}
        />

        {/* [선택] 이벤트・혜택 정보 수신 */}
        <InputForTerms
          name="marketingAgreed"
          header="이벤트・혜택 정보 수신"
          isRequired="선택"
          isWrapped={true}
          contents={termsOfUses.marketing}
          isChecked={props.termsOfUses.marketingAgreed}
          onClick={(e) => {
            props.handleToggleOne(e.currentTarget.name as keyof ITerms);
          }}
          popup={<TermsOfUse type="marketing" isPopup={true} />}
        />
      </AuthTermsOfUseBlock>
      <SubmitButton
        disabled={
          !(
            props.termsOfUses.termsOfServiceAgreed &&
            props.termsOfUses.privacyPolicyAgreed
          )
        }
        onClick={(e) => {
          if (
            props.termsOfUses.termsOfServiceAgreed &&
            props.termsOfUses.privacyPolicyAgreed
          )
            props.handleSubmit();
        }}
      >
        확인
      </SubmitButton>
    </>
  );
};
export default AuthTermsOfUse;
