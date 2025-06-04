import palette from '@assets/colors';
import translateFontSize from '@utils/translateFontSize';
import { useState } from 'react';
import styled, { css } from 'styled-components';

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

const FormCard = styled.div`
  background-color: white;
  overflow: hidden;
  border-top: 2px solid ${palette.black.B70};
`;

const FormRow = styled.div`
  display: flex;
  border-bottom: 1px solid ${palette.black.B50};
  &:last-child {
    border-bottom: none;
  }
`;

const LabelSection = styled.div`
  width: 140px;
  background-color: ${palette.black.B20};
  padding-top: 13px;
  padding-right: 19px;
  padding-bottom: 12px;
  ${css(translateFontSize('SB_17'))};
  display: flex;
  justify-content: end;
  align-items: center;
  border-right: 1px solid ${palette.black.B50};

  &.align-start {
    align-items: flex-start;
    padding-top: 32px;
  }
`;

const Label = styled.span`
  font-size: 1.125rem;
  font-weight: 500;
  color: #1c1c1c;
`;

const ContentSection = styled.div`
  flex: 1;
  padding-top: 13px;
  padding-left: 11px;
  padding-bottom: 12px;
  display: flex;
  align-items: center;

  &.column {
    flex-direction: column;
    gap: 12px;
    align-items: stretch;
  }

  &.space-between {
    justify-content: space-between;
  }
`;

const EmailText = styled.span`
  font-size: 1.125rem;
  color: #1c1c1c;
`;

const InputGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  height: 34px;
`;

const InputWrapper = styled.div`
  position: relative;
  height: 34px;
  flex: 1;
`;

const StyledInput = styled.input`
  width: 100%;
  height: 100%;
  padding: 4px 10px;
  font-size: 1rem;
  border: 1px solid #bfbfbf;
  border-radius: 6px;
  background-color: white;
  outline: none;

  &:focus {
    border-color: #1c1c1c;
  }

  &::placeholder {
    color: #a3a3a3;
  }

  &:read-only {
    background-color: #f9f9f9;
  }
`;

const EyeButton = styled.button`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: #a3a3a3;
  cursor: pointer;
  padding: 4px;

  &:hover {
    color: #1c1c1c;
  }
`;

const ActionButton = styled.button`
  min-width: 53px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #bfbfbf;
  border-radius: 6px;
  background-color: white;
  color: #1c1c1c;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #f5f5f5;
  }
`;

const CheckboxGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const CheckboxWrapper = styled.div`
  position: relative;
`;

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
`;

const StyledCheckbox = styled.div<{ checked: boolean }>`
  width: 20px;
  height: 20px;
  border: 1px solid #bfbfbf;
  border-radius: 3px;
  background-color: ${(props) => (props.checked ? '#1c1c1c' : 'white')};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:after {
    content: '';
    display: ${(props) => (props.checked ? 'block' : 'none')};
    width: 4px;
    height: 8px;
    border: solid white;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
  }
`;

const CheckboxLabel = styled.label`
  font-size: 1.125rem;
  color: #1c1c1c;
  cursor: pointer;
`;

const AccountDeletionButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  background: none;
  border: none;
  color: #757575;
  font-size: 1.125rem;
  cursor: pointer;
  transition: color 0.2s;

  &:hover {
    color: #1c1c1c;
  }
`;

const BottomSection = styled.div`
  margin-top: 12px;
  display: flex;
  justify-content: flex-end;
`;

const UserModifyInfo = () => {
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [marketingConsent, setMarketingConsent] = useState(false);

  return (
    <UserModifyInfoBlock>
      <Container>
        <Title>회원정보 수정</Title>

        <FormCard>
          {/* Email Section */}
          <FormRow>
            <LabelSection>
              <Label>이메일</Label>
            </LabelSection>
            <ContentSection>
              <EmailText>example@gmail.com</EmailText>
            </ContentSection>
          </FormRow>

          {/* Password Section */}
          <FormRow>
            <LabelSection className="align-start">
              <Label>비밀번호</Label>
            </LabelSection>
            <ContentSection className="column">
              {/* Current Password */}
              <InputGroup>
                <InputWrapper>
                  <StyledInput
                    type={showCurrentPassword ? 'text' : 'password'}
                    placeholder="현재 비밀번호"
                  />
                  <EyeButton
                    type="button"
                    onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                  >
                    {showCurrentPassword ? <></> : <></>}
                  </EyeButton>
                </InputWrapper>
              </InputGroup>

              {/* New Password */}
              <InputGroup>
                <InputWrapper>
                  <StyledInput
                    type={showNewPassword ? 'text' : 'password'}
                    placeholder="새 비밀번호"
                  />
                  <EyeButton
                    type="button"
                    onClick={() => setShowNewPassword(!showNewPassword)}
                  >
                    {showNewPassword ? <></> : <></>}
                  </EyeButton>
                </InputWrapper>
              </InputGroup>

              {/* Confirm Password */}
              <InputGroup>
                <InputWrapper>
                  <StyledInput
                    type={showConfirmPassword ? 'text' : 'password'}
                    placeholder="비밀번호 재입력"
                  />
                  <EyeButton
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? <></> : <></>}
                  </EyeButton>
                </InputWrapper>
                <ActionButton>변경</ActionButton>
              </InputGroup>
            </ContentSection>
          </FormRow>

          {/* Name Section */}
          <FormRow>
            <LabelSection>
              <Label>이름</Label>
            </LabelSection>
            <ContentSection>
              <InputGroup>
                <StyledInput value="홍길동" readOnly />
                <ActionButton>변경</ActionButton>
              </InputGroup>
            </ContentSection>
          </FormRow>

          {/* Phone Number Section */}
          <FormRow>
            <LabelSection className="align-start">
              <Label>휴대폰번호</Label>
            </LabelSection>
            <ContentSection className="column">
              <InputGroup>
                <StyledInput value="010-0000-0000" readOnly />
                <ActionButton>변경</ActionButton>
              </InputGroup>
              <InputGroup>
                <StyledInput placeholder="인증번호" />
                <ActionButton>확인</ActionButton>
              </InputGroup>
            </ContentSection>
          </FormRow>

          {/* Marketing Consent Section */}
          <FormRow>
            <LabelSection>
              <Label>수신설정</Label>
            </LabelSection>
            <ContentSection className="space-between">
              <CheckboxGroup>
                <CheckboxWrapper>
                  <HiddenCheckbox
                    id="marketing"
                    checked={marketingConsent}
                    onChange={(e) => setMarketingConsent(e.target.checked)}
                  />
                  <StyledCheckbox
                    checked={marketingConsent}
                    onClick={() => setMarketingConsent(!marketingConsent)}
                  />
                </CheckboxWrapper>
                <CheckboxLabel htmlFor="marketing">
                  마케팅 수신 동의
                </CheckboxLabel>
              </CheckboxGroup>
            </ContentSection>
          </FormRow>

          {/* Account Deletion Link */}
          <BottomSection>
            <AccountDeletionButton>
              <span>회원탈퇴</span>
            </AccountDeletionButton>
          </BottomSection>
        </FormCard>
      </Container>
    </UserModifyInfoBlock>
  );
};

export default UserModifyInfo;
