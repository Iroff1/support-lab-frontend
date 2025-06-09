import InputWithCheck from '@components/common/InputWithCheck';
import SubmitButton from '@components/common/SubmitButton';
import translateFontSize from '@utils/translateFontSize';
import { useState } from 'react';
import styled, { css } from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 0 20px;
`;

const UserDeleteAccountBlock = styled.div`
  width: 100%;
  max-width: 726px;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;

  & > h2 {
    width: 100%;
    ${css(translateFontSize('B_29'))};
  }
  & > p {
    width: 100%;
    margin-top: 44px;
  }
  & > label {
    width: 100%;
    margin-top: 32px;
  }
  & > button {
    max-width: 460px;
    width: 100%;
    margin-top: 44px;
  }
`;

const UserDeleteAccount = (props: { email: string }) => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <Wrapper>
      <UserDeleteAccountBlock>
        <h2>회원탈퇴 유의사항</h2>
        <p>
          사용하고 계신 아이디({props.email})는 탈퇴할 경우 재사용 및 복구가
          불가능합니다.
          <br />
          <br />
          탈퇴한 아이디는 본인과 타인 모두 재사용 및 복구가 불가하오니 신중하게
          선택하시기 바랍니다. 부정 가입 또는 부정 이용이 의심되는 아이디는 탈퇴
          후 6개월간 동일한 실명정보로 재가입 할 수 없습니다.
          <br />
          <br />
          탈퇴 후 회원정보 및 개인형 서비스 이용기록은 모두 삭제됩니다.
          <br />
          <br />
          회원정보 및 사업계획서 등 개인형 서비스 이용기록은 모두 삭제되며,
          삭제된 데이터는 복구되지 않습니다.
        </p>
        <InputWithCheck
          name="deleteAccount"
          handleClick={() => {
            setIsChecked((prev) => !prev);
          }}
        >
          <p>회원탈퇴 동의</p>
        </InputWithCheck>
        <SubmitButton disabled={!isChecked} onClick={() => {}}>
          회원탈퇴
        </SubmitButton>
      </UserDeleteAccountBlock>
    </Wrapper>
  );
};

export default UserDeleteAccount;
