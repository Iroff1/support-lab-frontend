import palette from '@assets/colors';
import InputForTerms from '@components/common/InputForTerms';
import InputWithCheck from '@components/common/InputWithCheck';
import { termsOfUses } from '@consts/terms';
import styled from 'styled-components';

const AuthTermsOfUseBlock = styled.div`
  width: 100vw;
  max-width: 494px;
  min-height: 576px;
  border: 2px solid #999;
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
      {/* 전체 동의 */}
      <InputForTerms name="">
        <h4>전체 동의</h4>
        <p>이벤트・혜택 정보 수신 (선택) 동의를 포함합니다.</p>
      </InputForTerms>

      {/* [필수] 이용약관 */}
      <InputForTerms name="">
        <h4>
          <span style={{ color: palette.system.blue }}>[필수]</span> 이용약관
        </h4>
        <p className="wrap">{termsOfUses.termsOfUse}</p>
      </InputForTerms>

      {/* [필수] 개인정보 수집 및 이용 */}
      <InputForTerms name="">
        <h4>
          <span style={{ color: palette.system.blue }}>[필수]</span> 개인정보
          수집 및 이용
        </h4>
      </InputForTerms>

      {/* [선택] 이벤트・혜택 정보 수신 */}
      <InputForTerms name="">
        <h4>
          <span style={{ color: palette.black.B100 }}>[선택]</span> 이벤트・혜택
          정보 수신
        </h4>
      </InputForTerms>
    </AuthTermsOfUseBlock>
  );
};
export default AuthTermsOfUse;
