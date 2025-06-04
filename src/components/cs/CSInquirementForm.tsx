import palette from '@assets/colors';
import InputText from '@components/common/InputText';
import SubmitButton from '@components/common/SubmitButton';
import { regInput } from '@consts/reg';
import { ICSInquirementState } from '@containers/cs/CSInquirementContainer';
import translateContact from '@utils/translateContact';
import translateFontSize from '@utils/translateFontSize';
import styled, { css } from 'styled-components';

const SELECT_CARET = require('@assets/images/common/icon_caret.png');

const CSInquirementBlock = styled.div`
  max-width: 500px;
  width: 100%;
  min-width: 320px;
  padding: 0 20px;
`;

const Header = styled.div`
  width: 100%;
  margin-bottom: 40px;

  h1 {
    text-align: center;
    color: ${palette.black.black};
    ${css(translateFontSize('B_38'))};
  }
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
`;

const InquirementForm = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const InquirementItem = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const SelectBox = styled.div`
  width: 140px;
  position: relative;

  input[type='text'] {
    display: none;
  }

  &::after {
    content: '';
    position: absolute;
    top: 14px;
    right: 10px;
    width: 24px;
    height: 24px;
    aspect-ratio: 1/1;
    background: url(${SELECT_CARET}) center/cover no-repeat;
    transition: 0.2s ease transform;
  }

  & > div {
    width: 100%;
    height: 52px;
    padding: 14px 10px;
    border: 1px solid ${palette.black.B50};
    border-radius: 10px;
    outline: 0px;

    span {
      color: ${palette.black.B90};
    }
  }

  &.on {
    &::after {
      transform: rotate(180deg);
    }
    & > ul {
      max-height: 200px;
      border: 1px solid ${palette.black.B50};
      opacity: 1;
    }
  }

  & > ul {
    position: absolute;
    top: 45px;
    left: 0px;
    width: 100%;
    max-height: 0px;
    overflow: hidden;
    border-radius: 0px 0px 8px 8px;
    border: 1px solid transparent;
    background-color: ${palette.black.white};
    opacity: 0;
    transition: 0.4s ease all;
    z-index: 10;

    & > li {
      width: 100%;
      height: 52px;
      padding: 14px 10px;
      cursor: pointer;

      &:hover {
        background-color: ${palette.main.main};
        color: ${palette.black.white};
      }
    }
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  height: 126px;
  padding: 14px 10px;
  border: 1px solid ${palette.black.B50};
  border-radius: 10px;
  outline: 0px;
  resize: none;
  ${css(translateFontSize('R_17'))}
  transition: 0.2s ease border;

  &:focus {
    border: 1px solid ${palette.main.main};
  }
`;

const CSInquirementForm: React.FC<ICSInquirementState> = (props) => {
  return (
    <CSInquirementBlock>
      <Header>
        <h1>문의하기</h1>
      </Header>

      <Body>
        <InquirementForm>
          <InquirementItem>
            <p>이름</p>
            <InputText
              name="username"
              placeholder="홍길동"
              value={props.form.username}
              onChange={props.handleChange}
              autoComplete="on"
            />
          </InquirementItem>

          <InquirementItem>
            <p>휴대폰 번호</p>
            <InputText
              name="contact"
              placeholder="010-0000-0000"
              value={translateContact(props.form.contact)}
              onChange={(e) => {
                props.handleChange(e, regInput.onlyNum, 11);
              }}
            />
          </InquirementItem>

          <InquirementItem>
            <p>이메일</p>
            <InputText
              name="email"
              placeholder="example@naver.com"
              value={props.form.email}
              onChange={props.handleChange}
              autoComplete="on"
            />
          </InquirementItem>

          <InquirementItem>
            <p>문의 분야</p>
            <SelectBox onClick={props.toggleSelectBox}>
              <input
                type="text"
                name="inquirementType"
                value={props.form.inquirementType}
              />
              <div>
                {props.form.inquirementType.length ? (
                  props.form.inquirementType
                ) : (
                  <span>선택</span>
                )}
              </div>
              <ul>
                <li onClick={props.handleInqType}>사용 문의</li>
                <li onClick={props.handleInqType}>협력 문의</li>
                <li onClick={props.handleInqType}>환불 문의</li>
              </ul>
            </SelectBox>
          </InquirementItem>

          <InquirementItem>
            <p>문의 내용</p>
            <Textarea
              name="inquirementContent"
              placeholder="내용을 입력하세요."
              onChange={props.handleChange}
            >
              {props.form.inquirementContent}
            </Textarea>
          </InquirementItem>

          <SubmitButton onClick={props.handleSubmit}>제출하기</SubmitButton>
        </InquirementForm>
      </Body>
    </CSInquirementBlock>
  );
};
export default CSInquirementForm;
