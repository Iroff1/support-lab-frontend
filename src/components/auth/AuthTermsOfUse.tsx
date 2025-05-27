import InputForTerms from '@components/common/InputForTerms';
import { termsOfUses } from '@consts/terms';
import styled from 'styled-components';
import AuthHeaderLogo from './AuthHeaderLogo';
import AuthTitleBox from './AuthTitleBox';
import { ITermsOfUse } from '@models/auth.model';
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
  termsOfUses: ITermsOfUse;
  handleToggleOne: (name: keyof ITermsOfUse) => void;
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
          onClick={(e) => {
            props.handleToggleAll();
          }}
        />

        {/* [필수] 이용약관 */}
        <InputForTerms
          name="termsOfUse"
          header="이용약관"
          isRequired="필수"
          isWrapped={true}
          contents={termsOfUses.termsOfUse}
          isChecked={props.termsOfUses.termsOfUse}
          onClick={(e) => {
            props.handleToggleOne(e.currentTarget.name as keyof ITermsOfUse);
          }}
        />

        {/* [필수] 개인정보 수집 및 이용 */}
        <InputForTerms
          name="personalInfo"
          header="개인 정보 수집 및 이용"
          isRequired="필수"
          isWrapped={true}
          contents={termsOfUses.personalInfo}
          isChecked={props.termsOfUses.personalInfo}
          onClick={(e) => {
            props.handleToggleOne(e.currentTarget.name as keyof ITermsOfUse);
          }}
        />

        {/* [선택] 이벤트・혜택 정보 수신 */}
        <InputForTerms
          name="subscribeEvent"
          header="이벤트・혜택 정보 수신"
          isRequired="선택"
          isWrapped={true}
          contents={termsOfUses.subscribeEvent}
          isChecked={props.termsOfUses.subscribeEvent}
          onClick={(e) => {
            props.handleToggleOne(e.currentTarget.name as keyof ITermsOfUse);
          }}
        />
      </AuthTermsOfUseBlock>
      <SubmitButton
        disabled={
          !(props.termsOfUses.termsOfUse && props.termsOfUses.personalInfo)
        }
        onClick={(e) => {
          if (props.termsOfUses.termsOfUse && props.termsOfUses.personalInfo)
            props.handleSubmit();
        }}
      >
        확인
      </SubmitButton>
    </>
  );
};
export default AuthTermsOfUse;
