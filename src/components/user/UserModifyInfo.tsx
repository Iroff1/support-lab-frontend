import InputWithCheck from '@components/common/InputWithCheck';
import TermsOfUse from '@components/terms/TermsOfPersonalInfo';
import { regValid } from '@consts/reg';
import InputForAuth from '@containers/common/InputForAuth';
import InputPassword from '@containers/common/InputPassword';
import InputWithConfirm from '@containers/common/InputWithConfirm';
import { IUserModifyInfoProps } from '@containers/user/UserModifyInfoContainer';
import * as S from '@styles/user/UserModifyInfo.style';

const UserModifyInfo: React.FC<IUserModifyInfoProps> = (props) => {
  return (
    <S.UserModifyInfoBlock>
      <S.Container>
        <S.Title>회원정보 수정</S.Title>

        <S.ModifyForm>
          {/* Email Section */}
          <S.FormRow>
            <S.FormLeft>
              <span>이메일</span>
            </S.FormLeft>
            <S.FormRight>
              <span style={{ paddingLeft: '10px' }}>
                {props.formState.email}
              </span>
            </S.FormRight>
          </S.FormRow>

          {/* Password Section */}
          <S.FormRow>
            <S.FormLeft>
              <span>비밀번호</span>
            </S.FormLeft>
            <S.FormRight className="column">
              {/* Current Password */}
              <S.InputGroup>
                <InputPassword
                  name="password"
                  placeholder="현재 비밀번호"
                  $theme="modify"
                  value={props.formState.password}
                  onChange={(e) => {
                    props.handleChange(e, regValid.password, 16);
                  }}
                />
                <S.Blank />
              </S.InputGroup>

              {/* New Password */}
              <S.InputGroup>
                <InputPassword
                  name="newPassword"
                  placeholder="새 비밀번호"
                  $theme="modify"
                  value={props.formState.newPassword}
                  $isValid={props.checkList.newPassword}
                  $cautionText={
                    '8~16자의 영문 대/소문자, 숫자, 특수문자를 사용해 주세요.'
                  }
                  onChange={(e) => {
                    props.handleChange(e, regValid.password, 16);
                  }}
                />
                <S.Blank />
              </S.InputGroup>

              {/* Confirm Password */}
              <S.InputGroup>
                <InputPassword
                  name="newPasswordConfirm"
                  placeholder="비밀번호 확인"
                  $theme="modify"
                  value={props.formState.newPasswordConfirm}
                  $isValid={props.checkList.newPasswordConfirm}
                  $cautionText={'비밀번호가 일치하지 않습니다.'}
                  onChange={(e) => {
                    props.handleChange(e, regValid.password, 16);
                  }}
                />
                <S.ActionButton>변경</S.ActionButton>
              </S.InputGroup>
            </S.FormRight>
          </S.FormRow>

          {/* Name Section */}
          <S.FormRow>
            <S.FormLeft>
              <span>이름</span>
            </S.FormLeft>
            <S.FormRight>
              <S.InputGroup>
                <InputWithConfirm
                  name="name"
                  value={props.formState.name}
                  useFor="modify"
                  $theme="modify"
                />
              </S.InputGroup>
            </S.FormRight>
          </S.FormRow>

          {/* Phone Number Section */}
          <S.FormRow>
            <S.FormLeft>
              <span>휴대폰번호</span>
            </S.FormLeft>
            <S.FormRight className="column">
              <InputForAuth
                $theme="modify"
                phone={props.formState.phone}
                authConfirmText={props.formState.authConfirm}
                checkList={props.checkList}
                handleChange={props.handleChange}
                handleAuthStart={props.handleAuthStart}
                handleAuthConfirm={props.handleAuthConfirm}
              />
            </S.FormRight>
          </S.FormRow>

          {/* Marketing Consent Section */}
          <S.FormRow>
            <S.FormLeft>
              <span>수신설정</span>
            </S.FormLeft>
            <S.FormRight className="space-between">
              <InputWithCheck
                name="marketing"
                required={false}
                useFor="auth"
                handleClick={props.handleMarketing}
                popup={<TermsOfUse type="marketing" isPopup={true} />}
                $checked={props.marketingState}
              >
                마케팅 수신 동의
              </InputWithCheck>
            </S.FormRight>
          </S.FormRow>

          {/* Account Deletion Link */}
          <S.BottomSection>
            <S.AccountDeletionButton onClick={props.handleDeleteAccount}>
              <span>회원탈퇴</span>
              <img src={S.ICON_ARROW_RIGHT} alt="▶" />
            </S.AccountDeletionButton>
          </S.BottomSection>
        </S.ModifyForm>
      </S.Container>
    </S.UserModifyInfoBlock>
  );
};

export default UserModifyInfo;
