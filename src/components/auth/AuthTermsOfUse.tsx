import InputForTerms from '@components/common/InputForTerms';
import { termsOfUses } from '@consts/terms';
import styled from 'styled-components';
import AuthTitleBox from './AuthTitleBox';
import AuthHeaderLogo from './AuthHeaderLogo';

const AuthTermsOfUseBlock = styled.div`
  width: 100vw;
  max-width: 494px;
  min-height: 576px;
  padding: 0 20px;

  display: flex;
  flex-direction: column;
  gap: 34px;

  & > div {
    width: 100%;
  }
`;

const AuthTermsOfUse = () => {
  return (
    <AuthTermsOfUseBlock>
      <AuthHeaderLogo />
      {/* 전체 동의 */}
      <InputForTerms
        name="checkAll"
        header="전체 동의"
        contents="이벤트・혜택 정보 수신 (선택) 동의를 포함합니다."
      />

      {/* [필수] 이용약관 */}
      <InputForTerms
        name="termsOfUse"
        header="이용약관"
        isRequired="필수"
        isWrapped={true}
        contents={termsOfUses.termsOfUse}
      />

      {/* [필수] 개인정보 수집 및 이용 */}
      <InputForTerms
        name="personalInfoCollection"
        header="개인 정보 수집 및 이용"
        isRequired="필수"
        isWrapped={true}
        contents={termsOfUses.personalInfoCollection}
      />

      {/* [선택] 이벤트・혜택 정보 수신 */}
      <InputForTerms
        name="receiveEventInfo"
        header="이벤트・혜택 정보 수신"
        isRequired="선택"
        isWrapped={true}
        contents={termsOfUses.receiveEventInfo}
      />
    </AuthTermsOfUseBlock>
  );
};
export default AuthTermsOfUse;
