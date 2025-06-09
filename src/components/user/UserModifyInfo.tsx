import palette from '@assets/colors';
import InputWithCheck from '@components/common/InputWithCheck';
import TermsOfUse from '@components/terms/TermsOfPersonalInfo';
import { regValid } from '@consts/reg';
import InputForAuth from '@containers/common/InputForAuth';
import InputPassword from '@containers/common/InputPassword';
import InputWithConfirm from '@containers/common/InputWithConfirm';
import { IUserModifyInfoProps } from '@containers/user/UserModifyInfoContainer';
import translateFontSize from '@utils/translateFontSize';
import styled, { css } from 'styled-components';

const ICON_ARROW_RIGHT = require('@assets/images/common/icon_arrow_right.svg');

const UserModifyInfoBlock = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  width: 100%;
  max-width: 500px;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  width: 100%;
  font-weight: bold;
  color: #1c1c1c;
  margin-bottom: 48px;
  ${css(translateFontSize('B_38'))};
`;

const ModifyForm = styled.div`
  width: 100%;
  overflow: hidden;
  border-top: 2px solid ${palette.black.B70};
`;

/** 테이블 행 */
const FormRow = styled.div`
  display: flex;
  border-bottom: 1px solid ${palette.black.B50};
  &:last-child {
    border-bottom: none;
  }
`;

/** 테이블 좌측 열 */
const FormLeft = styled.div`
  width: 140px;
  background-color: ${palette.black.B20};
  padding-top: 14px;
  padding-right: 19px;
  ${css(translateFontSize('SB_17'))};
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  border-right: 1px solid ${palette.black.B50};

  & > span {
    color: ${palette.black.black};
    ${css(translateFontSize('SB_17'))};
  }
`;

/** 테이블 우측 열 */
const FormRight = styled.div`
  flex: 1;
  padding-top: 13px;
  padding-left: 11px;
  padding-bottom: 12px;
  display: flex;
  align-items: center;

  // 세로 정렬
  &.column {
    flex-direction: column;
    gap: 12px;
    align-items: stretch;
  }

  &.space-between {
    justify-content: space-between;
  }
`;

const InputGroup = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Blank = styled.div`
  min-width: 53px;
  height: 100%;
`;

const ActionButton = styled.button`
  min-width: 53px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${palette.black.B40};
  border-radius: 6px;
  background-color: ${palette.black.white};
  color: ${palette.black.black};
  ${css(translateFontSize('R_17'))};
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #f5f5f5;
  }
`;

const AccountDeletionButton = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  background: none;
  border: none;
  color: ${palette.black.B90};
  cursor: pointer;
  transition: color 0.2s;

  &:hover {
    color: #1c1c1c;
  }
  & > img {
    width: 16px;
    height: 16px;
    aspect-ratio: 1/1;
  }
`;

const BottomSection = styled.div`
  margin-top: 12px;
  display: flex;
  justify-content: flex-end;
`;

const UserModifyInfo: React.FC<IUserModifyInfoProps> = (props) => {
  return (
    <UserModifyInfoBlock>
      <Container>
        <Title>회원정보 수정</Title>

        <ModifyForm>
          {/* Email Section */}
          <FormRow>
            <FormLeft>
              <span>이메일</span>
            </FormLeft>
            <FormRight>
              <span style={{ paddingLeft: '10px' }}>
                {props.formState.email}
              </span>
            </FormRight>
          </FormRow>

          {/* Password Section */}
          <FormRow>
            <FormLeft>
              <span>비밀번호</span>
            </FormLeft>
            <FormRight className="column">
              {/* Current Password */}
              <InputGroup>
                <InputPassword
                  name="currentPassword"
                  placeholder="현재 비밀번호"
                  $theme="modify"
                  value={props.formState.password}
                />
                <Blank />
              </InputGroup>

              {/* New Password */}
              <InputGroup>
                <InputPassword
                  name="newPassword"
                  placeholder="새 비밀번호"
                  $theme="modify"
                  value={props.formState.newPassword}
                  isValid={props.checkList.newPassword}
                  cautionText={
                    '8~16자의 영문 대/소문자, 숫자, 특수문자를 사용해 주세요.'
                  }
                  onChange={(e) => {
                    props.handleChange(e, regValid.password, 16);
                  }}
                />
                <Blank />
              </InputGroup>

              {/* Confirm Password */}
              <InputGroup>
                <InputPassword
                  name="newPasswordConfirm"
                  placeholder="비밀번호 확인"
                  $theme="modify"
                  value={props.formState.newPasswordConfirm}
                  isValid={props.checkList.newPasswordConfirm}
                  cautionText={'비밀번호가 일치하지 않습니다.'}
                  onChange={(e) => {
                    props.handleChange(e, regValid.password, 16);
                  }}
                />
                <ActionButton>변경</ActionButton>
              </InputGroup>
            </FormRight>
          </FormRow>

          {/* Name Section */}
          <FormRow>
            <FormLeft>
              <span>이름</span>
            </FormLeft>
            <FormRight>
              <InputGroup>
                <InputWithConfirm
                  name="name"
                  value={props.formState.name}
                  useFor="modify"
                  $theme="modify"
                />
              </InputGroup>
            </FormRight>
          </FormRow>

          {/* Phone Number Section */}
          <FormRow>
            <FormLeft>
              <span>휴대폰번호</span>
            </FormLeft>
            <FormRight className="column">
              <InputForAuth
                $theme="modify"
                phone={props.formState.phone}
                authConfirmText={props.formState.authConfirm}
                checkList={props.checkList}
                handleChange={props.handleChange}
                handleAuthStart={props.handleAuthStart}
                handleAuthConfirm={props.handleAuthConfirm}
              />
            </FormRight>
          </FormRow>

          {/* Marketing Consent Section */}
          <FormRow>
            <FormLeft>
              <span>수신설정</span>
            </FormLeft>
            <FormRight className="space-between">
              <InputWithCheck
                name="marketing"
                required={false}
                useFor="auth"
                handleClick={props.handleMarketing}
                popup={<TermsOfUse type="marketing" isPopup={true} />}
              >
                마케팅 수신 동의
              </InputWithCheck>
            </FormRight>
          </FormRow>

          {/* Account Deletion Link */}
          <BottomSection>
            <AccountDeletionButton>
              <span>회원탈퇴</span>
              <img src={ICON_ARROW_RIGHT} alt="▶" />
            </AccountDeletionButton>
          </BottomSection>
        </ModifyForm>
      </Container>
    </UserModifyInfoBlock>
  );
};

export default UserModifyInfo;
