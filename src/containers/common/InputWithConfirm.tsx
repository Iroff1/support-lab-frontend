import palette from '@assets/colors/index';
import translateFontSize from '@utils/translateFontSize';
import React, { useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import InputText from '../../components/common/InputText';
import { IInputWithConfirm, TMouseEventHandler } from '@models/input.model';

const InputWithConfirmBlock = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 10px;
`;

const InputConfirmButton = styled.button`
  width: 100px;
  height: 52px;
  border-radius: 10px;
  background-color: ${palette.main.B50};
  color: ${palette.main.B200};
  ${css(translateFontSize('SB_17'))};
  border: 0px;
  transition: 0.2s ease color, 0.2s ease background-color;
  cursor: pointer;

  &:hover {
    color: ${palette.main.B50};
    background-color: ${palette.main.B200};
  }
`;

const InputWithConfirm: React.FC<IInputWithConfirm> = ({
  type,
  name,
  useFor = 'validation',
  placeholder,
  onChange,
  validChecker,
}) => {
  const userInput = useRef<HTMLInputElement>(null);
  const [cautionText, setCautionText] = useState<string>('');
  const [init, setInit] = useState(false);
  const [isValid, setIsValid] = useState(false);

  /** 확인|인증 버튼 이벤트 핸들러 */
  const handleCheck: TMouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    const inputValue = userInput.current?.value;

    if (useFor === 'validation') {
      // 유효성 검사 용도일 경우
      if (validChecker && inputValue && inputValue.length) {
        const temp = validChecker(inputValue);
        if (temp.length === 0) {
          setCautionText('사용 가능합니다.');
          setIsValid(true);
        } else {
          setCautionText(temp);
          setIsValid(false);
        }
        !init && setInit(true);
      }
    } else {
      // 본인인증 요청인 경우
    }
  };

  return (
    <InputWithConfirmBlock>
      <InputText
        name={name}
        type={type}
        placeholder={placeholder}
        ref={userInput}
        onChange={onChange}
        cautionText={cautionText}
        isValid={isValid}
      />
      <InputConfirmButton onClick={handleCheck}>
        {useFor === 'validation' ? '확인' : '인증'}
      </InputConfirmButton>
    </InputWithConfirmBlock>
  );
};
export default InputWithConfirm;
